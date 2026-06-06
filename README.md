# Khemmawat Tantragool Portfolio Website — V3

Static responsive portfolio website for GitHub Pages.

## V3 changes

- Motion page: 5 selected works + 1 yellow playlist card
- Video page: 5 selected works + 1 yellow playlist card
- Graphic page: 5 placeholders + 1 playlist/more works card
- Mobile homepage: shows only 1 work per category to reduce page length
- Desktop homepage: keeps 3 works per category
- Play button changed to circle with gold outline
- Added scroll reveal animation
- Added desktop scroll highlight: active work turns from black-and-white to color
- Added small yellow mouse follower only on project thumbnails
- Added scroll-to-top button
- Added project counters: Motion `37 Projects+`, Video `41 Projects+`, Graphic `Selected Works`

## Contact

Email: `khemmawat2539@hotmail.com`

YouTube: `https://youtube.com/@taeoodmotion3968?si=3hNbAN0YJ-oHGJOD`

## How to update on GitHub

Extract this ZIP, open the `khemmawat-portfolio-v3` folder, and upload the files INSIDE the folder to the repository root. Do not upload the outer folder itself.

Correct structure:

```txt
Portfolio/
├── index.html
├── motion.html
├── video.html
├── graphic.html
├── contact.html
├── css/
├── js/
├── assets/
└── README.md
```

## Motion works

1. EVA AIR — `a_KyHeLiojU`
2. FedEx SEA Network — `Vr86U0mpI7o`
3. Commercial Truck Finance — `ore2z2iCLZc`
4. EV Fundamentals — `1m629q8ZN9M`
5. ADAHK Art Festival — `Az2mxDy5S4Y`

Playlist: `https://youtube.com/playlist?list=PL8qV_1kI5UhFjftLzKUUPj3KzzkrMNKdZ&si=scrPAWngwd_DlmFJ`

## Video works

1. CUURP Course — `EgZWFsqHItI`
2. CMU 60th Anniversary — `eBrPWIuIsrg`
3. Creative City — `lsLJQgL7UOE`
4. Why People Love Heartrocker — `8OQ4P4ka85I`
5. Gamification 101 — `1v52PtYCjvo`

Playlist: `https://youtube.com/playlist?list=PL8qV_1kI5UhFSuwuMUmAXmFncJOCbRw4F&si=VzxQ02wS7UaVflQx`

## Change a video

Search for the project title, then change the YouTube ID in `data-youtube`, `data-video-id`, and the thumbnail URL.

## Change project counters

Search for `37 Projects+`, `41 Projects+`, or `Selected Works` in the HTML files. Also update the `PROJECT_COUNT` object at the top of `js/main.js` for future reference.
