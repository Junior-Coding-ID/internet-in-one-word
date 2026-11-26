// Internet in One Word — make.fun bounty
// Bounty: https://make.fun/bounty/u-ronigrv-the-internet-in-one-word-e388f33b
// Gate: jawaban 1-30 karakter, SATU KATA.
// Jawaban final: "Whiplash" (8 karakter).
//
// Kenapa Whiplash? Internet itu satu tarikan leher terus-menerus:
// satu scroll lo lagi ketawa, scroll berikut lo kaget, marah, takjub,
// lalu ketawa lagi — semuanya dalam hitungan detik. Tidak ada medium
// lain yang melempar emosi lo secepat dan sekeras itu, bolak-balik,
// tanpa jeda. Whiplash bukan cuma kecepatan — itu benturan arah yang
// tiba-tiba. Itulah internet: bukan sekadar "cepat" atau "luas",
// tapi guncangan konstan antara extremes.

const fs = require("node:fs");
const path = require("node:path");

const ANSWER = "Whiplash";

// Gate bounty: 1-30 karakter, satu kata (tanpa spasi).
if (ANSWER.length < 1 || ANSWER.length > 30) {
  throw new Error(
    "Jawaban di luar gate: panjang harus 1-30 karakter, didapat " +
      ANSWER.length
  );
}
if (/\s/.test(ANSWER)) {
  throw new Error("Jawaban harus satu kata (tanpa spasi).");
}
if (ANSWER.trim() !== ANSWER) {
  throw new Error("Jawaban tidak boleh diawali/diakhiri spasi.");
}

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR ||
  process.env.MAKEFUN_OUTPUT ||
  "/output";

fs.mkdirSync(outDir, { recursive: true });
const outPath = path.join(outDir, "entry.txt");
fs.writeFileSync(outPath, ANSWER, "utf8");

console.log("entry.txt ditulis: " + outPath + " (" + ANSWER.length + " karakter)");

// Verifikasi baca-balik: file yang tertulis harus byte-identik dengan jawaban.
const written = fs.readFileSync(outPath, "utf8");
if (written !== ANSWER) {
  throw new Error("entry.txt tidak cocok dengan jawaban final.");
}
console.log("Terverifikasi: entry.txt byte-identik dengan jawaban final.");
