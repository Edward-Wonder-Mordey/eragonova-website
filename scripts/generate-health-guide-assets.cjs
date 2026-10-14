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

const pdfParts = fs
  .readdirSync(generatedDir)
  .filter((name) => /^health-guide-v2\.part\d+\.b64$/.test(name))
  .sort();

if (!pdfParts.length) {
  throw new Error("No health-guide-v2 PDF data parts were found.");
}

decodeBase64Files(
  pdfParts,
  "b4dfc43bf99ea7d6175c283022987adea5c5cecfe1a9491fe6ece1d1e63833d8",
  path.join(publicDir, "Eragonova_Quick_Technology_Health_Check.pdf")
);

decodeBase64Files(
  ["eragonova-website-qr.b64"],
  "0949631dc0a86c1757fc6fc89dbf2dac6f434bb306cf1735c43f50f462580f4b",
  path.join(publicDir, "eragonova-website-qr.png")
);
