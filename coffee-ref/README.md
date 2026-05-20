# ☕ Brew Haven — Premium Coffee Shop Website

A modern, fully responsive coffee shop landing page built with pure HTML, CSS and vanilla JavaScript. Inspired by a dark-blue waves design with a 3D coffee cup centerpiece, real photography, scroll animations, parallax sections and lots of micro-interactions.

## ✨ Features

- **Modern hero section** with a real 3D coffee cup image (`121.png`), animated steam, glowing halo and tilt effect
- **Full responsive design** — desktop, tablet and mobile breakpoints (480 / 640 / 900 / 1100 px)
- **Custom cursor** with hover-grow effect (auto-disabled on touch devices)
- **Scroll progress bar** at the top
- **Animated page loader** with steaming coffee cup
- **Floating coffee beans** background across the page
- **Reveal-on-scroll** animations on every section
- **Animated counters** for stats
- **Parallax background layers** in the story section
- **Smooth 3D tilt** effect on menu cards and the hero cup
- **Marquee** of values
- **Tabbed menu** (Hot / Cold / Desserts / Snacks) with 12 unique items
- **Photo gallery** with mosaic layout
- **Testimonials carousel**
- **Newsletter & contact forms**
- **Mobile menu** with animated hamburger and slide-in drawer
- **Back-to-top** floating button
- Honors `prefers-reduced-motion` for accessibility

## 📂 Project Structure

```
.
├── index.html            # Main HTML file
├── styles.css            # All styles (responsive included)
├── script.js             # All interactions and animations
├── 121.png               # Hero coffee cup image
├── images/               # Real photography (about / menu / gallery)
│   ├── about-1.jpg
│   ├── about-2.jpg
│   ├── about-3.jpg
│   ├── espresso.jpg
│   ├── cappuccino.jpg
│   ├── ...
│   └── gallery-6.jpg
├── download-images.ps1   # PowerShell script that fetches all photos from Unsplash
└── README.md
```

## 🚀 Run Locally

No build step. Just open `index.html` in any modern browser:

```powershell
Start-Process .\index.html
```

If photos don't render, re-fetch them:

```powershell
powershell -ExecutionPolicy Bypass -File download-images.ps1
```

## 🎨 Customizing

- **Colors** — Edit the CSS variables at the top of `styles.css` (`--bg-deep`, `--blue-1`, etc.)
- **Hero cup image** — Replace `121.png` with any transparent-background coffee-cup PNG
- **Menu items** — Edit the `<article class="menu-card">` blocks in `index.html`
- **Photos** — Drop your own JPG/PNG into `images/` and update the URLs in `styles.css`

## 📱 Responsive Breakpoints

| Device      | Width        | Layout                              |
| ----------- | ------------ | ----------------------------------- |
| Desktop     | > 1100 px    | Full hero, 3-column menu            |
| Tablet (L)  | ≤ 1100 px    | Tightened spacing                   |
| Tablet      | ≤ 900 px     | Single-column hero, 2-column menu   |
| Phone       | ≤ 640 px     | Mobile menu, 1-column menu, stacked |
| Phone (S)   | ≤ 420 px     | Compact spacing, smaller hero       |

## 📸 Photos Credit

Photos pulled from [Unsplash](https://unsplash.com) — free for commercial and personal use.

## 📝 License

Free to use, modify and adapt. Have fun brewing! ☕
