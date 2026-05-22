# Homely — Foundation Spec

**Date**: 2026-05-22
**Status**: Approved, ready for plan
**Sub-project**: 0 of 5 (Foundation, then Phases 1–5)

---

## 1 — Purpose

Build the substrate that the five Homely phase specs hang off: a Next.js + PWA scaffold, a mobile gate that blocks desktop, design tokens ported from the canvas mockups, the full set of shared primitives, and a routing convention every phase will follow. Land one smoke-test screen (S01 Splash) to prove the substrate end-to-end. No phase screens beyond S01 are built here.

The 100-screen Homely app is decomposed into one Foundation spec plus five phase specs:

- **Foundation** (this spec) — scaffold, gate, tokens, primitives, routing, S01
- **Phase 1** — Onboarding & Auth (S01–S14)
- **Phase 2** — KYC & Identity (S15–S24)
- **Phase 3** — Guest flow (S25–S57)
- **Phase 4** — Owner flow (S58–S89)
- **Phase 5** — Manager flow (S90–S100)

Each phase gets its own design → plan → implementation cycle. This spec covers Foundation only.

---

## 2 — Scope

**In scope**
- Next.js 15 App Router scaffold, TypeScript-first
- PWA setup via `@serwist/next` (manifest, service worker, offline shell)
- Mobile-gate component blocking viewports ≥500px wide on coarse-pointer-absent devices
- Design tokens (`C` colors, `F` fonts, `hexA` helper) ported verbatim from `home-two/shared.jsx`
- All shared primitives ported from `home-two/shared.jsx` — chrome (`Screen`, `StatusBar`, `HomeIndicator`, `TopHeader`, `TabBar`, `DesktopBlock`) and atoms (`PrimaryButton`, `GhostButton`, `Input`, `Card`, `Badge`, `Avatar`, `VerifiedBadge`, `Logo`, `Ico`, `ImagePh`, `ProgressBar`, `Dots`)
- Routing convention document covering rules for all five phases
- S01 Splash smoke-test screen at `/`
- `app/_dev` index for jumping to any implemented screen (seeded with S01)
- Verification checklist (build, dev, Lighthouse PWA, install, offline shell)

**Out of scope**
- Any screen other than S01
- Auth, real APIs, real data, state management library
- Analytics, error reporting, i18n
- Tab-bar wiring into a phase route group (`TabBar` is built but only mounted later by Phase 3)
- Custom install-prompt UI (browser's native banner is sufficient for Foundation)
- Visual regression vs canvas (per-phase concern, not Foundation)
- Real device Android testing (DevTools emulation is sufficient for Foundation)
- Accessibility audit (Phase 1 establishes the a11y baseline; Foundation only needs to not actively prevent it)

---

## 3 — Architecture & Stack

| Concern | Choice |
|---|---|
| Framework | Next.js 15, App Router |
| UI library | React 19 |
| Language | TypeScript for shell, layouts, primitives (`.tsx`); JSX for screen ports (`.jsx`) |
| PWA | `@serwist/next` (Workbox successor to deprecated `next-pwa`) |
| Styling | Inline styles (`style={{ }}`) — same shape as mockups, no Tailwind, no CSS Modules |
| Tokens | TS object import (`import { C, F, hexA } from '@/lib/tokens'`) |
| State | React local state only in Foundation. Future state library is a per-phase decision. |
| Backend | None. No data layer defined at Foundation. |
| Fonts | `next/font/google` — Inter (400/500/600/700/800), JetBrains Mono (400/500/600) |
| Package manager | pnpm |

**Runtime targets**
- iOS Safari 16+
- Android Chrome 110+
- Installable to home screen on both
- Offline shell (app loads after install with network killed)
- Portrait orientation locked

---

## 4 — Project Structure

```
home-property/
├── app/
│   ├── layout.tsx                  # root: viewport, fonts, providers, mobile gate
│   ├── page.tsx                    # / → S01 Splash (smoke-test)
│   ├── manifest.ts                 # PWA manifest (typed)
│   ├── icon.tsx                    # PWA icon (dynamic, generated from Logo primitive)
│   ├── apple-icon.tsx              # iOS home-screen icon
│   ├── offline/                   # offline fallback page (served by SW)
│   │   └── page.tsx
│   └── _dev/                       # dev-only screen index (gated by NODE_ENV)
│       └── page.tsx
│
├── src/
│   ├── components/
│   │   ├── chrome/                 # app-shell primitives (layout-aware)
│   │   │   ├── Screen.tsx
│   │   │   ├── StatusBar.tsx
│   │   │   ├── HomeIndicator.tsx
│   │   │   ├── TopHeader.tsx
│   │   │   ├── TabBar.tsx          # built but unmounted in Foundation
│   │   │   ├── DesktopGate.tsx     # decides: render children or block
│   │   │   └── DesktopBlock.tsx    # the block UI (rendered when gate triggers)
│   │   └── ui/                     # atoms (layout-agnostic)
│   │       ├── PrimaryButton.tsx
│   │       ├── GhostButton.tsx
│   │       ├── Input.tsx
│   │       ├── Card.tsx
│   │       ├── Badge.tsx
│   │       ├── Avatar.tsx
│   │       ├── VerifiedBadge.tsx
│   │       ├── Logo.tsx
│   │       ├── Ico.tsx
│   │       ├── ImagePh.tsx
│   │       ├── ProgressBar.tsx
│   │       └── Dots.tsx
│   │
│   ├── screens/                    # 1:1 mockup ports, .jsx allowed
│   │   └── onboarding/
│   │       └── S01_Splash.jsx      # smoke-test only in Foundation
│   │
│   ├── lib/
│   │   ├── tokens.ts               # C (colors) + F (fonts) + hexA helper
│   │   └── viewport.ts             # useViewport / isMobileWidth helpers
│   │
│   └── styles/
│       └── globals.css             # reset, body lock, safe-area vars
│
├── public/
│   ├── icons/                      # 192, 512, maskable
│   └── splash/                     # iOS splash images per device
│
├── docs/
│   └── superpowers/
│       └── specs/
│           ├── 2026-05-22-foundation-design.md   # this file
│           └── routing-conventions.md            # rules every phase follows
│
├── next.config.ts                  # Serwist + experimental flags
├── tsconfig.json
├── package.json
└── .gitignore
```

**Conventions**
- App-shell primitives go in `components/chrome/`; atoms in `components/ui/`. The boundary matters: chrome is layout-aware, atoms aren't.
- Screen components live at `src/screens/<phase>/S##_Name.jsx`. The S## numbering preserves the 1:1 link from canvas to code; route pages just `import` them. Phase route groups (`(onboarding)`, `(kyc)`, `(guest)`, `(owner)`, `(manager)`) are NOT created in Foundation — each phase spec creates its own group.

---

## 5 — PWA Setup

**Manifest** (`app/manifest.ts`)
- `name`: "Homely" · `short_name`: "Homely"
- `display`: `standalone` · `orientation`: `portrait`
- `theme_color`: `#000066` (navy) · `background_color`: `#FEF3EB` (pale)
- `start_url`: `/` · `scope`: `/`
- Icons: 192×192, 512×512, plus a maskable 512×512

**Service worker** via `@serwist/next`
- App shell (HTML/CSS/JS) cached at install, network-first revalidation
- Static assets (icons, fonts) cache-first with stale-while-revalidate
- Generated `sw.js` at build time; Serwist's runtime registers it

**iOS splash screens** — `app/apple-icon.tsx` plus per-device `<link rel="apple-touch-startup-image">` tags in root layout. Five sizes covering iPhone SE through 15 Pro Max.

**Offline fallback** — `app/offline/page.tsx` shown when the SW can't fetch a route. Uses `Screen` + `Card` to render a styled "You're offline" message.

**No custom install prompt in Foundation.** The browser's native install banner is sufficient. A later phase can add an in-app "Add to Home Screen" CTA if needed.

---

## 6 — Mobile Gate (Desktop Block)

Two components, two-layer enforcement; neither layer is a single point of failure.

**`<DesktopGate>` — the decider** (server + client logic, wraps `{children}` in root layout)
**`<DesktopBlock>` — the block UI** (rendered when the gate triggers)

**Layer 1 — Server-side UA hint (best-effort)**
In `app/layout.tsx`, `<DesktopGate>` reads `User-Agent` and `Sec-CH-UA-Mobile` headers via `next/headers`. If clearly desktop (Mac/Windows/Linux desktop UA with `Sec-CH-UA-Mobile: ?0`), `DesktopGate` renders `<DesktopBlock />`; otherwise it renders `{children}`. Avoids a flash of real content before the client check runs.

**Layer 2 — Client-side viewport check (authoritative)**
After hydration, `DesktopGate` uses `useViewport()` to measure `window.innerWidth` and `matchMedia('(pointer: coarse)')`. If width > 500px **and** pointer is fine (mouse), it renders `<DesktopBlock />`; otherwise `{children}`. Re-runs on resize.

**Breakpoint**: 500px. Largest current phone in portrait is Pixel 7 Pro at 412px; 500 gives comfortable headroom while rejecting any tablet or laptop.

**`<DesktopBlock />` content**
- Centered card on `C.pale` background
- `Logo` at 64px
- Heading: *"Homely is mobile-first"*
- Body: *"Open this on your phone for the full experience."*
- QR code (placeholder image in Foundation; a later phase can generate a real one with `qrcode` library pointed at `window.location.href`)
- Footnote: *"Or resize your browser window to under 500px wide to preview."*

**Dev bypass** — `localStorage.setItem('homely-allow-desktop', '1')` skips the block. Cleared on `?reset` query param.

**Explicitly NOT**
- Not a security boundary — anyone can resize a window or spoof a UA. The gate is a UX choice, not access control.
- Not a redirect — same URL, different render. PWA install instructions in the block remain valid.

---

## 7 — Design Tokens

Verbatim port of `C` and `F` from `home-two/shared.jsx` into `src/lib/tokens.ts`. No renaming.

```ts
// src/lib/tokens.ts
export const C = {
  navy: '#000066',
  navySoft: '#1a1a7a',
  orange: '#F48536',
  orangeSoft: '#FFB47A',
  green: '#99CC33',
  greenSoft: '#C9E58A',
  pale: '#FEF3EB',
  paleDeep: '#FBE7D3',
  ink: '#000000',
  ink70: 'rgba(0,0,0,0.70)',
  ink50: 'rgba(0,0,0,0.50)',
  ink30: 'rgba(0,0,0,0.30)',
  ink12: 'rgba(0,0,0,0.12)',
  ink06: 'rgba(0,0,0,0.06)',
  red: '#E53E3E',
  white: '#FFFFFF',
} as const;

export const F = {
  ui:   '"Inter", -apple-system, system-ui, sans-serif',
  mono: '"JetBrains Mono", ui-monospace, monospace',
} as const;

export const hexA = (hex: string, a: number) => {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`;
};
```

**Fonts** loaded once in `app/layout.tsx`:
- `Inter` weights 400, 500, 600, 700, 800
- `JetBrains Mono` weights 400, 500, 600

**CSS variables** for cases where JS tokens can't reach — only safe-area insets in `globals.css`:
```css
:root {
  --safe-top:    env(safe-area-inset-top, 0px);
  --safe-bottom: env(safe-area-inset-bottom, 0px);
}
```

**Why not CSS vars for colors?** Mockups reference `C.navy` directly inside JS. Porting verbatim means importing the same `C` object. CSS vars would force every line to translate `C.navy` → `'var(--c-navy)'`. That's a translation pass, which we explicitly skipped.

---

## 8 — Shared Primitives

Direct port from `home-two/shared.jsx`. **One significant adaptation: `Screen`. Everything else is verbatim.**

### Chrome (`src/components/chrome/`)

| Primitive | Source | Adaptation |
|---|---|---|
| `Screen` | `shared.jsx` | **Changed.** No fixed 390×844. Renders `width: 100vw; height: 100dvh`, fluid children. In **standalone display mode** (PWA installed), the fake `StatusBar` and `HomeIndicator` are **hidden** — the real OS draws its own, and the content area uses `env(safe-area-inset-top/bottom)` to clear them. In **browser tab**, both render at full opacity for visual continuity with the mockups. Detected via `matchMedia('(display-mode: standalone)')`. |
| `StatusBar` | `shared.jsx` | Verbatim. Time uses live `Date()` instead of hardcoded `'9:41'`. |
| `HomeIndicator` | `shared.jsx` | Verbatim. |
| `TopHeader` | `shared.jsx` | Verbatim. Back button wired to `useRouter().back()` instead of mock. |
| `TabBar` | derived from S25 / S44 / S52 footer | New, trivial. 4-tab bottom bar (Discover · Trips · Inbox · Profile). Built in Foundation; not mounted by S01. Phase 3 mounts it in `(guest)/layout.tsx`. |
| `DesktopGate` | n/a | New. Decider that wraps `{children}` in root layout (see Section 6). |
| `DesktopBlock` | n/a | New. The block UI rendered by `DesktopGate` when triggered (see Section 6). |

### Atoms (`src/components/ui/`)

All verbatim ports from `shared.jsx`. Each becomes a TS component with typed props.

- `PrimaryButton` — `{ children; size?: 'lg' \| 'default'; icon?: ReactNode; onClick? }`
- `GhostButton` — `{ children; onClick? }`
- `Input` — `{ label?; value?; placeholder?; type?; icon?; right? }`
- `Card` — `{ children; p?: number; style? }`
- `Badge` — `{ children; kind?: 'green' \| 'orange' \| 'red' \| 'navy'; size?: 'sm' \| 'default' }`
- `Avatar` — `{ name; size?; verified? }`
- `VerifiedBadge` — `{ size? }`
- `Logo` — `{ size?; color?; withWord? }`
- `Ico` — `{ name: IconName; size?; color? }` (`IconName` is the union of names found in `shared.jsx`)
- `ImagePh` — `{ w; h; label?; radius?; tone? }`
- `ProgressBar` — `{ value; total; dark? }`
- `Dots` — `{ active; total? }`

**Port methodology** — for each primitive: copy the function body from `shared.jsx`, wrap as a TS component with a typed props interface, default-export. Keep inline `style={{ }}` exactly as-is. Replace the `window`-assignment pattern with proper exports.

**Not ported**
- The fixed-frame `Screen` wrapper in the canvas — that's iOS-frame chrome that lives only in `home-two/Homely · Mobile screens.html`. The Next.js app IS the device.
- `DesignCanvas`, `ios-frame.jsx` — canvas-only.

**Icon names found in `shared.jsx`/screens so far** (Foundation ports exactly these; phase specs add new names as their screens need them):
`mail, lock, eye, phone, shield, info, check, check-c, x, x-c, alert, camera, upload, doc, card, globe, building, wifi, star, google, apple, msg`

---

## 9 — Routing Convention

These rules go in `docs/superpowers/specs/routing-conventions.md` and every phase spec references them.

1. **Phase = route group.** `(onboarding)`, `(kyc)`, `(guest)`, `(owner)`, `(manager)`. Each owns a `layout.tsx` for its shared chrome — e.g. `(guest)/layout.tsx` mounts `TabBar`, `(owner)/layout.tsx` mounts an owner top bar.
2. **One mockup = one page file**, named semantically (not by S##). The S## lives in a comment header inside the page file: `// Mockup: S07 Sign In`.
3. **Wizards collapse to dynamic `[step]` routes.** KYC 4 steps → `(kyc)/verify/[step]/page.tsx`. Listing 9 steps → `(owner)/listings/new/[step]/page.tsx`. Step numbers map to S## via the file's comment header and a per-phase mapping appendix.
4. **Multi-part screens (S30 / S31 / S32 = property detail top/middle/bottom) collapse to one scrollable page.** The mockup split is for canvas readability; the real screen is one continuous scroll.
5. **Modal/sheet screens (S27 Filter, S47 Cancel, S76 Deactivate) are NOT routes.** They're React state on their parent route: `<FilterSheet open={...} />`. No URL change.
6. **`/` always renders S01 Splash.** From there, splash redirects to either `/welcome` (no session) or `/discover` (session + KYC verified). Foundation only ships the static splash; redirect logic is a Phase 1 concern.
7. **Each phase spec MUST include an S## ↔ route appendix table.** Reviewers can grep one place to find any mockup's route.

**Anti-pattern to avoid** — do NOT create per-S## routes like `/screens/s07`. Canvas numbering is build-time scaffolding, not app information architecture.

**Dev-only screen index** — `app/_dev/page.tsx`, hidden in production via `process.env.NODE_ENV` check, listing every implemented screen with deep links. Foundation seeds it with S01; each phase appends to it.

---

## 10 — Smoke-Test Screen (S01 Splash)

Foundation ships exactly **one** visible screen: S01 Splash, ported verbatim from `home-two/screens-onboarding.jsx`.

- **File**: `src/screens/onboarding/S01_Splash.jsx`
- **Mounted at**: `app/page.tsx` — just `import S01_Splash` + return it

**Port checklist** (proves the substrate works):
- Tokens resolved (`C.navy`, `C.orange`, `hexA` all imported)
- Inter font loaded (the `homely` wordmark at 800-weight renders)
- `Screen` primitive renders fluid (no fixed 390×844, no horizontal scroll on a 360-wide phone, no pillar bars on a 412-wide phone)
- `Logo` atom renders the SVG mark
- Status bar + home indicator: visible (mockup-style) in browser tab; hidden in PWA standalone mode (real OS draws its own, content offset via `env(safe-area-inset-*)`)
- Three onboarding dots render with the first one in orange
- No console errors, no hydration warnings

**Behavior**
- Static. No timer auto-advancing to `/welcome`. No tap handler. Phase 1 adds those.
- Reachable at `/` only. No other routes exist in Foundation.

This is the smallest screen that exercises every Foundation primitive that matters: tokens, fonts, `Screen`, `Logo`, `StatusBar`, `HomeIndicator`. If it renders pixel-correct on three phone sizes (iPhone SE 375, iPhone 14 390, Pixel 7 Pro 412), the substrate is proven.

---

## 11 — Verification

Foundation is done when **all of the following pass, in order**:

1. `pnpm dev` runs clean — no TS errors, no console errors, no hydration warnings
2. `/` renders S01 Splash on Chrome desktop with the window resized to <500px wide
3. `/` shows `<DesktopBlock />` on Chrome desktop with the window ≥500px wide
4. `/` renders S01 Splash on real iPhone Safari (or DevTools iPhone emulation) at 375, 390, 412 widths — no horizontal scroll, no pillar bars
5. `pnpm build` succeeds with zero warnings
6. Lighthouse PWA audit on the built app: Installable ✓, valid manifest ✓, SW registered ✓
7. Install to home screen on iOS Safari (real device or simulator) and Android Chrome (DevTools "Add to Home Screen" emulation is acceptable for Foundation) — app opens in standalone, splash shows
8. Kill network after install, reload — app shell still renders (offline fallback works)
9. `/_dev` (dev-only) — lists S01 with a deep link, link works

Verification is end-to-end, not piecemeal. If any item fails, Foundation is not done.

---

## 12 — Appendix: S## ↔ Route Mapping

Foundation ships only S01.

| S## | Route | File |
|---|---|---|
| S01 Splash | `/` | `app/page.tsx` → `src/screens/onboarding/S01_Splash.jsx` |

Each phase spec appends to this table.

---

## 13 — Decisions Deferred to Future Specs

- **State management library** (Zustand / Jotai / none) — first phase that needs cross-route state decides.
- **Form library** (react-hook-form / native) — Phase 1 (Onboarding) decides when it ports S06/S07/S09/etc.
- **Date library** — Phase 4 (Owner Ops) decides when it ports the calendar screens.
- **Map library** (Mapbox / Google / Maplibre) — Phase 3 decides when it ports S28 Map View.
- **Real icon set** — currently inline SVGs in `Ico`. A later phase can swap to lucide/heroicons if the SVG count becomes unwieldy.
- **Visual regression tooling** — first phase to port many screens can decide if Playwright/Percy is worth adding.

---

## 14 — Next Step

After this spec is approved, invoke the writing-plans skill to produce a detailed implementation plan with concrete tasks, sequencing, and per-step verification.
