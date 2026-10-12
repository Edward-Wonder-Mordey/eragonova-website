const fs = require("fs");
const path = require("path");

const enterpriseFile = path.join(__dirname, "..", "src", "components", "EnterpriseBlueprint.jsx");

if (fs.existsSync(enterpriseFile)) {
  let source = fs.readFileSync(enterpriseFile, "utf8");

  // lucide-react 0.263.x does not expose the later Handshake icon name.
  // Reuse the supported Users icon for the strategic-partner visual so
  // builds remain compatible with the project's existing dependency lockfile.
  source = source.replace(/\s+Handshake,\n/, "\n");
  source = source.replace(/<Handshake size=\{24\}\/>/g, "<Users size={24}/>");

  fs.writeFileSync(enterpriseFile, source, "utf8");
}
