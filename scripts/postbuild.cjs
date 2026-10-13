const fs = require("fs");
const path = require("path");

const buildDir = path.join(__dirname, "..", "build");
const indexFile = path.join(buildDir, "index.html");
const fallbackFile = path.join(buildDir, "404.html");
const routeMeta = require(path.join(__dirname, "..", "src", "data", "routeMeta.json"));
const SITE_URL = "https://eragonova.com";
const SOCIAL_IMAGE = `${SITE_URL}/eragonova.jpeg`;

if (!fs.existsSync(indexFile)) {
  throw new Error("build/index.html was not found. Run this script after the production build.");
}

const baseHtml = fs.readFileSync(indexFile, "utf8");

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function replaceMeta(html, attribute, key, value) {
  const escaped = escapeHtml(value);
  const pattern = new RegExp(`<meta\\s+${attribute}=["']${key}["'][^>]*>`, "i");
  const replacement = `<meta ${attribute}="${key}" content="${escaped}" />`;
  return pattern.test(html) ? html.replace(pattern, replacement) : html.replace("</head>", `    ${replacement}\n  </head>`);
}

function buildRouteHtml(meta) {
  const canonicalUrl = `${SITE_URL}${meta.path}`;
  let html = baseHtml;
  html = html.replace(/<title>[^<]*<\/title>/i, `<title>${escapeHtml(meta.title)}</title>`);
  html = replaceMeta(html, "name", "description", meta.description);
  html = replaceMeta(html, "name", "robots", "index,follow");
  html = replaceMeta(html, "property", "og:title", meta.title);
  html = replaceMeta(html, "property", "og:description", meta.description);
  html = replaceMeta(html, "property", "og:url", canonicalUrl);
  html = replaceMeta(html, "property", "og:image", SOCIAL_IMAGE);
  html = replaceMeta(html, "name", "twitter:title", meta.title);
  html = replaceMeta(html, "name", "twitter:description", meta.description);
  html = replaceMeta(html, "name", "twitter:image", SOCIAL_IMAGE);
  html = html.replace(/<link\s+rel=["']canonical["'][^>]*>/i, `<link rel="canonical" href="${canonicalUrl}" />`);

  const routeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: meta.title,
        description: meta.description,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` }
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: meta.label, item: canonicalUrl }
        ]
      }
    ]
  };
  html = html.replace("</head>", `    <script id="eragonova-static-route-schema" type="application/ld+json">${JSON.stringify(routeSchema)}</script>\n  </head>`);
  return html;
}

for (const [route, meta] of Object.entries(routeMeta)) {
  if (route === "home") continue;
  const directory = path.join(buildDir, meta.path.replace(/^\/+|\/+$/g, ""));
  fs.mkdirSync(directory, { recursive: true });
  fs.writeFileSync(path.join(directory, "index.html"), buildRouteHtml(meta), "utf8");
}

// Unknown paths use the fallback shell and are marked noindex before React loads.
let fallbackHtml = baseHtml;
fallbackHtml = fallbackHtml.replace(/<title>[^<]*<\/title>/i, "<title>Page Not Found | Eragonova Enterprise</title>");
fallbackHtml = replaceMeta(fallbackHtml, "name", "robots", "noindex,follow");
fs.writeFileSync(fallbackFile, fallbackHtml, "utf8");

console.log(`Generated ${Object.keys(routeMeta).length - 1} static clean route shells plus build/404.html.`);
