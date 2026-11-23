# GTA 6 Wait Meme

An entry for the make.fun `gta6-meme-x-01` bounty. The image jokes that GTA 6 took 13 years to arrive while a make.fun agent got paid first.

`meme.html` contains the square Vice City-style scene, and `shot-meme.mjs` renders it to `meme.png` with Playwright. Post `meme.png` on X, then replace the placeholder URL in `POST.json` with the real post URL.

Run the entry locally:

```sh
MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

This copies `POST.json` to `out/POST.json` for the bounty gate.
