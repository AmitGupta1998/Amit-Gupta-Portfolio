import { createHash, randomUUID } from "node:crypto";
import { open, readFile, stat, unlink, writeFile, mkdir } from "node:fs/promises";
import { constants } from "node:fs";
import path from "node:path";
import type { IncomingMessage, ServerResponse } from "node:http";

const COOKIE_NAME = "vid";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365 * 2;
const BOT_UA = /bot|crawl|spider|slurp|facebookexternalhit|preview|lighthouse|headless/i;

type VisitorState = {
  total: number;
  seen: Record<string, string>;
};

type IncomingWithBody = IncomingMessage & { body?: unknown };

let mutex: Promise<unknown> = Promise.resolve();
let resolvedFile: string | null = null;

function todayUtc(): string {
  return new Date().toISOString().slice(0, 10);
}

function daysAgoUtc(days: number): string {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() - days);
  return d.toISOString().slice(0, 10);
}

function hashVisitorId(id: string): string {
  return createHash("sha256").update(id).digest("hex").slice(0, 32);
}

function parseCookies(header?: string): Record<string, string> {
  const out: Record<string, string> = {};
  if (!header) return out;
  for (const part of header.split(";")) {
    const idx = part.indexOf("=");
    if (idx === -1) continue;
    const key = part.slice(0, idx).trim();
    const value = decodeURIComponent(part.slice(idx + 1).trim());
    if (key) out[key] = value;
  }
  return out;
}

function isBot(ua?: string): boolean {
  return Boolean(ua && BOT_UA.test(ua));
}

function emptyState(): VisitorState {
  return { total: 0, seen: {} };
}

function normalizeState(raw: unknown): VisitorState {
  if (!raw || typeof raw !== "object") return emptyState();
  const total = Number((raw as VisitorState).total);
  const seen = (raw as VisitorState).seen;
  return {
    total: Number.isFinite(total) && total >= 0 ? Math.floor(total) : 0,
    seen: seen && typeof seen === "object" ? { ...seen } : {},
  };
}

async function resolveDataFile(): Promise<string> {
  if (resolvedFile) return resolvedFile;
  if (process.env.VISITORS_DATA_PATH) {
    resolvedFile = process.env.VISITORS_DATA_PATH;
    return resolvedFile;
  }

  const preferred = path.join(process.cwd(), "data", "visitors.json");
  if (process.env.VERCEL) {
    resolvedFile = path.join("/tmp", "visitors.json");
    return resolvedFile;
  }

  try {
    await mkdir(path.dirname(preferred), { recursive: true });
    const probe = `${preferred}.write-probe`;
    await writeFile(probe, "ok");
    await unlink(probe);
    resolvedFile = preferred;
  } catch {
    resolvedFile = path.join("/tmp", "visitors.json");
  }
  return resolvedFile;
}

async function withFileLock<T>(lockPath: string, fn: () => Promise<T>): Promise<T> {
  const staleMs = 10_000;
  const deadline = Date.now() + 5_000;

  while (true) {
    try {
      const handle = await open(lockPath, constants.O_CREAT | constants.O_EXCL | constants.O_WRONLY);
      try {
        await handle.writeFile(String(process.pid));
        return await fn();
      } finally {
        await handle.close();
        await unlink(lockPath).catch(() => {});
      }
    } catch (err) {
      const code = (err as NodeJS.ErrnoException).code;
      if (code !== "EEXIST") throw err;
      if (Date.now() > deadline) throw new Error("Visitor counter lock timeout");
      try {
        const info = await stat(lockPath);
        if (Date.now() - info.mtimeMs > staleMs) {
          await unlink(lockPath).catch(() => {});
          continue;
        }
      } catch {
        continue;
      }
      await new Promise((resolve) => setTimeout(resolve, 25));
    }
  }
}

function withMutex<T>(fn: () => Promise<T>): Promise<T> {
  const run = mutex.then(fn, fn);
  mutex = run.then(
    () => undefined,
    () => undefined
  );
  return run;
}

async function readState(file: string): Promise<VisitorState> {
  try {
    const raw = await readFile(file, "utf8");
    return normalizeState(JSON.parse(raw));
  } catch {
    return emptyState();
  }
}

function pruneSeen(state: VisitorState): void {
  const keepFrom = daysAgoUtc(1);
  for (const [key, date] of Object.entries(state.seen)) {
    if (date < keepFrom) delete state.seen[key];
  }
}

async function recordVisit(visitorId: string, shouldCount: boolean): Promise<number> {
  const file = await resolveDataFile();
  await mkdir(path.dirname(file), { recursive: true });

  if (!shouldCount) {
    const state = await readState(file);
    return state.total;
  }

  return withMutex(() =>
    withFileLock(`${file}.lock`, async () => {
      const state = await readState(file);
      pruneSeen(state);

      const key = hashVisitorId(visitorId);
      const today = todayUtc();
      if (state.seen[key] !== today) {
        state.total += 1;
        state.seen[key] = today;
      }

      await writeFile(file, JSON.stringify(state), "utf8");
      return state.total;
    })
  );
}

function readRawBody(req: IncomingMessage): Promise<string> {
  if (req.readableEnded) return Promise.resolve("");

  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    const timer = setTimeout(() => {
      req.off("data", onData);
      req.off("end", onEnd);
      req.off("error", onError);
      resolve(Buffer.concat(chunks).toString("utf8"));
    }, 2000);

    const onData = (chunk: Buffer | string) => chunks.push(Buffer.from(chunk));
    const onEnd = () => {
      clearTimeout(timer);
      resolve(Buffer.concat(chunks).toString("utf8"));
    };
    const onError = (err: Error) => {
      clearTimeout(timer);
      reject(err);
    };

    req.on("data", onData);
    req.on("end", onEnd);
    req.on("error", onError);
    req.resume();
  });
}

async function readVisitorIdFromBody(req: IncomingWithBody): Promise<string | undefined> {
  let parsed: unknown = req.body;

  if (parsed === undefined) {
    const raw = await readRawBody(req);
    if (!raw) return undefined;
    try {
      parsed = JSON.parse(raw);
    } catch {
      return undefined;
    }
  } else if (typeof parsed === "string") {
    try {
      parsed = JSON.parse(parsed);
    } catch {
      return undefined;
    }
  }

  if (!parsed || typeof parsed !== "object") return undefined;
  const id = (parsed as { id?: unknown }).id;
  return typeof id === "string" && id.length >= 8 && id.length <= 128 ? id : undefined;
}

function setVisitorCookie(res: ServerResponse, id: string): void {
  const secure = process.env.NODE_ENV === "production" || process.env.VERCEL === "1";
  const cookie = [
    `${COOKIE_NAME}=${encodeURIComponent(id)}`,
    "Path=/",
    `Max-Age=${COOKIE_MAX_AGE}`,
    "SameSite=Lax",
    "HttpOnly",
    ...(secure ? ["Secure"] : []),
  ].join("; ");
  res.setHeader("Set-Cookie", cookie);
}

function json(res: ServerResponse, status: number, payload: unknown): void {
  const body = JSON.stringify(payload);
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("Content-Length", String(Buffer.byteLength(body)));
  res.end(body);
}

export async function handleVisitors(req: IncomingMessage, res: ServerResponse): Promise<void> {
  const method = (req.method || "GET").toUpperCase();
  if (method !== "GET" && method !== "POST") {
    res.setHeader("Allow", "GET, POST");
    json(res, 405, { error: "Method not allowed" });
    return;
  }

  const cookies = parseCookies(req.headers.cookie);
  const bodyId = method === "POST" ? await readVisitorIdFromBody(req) : undefined;
  const visitorId = bodyId || cookies[COOKIE_NAME] || randomUUID();
  const shouldCount = method === "POST" && !isBot(req.headers["user-agent"]);

  setVisitorCookie(res, visitorId);
  const total = await recordVisit(visitorId, shouldCount);
  json(res, 200, { total });
}
