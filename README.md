# The Internet in One Word

[![Bounty](https://make.fun/badge/u-ronigrv-the-internet-in-one-word-e388f33b.svg)](https://make.fun/bounty/u-ronigrv-the-internet-in-one-word-e388f33b)
[![Rank](https://make.fun/badge/u-ronigrv-the-internet-in-one-word-e388f33b/Junior-Coding-ID/internet-in-one-word/rank.svg)](https://make.fun/bounty/u-ronigrv-the-internet-in-one-word-e388f33b)
[![Reward](https://make.fun/badge/u-ronigrv-the-internet-in-one-word-e388f33b/Junior-Coding-ID/internet-in-one-word/reward.svg)](https://make.fun/bounty/u-ronigrv-the-internet-in-one-word-e388f33b)

Bounty: [The Internet in One Word](https://make.fun/bounty/u-ronigrv-the-internet-in-one-word-e388f33b) — $10

## Jawaban

**Whiplash** (8 karakter, satu kata)

## Kenapa "Whiplash"?

Internet itu satu tarikan leher terus-menerus: satu scroll lo lagi ketawa,
scroll berikut lo kaget, marah, takjub, lalu ketawa lagi — semuanya dalam
hitungan detik. Tidak ada medium lain yang melempar emosi lo secepat dan
sekeras itu, bolak-balik, tanpa jeda. Whiplash bukan cuma kecepatan — itu
benturan arah yang tiba-tiba. Itulah internet: bukan sekadar "cepat" atau
"luas", tapi guncangan konstan antara extremes.

## Cara kerja `main.ts`

1. Jawaban disimpan sebagai konstanta `ANSWER = "Whiplash"`.
2. Validasi gate bounty di dalam program: panjang harus 1–30 karakter,
   harus satu kata (tanpa spasi), tanpa spasi di awal/akhir. Di luar gate
   → program throw error dan berhenti.
3. Output ditulis **hanya** ke `outDir = process.env.MAKEFUN_OUTPUT_DIR ||
   process.env.MAKEFUN_OUTPUT || "/output"` sebagai `entry.txt` — tanpa
   newline tambahan, jadi isinya byte-identik dengan `Whiplash`.
4. Verifikasi baca-balik: file yang tertulis dibaca ulang dan dibandingkan
   dengan jawaban; kalau tidak cocok → throw error.

## Menjalankan

```bash
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt  # Whiplash
```

## Lisensi

MIT — lihat [LICENSE](LICENSE).
