import { mkdir, writeFile } from "node:fs/promises";
import { line as d3Line, scaleLinear } from "d3";

const colors = {
  bg: "#f3f2f2",
  ink: "#201e1d",
  muted: "#6f6a69",
  line: "#c9c5c5",
  panel: "#ebe9e9",
  cyan: "#006786",
  cyanLight: "#b9d9df",
  magenta: "#d6006c",
  green: "#2f735f",
};

const esc = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
const text = (x, y, value, size = 20, fill = colors.ink, weight = 400, anchor = "start") =>
  `<text x="${x}" y="${y}" fill="${fill}" font-family="Georgia, serif" font-size="${size}" font-weight="${weight}" text-anchor="${anchor}">${esc(value)}</text>`;
const rect = (x, y, width, height, fill, rx = 0, stroke = "none") =>
  `<rect x="${x}" y="${y}" width="${width}" height="${height}" rx="${rx}" fill="${fill}" stroke="${stroke}"/>`;
const line = (x1, y1, x2, y2, stroke = colors.line, width = 2, dash = "") =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${stroke}" stroke-width="${width}" ${dash ? `stroke-dasharray="${dash}"` : ""}/>`;
const shell = (eyebrow, title, subtitle, body) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000"><rect width="1600" height="1000" fill="${colors.bg}"/><rect x="64" y="48" width="1472" height="72" fill="${colors.ink}"/><text x="104" y="94" fill="${colors.bg}" font-family="Georgia, serif" font-size="26" letter-spacing="2">${esc(eyebrow)}</text>${text(104, 188, title, 44, colors.ink, 600)}${text(104, 226, subtitle, 21, colors.muted)}${body}${text(104, 944, "Illustrative scrubbed view · designed for review and handoff", 17, colors.muted)}</svg>`;
const sparkline = (points, x, y, width, height, stroke) => {
  const xScale = scaleLinear()
    .domain([0, points.length - 1])
    .range([x, x + width]);
  const yScale = scaleLinear()
    .domain([Math.min(...points), Math.max(...points)])
    .range([y + height, y]);
  const path =
    d3Line()
      .x((_, index) => xScale(index))
      .y((point) => yScale(point))(points) ?? "";
  return `<path d="${path}" fill="none" stroke="${stroke}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>`;
};
const dot = (cx, cy, r, fill) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}"/>`;

const executiveMetrics = [
  ["People served", "842", "+12%", [56, 61, 59, 68, 72, 77, 84], colors.cyan],
  ["Goal progress", "76%", "+9 pts", [42, 46, 51, 54, 62, 68, 76], colors.magenta],
  ["Satisfaction", "4.8", "+0.3", [43, 44, 45, 46, 46, 47, 48], colors.green],
  ["Median days", "31", "-8 days", [44, 43, 41, 39, 36, 34, 31], colors.cyan],
];
const executiveCards = executiveMetrics
  .map(([label, value, delta, points], index) => {
    const x = 104 + index * 350;
    return `${rect(x, 278, 320, 174, colors.panel, 3)}${text(x + 24, 315, label.toUpperCase(), 15, colors.muted, 600)}${text(x + 24, 373, value, 47, colors.ink, 600)}${text(x + 135, 370, delta, 17, delta.startsWith("-") ? colors.green : colors.cyan, 600)}${sparkline(points, x + 24, 402, 270, 28, index === 1 ? colors.magenta : colors.cyan)}`;
  })
  .join("");
const executiveBody = `${executiveCards}${rect(104, 490, 900, 350, colors.panel, 3)}${text(136, 532, "MONTHLY SERVICE VOLUME", 15, colors.muted, 600)}${text(136, 568, "A steady rise without a corresponding wait-time spike", 23, colors.ink, 600)}${[0, 1, 2, 3, 4, 5].map((index) => line(160, 760 - index * 42, 950, 760 - index * 42, colors.line, 1)).join("")}${["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"].map((month, index) => text(160 + index * 125, 802, month, 15, colors.muted)).join("")}${sparkline([320, 350, 346, 410, 466, 498, 542], 160, 610, 790, 150, colors.cyan)}${rect(1036, 490, 460, 350, colors.panel, 3)}${text(1068, 532, "DECISION NOTES", 15, colors.muted, 600)}${text(1068, 584, "Watch", 18, colors.magenta, 600)}${text(1068, 616, "Two offices remain below", 19)}${text(1068, 644, "the response-time target.", 19)}${line(1068, 672, 1460, 672)}${text(1068, 718, "Next review", 18, colors.cyan, 600)}${text(1068, 750, "Staffing mix + referral volume", 19)}${text(1068, 778, "at the August leadership meeting.", 19)}`;

const grantRows = [
  ["Households receiving full service", 600, 642, "107%", "On track"],
  ["Clients with resolved issue", 78, 81, "104%", "On track"],
  ["Follow-up completed", 90, 94, "104%", "On track"],
  ["Average response time", 45, 31, "129%", "Exceeds"],
];
const attainmentScale = scaleLinear().domain([0, 1.3]).range([0, 190]);
const grantBody = `${rect(104, 278, 1392, 84, colors.panel, 3)}${text(136, 313, "FUNDER MEASURE", 14, colors.muted, 600)}${text(830, 313, "TARGET", 14, colors.muted, 600)}${text(980, 313, "ACTUAL", 14, colors.muted, 600)}${text(1130, 313, "ATTAINMENT", 14, colors.muted, 600)}${text(1390, 313, "STATUS", 14, colors.muted, 600)}${grantRows
  .map(([label, target, actual, attainment, status], index) => {
    const y = 410 + index * 108;
    const ratio = index === 3 ? 0.82 : actual / target;
    return `${line(104, y - 52, 1496, y - 52, colors.line, 1)}${text(136, y, label, 20, colors.ink, 600)}${text(830, y, index === 1 || index === 2 ? `${target}%` : index === 3 ? `${target} days` : target, 19, colors.muted)}${text(980, y, index === 1 || index === 2 ? `${actual}%` : index === 3 ? `${actual} days` : actual, 19, colors.ink, 600)}${rect(1130, y - 17, 190, 12, colors.line, 6)}${rect(1130, y - 17, attainmentScale(Math.min(ratio, 1)), 12, index === 3 ? colors.magenta : colors.cyan, 6)}${text(1390, y, status.toUpperCase(), 16, index === 3 ? colors.magenta : colors.green, 600)}`;
  })
  .join(
    "",
  )}${line(104, 830, 1496, 830)}${text(104, 875, "Definitions", 16, colors.cyan, 600)}${text(220, 875, "Each measure links to a source field, a counting rule, and a review note.", 17, colors.muted)}${text(104, 905, "Reporting cadence", 16, colors.cyan, 600)}${text(270, 905, "Quarterly · refreshable from the source export", 17, colors.muted)}`;

const pipelineNodes = [
  [120, "SOURCE", "Case system", "monthly export", colors.ink],
  [465, "PREPARE", "Validate", "12 automated checks", colors.cyan],
  [810, "MODEL", "R + SQL", "measure definitions", colors.magenta],
  [1155, "PUBLISH", "Report pack", "PDF + CSV + notes", colors.green],
];
const pipelineBody = `${text(104, 300, "ONE PATH FROM SOURCE TO DECISION", 15, colors.muted, 600)}${pipelineNodes.map(([x, label, title, detail, color], index) => `${rect(x, 355, 290, 210, colors.panel, 4, color)}${rect(x, 355, 290, 10, color, 4)}${text(x + 24, 405, label, 14, color, 600)}${text(x + 24, 455, title, 27, colors.ink, 600)}${text(x + 24, 495, detail, 18, colors.muted)}${text(x + 24, 535, index === 0 ? "Owner · source team" : index === 1 ? "Owner · analyst" : index === 2 ? "Owner · analyst" : "Owner · leadership", 16, colors.muted)}${index < pipelineNodes.length - 1 ? `<path d="M${x + 290} 460 H${x + 345}" stroke="${colors.magenta}" stroke-width="5"/><path d="M${x + 335} 450 L${x + 350} 460 L${x + 335} 470" fill="none" stroke="${colors.magenta}" stroke-width="5"/>` : ""}`).join("")}${rect(104, 660, 1392, 138, colors.panel, 4)}${text(136, 706, "HANDOFF CHECKLIST", 15, colors.muted, 600)}${[
  ["Refresh", "Monthly"],
  ["QA", "12 checks"],
  ["Review", "Required"],
  ["Traceability", "Source field → measure"],
]
  .map(([label, value], index) => {
    const x = 136 + index * 330;
    return `${text(x, 752, label, 16, colors.cyan, 600)}${text(x, 780, value, 19, colors.ink, 600)}`;
  })
  .join(
    "",
  )}${text(104, 862, "The documentation names the owner, the cadence, and the decision each output supports.", 19, colors.ink, 600)}`;

await mkdir("public/images", { recursive: true });
await Promise.all([
  writeFile(
    "public/images/executive-summary.svg",
    shell(
      "PROGRAM OUTCOMES / EXECUTIVE SUMMARY",
      "Quarterly view",
      "A decision page for leadership · July 2026",
      executiveBody,
    ),
  ),
  writeFile(
    "public/images/grant-metrics.svg",
    shell(
      "FUNDER REPORT / OUTCOME MEASURES",
      "Grant deliverables",
      "Period ending June 30 · identifying details removed",
      grantBody,
    ),
  ),
  writeFile(
    "public/images/data-pipeline.svg",
    shell(
      "DATA HANDOFF / PIPELINE DOCUMENTATION",
      "Reporting pipeline",
      "Source to decision · owner and QA notes included",
      pipelineBody,
    ),
  ),
]);
console.log("Generated three report preview SVGs from structured data.");
