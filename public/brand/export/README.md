# Mind Clear — Brand Asset Export

## Web assets `/web/`

| File | Use |
|---|---|
| `mark-light.svg` | Icon mark only, for light backgrounds. Use in site header, OG images, etc. |
| `mark-dark.svg` | Icon mark only, for dark backgrounds (site hero, dark sections). |
| `wordmark-light.svg` | Mark + "Mind Clear" text lockup, light mode. |
| `wordmark-dark.svg` | Mark + "Mind Clear" text lockup, dark mode. |
| `favicon.svg` | Auto-adapts light/dark via `prefers-color-scheme`. Drop into `<head>` as `<link rel="icon" href="/brand/export/web/favicon.svg">`. |

SVGs are resolution-independent — use at any size.

---

## Android assets `/android/`

### Where to drop the files

Copy the `mipmap-*` folders directly into your Android project at:
```
app/src/main/res/
```

Each folder contains `ic_launcher.png` and `ic_launcher_round.png`.

### Black vs White background

- **`/android/black/`** — White C + gold on black `#0F0F0F`. Recommended for most launchers.
- **`/android/white/`** — Black C + gold on white `#F7F5F0`. Use if your app uses a light adaptive icon background.

### Density reference

| Folder | Size | Use |
|---|---|---|
| `mipmap-mdpi` | 48×48 | Baseline |
| `mipmap-hdpi` | 72×72 | 1.5× |
| `mipmap-xhdpi` | 96×96 | 2× |
| `mipmap-xxhdpi` | 144×144 | 3× |
| `mipmap-xxxhdpi` | 192×192 | 4× — most modern devices |

### Play Store

- **`/android/play-store/play_store_icon_black.png`** — 512×512, black bg. Upload to Google Play Console under "Store listing → App icon".
- **`/android/play-store/play_store_icon_white.png`** — 512×512, white bg. Alternative.

---

## Colors

| Token | Hex | Use |
|---|---|---|
| Black | `#0F0F0F` | Main C stroke (light mode), dark backgrounds |
| Off-white | `#F7F5F0` | Main C stroke (dark mode), light backgrounds |
| Gold (light) | `#C9A84C` | Shadow + dot on light backgrounds |
| Gold (dark) | `#E2BF6A` | Shadow + dot on dark backgrounds |
