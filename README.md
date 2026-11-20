# ACM FAST TechOps Website

Official portfolio website of the **TechOps Department, ACM FAST-NUCES Karachi** (tenure 2026-27). It showcases our work on events, platforms and competitions, including Coders' Cup '26.

**Live site:** https://acm-techops-website.vercel.app 

## What this is

A static website built with plain HTML, CSS and JavaScript. There is no framework and no build step, so anyone on the team can edit it.

Highlights: animated intro, interactive terminal in the hero section, dark/light theme, project filters, photo gallery with lightbox, event timeline, and a Coders' Cup journey section.

## Project structure

```
├── index.html     Page structure (sections and layout)
├── styles.css     All styling, including dark and light themes
├── data.js        All content: projects, events, team, links, achievements
├── main.js        All behaviour: intro, terminal, gallery, animations
├── vercel.json    Hosting settings for Vercel
└── images/        All photos and logos used on the site
```

## How to update the content

Almost everything is edited in **`data.js`**. You do not need to touch `main.js`.

| To change | Edit in `data.js` |
| --- | --- |
| Projects | `projects` |
| Events and what TechOps did | `events` |
| Team members and roles | `people` |
| Achievements | `achievements` |
| Contact and social links | `links` |
| Gallery photos and captions | `gal` |

Anything still marked **"Details to be confirmed"** is a placeholder (the `TBC` value) waiting for official information.

### Updating from GitHub directly

1. Open the file on GitHub and click the pencil (edit) icon.
2. Make the change and click **Commit changes**.
3. Vercel automatically redeploys, and the live site updates in about a minute.

## Adding or changing images

- Put every image inside the `images/` folder.
- The file name must match exactly what `data.js` expects (for example `day-1.jpg`).
- Use **lowercase** names with no spaces. GitHub and Vercel are case-sensitive, so `Day-1.JPG` will not match `day-1.jpg`.
- If an image is missing, the site shows a dotted placeholder instead of the photo.

## Running locally

Open `index.html` in a browser, or serve the folder with any static server:

```
npx serve .
```

## Deployment

The site is hosted on **Vercel**, connected to this repository.

- Every push to the `main` branch deploys automatically to production.
- No build command and no output directory are needed (Framework preset: **Other**).

## Tech stack

HTML5, CSS3, vanilla JavaScript, Google Fonts (Inter, Sora, JetBrains Mono), hosted on Vercel.

## Team

| Name | Role |
| --- | --- |
| Uzair Mustafa | TechOps Head, 2026-27 |
| Ahsan Abbasi | TechOps Co-Head, 2026-27 |
| Muhammad Fareed | TechOps Co-Head, 2026-27 |

## Contact

- Email: acm.khi@nu.edu.pk
- Instagram: [@acmnuceskhi](https://www.instagram.com/acmnuceskhi/)
- LinkedIn: [ACM NUCES Karachi](https://www.linkedin.com/company/acmnuceskhi)
- Facebook: [ACM NUCES Karachi](https://www.facebook.com/acmnuceskhi)

---

ACM Student Chapter, FAST-NUCES Karachi, TechOps Department.
