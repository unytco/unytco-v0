import fs from "fs";
import sharp from "sharp";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// First, we'll need to install sharp:
// npm install --save-dev sharp

const sizes = [16, 32, 48, 64, 128, 256];

async function generateFavicons() {
  const svgBuffer = fs.readFileSync(join(dirname(__dirname), "src/components/UIcon.vue"), "utf8");
  const svgContent = svgBuffer.match(/<svg[^>]*>([\s\S]*?)<\/svg>/)[0];

  for (const size of sizes) {
    await sharp(Buffer.from(svgContent))
      .resize(size, size)
      .toFile(join(dirname(__dirname), `public/favicon-${size}x${size}.png`));
  }

  // Generate ico file
  await sharp(Buffer.from(svgContent))
    .resize(32, 32)
    .toFile(join(dirname(__dirname), "public/favicon.ico"));
}

generateFavicons().catch(console.error);
