import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/track/$trackId/lesson/$moduleId")({
  loader: ({ params }) => {
    throw redirect({
      to: "/track/$trackId/$moduleId",
      params: {
        trackId: params.trackId,
        moduleId: params.moduleId,
      },
    });
  },
  component: () => null,
});
