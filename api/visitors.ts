import type { IncomingMessage, ServerResponse } from "node:http";
import { handleVisitors } from "../server/visitors";

export const config = { runtime: "nodejs" };

export default async function handler(req: IncomingMessage, res: ServerResponse): Promise<void> {
  try {
    await handleVisitors(req, res);
  } catch (err) {
    console.error("[visitors]", err);
    if (!res.headersSent) {
      res.statusCode = 500;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.end(JSON.stringify({ error: "Visitor counter unavailable" }));
    }
  }
}
