import { cp, mkdir, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "www");

const EXCLUDES = new Set([
  ".git",
  ".vercel",
  "android",
  "ios",
  "node_modules",
  "www",
]);

async function main() {
  await rm(outDir, { recursive: true, force: true });
  await mkdir(outDir, { recursive: true });

  const entries = [
    ".env.instagram.example",
    ".gitignore",
    "api",
    "app.js",
    "index.html",
    "instagram-creator",
    "instagram-reply-test.html",
    "manychat-code.html",
    "n9xoqtaf0mnnc4ndttimth7ifxo10u.html",
    "player-shell-alpha.png",
    "player-shell-cutout.png",
    "player-shell-remote.png",
    "player-shell.jfif",
    "privacy-instagram.html",
    "retro-player-shell-buttons.png",
    "retro-player-shell-transparent-fixed.png",
    "retro-player-shell-transparent.png",
    "retro-player-source.png",
    "service-worker.js",
    "site.webmanifest",
    "slot98.html",
    "styles.css",
    "mobile-bootstrap.js"
  ];

  for (const entry of entries) {
    const src = path.join(root, entry);
    const dest = path.join(outDir, entry);
    await cp(src, dest, { recursive: true });
  }
}

main().catch((error) => {
  console.error("No pude preparar la carpeta www:", error);
  process.exitCode = 1;
});
