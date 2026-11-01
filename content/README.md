# Writing and work

Drop a Markdown file in `content/writing/` and it becomes a post at `/writing/<file-name>`.

```md
---
title: How we cut waybill entry to two minutes
date: 2026-11-15
summary: One sentence. It shows in lists, search results and link previews.
draft: false
---

Your post, in plain Markdown.
```

- `draft: true` shows the post only while running `npm run dev`.
- Images: put them in `public/images/` and write `![alt text](/images/name.png)`.
- Projects live in `content/work/` the same way. `steps` are the walkthrough, written `Title :: one sentence`.
- `npm run build` writes static HTML for every page plus `sitemap.xml`.

## Gallery

Every tile on `/work` is a file in `content/gallery/`. Files sort by name, so the number prefix sets the order.

```md
---
title: Travel Time Nepal
year: 2019
kind: Website
tag: Websites          # Systems, Websites, Open source or Games (the filters)
image: /media/portfolio-images/portfolio7.png   # optional; tiles without one get a type-only cover
link: https://example.com                        # optional; /work/<slug> for a case study
featured: false
summary: One line, said the way you'd say it out loud.
---
```
