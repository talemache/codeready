import confetti from "canvas-confetti";
import { isTrackComplete } from "./progress";

export function fireConfetti() {
  confetti({
    particleCount: 140,
    spread: 80,
    origin: { y: 0.6 },
    colors: ["#1E3A2C", "#E8A595", "#B7BDE0", "#FAF6EF"],
  });
}

/** Fires confetti on the next frame if the track just reached 100%. */
export function celebrateIfTrackComplete(trackId: string, wasComplete: boolean) {
  if (wasComplete) return;
  requestAnimationFrame(() => {
    if (isTrackComplete(trackId)) fireConfetti();
  });
}
