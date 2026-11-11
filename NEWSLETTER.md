# Spider News

The homepage Spider News button opens `/newsletter`, using the existing app
router. The AGS header and footer surround an isolated iframe so the supplied
reader's styles, embedded StPageFlip library, and controls stay self-contained.
The full-page reader link is also useful on smaller screens and iPhones without
element fullscreen support. No additional navigation item is required.

## Editions

The uploaded 2026–2027 edition lives in `public/newsletters/2026-2027/`.
Its original JPEGs, thumbnails, embedded library, and design are retained.
Integration adjustments in its `index.html` load only nearby full-resolution
pages, retain lazy thumbnails, accommodate small/dynamic viewports, and hide
unsupported fullscreen controls. No CDN or new runtime dependency is needed.

For a future edition, add a new directory under `public/newsletters/`, including
its HTML and relative assets, then update `src/data/newsletterEditions.js`.
Keep previous directories so existing reader links continue working. Check new
editions on desktop and mobile before changing the current edition.

## Deployment

Run `npm ci` and `npm run build`. Deploy the complete `dist/` using the existing
Bluehost workflow or upload process in `BLUEHOST-DEPLOYMENT.md`, including
`newsletters/` and the existing `.htaccess`. The existing SPA fallback already
serves `/newsletter`; no DNS or PHP changes are needed. A push to `master`
triggers production deployment, so review the change before merging there.

After deployment, follow the homepage button, reload `/newsletter` directly,
turn pages, use contents/thumbnails/zoom, and check portrait/landscape on iPhone.

## Integration validation

- Production build and lint on changed JavaScript/JSX files pass.
- Chromium checks against the production preview pass at desktop, iPhone 13
  emulation, and 320px mobile sizes: homepage link, direct route reload,
  page turns, contents, thumbnails, zoom, portrait/landscape overflow, and
  on-demand page loading. No JavaScript page errors were recorded.
- All 85 JPEG assets match the uploaded archive byte-for-byte.
- Repository-wide lint reports 18 existing errors in unrelated components.
- WebKit was downloaded but could not launch because the environment lacks
  system libraries (including `libharfbuzz-icu.so.0`). iPhone emulation in
  Chromium does not replace an actual iPhone Safari check before release.
