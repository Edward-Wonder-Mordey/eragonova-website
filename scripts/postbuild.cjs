const fs = require("fs");
const path = require("path");

const buildDir = path.join(__dirname, "..", "build");
const indexFile = path.join(buildDir, "index.html");
const fallbackFile = path.join(buildDir, "404.html");

if (!fs.existsSync(indexFile)) {
  throw new Error("build/index.html was not found. Run this script after the production build.");
}

// GitHub Pages serves 404.html for clean client-side routes such as /services.
// Using the same app shell allows React to read the path and render the right page.
fs.copyFileSync(indexFile, fallbackFile);
console.log("Created build/404.html SPA fallback for clean URLs.");
