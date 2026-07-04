import { existsSync, mkdirSync, statSync } from "node:fs";
import { basename, extname, join } from "node:path";
import { performance } from "node:perf_hooks";

type VideoTarget = {
  filename: string;
  searchDirs: string[];
  outputDir: string;
};

const projectRoot = process.cwd();

const videos: VideoTarget[] = [
  {
    filename: "Ags Droneview.mp4",
    searchDirs: ["src/assets", "public/videos"],
    outputDir: "public/videos",
  },
];

const formatBytes = (bytes: number) => {
  const units = ["B", "KB", "MB", "GB"];
  let size = bytes;
  let unitIndex = 0;

  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex += 1;
  }

  return `${size.toFixed(size >= 10 || unitIndex === 0 ? 1 : 2)} ${units[unitIndex]}`;
};

const formatSeconds = (startTime: number) => {
  const seconds = (performance.now() - startTime) / 1000;
  return `${seconds.toFixed(seconds >= 10 ? 1 : 2)}s`;
};

const run = async (command: string, args: string[]) => {
  let proc;

  try {
    proc = Bun.spawn([command, ...args], {
      stdout: "pipe",
      stderr: "pipe",
    });
  } catch (error) {
    return {
      exitCode: 127,
      stderr: error instanceof Error ? error.message : String(error),
    };
  }

  const exitCode = await proc.exited;
  const stderr = await new Response(proc.stderr).text();

  return { exitCode, stderr };
};

const ensureFfmpeg = async () => {
  const { exitCode } = await run("ffmpeg", ["-version"]);

  if (exitCode === 0) return;

  console.error("FFmpeg was not found on PATH.");
  console.error("");
  console.error("Install it on Windows with one of these options:");
  console.error("  winget install Gyan.FFmpeg");
  console.error("  choco install ffmpeg");
  console.error("");
  console.error("Then restart your terminal and run:");
  console.error("  bun run optimize-video");
  process.exit(1);
};

const findInput = (target: VideoTarget) => {
  for (const dir of target.searchDirs) {
    const candidate = join(projectRoot, dir, target.filename);

    if (existsSync(candidate)) {
      return candidate;
    }
  }

  throw new Error(
    `Could not find ${target.filename}. Searched: ${target.searchDirs.join(", ")}`
  );
};

const getOutputPath = (target: VideoTarget) => {
  const extension = extname(target.filename);
  const name = basename(target.filename, extension);
  return join(projectRoot, target.outputDir, `${name}.optimized${extension}`);
};

const optimizeVideo = async (target: VideoTarget) => {
  const inputPath = findInput(target);
  const outputPath = getOutputPath(target);
  const outputDir = join(projectRoot, target.outputDir);

  mkdirSync(outputDir, { recursive: true });

  const originalSize = statSync(inputPath).size;
  const startTime = performance.now();

  console.log(`Optimizing ${target.filename}`);
  console.log(`Original: ${formatBytes(originalSize)}`);

  const args = [
    "-y",
    "-i",
    inputPath,
    "-map_metadata",
    "-1",
    "-c:v",
    "libx264",
    "-preset",
    "medium",
    "-crf",
    "24",
    "-pix_fmt",
    "yuv420p",
    "-movflags",
    "+faststart",
    "-c:a",
    "aac",
    "-b:a",
    "128k",
    "-ac",
    "2",
    outputPath,
  ];

  const { exitCode, stderr } = await run("ffmpeg", args);

  if (exitCode !== 0) {
    console.error(stderr);
    throw new Error(`FFmpeg failed while optimizing ${target.filename}`);
  }

  const optimizedSize = statSync(outputPath).size;
  const saved = originalSize - optimizedSize;
  const savedPercent = (saved / originalSize) * 100;

  console.log(`Optimized: ${formatBytes(optimizedSize)}`);
  console.log(`Saved: ${formatBytes(saved)} (${savedPercent.toFixed(1)}%)`);
  console.log(`Elapsed: ${formatSeconds(startTime)}`);
  console.log(`Output: ${outputPath}`);
};

await ensureFfmpeg();

for (const target of videos) {
  await optimizeVideo(target);
}
