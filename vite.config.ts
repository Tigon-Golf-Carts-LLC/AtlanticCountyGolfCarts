import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import fs from "fs";

const copyStaticAssets = () => ({
  name: "copy-static-assets",
  closeBundle() {
    // Copy external static assets (favicons, OG images) into the final dist folder
    const assetSource = path.resolve(import.meta.dirname, "attached_assets");
    const assetDestination = path.resolve(import.meta.dirname, "dist", "attached_assets");

    if (fs.existsSync(assetSource)) {
      fs.cpSync(assetSource, assetDestination, { recursive: true });
    }

    // Copy root-level SEO files, CNAME, and .nojekyll into dist so GitHub Pages serves them
    const rootStaticFiles = ["robots.txt", "sitemap.xml", "CNAME", ".nojekyll"]; // also duplicated in client/public but keep in sync
    const distDir = path.resolve(import.meta.dirname, "dist");
    for (const file of rootStaticFiles) {
      const sourcePath = path.resolve(import.meta.dirname, file);
      const destPath = path.join(distDir, file);
      if (fs.existsSync(sourcePath)) {
        fs.copyFileSync(sourcePath, destPath);
      }
    }
  },
});

export default defineConfig({
  base:
    process.env.VITE_BASE_PATH ||
    (process.env.GITHUB_REPOSITORY ? `/${process.env.GITHUB_REPOSITORY.split("/")[1]}/` : "/"),
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
        ]
      : []),
    copyStaticAssets(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },
  publicDir: path.resolve(import.meta.dirname, "client/public"),
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
