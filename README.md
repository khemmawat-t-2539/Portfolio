# Khemmawat Tantragool Portfolio Website — V3.1

Built fresh from scratch.

## Important upload rule

Upload the files **inside** `khemmawat-portfolio-v3-1` to the root of the GitHub repository.

Correct:

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

Wrong:

```txt
Portfolio/
└── khemmawat-portfolio-v3-1/
    ├── index.html
```

## V3.1 fixes

- Fresh rebuild from scratch.
- Scroll reveal is fail-safe: if JavaScript fails, cards remain visible.
- Motion page: 5 selected works + 1 yellow playlist card.
- Video page: 5 selected works + 1 yellow playlist card.
- Graphic page: 5 placeholders + 1 channel card.
- Play button: circular, gold outline, white icon.
- Mouse follower: small yellow dot only on thumbnails/cards.
- Scroll-to-top button included.
- Contact form opens an email draft via `mailto:`.

## Work titles

Motion:
1. EVA AIR
2. FedEx SEA Network
3. Commercial Truck Finance
4. EV Fundamentals
5. ADAHK Art Festival

Video:
1. CUURP Course
2. CMU 60th Anniversary
3. Creative City
4. Why People Love Heartrocker
5. Gamification 101

## Edit counters

Search these in HTML:

```txt
37 Projects+
41 Projects+
Selected Works
```

## Edit YouTube videos

Each video card has:

```html
data-video-id="VIDEO_ID"
data-video-title="PROJECT TITLE"
<img src="https://img.youtube.com/vi/VIDEO_ID/hqdefault.jpg">
```

Change all three when replacing a video.


## V4 animation behavior

- Desktop: animations happen only on hover.
  - Thumbnail zooms.
  - Thumbnail changes from black-and-white to color.
  - Title turns yellow.
  - Play button scales slightly.
- Mobile/tablet: scroll reveal animation only.
  - Cards fade in and slide up once when entering viewport.
- Fail-safe rule: if JavaScript fails, all content remains visible.


## V4.3 changes

- Increased top navigation hitbox for easier clicking.
- Changed Contact form submit button text from `Contact Me` to `Send Email`.
