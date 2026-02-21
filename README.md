# Gnosis Library

A beautiful, minimal website for publishing Gnostic texts with audio and video support.

Built with [Astro](https://astro.build) — fast, static, and easy to maintain.

---

## Quick Start


### Development

```bash
cd gnosis-library
npm run dev
```

Open http://localhost:4321 in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

### Deploy to GitHub Pages

```bash
npm run build
npx gh-pages -d dist
```

---

## Adding New Articles

### 1. Create a Markdown File

Add a new file in `src/content/articles/`:

```markdown
---
title: "Your Article Title"
description: "A brief description for the article card"
pubDate: 2026-02-20
category: "Gnostic Texts"  # or "Audio Teachings", "Video Lectures", etc.
tags: ["tag1", "tag2", "tag3"]
audio: "/audio/your-audio-file.mp3"  # optional
video: "youtube-video-id"  # optional
videoProvider: "youtube"  # or "vimeo" or "self"
---

# Your Article Title

Write your content here in Markdown...

## Section Heading

More content...

> This is a quote

- Bullet points
- Work too
```

### 2. Add Audio Files (Optional)

Place audio files in `public/audio/`:

```bash
mkdir -p public/audio/your-article-name
cp your-audio.mp3 public/audio/your-article-name/
```

Then reference in your article:

```markdown
<div class="audio-container">
  <div class="audio-label">Audio Narration</div>
  <audio controls>
    <source src="/audio/your-article-name/your-audio.mp3" type="audio/mpeg" />
  </audio>
</div>
```

### 3. Add Video (Optional)

**YouTube:**
```markdown
---
video: "dQw4w9WgXcQ"  # YouTube video ID
videoProvider: "youtube"
---
```

**Vimeo:**
```markdown
---
video: "123456789"  # Vimeo video ID
videoProvider: "vimeo"
---
```

**Self-hosted:**
```bash
cp your-video.mp4 public/videos/your-video.mp4
```

```markdown
---
video: "/videos/your-video.mp4"
videoProvider: "self"
---
```

---

## Project Structure

```
gnosis-library/
├── public/
│   ├── audio/          # Audio files
│   ├── videos/         # Video files
│   └── favicon.svg
├── src/
│   ├── content/
│   │   └── articles/   # Markdown articles
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── index.astro
│       ├── about/
│       └── articles/
└── package.json
```

---

## Customization

### Change Site Title

Edit `src/layouts/Layout.astro` and change "Gnosis Library" to your preferred name.

### Update Site URL

Edit `astro.config.mjs`:

```javascript
export default defineConfig({
  site: 'https://your-username.github.io/your-repo',
  // ...
});
```

### Modify Colors

Edit the CSS variables in `src/layouts/Layout.astro`:

```css
:root {
  --bg-primary: #0f0f1a;
  --accent: #7c6dff;
  /* etc. */
}
```

---

## Features

✅ **Markdown-based** — Write articles in simple Markdown  
✅ **Audio support** — Embed audio players for narrations  
✅ **Video support** — YouTube, Vimeo, or self-hosted  
✅ **Responsive design** — Works on mobile and desktop  
✅ **Dark theme** — Easy on the eyes for reading  
✅ **Fast & static** — Deploy anywhere  
✅ **SEO-friendly** — Proper meta tags and structure  

---

## License

MIT — Use it for your own projects!

---

**Built with 🤖 by Victoria for Douglass**
