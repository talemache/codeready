import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { TRACKS } from "@/lib/tracks";

const BASE_URL = "https://codeready.app";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: { path: string; changefreq?: string; priority?: string }[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/dashboard", changefreq: "weekly", priority: "0.8" },
          { path: "/about", changefreq: "monthly", priority: "0.5" },
        ];
        for (const t of TRACKS) {
          entries.push({ path: `/track/${t.id}`, changefreq: "monthly", priority: "0.7" });
          for (const m of t.modules) {
            entries.push({ path: `/track/${t.id}/${m.id}`, changefreq: "monthly", priority: "0.6" });
          }
        }
        const urls = entries.map(
          (e) =>
            `  <url><loc>${BASE_URL}${e.path}</loc>${e.changefreq ? `<changefreq>${e.changefreq}</changefreq>` : ""}${e.priority ? `<priority>${e.priority}</priority>` : ""}</url>`,
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
