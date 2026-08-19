import fs from "node:fs";
import path from "node:path";

const roots = [
  { label: "mobile", dir: ".lighthouseci/mobile" },
  { label: "desktop", dir: ".lighthouseci/desktop" },
];

function pct(score) {
  if (typeof score !== "number") return "n/a";
  return `${Math.round(score * 100)}%`;
}

function readReport(dirPath) {
  if (!fs.existsSync(dirPath)) return null;
  const reportFile = fs
    .readdirSync(dirPath)
    .filter((name) => name.endsWith(".report.json"))
    .sort()
    .pop();
  if (!reportFile) return null;
  const fullPath = path.join(dirPath, reportFile);
  const json = JSON.parse(fs.readFileSync(fullPath, "utf8"));
  return {
    reportFile,
    accessibility: json?.categories?.accessibility?.score,
    performance: json?.categories?.performance?.score,
    bestPractices: json?.categories?.["best-practices"]?.score,
    seo: json?.categories?.seo?.score,
  };
}

const rows = [];
for (const root of roots) {
  const report = readReport(root.dir);
  if (!report) {
    rows.push({
      target: root.label,
      accessibility: "n/a",
      performance: "n/a",
      bestPractices: "n/a",
      seo: "n/a",
      file: "missing",
    });
    continue;
  }
  rows.push({
    target: root.label,
    accessibility: pct(report.accessibility),
    performance: pct(report.performance),
    bestPractices: pct(report.bestPractices),
    seo: pct(report.seo),
    file: report.reportFile,
  });
}

const header = ["target", "accessibility", "performance", "best-practices", "seo", "report"];
const line = `| ${header.join(" | ")} |`;
const sep = `| ${header.map(() => "---").join(" | ")} |`;

console.log("\nLighthouse summary\n");
console.log(line);
console.log(sep);
for (const row of rows) {
  console.log(
    `| ${row.target} | ${row.accessibility} | ${row.performance} | ${row.bestPractices} | ${row.seo} | ${row.file} |`,
  );
}
