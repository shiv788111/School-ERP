import fs from "fs";
import path from "path";

const BASE_URL = "https://www.connectskool.com";

const EXCLUDED_FOLDERS = new Set([
  "api",
  "_components",
  "_lib",
  "_utils",
]);

const EXCLUDED_FILES = new Set([
  "layout.js",
  "layout.jsx",
  "layout.ts",
  "layout.tsx",
  "loading.js",
  "loading.jsx",
  "loading.tsx",
  "error.js",
  "error.tsx",
  "not-found.js",
  "not-found.tsx",
  "template.js",
  "template.tsx",
  "default.js",
  "default.tsx",
]);

function getRoutes(dir, currentRoute = "") {
  let routes = [];

  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);

    if (item.isDirectory()) {
      if (
        item.name.startsWith("(") ||
        item.name.startsWith("[") ||
        item.name.startsWith("_") ||
        EXCLUDED_FOLDERS.has(item.name)
      ) {
        continue;
      }

      routes.push(
        ...getRoutes(fullPath, `${currentRoute}/${item.name}`)
      );
    }

    if (
      item.isFile() &&
      /^page\.(js|jsx|ts|tsx|mdx)$/.test(item.name) &&
      !EXCLUDED_FILES.has(item.name)
    ) {
      routes.push(currentRoute || "");
    }
  }

  return routes;
}

export default async function sitemap() {
  const appDir = path.join(process.cwd(), "src", "app");

  const staticRoutes = [...new Set(getRoutes(appDir))];

  return staticRoutes
    .sort((a, b) => {
      if (a === "") return -1;
      if (b === "") return 1;
      return a.localeCompare(b);
    })
    .map((route) => ({
      url: `${BASE_URL}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1.0 : 0.8,
    }));
}