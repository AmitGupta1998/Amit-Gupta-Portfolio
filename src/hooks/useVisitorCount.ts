import { useEffect, useState } from "react";

const ID_KEY = "portfolio-vid";
const DAY_KEY = "portfolio-visit-day";

let memoryId: string | null = null;

function utcToday(): string {
  return new Date().toISOString().slice(0, 10);
}

function getVisitorId(): string {
  if (memoryId) return memoryId;
  try {
    const existing = localStorage.getItem(ID_KEY);
    if (existing) {
      memoryId = existing;
      return existing;
    }
    const id = crypto.randomUUID();
    localStorage.setItem(ID_KEY, id);
    memoryId = id;
    return id;
  } catch {
    memoryId = crypto.randomUUID();
    return memoryId;
  }
}

function alreadyCountedToday(): boolean {
  try {
    return localStorage.getItem(DAY_KEY) === utcToday();
  } catch {
    return false;
  }
}

function markCountedToday(): void {
  try {
    localStorage.setItem(DAY_KEY, utcToday());
  } catch {
    /* private mode */
  }
}

export function useVisitorCount() {
  const [total, setTotal] = useState<number | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const countedToday = alreadyCountedToday();
        const res = await fetch("/api/visitors", {
          method: countedToday ? "GET" : "POST",
          headers: countedToday
            ? { Accept: "application/json" }
            : { Accept: "application/json", "Content-Type": "application/json" },
          body: countedToday ? undefined : JSON.stringify({ id: getVisitorId() }),
        });
        if (!res.ok) throw new Error("Visitor API unavailable");
        const data = (await res.json()) as { total?: unknown };
        if (typeof data.total !== "number") throw new Error("Invalid visitor payload");
        if (cancelled) return;
        setTotal(data.total);
        setStatus("ready");
        if (!countedToday) markCountedToday();
      } catch {
        if (!cancelled) setStatus("error");
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return { total, status };
}
