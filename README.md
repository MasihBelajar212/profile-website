# Made Widnyana — Portfolio (Next.js)

Personal portfolio website built from the PRD, using **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS v4**.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # run the production build
npm run lint    # ESLint
```

> Note: `layout.tsx` loads **Inter** and **JetBrains Mono** via `next/font/google`, which fetches font files at build time. This requires network access to `fonts.googleapis.com` — make sure that's reachable in your build environment (it's blocked in some restricted sandboxes).

## Folder composition

```
src/
├── app/                      # Routing shell only — no business logic here
│   ├── layout.tsx            # Root layout: fonts, metadata
│   ├── page.tsx              # Home page: composes sections in order
│   └── globals.css           # Tailwind import + design tokens (@theme) + motion keyframes
│
├── components/
│   ├── layout/                # Chrome that wraps every page
│   │   ├── Header.tsx          # Sticky nav (F-01), mobile menu
│   │   ├── Footer.tsx
│   │   └── AmbientBackground.tsx  # Floating gradient blobs (F-03)
│   │
│   ├── sections/               # One file per PRD content section
│   │   ├── Hero.tsx
│   │   ├── About.tsx           # About + Tech Stack (combined, per PRD 3.2)
│   │   ├── Projects.tsx        # Responsive project grid (F-04)
│   │   ├── Contact.tsx         # Server-rendered shell
│   │   └── ContactForm.tsx     # Client-only form state, isolated from Contact.tsx
│   │
│   ├── terminal/
│   │   └── TerminalWindow.tsx  # Hero's signature element: typing effect + parallax (F-02)
│   │
│   ├── ui/                     # Small, reusable, presentation-only building blocks
│   │   ├── Button.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── TechBadge.tsx
│   │   ├── ProjectCard.tsx
│   │   └── Reveal.tsx          # IntersectionObserver scroll-reveal wrapper
│   │
│   ├── icons/                  # Hand-authored SVG icon set (no external logo assets)
│   │   ├── index.tsx
│   │   └── iconMap.tsx         # Maps IconName -> icon component, for data-driven rendering
│   │
│   └── illustrations/
│       └── ProjectThumbs.tsx   # Abstract SVG mockup thumbnails per project
│
├── data/                      # Content as data, kept out of components
│   ├── techStack.ts
│   └── projects.ts
│
├── hooks/                     # Reusable client-side logic, decoupled from markup
│   ├── useScrolled.ts          # Sticky header state
│   ├── useParallax.ts          # Scroll-based parallax (respects prefers-reduced-motion)
│   └── useTypingEffect.ts      # Terminal typing animation
│
└── types/
    └── index.ts                # Shared TypeScript types (TechItem, Project, IconName…)
```

**Why it's organized this way**

- `app/` stays a thin routing layer — it only composes, never defines markup or logic itself.
- `sections/` mirrors the PRD's content structure 1:1, so any section can be reordered, reused, or removed independently.
- Presentational pieces (`ui/`), animation logic (`hooks/`), content (`data/`), and iconography (`icons/`, `illustrations/`) are each isolated, so a design or copy change never requires touching unrelated files.
- Anything that needs the browser (scroll listeners, IntersectionObserver, form state) is pushed into the smallest possible Client Component (`"use client"`) — `Header`, `TerminalWindow`, `Reveal`, and `ContactForm` — while everything else stays a Server Component by default.

## Design tokens

Defined in `src/app/globals.css` via Tailwind v4's `@theme`, straight from the PRD:

| Token | Value |
|---|---|
| `--color-primary` | `#24A57C` |
| `--color-primary-dark` | `#1B7A5C` |
| `--color-primary-light` | `#E8F5F0` |
| `--color-ink` | `#202124` |
| `--color-muted` | `#5F6368` |
| `--color-line` | `#E3E6E4` |
| `--font-sans` | Inter |
| `--font-mono` | JetBrains Mono |

These are consumed directly as Tailwind utilities: `bg-primary`, `text-primary-dark`, `border-line`, `font-mono`, etc.
