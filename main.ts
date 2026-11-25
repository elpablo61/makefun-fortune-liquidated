import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Winning fortune (15 words, 102 chars): classic fortune-cookie opening,
// one concept (unexpected money), concrete $0.00, surprising last words.
const LINE =
  "You will soon receive unexpected money. It is $0.00, from the exchange, marked 'liquidation complete.'";

const words = LINE.trim().split(/\s+/).length;
if (LINE.length < 1 || LINE.length > 160 || words > 20) {
  throw new Error(`entry invalid: ${LINE.length} chars, ${words} words`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
