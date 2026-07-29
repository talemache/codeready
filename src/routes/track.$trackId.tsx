import { createFileRoute, Link, Outlet, notFound } from "@tanstack/react-router";
import { getTrack } from "@/lib/tracks";

export const Route = createFileRoute("/track/$trackId")({
  head: ({ params }) => {
    const t = getTrack(params.trackId);
    const title = t ? `${t.name} — Northal` : "Track — Northal";
    const desc = t?.description ?? "A Northal learning track.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },
  loader: ({ params }) => {
    const t = getTrack(params.trackId);
    if (!t) throw notFound();
    return { track: t };
  },
  component: TrackLayout,
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center bg-[color:var(--paper)]">
      <div className="text-center">
        <h1 className="font-serif text-3xl">Track not found</h1>
        <Link to="/dashboard" className="btn-outline mt-6">Back to dashboard</Link>
      </div>
    </div>
  ),
});

function TrackLayout() {
  return <Outlet />;
}
