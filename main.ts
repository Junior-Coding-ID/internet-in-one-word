import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ANSWER = "Contradictionary";

if (ANSWER.length !== 16) {
  throw new Error(`Answer must be exactly 16 characters, got ${ANSWER.length}`);
}
if (!/^[A-Za-z]+$/.test(ANSWER)) {
  throw new Error("Answer must be a single word (letters only)");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || process.env.MAKEFUN_OUTPUT || "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ANSWER, "utf8");

// Post-write verification: entry.txt must be exactly the answer, 16 bytes, no trailing newline.
const written = readFileSync(join(outDir, "entry.txt"), "utf8");
if (written !== ANSWER || written.length !== 16) {
  throw new Error(`entry.txt mismatch: got ${JSON.stringify(written)}`);
}
