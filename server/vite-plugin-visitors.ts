import type { Plugin, ViteDevServer } from "vite";
import { handleVisitors } from "./visitors";

function attachVisitorApi(server: ViteDevServer): void {
  server.middlewares.use((req, res, next) => {
    const url = req.url?.split("?")[0]?.replace(/\/$/, "") || "";
    if (url !== "/api/visitors") {
      next();
      return;
    }

    handleVisitors(req, res).catch((err) => {
      console.error("[visitors]", err);
      if (!res.headersSent) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        res.end(JSON.stringify({ error: "Visitor counter unavailable" }));
      }
    });
  });
}

export function visitorsApiPlugin(): Plugin {
  return {
    name: "visitors-api",
    configureServer: attachVisitorApi,
    configurePreviewServer: attachVisitorApi,
  };
}
