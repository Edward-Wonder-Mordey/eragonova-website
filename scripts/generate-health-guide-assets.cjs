const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const root = path.join(__dirname, "..");
const generatedDir = path.join(__dirname, "generated");
const publicDir = path.join(root, "public");

function sha256(buffer) {
  return crypto.createHash("sha256").update(buffer).digest("hex");
}

function decodeBase64Files(files, expectedHash, outputPath) {
  const base64 = files
    .map((file) => fs.readFileSync(path.join(generatedDir, file), "utf8"))
    .join("")
    .replace(/\s+/g, "");

  const buffer = Buffer.from(base64, "base64");
  const actualHash = sha256(buffer);
  if (actualHash !== expectedHash) {
    throw new Error(`Generated asset checksum mismatch for ${path.basename(outputPath)}: ${actualHash}`);
  }

  fs.writeFileSync(outputPath, buffer);
  console.log(`Generated ${path.relative(root, outputPath)} (${buffer.length} bytes)`);
}

// The first 5,000 base64 characters are split into smaller verified chunks.
// The older part00.b64 file is intentionally excluded from this list.
const pdfParts = [
  "health-guide-v2.part00a.b64",
  "health-guide-v2.part00b.b64",
  "health-guide-v2.part00c.b64",
  "health-guide-v2.part00d.b64",
  "health-guide-v2.part00e.b64",
  "health-guide-v2.part01.b64",
  "health-guide-v2.part02.b64",
  "health-guide-v2.part03.b64",
  "health-guide-v2.part04.b64",
  "health-guide-v2.part05.b64",
];

decodeBase64Files(
  pdfParts,
  "0036b6678a94aad788f7748785f6d5cf7fc1cbc1dbb625c9ce58cdeef42865a5",
  path.join(publicDir, "Eragonova_Quick_Technology_Health_Check.pdf")
);

decodeBase64Files(
  ["eragonova-website-qr.b64"],
  "0949631dc0a86c1757fc6fc89dbf2dac6f434bb306cf1735c43f50f462580f4b",
  path.join(publicDir, "eragonova-website-qr.png")
);
