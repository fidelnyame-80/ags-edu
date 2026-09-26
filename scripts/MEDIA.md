# Website media

`npm run dev` and `npm run build` generate browser-sized WebP copies with
`optimize-images.mjs`. Originals remain in `src/assets/Images`; generated files
are ignored by Git. New imports should reference `optimized/<original-name>.webp`.
Remove the corresponding generated copy to regenerate it after changing encoder
settings. Source-file changes regenerate the copy automatically.

The decorative hero video uses `public/videos/ags-droneview-web.mp4`.
To regenerate it with FFmpeg installed, remove or rename only that generated
video first, then run:

```sh
ffmpeg -i "public/videos/Ags Droneview.optimized.mp4" -vf "scale=1280:720:force_original_aspect_ratio=decrease:force_divisible_by=2,fps=24" -c:v libx264 -preset medium -crf 30 -an -movflags +faststart -n public/videos/ags-droneview-web.mp4
```

The smaller copy retains the full duration and has no audio (the background
player is muted). It starts after window load and a short delay. Visitors with
reduced-motion, data-saving, or 2G settings see the poster instead.
