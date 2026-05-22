# Homely Foundation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the Homely PWA substrate (Next.js + service worker + mobile-only gate + design tokens + all shared primitives) and prove it end-to-end with the S01 Splash smoke screen.

**Architecture:** Next.js 15 App Router with TypeScript shell and JSX screen ports. Route groups will be added per-phase later; Foundation only builds the root layout and `/`. PWA via `@serwist/next`. Desktop blocked by a two-layer gate (server UA hint + client viewport check) at the root layout. Design tokens and primitives ported verbatim from `home-two/shared.jsx`.

**Tech Stack:** Next.js 15, React 19, TypeScript 5, Serwist 9 (`@serwist/next`), Vitest 2 + React Testing Library + jsdom for tests, `pnpm` for package management.

**Source of truth:** Mockups live at `home-two/` (verified byte-identical to `home-one/` for shared screens; `home-two/` is the superset).

**Spec:** `docs/superpowers/specs/2026-05-22-foundation-design.md`

---

## Conventions used throughout this plan

- **Working directory** for all commands: `C:/Dave-Projects/home-property`
- **Shell:** Bash (Git Bash on Windows). `pnpm` is invoked directly.
- **Commit style:** Conventional Commits (`feat:`, `chore:`, `test:`, `docs:`). Each task ends with one commit.
- **TDD pattern:** Each component task writes a smoke-level test first (renders without crashing, key props honored), then implements.
- **`"use client"`:** Any component using hooks, event handlers, or browser APIs gets `"use client"` at the top. Tests note when this is required.
- **JSX vs TSX:** App shell, primitives, layouts, libs, tests → `.tsx`/`.ts`. Screen verbatim ports → `.jsx`. Configured via `allowJs: true` in `tsconfig.json`.

---

## Task 1: Project Initialization

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `next.config.ts`
- Create: `next-env.d.ts`
- Create: `vitest.config.ts`
- Create: `vitest.setup.ts`
- Create: `.gitignore`
- Create: `app/layout.tsx` (placeholder — replaced in Task 5)
- Create: `app/page.tsx` (placeholder — replaced in Task 17)

- [ ] **Step 1: Initialize git and pnpm**

Run:
```bash
git init
pnpm init
```
Expected: `.git/` created, `package.json` generated with defaults.

- [ ] **Step 2: Install Next.js, React, TypeScript**

Run:
```bash
pnpm add next@latest react@latest react-dom@latest
pnpm add -D typescript @types/node @types/react @types/react-dom
```
Expected: dependencies added, `pnpm-lock.yaml` created.

- [ ] **Step 3: Install test dependencies**

Run:
```bash
pnpm add -D vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event
```
Expected: vitest + RTL + jsdom installed.

- [ ] **Step 4: Write `tsconfig.json`**

Create `tsconfig.json`:
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "checkJs": false,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@/app/*": ["./app/*"]
    },
    "types": ["vitest/globals", "@testing-library/jest-dom"]
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", "**/*.jsx", "**/*.js", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

- [ ] **Step 5: Write `next.config.ts`**

Create `next.config.ts`:
```ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
```

- [ ] **Step 6: Write `next-env.d.ts`**

Create `next-env.d.ts`:
```ts
/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.
```

- [ ] **Step 7: Write `vitest.config.ts`**

Create `vitest.config.ts`:
```ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
    include: ['tests/**/*.test.{ts,tsx}'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/app': path.resolve(__dirname, './app'),
    },
  },
});
```

- [ ] **Step 8: Write `vitest.setup.ts`**

Create `vitest.setup.ts`:
```ts
import '@testing-library/jest-dom/vitest';
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

afterEach(() => {
  cleanup();
});

// matchMedia mock for components that read display-mode / pointer media queries
if (typeof window !== 'undefined') {
  window.matchMedia = window.matchMedia || ((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: () => {},
    removeEventListener: () => {},
    addListener: () => {},
    removeListener: () => {},
    dispatchEvent: () => false,
  } as unknown as MediaQueryList));
}
```

- [ ] **Step 9: Write `.gitignore`**

Create `.gitignore`:
```
# deps
node_modules/
.pnpm-store/

# next.js
.next/
out/
build/

# env
.env*.local

# vitest
coverage/

# os
.DS_Store
Thumbs.db

# editor
.vscode/
.idea/

# pwa
public/sw.js
public/sw.js.map
public/workbox-*.js
public/workbox-*.js.map
```

- [ ] **Step 10: Update `package.json` scripts and metadata**

Edit `package.json` so it includes:
```json
{
  "name": "homely",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "test": "vitest run",
    "test:watch": "vitest",
    "typecheck": "tsc --noEmit"
  }
}
```
(Dependencies block stays whatever pnpm wrote — don't replace it.)

- [ ] **Step 11: Stub placeholder `app/layout.tsx` and `app/page.tsx`**

Create `app/layout.tsx`:
```tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

Create `app/page.tsx`:
```tsx
export default function Page() {
  return <div>Homely — Foundation scaffold</div>;
}
```

- [ ] **Step 12: Verify the scaffold runs**

Run:
```bash
pnpm typecheck
```
Expected: zero errors.

Run:
```bash
pnpm dev
```
Expected: dev server starts, `http://localhost:3000` renders "Homely — Foundation scaffold". Stop the server (Ctrl+C) once verified.

Run:
```bash
pnpm test
```
Expected: "no test files found" (we haven't written any yet). Exit code 0 or 1 either is acceptable — confirm Vitest at least loaded.

- [ ] **Step 13: Commit**

```bash
git add -A
git commit -m "chore: initialize Next.js 15 + TypeScript + Vitest scaffold"
```

---

## Task 2: Design Tokens

**Files:**
- Create: `src/lib/tokens.ts`
- Create: `tests/lib/tokens.test.ts`

- [ ] **Step 1: Write the failing test**

Create `tests/lib/tokens.test.ts`:
```ts
import { describe, it, expect } from 'vitest';
import { C, F, hexA } from '@/lib/tokens';

describe('tokens', () => {
  it('C has the full Homely palette', () => {
    expect(C.navy).toBe('#000066');
    expect(C.orange).toBe('#F48536');
    expect(C.green).toBe('#99CC33');
    expect(C.pale).toBe('#FEF3EB');
    expect(C.red).toBe('#E53E3E');
    expect(C.white).toBe('#FFFFFF');
  });

  it('F exposes Inter UI and JetBrains Mono', () => {
    expect(F.ui).toContain('Inter');
    expect(F.mono).toContain('JetBrains Mono');
  });

  it('hexA converts hex+alpha to rgba()', () => {
    expect(hexA('#000066', 0.5)).toBe('rgba(0, 0, 102, 0.5)');
    expect(hexA('#F48536', 0.25)).toBe('rgba(244, 133, 54, 0.25)');
    expect(hexA('#FFFFFF', 1)).toBe('rgba(255, 255, 255, 1)');
  });
});
```

- [ ] **Step 2: Run the test and watch it fail**

Run:
```bash
pnpm test tests/lib/tokens.test.ts
```
Expected: FAIL — `Cannot find module '@/lib/tokens'`.

- [ ] **Step 3: Implement tokens**

Create `src/lib/tokens.ts`:
```ts
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
  ui: '"Inter", -apple-system, system-ui, sans-serif',
  mono: '"JetBrains Mono", ui-monospace, monospace',
} as const;

export const hexA = (hex: string, a: number): string => {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`;
};
```

- [ ] **Step 4: Run the test and watch it pass**

Run:
```bash
pnpm test tests/lib/tokens.test.ts
```
Expected: PASS (3 tests).

- [ ] **Step 5: Commit**

```bash
git add src/lib/tokens.ts tests/lib/tokens.test.ts
git commit -m "feat(tokens): port C/F/hexA from home-two/shared.jsx"
```

---

## Task 3: Global Styles

**Files:**
- Create: `src/styles/globals.css`

- [ ] **Step 1: Write `globals.css`**

Create `src/styles/globals.css`:
```css
:root {
  --safe-top:    env(safe-area-inset-top, 0px);
  --safe-bottom: env(safe-area-inset-bottom, 0px);
  --safe-left:   env(safe-area-inset-left, 0px);
  --safe-right:  env(safe-area-inset-right, 0px);
}

* {
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  background: #f0eee9;
  font-family: "Inter", -apple-system, system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overscroll-behavior: none;
}

/* Lock body scroll — each Screen owns its own scroll region */
body {
  overflow: hidden;
  position: fixed;
  width: 100%;
  height: 100dvh;
}

#__next, body > div:first-child {
  height: 100dvh;
}

button {
  font-family: inherit;
  cursor: pointer;
}

input, textarea {
  font-family: inherit;
}
```

- [ ] **Step 2: Commit**

```bash
git add src/styles/globals.css
git commit -m "feat(styles): add globals.css with safe-area vars and body lock"
```

---

## Task 4: Viewport Hook

**Files:**
- Create: `src/lib/viewport.ts`
- Create: `tests/lib/viewport.test.ts`

- [ ] **Step 1: Write the failing test**

Create `tests/lib/viewport.test.ts`:
```ts
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useViewport, isDesktopUA } from '@/lib/viewport';

describe('useViewport', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'innerWidth', { writable: true, value: 390 });
    Object.defineProperty(window, 'innerHeight', { writable: true, value: 844 });
    window.matchMedia = vi.fn().mockImplementation((q: string) => ({
      matches: q.includes('coarse'),
      media: q,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    })) as unknown as typeof window.matchMedia;
  });

  it('returns initial width, height, hasFinePointer', () => {
    const { result } = renderHook(() => useViewport());
    expect(result.current.width).toBe(390);
    expect(result.current.height).toBe(844);
    expect(result.current.hasFinePointer).toBe(false);
  });

  it('updates on window resize', () => {
    const { result } = renderHook(() => useViewport());
    act(() => {
      Object.defineProperty(window, 'innerWidth', { writable: true, value: 800 });
      window.dispatchEvent(new Event('resize'));
    });
    expect(result.current.width).toBe(800);
  });
});

describe('isDesktopUA', () => {
  it('returns true for a Mac desktop UA', () => {
    expect(isDesktopUA('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15')).toBe(true);
  });

  it('returns false for an iPhone UA', () => {
    expect(isDesktopUA('Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15')).toBe(false);
  });

  it('returns false for an Android UA', () => {
    expect(isDesktopUA('Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36')).toBe(false);
  });

  it('returns true for empty or undefined', () => {
    expect(isDesktopUA('')).toBe(false);
    expect(isDesktopUA(undefined)).toBe(false);
  });
});
```

- [ ] **Step 2: Run the test and watch it fail**

Run:
```bash
pnpm test tests/lib/viewport.test.ts
```
Expected: FAIL — module not found.

- [ ] **Step 3: Implement `viewport.ts`**

Create `src/lib/viewport.ts`:
```ts
'use client';

import { useEffect, useState } from 'react';

export interface Viewport {
  width: number;
  height: number;
  hasFinePointer: boolean;
  isStandalone: boolean;
}

export function useViewport(): Viewport {
  const [vp, setVp] = useState<Viewport>(() => readViewport());

  useEffect(() => {
    const onResize = () => setVp(readViewport());
    window.addEventListener('resize', onResize);
    const pointerMql = window.matchMedia('(pointer: fine)');
    const standaloneMql = window.matchMedia('(display-mode: standalone)');
    const onPointerChange = () => setVp(readViewport());
    pointerMql.addEventListener?.('change', onPointerChange);
    standaloneMql.addEventListener?.('change', onPointerChange);
    return () => {
      window.removeEventListener('resize', onResize);
      pointerMql.removeEventListener?.('change', onPointerChange);
      standaloneMql.removeEventListener?.('change', onPointerChange);
    };
  }, []);

  return vp;
}

function readViewport(): Viewport {
  if (typeof window === 'undefined') {
    return { width: 0, height: 0, hasFinePointer: false, isStandalone: false };
  }
  return {
    width: window.innerWidth,
    height: window.innerHeight,
    hasFinePointer: window.matchMedia('(pointer: fine)').matches,
    isStandalone: window.matchMedia('(display-mode: standalone)').matches,
  };
}

const DESKTOP_PATTERNS = [/Macintosh/i, /Windows NT/i, /X11; Linux/i];
const MOBILE_PATTERNS = [/iPhone/i, /iPad/i, /Android/i, /Mobile/i];

export function isDesktopUA(ua: string | undefined): boolean {
  if (!ua) return false;
  if (MOBILE_PATTERNS.some(p => p.test(ua))) return false;
  return DESKTOP_PATTERNS.some(p => p.test(ua));
}

export const MOBILE_MAX_WIDTH = 500;
```

- [ ] **Step 4: Run the test and watch it pass**

Run:
```bash
pnpm test tests/lib/viewport.test.ts
```
Expected: PASS (6 tests).

- [ ] **Step 5: Commit**

```bash
git add src/lib/viewport.ts tests/lib/viewport.test.ts
git commit -m "feat(lib): add useViewport hook and isDesktopUA detector"
```

---

## Task 5: Root Layout + Fonts

**Files:**
- Modify: `app/layout.tsx`

- [ ] **Step 1: Replace `app/layout.tsx`**

Replace contents of `app/layout.tsx`:
```tsx
import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Homely',
  description: 'Find your stay',
  applicationName: 'Homely',
  appleWebApp: {
    capable: true,
    title: 'Homely',
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: '#000066',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

- [ ] **Step 2: Fix the path alias in `src/styles/globals.css` import**

The Next.js compiler resolves `@/styles/globals.css` via the `paths` entry in `tsconfig.json`. If the dev server complains, fall back to a relative import (`../src/styles/globals.css`). Run dev and verify in the next step.

- [ ] **Step 3: Run dev server and confirm**

Run:
```bash
pnpm dev
```
Expected: server starts, `/` renders the placeholder text with Inter font applied (visible weight change vs. system default). No console errors. Stop the server.

- [ ] **Step 4: Commit**

```bash
git add app/layout.tsx
git commit -m "feat(layout): root layout with Inter + JetBrains Mono fonts and viewport meta"
```

---

## Task 6: DesktopBlock UI

**Files:**
- Create: `src/components/chrome/DesktopBlock.tsx`
- Create: `tests/components/chrome/DesktopBlock.test.tsx`

- [ ] **Step 1: Write the failing test**

Create `tests/components/chrome/DesktopBlock.test.tsx`:
```tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { DesktopBlock } from '@/components/chrome/DesktopBlock';

describe('DesktopBlock', () => {
  it('renders mobile-first heading and instruction copy', () => {
    render(<DesktopBlock />);
    expect(screen.getByRole('heading', { name: /mobile-first/i })).toBeInTheDocument();
    expect(screen.getByText(/Open this on your phone/i)).toBeInTheDocument();
    expect(screen.getByText(/resize your browser window/i)).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run the test and watch it fail**

Run:
```bash
pnpm test tests/components/chrome/DesktopBlock.test.tsx
```
Expected: FAIL — module not found.

- [ ] **Step 3: Implement `DesktopBlock`**

Create `src/components/chrome/DesktopBlock.tsx`:
```tsx
import { C, hexA } from '@/lib/tokens';

export function DesktopBlock() {
  return (
    <div style={{
      position: 'fixed', inset: 0, background: C.pale,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 32, fontFamily: 'var(--font-inter)',
    }}>
      <div style={{
        maxWidth: 420, width: '100%', background: C.white,
        borderRadius: 24, padding: 32, textAlign: 'center',
        boxShadow: `0 12px 40px ${hexA(C.navy, 0.12)}`,
      }}>
        <div style={{
          width: 64, height: 64, borderRadius: 16,
          background: C.navy, color: C.white,
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: 24, fontSize: 24, fontWeight: 800, letterSpacing: -0.5,
        }}>H</div>
        <h1 style={{
          margin: '0 0 12px', fontSize: 28, fontWeight: 800,
          color: C.navy, letterSpacing: -0.8,
        }}>
          Homely is mobile-first
        </h1>
        <p style={{ margin: '0 0 24px', fontSize: 15, color: C.ink70, lineHeight: 1.5 }}>
          Open this on your phone for the full experience.
        </p>
        <div style={{
          width: 160, height: 160, margin: '0 auto 24px',
          background: hexA(C.navy, 0.06), borderRadius: 12,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 12, color: C.ink50,
        }}>
          QR placeholder
        </div>
        <p style={{ margin: 0, fontSize: 12, color: C.ink50 }}>
          Or resize your browser window to under 500px wide to preview.
        </p>
      </div>
    </div>
  );
}
```

- [ ] **Step 4: Run the test and watch it pass**

Run:
```bash
pnpm test tests/components/chrome/DesktopBlock.test.tsx
```
Expected: PASS (1 test).

- [ ] **Step 5: Commit**

```bash
git add src/components/chrome/DesktopBlock.tsx tests/components/chrome/DesktopBlock.test.tsx
git commit -m "feat(chrome): DesktopBlock UI shown when desktop is detected"
```

---

## Task 7: DesktopGate Decider + Wire into Root Layout

**Files:**
- Create: `src/components/chrome/DesktopGate.tsx`
- Create: `tests/components/chrome/DesktopGate.test.tsx`
- Modify: `app/layout.tsx`

- [ ] **Step 1: Write the failing test**

Create `tests/components/chrome/DesktopGate.test.tsx`:
```tsx
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import { DesktopGate } from '@/components/chrome/DesktopGate';

function setViewport({ width, fine }: { width: number; fine: boolean }) {
  Object.defineProperty(window, 'innerWidth', { writable: true, value: width });
  Object.defineProperty(window, 'innerHeight', { writable: true, value: 844 });
  window.matchMedia = vi.fn().mockImplementation((q: string) => ({
    matches: q.includes('pointer: fine') ? fine : false,
    media: q,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  })) as unknown as typeof window.matchMedia;
}

describe('DesktopGate', () => {
  beforeEach(() => {
    setViewport({ width: 390, fine: false });
  });

  it('renders children when width <= 500 (mobile)', () => {
    render(<DesktopGate ssrIsDesktop={false}>app content</DesktopGate>);
    expect(screen.getByText('app content')).toBeInTheDocument();
  });

  it('renders DesktopBlock when width > 500 AND pointer is fine (desktop)', () => {
    setViewport({ width: 1280, fine: true });
    render(<DesktopGate ssrIsDesktop={false}>app content</DesktopGate>);
    expect(screen.queryByText('app content')).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /mobile-first/i })).toBeInTheDocument();
  });

  it('renders children when width > 500 but pointer is coarse (tablet/touch laptop in portrait)', () => {
    setViewport({ width: 800, fine: false });
    render(<DesktopGate ssrIsDesktop={false}>app content</DesktopGate>);
    expect(screen.getByText('app content')).toBeInTheDocument();
  });

  it('renders DesktopBlock initially when ssrIsDesktop=true', () => {
    setViewport({ width: 1280, fine: true });
    render(<DesktopGate ssrIsDesktop={true}>app content</DesktopGate>);
    expect(screen.getByRole('heading', { name: /mobile-first/i })).toBeInTheDocument();
  });

  it('respects the dev bypass in localStorage', () => {
    setViewport({ width: 1280, fine: true });
    localStorage.setItem('homely-allow-desktop', '1');
    render(<DesktopGate ssrIsDesktop={false}>app content</DesktopGate>);
    expect(screen.getByText('app content')).toBeInTheDocument();
    localStorage.removeItem('homely-allow-desktop');
  });
});
```

- [ ] **Step 2: Run the test and watch it fail**

Run:
```bash
pnpm test tests/components/chrome/DesktopGate.test.tsx
```
Expected: FAIL — module not found.

- [ ] **Step 3: Implement `DesktopGate`**

Create `src/components/chrome/DesktopGate.tsx`:
```tsx
'use client';

import { useEffect, useState } from 'react';
import { useViewport, MOBILE_MAX_WIDTH } from '@/lib/viewport';
import { DesktopBlock } from './DesktopBlock';

interface DesktopGateProps {
  ssrIsDesktop: boolean;
  children: React.ReactNode;
}

export function DesktopGate({ ssrIsDesktop, children }: DesktopGateProps) {
  const { width, hasFinePointer } = useViewport();
  const [allowBypass, setAllowBypass] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    setAllowBypass(typeof window !== 'undefined' && localStorage.getItem('homely-allow-desktop') === '1');
    // ?reset query clears the bypass
    if (new URLSearchParams(window.location.search).has('reset')) {
      localStorage.removeItem('homely-allow-desktop');
      setAllowBypass(false);
    }
  }, []);

  if (allowBypass) return <>{children}</>;

  // Before hydration, trust the server hint. After hydration, use viewport.
  const showBlock = hydrated
    ? width > MOBILE_MAX_WIDTH && hasFinePointer
    : ssrIsDesktop;

  return showBlock ? <DesktopBlock /> : <>{children}</>;
}
```

- [ ] **Step 4: Run the test and watch it pass**

Run:
```bash
pnpm test tests/components/chrome/DesktopGate.test.tsx
```
Expected: PASS (5 tests).

- [ ] **Step 5: Wire DesktopGate into root layout**

Replace contents of `app/layout.tsx`:
```tsx
import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { headers } from 'next/headers';
import { DesktopGate } from '@/components/chrome/DesktopGate';
import { isDesktopUA } from '@/lib/viewport';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Homely',
  description: 'Find your stay',
  applicationName: 'Homely',
  appleWebApp: { capable: true, title: 'Homely', statusBarStyle: 'default' },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: '#000066',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const h = await headers();
  const ua = h.get('user-agent') ?? '';
  const chMobile = h.get('sec-ch-ua-mobile');
  // sec-ch-ua-mobile is "?0" for desktop, "?1" for mobile
  const ssrIsDesktop = chMobile === '?0' || isDesktopUA(ua);

  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <DesktopGate ssrIsDesktop={ssrIsDesktop}>{children}</DesktopGate>
      </body>
    </html>
  );
}
```

- [ ] **Step 6: Verify the gate works in dev**

Run:
```bash
pnpm dev
```
- At `http://localhost:3000` with browser window > 500px wide and mouse pointer: should show DesktopBlock.
- Resize browser to < 500px wide: should swap to placeholder app content.
- Open Chrome DevTools, toggle device toolbar to iPhone: should show placeholder app content.

Stop the server.

- [ ] **Step 7: Commit**

```bash
git add src/components/chrome/DesktopGate.tsx tests/components/chrome/DesktopGate.test.tsx app/layout.tsx
git commit -m "feat(chrome): DesktopGate (SSR UA + client viewport) wired into root layout"
```

---

## Task 8: Screen Primitive

**Files:**
- Create: `src/components/chrome/Screen.tsx`
- Create: `tests/components/chrome/Screen.test.tsx`

- [ ] **Step 1: Write the failing test**

Create `tests/components/chrome/Screen.test.tsx`:
```tsx
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Screen } from '@/components/chrome/Screen';

function setStandalone(isStandalone: boolean) {
  window.matchMedia = vi.fn().mockImplementation((q: string) => ({
    matches: q.includes('standalone') ? isStandalone : false,
    media: q,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  })) as unknown as typeof window.matchMedia;
}

describe('Screen', () => {
  beforeEach(() => setStandalone(false));

  it('renders children', () => {
    render(<Screen>hello</Screen>);
    expect(screen.getByText('hello')).toBeInTheDocument();
  });

  it('shows fake StatusBar and HomeIndicator in browser mode', () => {
    render(<Screen>x</Screen>);
    expect(screen.getByTestId('fake-status-bar')).toBeInTheDocument();
    expect(screen.getByTestId('fake-home-indicator')).toBeInTheDocument();
  });

  it('hides fake StatusBar and HomeIndicator in PWA standalone mode', () => {
    setStandalone(true);
    render(<Screen>x</Screen>);
    expect(screen.queryByTestId('fake-status-bar')).not.toBeInTheDocument();
    expect(screen.queryByTestId('fake-home-indicator')).not.toBeInTheDocument();
  });

  it('applies the bg prop', () => {
    const { container } = render(<Screen bg="#000066">x</Screen>);
    const root = container.firstChild as HTMLElement;
    expect(root).toHaveStyle({ background: 'rgb(0, 0, 102)' });
  });
});
```

- [ ] **Step 2: Run the test and watch it fail**

Run:
```bash
pnpm test tests/components/chrome/Screen.test.tsx
```
Expected: FAIL — module not found.

- [ ] **Step 3: Implement `Screen`** — also imports `StatusBar` and `HomeIndicator` from the next two tasks. Stub those imports for now; the next tasks will create the real files.

Create temporary stub files (they get fleshed out in Tasks 9 and 10):

`src/components/chrome/StatusBar.tsx`:
```tsx
export function StatusBar(_props: { dark?: boolean; time?: string }) {
  return <div data-testid="fake-status-bar" />;
}
```

`src/components/chrome/HomeIndicator.tsx`:
```tsx
export function HomeIndicator(_props: { dark?: boolean }) {
  return <div data-testid="fake-home-indicator" />;
}
```

Create `src/components/chrome/Screen.tsx`:
```tsx
'use client';

import type { ReactNode, CSSProperties } from 'react';
import { useViewport } from '@/lib/viewport';
import { C, F } from '@/lib/tokens';
import { StatusBar } from './StatusBar';
import { HomeIndicator } from './HomeIndicator';

interface ScreenProps {
  children: ReactNode;
  bg?: string;
  dark?: boolean;
  statusBarDark?: boolean;
  padBottom?: number;
  scroll?: boolean;
  style?: CSSProperties;
}

export function Screen({
  children,
  bg = C.pale,
  dark = false,
  statusBarDark = false,
  padBottom = 0,
  scroll = true,
  style,
}: ScreenProps) {
  const { isStandalone } = useViewport();

  return (
    <div style={{
      width: '100vw',
      height: '100dvh',
      position: 'relative',
      overflow: 'hidden',
      background: bg,
      fontFamily: F.ui,
      color: dark ? C.white : C.ink,
      display: 'flex',
      flexDirection: 'column',
      WebkitFontSmoothing: 'antialiased',
      ...style,
    }}>
      {!isStandalone && <StatusBar dark={statusBarDark || dark} />}
      <div style={{
        flex: 1,
        overflow: scroll ? 'auto' : 'hidden',
        position: 'relative',
        paddingTop: isStandalone ? 'var(--safe-top)' : 0,
        paddingBottom: padBottom + (isStandalone ? 0 : 0),
        WebkitOverflowScrolling: 'touch',
      }}>
        {children}
      </div>
      {!isStandalone && <HomeIndicator dark={dark} />}
    </div>
  );
}
```

- [ ] **Step 4: Run the test and watch it pass**

Run:
```bash
pnpm test tests/components/chrome/Screen.test.tsx
```
Expected: PASS (4 tests).

- [ ] **Step 5: Commit**

```bash
git add src/components/chrome/Screen.tsx src/components/chrome/StatusBar.tsx src/components/chrome/HomeIndicator.tsx tests/components/chrome/Screen.test.tsx
git commit -m "feat(chrome): Screen primitive with fluid sizing and standalone-mode chrome toggle"
```

---

## Task 9: StatusBar

**Files:**
- Modify: `src/components/chrome/StatusBar.tsx` (stub from Task 8 → real implementation)
- Create: `tests/components/chrome/StatusBar.test.tsx`

- [ ] **Step 1: Write the failing test**

Create `tests/components/chrome/StatusBar.test.tsx`:
```tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { StatusBar } from '@/components/chrome/StatusBar';

describe('StatusBar', () => {
  it('renders the time when provided', () => {
    render(<StatusBar time="9:41" />);
    expect(screen.getByText('9:41')).toBeInTheDocument();
  });

  it('renders a live time when no time prop is given', () => {
    render(<StatusBar />);
    // expect HH:MM format, e.g. "1:23" or "12:34" or "9:05"
    const match = screen.getByTestId('fake-status-bar').textContent ?? '';
    expect(match).toMatch(/\d{1,2}:\d{2}/);
  });

  it('inverts colors when dark=true', () => {
    const { container } = render(<StatusBar dark />);
    const root = container.firstChild as HTMLElement;
    expect(root).toHaveStyle({ color: 'rgb(255, 255, 255)' });
  });
});
```

- [ ] **Step 2: Run the test and watch it fail**

Run:
```bash
pnpm test tests/components/chrome/StatusBar.test.tsx
```
Expected: FAIL — stub doesn't render time or apply dark color.

- [ ] **Step 3: Replace stub with real `StatusBar`**

Replace contents of `src/components/chrome/StatusBar.tsx`:
```tsx
'use client';

import { useEffect, useState } from 'react';
import { F } from '@/lib/tokens';

interface StatusBarProps {
  dark?: boolean;
  time?: string;
}

export function StatusBar({ dark = false, time }: StatusBarProps) {
  const [now, setNow] = useState(time ?? formatNow());

  useEffect(() => {
    if (time) return; // static
    const tick = () => setNow(formatNow());
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, [time]);

  const fg = dark ? '#ffffff' : '#000000';
  return (
    <div
      data-testid="fake-status-bar"
      style={{
        height: 47,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 28px',
        fontFamily: F.ui,
        fontWeight: 600,
        fontSize: 15,
        color: fg,
        flexShrink: 0,
        position: 'relative',
        zIndex: 5,
      }}
    >
      <span>{now}</span>
      <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
        <svg width="17" height="11" viewBox="0 0 17 11" aria-hidden>
          <rect x="0" y="7" width="3" height="4" rx="0.5" fill={fg} />
          <rect x="4.5" y="5" width="3" height="6" rx="0.5" fill={fg} />
          <rect x="9" y="2.5" width="3" height="8.5" rx="0.5" fill={fg} />
          <rect x="13.5" y="0" width="3" height="11" rx="0.5" fill={fg} />
        </svg>
        <svg width="24" height="11" viewBox="0 0 24 11" aria-hidden>
          <rect x="0.5" y="0.5" width="20" height="10" rx="2.5" stroke={fg} strokeOpacity="0.4" fill="none" />
          <rect x="2" y="2" width="17" height="7" rx="1.5" fill={fg} />
          <rect x="21.5" y="3.5" width="1.5" height="4" rx="0.5" fill={fg} opacity="0.5" />
        </svg>
      </div>
    </div>
  );
}

function formatNow(): string {
  const d = new Date();
  return `${d.getHours()}:${String(d.getMinutes()).padStart(2, '0')}`;
}
```

- [ ] **Step 4: Run the test and watch it pass**

Run:
```bash
pnpm test tests/components/chrome/StatusBar.test.tsx
```
Expected: PASS (3 tests).

- [ ] **Step 5: Commit**

```bash
git add src/components/chrome/StatusBar.tsx tests/components/chrome/StatusBar.test.tsx
git commit -m "feat(chrome): StatusBar with live clock and signal/battery icons"
```

---

## Task 10: HomeIndicator

**Files:**
- Modify: `src/components/chrome/HomeIndicator.tsx` (stub → real)
- Create: `tests/components/chrome/HomeIndicator.test.tsx`

- [ ] **Step 1: Write the failing test**

Create `tests/components/chrome/HomeIndicator.test.tsx`:
```tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { HomeIndicator } from '@/components/chrome/HomeIndicator';

describe('HomeIndicator', () => {
  it('renders the indicator bar', () => {
    render(<HomeIndicator />);
    expect(screen.getByTestId('fake-home-indicator')).toBeInTheDocument();
  });

  it('uses light color when dark=true', () => {
    render(<HomeIndicator dark />);
    const bar = screen.getByTestId('fake-home-indicator-bar');
    expect(bar).toHaveStyle({ background: 'rgba(255, 255, 255, 0.85)' });
  });

  it('uses dark color when dark=false', () => {
    render(<HomeIndicator />);
    const bar = screen.getByTestId('fake-home-indicator-bar');
    expect(bar).toHaveStyle({ background: 'rgba(0, 0, 0, 0.55)' });
  });
});
```

- [ ] **Step 2: Run the test and watch it fail**

Run:
```bash
pnpm test tests/components/chrome/HomeIndicator.test.tsx
```
Expected: FAIL — stub only renders an empty div.

- [ ] **Step 3: Replace stub**

Replace contents of `src/components/chrome/HomeIndicator.tsx`:
```tsx
interface HomeIndicatorProps {
  dark?: boolean;
}

export function HomeIndicator({ dark = false }: HomeIndicatorProps) {
  return (
    <div
      data-testid="fake-home-indicator"
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 24,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingBottom: 7,
        pointerEvents: 'none',
        zIndex: 100,
      }}
    >
      <div
        data-testid="fake-home-indicator-bar"
        style={{
          width: 134,
          height: 5,
          borderRadius: 100,
          background: dark ? 'rgba(255, 255, 255, 0.85)' : 'rgba(0, 0, 0, 0.55)',
        }}
      />
    </div>
  );
}
```

- [ ] **Step 4: Run the test and watch it pass**

Run:
```bash
pnpm test tests/components/chrome/HomeIndicator.test.tsx
```
Expected: PASS (3 tests).

- [ ] **Step 5: Commit**

```bash
git add src/components/chrome/HomeIndicator.tsx tests/components/chrome/HomeIndicator.test.tsx
git commit -m "feat(chrome): HomeIndicator with dark/light bar"
```

---

## Task 11: TopHeader

**Files:**
- Create: `src/components/chrome/TopHeader.tsx`
- Create: `tests/components/chrome/TopHeader.test.tsx`

- [ ] **Step 1: Write the failing test**

Create `tests/components/chrome/TopHeader.test.tsx`:
```tsx
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { TopHeader } from '@/components/chrome/TopHeader';

const backFn = vi.fn();

vi.mock('next/navigation', () => ({
  useRouter: () => ({ back: backFn, push: vi.fn(), replace: vi.fn() }),
}));

describe('TopHeader', () => {
  it('renders the title and subtitle', () => {
    render(<TopHeader title="Verify phone" subtitle="Step 1 of 4" />);
    expect(screen.getByText('Verify phone')).toBeInTheDocument();
    expect(screen.getByText('Step 1 of 4')).toBeInTheDocument();
  });

  it('renders a back button by default and calls router.back when clicked', () => {
    render(<TopHeader title="X" />);
    const btn = screen.getByRole('button', { name: /back/i });
    fireEvent.click(btn);
    expect(backFn).toHaveBeenCalled();
  });

  it('hides the back button when back=false', () => {
    render(<TopHeader title="X" back={false} />);
    expect(screen.queryByRole('button', { name: /back/i })).not.toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run the test and watch it fail**

Run:
```bash
pnpm test tests/components/chrome/TopHeader.test.tsx
```
Expected: FAIL — module not found.

- [ ] **Step 3: Implement `TopHeader`**

Create `src/components/chrome/TopHeader.tsx`:
```tsx
'use client';

import type { ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { C } from '@/lib/tokens';

interface TopHeaderProps {
  title: string;
  subtitle?: string;
  back?: boolean;
  dark?: boolean;
  right?: ReactNode;
}

export function TopHeader({ title, subtitle, back = true, dark = false, right }: TopHeaderProps) {
  const router = useRouter();
  const fg = dark ? C.white : C.ink;

  return (
    <div
      style={{
        padding: '8px 16px 12px',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        background: dark ? C.navy : 'transparent',
        color: fg,
        borderBottom: dark ? 'none' : `1px solid ${C.ink06}`,
      }}
    >
      {back && (
        <button
          aria-label="back"
          onClick={() => router.back()}
          style={{
            width: 36,
            height: 36,
            borderRadius: 18,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: dark ? 'rgba(255,255,255,0.1)' : C.white,
            border: dark ? 'none' : `1px solid ${C.ink06}`,
            padding: 0,
          }}
        >
          <svg width="10" height="16" viewBox="0 0 10 16" aria-hidden>
            <path d="M8 1L1 8l7 7" stroke={fg} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 17, fontWeight: 700, letterSpacing: -0.2 }}>{title}</div>
        {subtitle && (
          <div style={{ fontSize: 12, color: dark ? 'rgba(255,255,255,0.65)' : C.ink50, marginTop: 2 }}>
            {subtitle}
          </div>
        )}
      </div>
      {right}
    </div>
  );
}
```

- [ ] **Step 4: Run the test and watch it pass**

Run:
```bash
pnpm test tests/components/chrome/TopHeader.test.tsx
```
Expected: PASS (3 tests).

- [ ] **Step 5: Commit**

```bash
git add src/components/chrome/TopHeader.tsx tests/components/chrome/TopHeader.test.tsx
git commit -m "feat(chrome): TopHeader with router.back wiring"
```

---

## Task 12: TabBar

**Files:**
- Create: `src/components/chrome/TabBar.tsx`
- Create: `tests/components/chrome/TabBar.test.tsx`

- [ ] **Step 1: Write the failing test**

Create `tests/components/chrome/TabBar.test.tsx`:
```tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TabBar } from '@/components/chrome/TabBar';

describe('TabBar', () => {
  it('renders all four guest tabs', () => {
    render(<TabBar active="discover" />);
    expect(screen.getByText('Discover')).toBeInTheDocument();
    expect(screen.getByText('Trips')).toBeInTheDocument();
    expect(screen.getByText('Inbox')).toBeInTheDocument();
    expect(screen.getByText('Profile')).toBeInTheDocument();
  });

  it('marks the active tab', () => {
    render(<TabBar active="trips" />);
    const tripsLink = screen.getByRole('link', { name: /trips/i });
    expect(tripsLink).toHaveAttribute('aria-current', 'page');
  });

  it('uses correct hrefs', () => {
    render(<TabBar active="discover" />);
    expect(screen.getByRole('link', { name: /discover/i })).toHaveAttribute('href', '/discover');
    expect(screen.getByRole('link', { name: /trips/i })).toHaveAttribute('href', '/trips');
    expect(screen.getByRole('link', { name: /inbox/i })).toHaveAttribute('href', '/inbox');
    expect(screen.getByRole('link', { name: /profile/i })).toHaveAttribute('href', '/profile');
  });
});
```

- [ ] **Step 2: Run the test and watch it fail**

Run:
```bash
pnpm test tests/components/chrome/TabBar.test.tsx
```
Expected: FAIL — module not found.

- [ ] **Step 3: Implement `TabBar`**

Create `src/components/chrome/TabBar.tsx`:
```tsx
'use client';

import Link from 'next/link';
import { C } from '@/lib/tokens';

export type TabKey = 'discover' | 'trips' | 'inbox' | 'profile';

interface TabBarProps {
  active: TabKey;
}

const TABS: Array<{ key: TabKey; label: string; href: string; icon: string }> = [
  { key: 'discover', label: 'Discover', href: '/discover', icon: 'M3 11l9-9 9 9M5 10v10h14V10' },
  { key: 'trips',    label: 'Trips',    href: '/trips',    icon: 'M4 6h16v12H4zM4 10h16M9 14h2' },
  { key: 'inbox',    label: 'Inbox',    href: '/inbox',    icon: 'M21 11.5a8.38 8.38 0 0 1-9 8.5 8.38 8.38 0 0 1-9-8.5A8.5 8.5 0 0 1 12 3a8.38 8.38 0 0 1 9 8.5z' },
  { key: 'profile',  label: 'Profile',  href: '/profile',  icon: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z' },
];

export function TabBar({ active }: TabBarProps) {
  return (
    <nav
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 64,
        background: C.white,
        borderTop: `1px solid ${C.ink06}`,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingBottom: 'var(--safe-bottom)',
        zIndex: 50,
      }}
    >
      {TABS.map(t => {
        const isActive = t.key === active;
        return (
          <Link
            key={t.key}
            href={t.href}
            aria-current={isActive ? 'page' : undefined}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 4,
              padding: '6px 10px',
              color: isActive ? C.orange : C.ink50,
              textDecoration: 'none',
              fontSize: 11,
              fontWeight: 600,
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d={t.icon} />
            </svg>
            {t.label}
          </Link>
        );
      })}
    </nav>
  );
}
```

- [ ] **Step 4: Run the test and watch it pass**

Run:
```bash
pnpm test tests/components/chrome/TabBar.test.tsx
```
Expected: PASS (3 tests).

- [ ] **Step 5: Commit**

```bash
git add src/components/chrome/TabBar.tsx tests/components/chrome/TabBar.test.tsx
git commit -m "feat(chrome): TabBar (Discover · Trips · Inbox · Profile) — built but not mounted in Foundation"
```

---

## Task 13: Atoms — Buttons

**Files:**
- Create: `src/components/ui/PrimaryButton.tsx`
- Create: `src/components/ui/GhostButton.tsx`
- Create: `tests/components/ui/buttons.test.tsx`

- [ ] **Step 1: Write the failing test**

Create `tests/components/ui/buttons.test.tsx`:
```tsx
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { GhostButton } from '@/components/ui/GhostButton';

describe('PrimaryButton', () => {
  it('renders children and fires onClick', () => {
    const fn = vi.fn();
    render(<PrimaryButton onClick={fn}>Continue</PrimaryButton>);
    fireEvent.click(screen.getByRole('button', { name: 'Continue' }));
    expect(fn).toHaveBeenCalled();
  });

  it('renders an icon when given', () => {
    render(<PrimaryButton icon={<span data-testid="icon-slot" />}>Go</PrimaryButton>);
    expect(screen.getByTestId('icon-slot')).toBeInTheDocument();
  });

  it('renders a larger height when size="lg"', () => {
    render(<PrimaryButton size="lg">Big</PrimaryButton>);
    expect(screen.getByRole('button', { name: 'Big' })).toHaveStyle({ height: '60px' });
  });
});

describe('GhostButton', () => {
  it('renders children and fires onClick', () => {
    const fn = vi.fn();
    render(<GhostButton onClick={fn}>Cancel</GhostButton>);
    fireEvent.click(screen.getByRole('button', { name: 'Cancel' }));
    expect(fn).toHaveBeenCalled();
  });
});
```

- [ ] **Step 2: Run the test and watch it fail**

Run:
```bash
pnpm test tests/components/ui/buttons.test.tsx
```
Expected: FAIL — modules not found.

- [ ] **Step 3: Implement `PrimaryButton`**

Create `src/components/ui/PrimaryButton.tsx`:
```tsx
'use client';

import type { ReactNode } from 'react';
import { C } from '@/lib/tokens';

interface PrimaryButtonProps {
  children: ReactNode;
  onClick?: () => void;
  size?: 'default' | 'lg';
  icon?: ReactNode;
  disabled?: boolean;
}

export function PrimaryButton({ children, onClick, size = 'default', icon, disabled }: PrimaryButtonProps) {
  const height = size === 'lg' ? 60 : 52;
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      style={{
        width: '100%',
        height,
        borderRadius: height / 2,
        background: disabled ? C.ink12 : C.orange,
        color: C.white,
        border: 'none',
        fontWeight: 700,
        fontSize: 15,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        cursor: disabled ? 'not-allowed' : 'pointer',
      }}
    >
      {icon}
      {children}
    </button>
  );
}
```

- [ ] **Step 4: Implement `GhostButton`**

Create `src/components/ui/GhostButton.tsx`:
```tsx
'use client';

import type { ReactNode } from 'react';
import { C } from '@/lib/tokens';

interface GhostButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

export function GhostButton({ children, onClick }: GhostButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        width: '100%',
        height: 52,
        borderRadius: 26,
        background: 'transparent',
        color: C.navy,
        border: `1.5px solid ${C.ink12}`,
        fontWeight: 600,
        fontSize: 15,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  );
}
```

- [ ] **Step 5: Run the test and watch it pass**

Run:
```bash
pnpm test tests/components/ui/buttons.test.tsx
```
Expected: PASS (4 tests).

- [ ] **Step 6: Commit**

```bash
git add src/components/ui/PrimaryButton.tsx src/components/ui/GhostButton.tsx tests/components/ui/buttons.test.tsx
git commit -m "feat(ui): PrimaryButton (with size/icon) and GhostButton atoms"
```

---

## Task 14: Atoms — Input

**Files:**
- Create: `src/components/ui/Input.tsx`
- Create: `tests/components/ui/Input.test.tsx`

- [ ] **Step 1: Write the failing test**

Create `tests/components/ui/Input.test.tsx`:
```tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Input } from '@/components/ui/Input';

describe('Input', () => {
  it('renders a label when provided', () => {
    render(<Input label="Email" placeholder="you@email.com" />);
    expect(screen.getByText('Email')).toBeInTheDocument();
  });

  it('renders the placeholder on the underlying input', () => {
    render(<Input placeholder="you@email.com" />);
    expect(screen.getByPlaceholderText('you@email.com')).toBeInTheDocument();
  });

  it('renders the initial value', () => {
    render(<Input label="Email" value="hi@x.com" />);
    expect(screen.getByDisplayValue('hi@x.com')).toBeInTheDocument();
  });

  it('renders icon and right adornment slots', () => {
    render(
      <Input
        label="X"
        icon={<span data-testid="left-slot" />}
        right={<span data-testid="right-slot" />}
      />
    );
    expect(screen.getByTestId('left-slot')).toBeInTheDocument();
    expect(screen.getByTestId('right-slot')).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run the test and watch it fail**

Run:
```bash
pnpm test tests/components/ui/Input.test.tsx
```
Expected: FAIL — module not found.

- [ ] **Step 3: Implement `Input`**

Create `src/components/ui/Input.tsx`:
```tsx
'use client';

import { type ReactNode, useState } from 'react';
import { C } from '@/lib/tokens';

interface InputProps {
  label?: string;
  value?: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'tel' | 'number';
  icon?: ReactNode;
  right?: ReactNode;
  onChange?: (v: string) => void;
}

export function Input({ label, value, placeholder, type = 'text', icon, right, onChange }: InputProps) {
  const [internal, setInternal] = useState(value ?? '');
  const v = value ?? internal;

  return (
    <div>
      {label && (
        <label style={{ fontSize: 13, fontWeight: 600, color: C.ink, letterSpacing: -0.1, display: 'block', marginBottom: 8 }}>
          {label}
        </label>
      )}
      <div style={{
        height: 52,
        borderRadius: 14,
        background: C.white,
        border: `1.5px solid ${C.ink12}`,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '0 14px',
      }}>
        {icon}
        <input
          type={type}
          value={v}
          placeholder={placeholder}
          onChange={(e) => {
            setInternal(e.target.value);
            onChange?.(e.target.value);
          }}
          style={{
            flex: 1,
            border: 'none',
            outline: 'none',
            background: 'transparent',
            fontSize: 15,
            color: C.ink,
            padding: 0,
            minWidth: 0,
          }}
        />
        {right}
      </div>
    </div>
  );
}
```

- [ ] **Step 4: Run the test and watch it pass**

Run:
```bash
pnpm test tests/components/ui/Input.test.tsx
```
Expected: PASS (4 tests).

- [ ] **Step 5: Commit**

```bash
git add src/components/ui/Input.tsx tests/components/ui/Input.test.tsx
git commit -m "feat(ui): Input atom with label, icon, and right-adornment slots"
```

---

## Task 15: Atoms — Containers (Card, Badge, Avatar, VerifiedBadge)

**Files:**
- Create: `src/components/ui/Card.tsx`
- Create: `src/components/ui/Badge.tsx`
- Create: `src/components/ui/Avatar.tsx`
- Create: `src/components/ui/VerifiedBadge.tsx`
- Create: `tests/components/ui/containers.test.tsx`

- [ ] **Step 1: Write the failing test**

Create `tests/components/ui/containers.test.tsx`:
```tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Avatar } from '@/components/ui/Avatar';
import { VerifiedBadge } from '@/components/ui/VerifiedBadge';

describe('Card', () => {
  it('renders children with default padding', () => {
    render(<Card>hi</Card>);
    expect(screen.getByText('hi')).toBeInTheDocument();
  });

  it('applies custom padding when p prop is set', () => {
    const { container } = render(<Card p={20}>x</Card>);
    expect(container.firstChild).toHaveStyle({ padding: '20px' });
  });
});

describe('Badge', () => {
  it('renders kind=green with green background', () => {
    const { container } = render(<Badge kind="green">OK</Badge>);
    expect(container.firstChild).toHaveStyle({ background: 'rgb(153, 204, 51)' });
  });

  it('renders kind=red with red background', () => {
    const { container } = render(<Badge kind="red">Bad</Badge>);
    expect(container.firstChild).toHaveStyle({ background: 'rgb(229, 62, 62)' });
  });
});

describe('Avatar', () => {
  it('shows the initial from name', () => {
    render(<Avatar name="Amelia Bankole" />);
    expect(screen.getByText('A')).toBeInTheDocument();
  });

  it('shows verified badge overlay when verified=true', () => {
    render(<Avatar name="X" verified />);
    expect(screen.getByTestId('avatar-verified')).toBeInTheDocument();
  });
});

describe('VerifiedBadge', () => {
  it('renders an SVG of the given size', () => {
    const { container } = render(<VerifiedBadge size={20} />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('width', '20');
    expect(svg).toHaveAttribute('height', '20');
  });
});
```

- [ ] **Step 2: Run the test and watch it fail**

Run:
```bash
pnpm test tests/components/ui/containers.test.tsx
```
Expected: FAIL — modules not found.

- [ ] **Step 3: Implement `Card`**

Create `src/components/ui/Card.tsx`:
```tsx
import type { ReactNode, CSSProperties } from 'react';
import { C } from '@/lib/tokens';

interface CardProps {
  children: ReactNode;
  p?: number;
  style?: CSSProperties;
}

export function Card({ children, p = 16, style }: CardProps) {
  return (
    <div
      style={{
        background: C.white,
        borderRadius: 16,
        padding: p,
        border: `1px solid ${C.ink06}`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
```

- [ ] **Step 4: Implement `Badge`**

Create `src/components/ui/Badge.tsx`:
```tsx
import type { ReactNode } from 'react';
import { C } from '@/lib/tokens';

type BadgeKind = 'green' | 'orange' | 'red' | 'navy';
type BadgeSize = 'sm' | 'default';

interface BadgeProps {
  children: ReactNode;
  kind?: BadgeKind;
  size?: BadgeSize;
}

const BG: Record<BadgeKind, string> = {
  green: C.green,
  orange: C.orange,
  red: C.red,
  navy: C.navy,
};

const FG: Record<BadgeKind, string> = {
  green: C.navy,
  orange: C.white,
  red: C.white,
  navy: C.white,
};

export function Badge({ children, kind = 'navy', size = 'default' }: BadgeProps) {
  const isSm = size === 'sm';
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        background: BG[kind],
        color: FG[kind],
        borderRadius: 999,
        padding: isSm ? '2px 8px' : '4px 10px',
        fontSize: isSm ? 10 : 12,
        fontWeight: 700,
        letterSpacing: 0.2,
        textTransform: 'uppercase',
      }}
    >
      {children}
    </span>
  );
}
```

- [ ] **Step 5: Implement `VerifiedBadge` and `Avatar`**

Create `src/components/ui/VerifiedBadge.tsx`:
```tsx
import { C } from '@/lib/tokens';

interface VerifiedBadgeProps {
  size?: number;
}

export function VerifiedBadge({ size = 16 }: VerifiedBadgeProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-label="verified">
      <path
        d="M12 1l2.6 1.8 3.1-.3 1.2 2.9 2.6 1.7-.5 3 1.8 2.5-1.8 2.5.5 3-2.6 1.7-1.2 2.9-3.1-.3L12 23l-2.6-1.8-3.1.3-1.2-2.9L2.5 16.9 3 13.9 1.2 11.4 3 8.9 2.5 5.9l2.6-1.7L6.3 1.3l3.1.3L12 1z"
        fill={C.green}
      />
      <path d="M7 12l3 3 6-6" stroke={C.white} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
```

Create `src/components/ui/Avatar.tsx`:
```tsx
import { C } from '@/lib/tokens';
import { VerifiedBadge } from './VerifiedBadge';

interface AvatarProps {
  name: string;
  size?: number;
  verified?: boolean;
}

export function Avatar({ name, size = 40, verified }: AvatarProps) {
  const initial = name.trim().charAt(0).toUpperCase() || '?';
  return (
    <div style={{ position: 'relative', width: size, height: size, flexShrink: 0 }}>
      <div
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
          background: C.navy,
          color: C.white,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: size * 0.4,
          fontWeight: 700,
        }}
      >
        {initial}
      </div>
      {verified && (
        <div
          data-testid="avatar-verified"
          style={{
            position: 'absolute',
            bottom: -2,
            right: -2,
            background: C.white,
            borderRadius: '50%',
            padding: 1,
          }}
        >
          <VerifiedBadge size={size * 0.4} />
        </div>
      )}
    </div>
  );
}
```

- [ ] **Step 6: Run the test and watch it pass**

Run:
```bash
pnpm test tests/components/ui/containers.test.tsx
```
Expected: PASS (8 tests).

- [ ] **Step 7: Commit**

```bash
git add src/components/ui/Card.tsx src/components/ui/Badge.tsx src/components/ui/Avatar.tsx src/components/ui/VerifiedBadge.tsx tests/components/ui/containers.test.tsx
git commit -m "feat(ui): Card, Badge, Avatar, VerifiedBadge atoms"
```

---

## Task 16: Atoms — Visuals (Logo, Ico, ImagePh, ProgressBar, Dots)

**Files:**
- Create: `src/components/ui/Logo.tsx`
- Create: `src/components/ui/Ico.tsx`
- Create: `src/components/ui/ImagePh.tsx`
- Create: `src/components/ui/ProgressBar.tsx`
- Create: `src/components/ui/Dots.tsx`
- Create: `tests/components/ui/visuals.test.tsx`

- [ ] **Step 1: Write the failing test**

Create `tests/components/ui/visuals.test.tsx`:
```tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Logo } from '@/components/ui/Logo';
import { Ico } from '@/components/ui/Ico';
import { ImagePh } from '@/components/ui/ImagePh';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Dots } from '@/components/ui/Dots';

describe('Logo', () => {
  it('renders an SVG at the given size', () => {
    const { container } = render(<Logo size={64} />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('width', '64');
    expect(svg).toHaveAttribute('height', '64');
  });
  it('includes the wordmark when withWord=true', () => {
    render(<Logo withWord />);
    expect(screen.getByText(/homely/i)).toBeInTheDocument();
  });
});

describe('Ico', () => {
  it.each(['mail', 'lock', 'eye', 'phone', 'shield', 'info', 'check', 'check-c', 'x', 'x-c', 'alert', 'camera', 'upload', 'doc', 'card', 'globe', 'building', 'wifi', 'star', 'google', 'apple', 'msg'])('renders icon: %s', (name) => {
    const { container } = render(<Ico name={name as never} size={16} />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });
});

describe('ImagePh', () => {
  it('renders with width, height, and label', () => {
    render(<ImagePh w={200} h={100} label="hero" />);
    expect(screen.getByText('hero')).toBeInTheDocument();
  });
});

describe('ProgressBar', () => {
  it('renders a filled bar proportional to value/total', () => {
    render(<ProgressBar value={3} total={4} />);
    const fill = screen.getByTestId('progress-fill');
    expect(fill).toHaveStyle({ width: '75%' });
  });
});

describe('Dots', () => {
  it('renders the requested total dots', () => {
    render(<Dots active={1} total={3} />);
    expect(screen.getAllByTestId('dot')).toHaveLength(3);
  });
});
```

- [ ] **Step 2: Run the test and watch it fail**

Run:
```bash
pnpm test tests/components/ui/visuals.test.tsx
```
Expected: FAIL — modules not found.

- [ ] **Step 3: Implement `Logo`**

Create `src/components/ui/Logo.tsx`:
```tsx
import { C } from '@/lib/tokens';

interface LogoProps {
  size?: number;
  color?: string;
  withWord?: boolean;
}

export function Logo({ size = 32, color = C.navy, withWord = false }: LogoProps) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
      <svg width={size} height={size} viewBox="0 0 96 96" aria-hidden>
        <path d="M48 8L8 44v44h28V60h24v28h28V44L48 8z" fill={color} />
        <circle cx="48" cy="44" r="6" fill={C.orange} />
      </svg>
      {withWord && (
        <span style={{ fontSize: size * 0.55, fontWeight: 800, color, letterSpacing: -0.8 }}>
          homely
        </span>
      )}
    </div>
  );
}
```

- [ ] **Step 4: Implement `Ico`**

Create `src/components/ui/Ico.tsx`:
```tsx
export type IconName =
  | 'mail' | 'lock' | 'eye' | 'phone' | 'shield' | 'info'
  | 'check' | 'check-c' | 'x' | 'x-c' | 'alert'
  | 'camera' | 'upload' | 'doc' | 'card' | 'globe' | 'building'
  | 'wifi' | 'star' | 'google' | 'apple' | 'msg';

interface IcoProps {
  name: IconName;
  size?: number;
  color?: string;
}

const PATHS: Record<IconName, string> = {
  'mail':     'M4 6h16v12H4zM4 6l8 7 8-7',
  'lock':     'M5 11h14v10H5zM8 11V8a4 4 0 0 1 8 0v3',
  'eye':      'M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z',
  'phone':    'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z',
  'shield':   'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
  'info':     'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM12 8v.01M11 12h1v5h1',
  'check':    'M5 12l5 5L20 7',
  'check-c':  'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM8 12l3 3 5-5',
  'x':        'M6 6l12 12M6 18L18 6',
  'x-c':      'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM9 9l6 6M9 15l6-6',
  'alert':    'M12 2L2 22h20L12 2zM12 9v5M12 17v.01',
  'camera':   'M3 7h4l2-3h6l2 3h4v13H3zM12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
  'upload':   'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12',
  'doc':      'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM14 2v6h6',
  'card':     'M2 7h20v10H2zM2 11h20',
  'globe':    'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20',
  'building': 'M3 21h18M5 21V7l7-4 7 4v14M9 9h2M9 13h2M9 17h2M13 9h2M13 13h2M13 17h2',
  'wifi':     'M5 13a10 10 0 0 1 14 0M8.5 16.5a5 5 0 0 1 7 0M2 8.82a15 15 0 0 1 20 0M12 20h.01',
  'star':     'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
  'google':   'M21.35 11.1H12v3.8h5.35a5 5 0 0 1-2.17 3.27v2.7h3.51c2.06-1.9 3.25-4.7 3.25-8 0-.6-.06-1.2-.16-1.77zM12 22c2.97 0 5.46-.98 7.28-2.66l-3.51-2.7c-.97.65-2.21 1.04-3.77 1.04a6 6 0 0 1-5.65-4.16H2.7v2.6A10 10 0 0 0 12 22zM6.35 13.52a6 6 0 0 1 0-3.04V7.88H2.7a10 10 0 0 0 0 8.24l3.65-2.6zM12 5.96c1.62 0 3.07.56 4.21 1.65l3.12-3.12A10 10 0 0 0 12 2a10 10 0 0 0-9.3 5.88l3.65 2.6A6 6 0 0 1 12 5.96z',
  'apple':    'M16.5 12.5c0-2.6 2.1-3.85 2.2-3.9-1.2-1.75-3.05-2-3.7-2-1.6-.15-3.1.95-3.9.95-.85 0-2.05-.95-3.4-.95-1.7.05-3.35 1.05-4.25 2.6-1.85 3.2-.45 7.9 1.3 10.5.9 1.25 1.95 2.65 3.3 2.6 1.35-.05 1.85-.85 3.45-.85s2.1.85 3.45.8c1.45-.05 2.35-1.3 3.2-2.55.7-.95 1.25-2.05 1.65-3.2-1.7-.6-2.8-2.6-2.3-4zM13.95 5.05c.75-.9 1.25-2.15 1.1-3.4-1.05.05-2.35.7-3.1 1.6-.7.8-1.3 2.05-1.15 3.3 1.2.1 2.4-.6 3.15-1.5z',
  'msg':      'M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z',
};

export function Ico({ name, size = 16, color = '#000' }: IcoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d={PATHS[name]} />
    </svg>
  );
}
```

- [ ] **Step 5: Implement `ImagePh`**

Create `src/components/ui/ImagePh.tsx`:
```tsx
import { C, hexA } from '@/lib/tokens';

interface ImagePhProps {
  w: number | string;
  h: number | string;
  label?: string;
  radius?: number;
  tone?: 'light' | 'navy' | 'dark';
}

export function ImagePh({ w, h, label, radius = 12, tone = 'light' }: ImagePhProps) {
  const bg =
    tone === 'navy' ? hexA(C.navy, 0.7) :
    tone === 'dark' ? '#222' :
    hexA(C.navy, 0.08);
  const fg = tone === 'light' ? C.ink50 : 'rgba(255,255,255,0.7)';
  return (
    <div style={{
      width: w,
      height: h,
      background: bg,
      borderRadius: radius,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 11,
      color: fg,
      fontWeight: 600,
      overflow: 'hidden',
    }}>
      {label}
    </div>
  );
}
```

- [ ] **Step 6: Implement `ProgressBar`**

Create `src/components/ui/ProgressBar.tsx`:
```tsx
import { C } from '@/lib/tokens';

interface ProgressBarProps {
  value: number;
  total: number;
  dark?: boolean;
}

export function ProgressBar({ value, total, dark = false }: ProgressBarProps) {
  const pct = total > 0 ? (value / total) * 100 : 0;
  return (
    <div style={{ padding: '0 16px 8px' }}>
      <div style={{
        height: 4,
        borderRadius: 2,
        background: dark ? 'rgba(255,255,255,0.15)' : C.ink06,
        overflow: 'hidden',
      }}>
        <div
          data-testid="progress-fill"
          style={{ width: `${pct}%`, height: '100%', background: C.orange, borderRadius: 2 }}
        />
      </div>
    </div>
  );
}
```

- [ ] **Step 7: Implement `Dots`**

Create `src/components/ui/Dots.tsx`:
```tsx
import { C } from '@/lib/tokens';

interface DotsProps {
  active: number;
  total?: number;
}

export function Dots({ active, total = 3 }: DotsProps) {
  return (
    <div style={{ display: 'flex', gap: 6, justifyContent: 'center' }}>
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          data-testid="dot"
          style={{
            width: i === active ? 24 : 8,
            height: 8,
            borderRadius: 4,
            background: i === active ? C.orange : C.ink12,
            transition: 'all 0.2s',
          }}
        />
      ))}
    </div>
  );
}
```

- [ ] **Step 8: Run the test and watch it pass**

Run:
```bash
pnpm test tests/components/ui/visuals.test.tsx
```
Expected: PASS (28 tests — 1 Logo size, 1 Logo word, 22 Ico names, 1 ImagePh, 1 ProgressBar, 1 Dots).

- [ ] **Step 9: Run the full test suite to confirm nothing regressed**

Run:
```bash
pnpm test
```
Expected: all suites pass.

- [ ] **Step 10: Commit**

```bash
git add src/components/ui/Logo.tsx src/components/ui/Ico.tsx src/components/ui/ImagePh.tsx src/components/ui/ProgressBar.tsx src/components/ui/Dots.tsx tests/components/ui/visuals.test.tsx
git commit -m "feat(ui): Logo, Ico, ImagePh, ProgressBar, Dots visual atoms"
```

---

## Task 17: S01 Splash Port + Mount at `/`

**Files:**
- Create: `src/screens/onboarding/S01_Splash.jsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Port S01 Splash verbatim from mockup**

Create `src/screens/onboarding/S01_Splash.jsx`:
```jsx
// Mockup: S01 Splash (home-two/screens-onboarding.jsx)
'use client';

import { Screen } from '@/components/chrome/Screen';
import { Logo } from '@/components/ui/Logo';
import { C, hexA } from '@/lib/tokens';

export default function S01_Splash() {
  return (
    <Screen bg={C.navy} dark statusBarDark>
      <div style={{ position: 'absolute', inset: 0, display: 'flex',
        flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 24 }}>
        <div style={{ position: 'relative', width: 96, height: 96 }}>
          <div style={{ position: 'absolute', inset: -16, borderRadius: 64,
            background: `radial-gradient(circle, ${hexA(C.orange, 0.25)} 0%, transparent 70%)` }} />
          <Logo size={96} color={C.white} withWord={false} />
        </div>
        <div style={{ fontSize: 36, fontWeight: 800, color: C.white, letterSpacing: -1.2 }}>homely</div>
        <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', letterSpacing: 2, textTransform: 'uppercase' }}>find your stay</div>
      </div>
      <div style={{ position: 'absolute', bottom: 60, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 6 }}>
        {[0, 1, 2].map(i => (
          <div key={i} style={{
            width: 6, height: 6, borderRadius: 3,
            background: i === 0 ? C.orange : 'rgba(255,255,255,0.2)'
          }} />
        ))}
      </div>
    </Screen>
  );
}
```

- [ ] **Step 2: Mount Splash at `/`**

Replace contents of `app/page.tsx`:
```tsx
import S01_Splash from '@/screens/onboarding/S01_Splash';

export default function Page() {
  return <S01_Splash />;
}
```

- [ ] **Step 3: Verify dev server renders the Splash**

Run:
```bash
pnpm dev
```

In Chrome DevTools, open device toolbar → set to iPhone 14 (390×844). Navigate to `http://localhost:3000`. Expected:
- Navy background fills the viewport
- Homely logo centered, white, with an orange radial glow behind it
- "homely" wordmark below in large white 800-weight text
- "FIND YOUR STAY" small caps subhead
- Three dots near the bottom (first orange, others muted)
- StatusBar visible at top (browser tab mode)
- HomeIndicator visible at bottom

Repeat with iPhone SE (375×667) and Pixel 7 Pro (412×915) presets. Expected: no horizontal scrollbars, no pillar bars, content centered.

Stop the dev server.

- [ ] **Step 4: Run all tests and typecheck**

Run:
```bash
pnpm test && pnpm typecheck
```
Expected: all tests pass, zero TS errors.

- [ ] **Step 5: Commit**

```bash
git add src/screens/onboarding/S01_Splash.jsx app/page.tsx
git commit -m "feat(screens): port S01 Splash verbatim from home-two; mount at /"
```

---

## Task 18: PWA Manifest

**Files:**
- Create: `app/manifest.ts`

- [ ] **Step 1: Write `app/manifest.ts`**

Create `app/manifest.ts`:
```ts
import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Homely',
    short_name: 'Homely',
    description: 'Find your stay',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#FEF3EB',
    theme_color: '#000066',
    icons: [
      { src: '/icons/icon-192.png',         sizes: '192x192', type: 'image/png' },
      { src: '/icons/icon-512.png',         sizes: '512x512', type: 'image/png' },
      { src: '/icons/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
}
```

- [ ] **Step 2: Verify manifest is served**

Run:
```bash
pnpm dev
```
Navigate to `http://localhost:3000/manifest.webmanifest`. Expected: JSON with name "Homely", display "standalone", correct icon paths. Stop the server.

- [ ] **Step 3: Commit**

```bash
git add app/manifest.ts
git commit -m "feat(pwa): add Next.js manifest.ts (Homely, standalone, portrait, navy/pale)"
```

---

## Task 19: PWA Icons + iOS Splash Images

**Files:**
- Create: `app/icon.tsx` (dynamic 192 icon generated from Logo)
- Create: `app/apple-icon.tsx` (180 iOS icon)
- Create: `public/icons/icon-192.png` (static fallback referenced by manifest)
- Create: `public/icons/icon-512.png`
- Create: `public/icons/icon-maskable-512.png`
- Create: `public/splash/iphone-se.png` (750×1334, iPhone SE/8 at 2×)
- Create: `public/splash/iphone-xr.png` (828×1792, iPhone XR/11 at 2×)
- Create: `public/splash/iphone-14.png` (1170×2532, iPhone 14/15 at 3×)
- Create: `public/splash/iphone-14-plus.png` (1284×2778, iPhone 14+/15+ at 3×)
- Create: `public/splash/iphone-14-pro-max.png` (1290×2796, iPhone 14 Pro Max/15 Pro Max at 3×)
- Modify: `app/layout.tsx` (add `<link rel="apple-touch-startup-image">` tags)

- [ ] **Step 1: Write `app/icon.tsx` (dynamic favicon)**

Create `app/icon.tsx`:
```tsx
import { ImageResponse } from 'next/og';

export const size = { width: 192, height: 192 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#000066',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontSize: 120,
          fontWeight: 800,
          letterSpacing: -8,
        }}
      >
        h
      </div>
    ),
    { ...size }
  );
}
```

- [ ] **Step 2: Write `app/apple-icon.tsx`**

Create `app/apple-icon.tsx`:
```tsx
import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#000066',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontSize: 110,
          fontWeight: 800,
          letterSpacing: -8,
        }}
      >
        h
      </div>
    ),
    { ...size }
  );
}
```

- [ ] **Step 3: Generate static PNG icons for the manifest**

Run from the project root (uses Node's built-in ability to render via the same `next/og` ImageResponse — but for static manifest icons, we generate once via a one-shot script):

```bash
mkdir -p public/icons
```

Create a one-shot generator script `scripts/gen-icons.mjs`:
```js
import { mkdir } from 'node:fs/promises';
import sharp from 'sharp';

const iconSvg = (size) => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" fill="#000066"/>
  <text x="50%" y="55%" text-anchor="middle" font-family="Inter, sans-serif" font-weight="800" font-size="${size * 0.62}" fill="#fff" letter-spacing="-${size * 0.04}">h</text>
</svg>`;

const maskableSvg = (size) => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" fill="#000066"/>
  <text x="50%" y="55%" text-anchor="middle" font-family="Inter, sans-serif" font-weight="800" font-size="${size * 0.4}" fill="#fff">h</text>
</svg>`;

const splashSvg = (w, h) => `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <rect width="${w}" height="${h}" fill="#000066"/>
  <g transform="translate(${w/2}, ${h/2 - h*0.05})">
    <circle r="${Math.min(w,h) * 0.18}" fill="rgba(244, 133, 54, 0.25)"/>
  </g>
  <text x="50%" y="50%" text-anchor="middle" font-family="Inter, sans-serif" font-weight="800" font-size="${w * 0.18}" fill="#fff" letter-spacing="-8">h</text>
  <text x="50%" y="${h*0.62}" text-anchor="middle" font-family="Inter, sans-serif" font-weight="800" font-size="${w * 0.085}" fill="#fff" letter-spacing="-2">homely</text>
</svg>`;

await mkdir('public/icons', { recursive: true });
await mkdir('public/splash', { recursive: true });

// PWA icons
await sharp(Buffer.from(iconSvg(192))).png().toFile('public/icons/icon-192.png');
await sharp(Buffer.from(iconSvg(512))).png().toFile('public/icons/icon-512.png');
await sharp(Buffer.from(maskableSvg(512))).png().toFile('public/icons/icon-maskable-512.png');

// iOS splash screens (portrait)
const splashes = [
  ['iphone-se',          750, 1334],
  ['iphone-xr',          828, 1792],
  ['iphone-14',         1170, 2532],
  ['iphone-14-plus',    1284, 2778],
  ['iphone-14-pro-max', 1290, 2796],
];
for (const [name, w, h] of splashes) {
  await sharp(Buffer.from(splashSvg(w, h))).png().toFile(`public/splash/${name}.png`);
}

console.log('Generated 3 icons + 5 splash images.');
```

Install sharp as a dev dep and run:
```bash
pnpm add -D sharp
node scripts/gen-icons.mjs
```
Expected: three PNGs in `public/icons/`, five PNGs in `public/splash/`.

- [ ] **Step 4: Add `apple-touch-startup-image` link tags to root layout**

Edit `app/layout.tsx`. Inside the `<html>` element, add a `<head>` element with the splash links (Next.js merges this with metadata-emitted head tags). Replace the `return` block of the `RootLayout` function with:

```tsx
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="apple-touch-startup-image" href="/splash/iphone-se.png"
              media="screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/splash/iphone-xr.png"
              media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/splash/iphone-14.png"
              media="screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/splash/iphone-14-plus.png"
              media="screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/splash/iphone-14-pro-max.png"
              media="screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
      </head>
      <body>
        <DesktopGate ssrIsDesktop={ssrIsDesktop}>{children}</DesktopGate>
      </body>
    </html>
  );
```

- [ ] **Step 5: Verify icons and splash images load**

Run:
```bash
pnpm dev
```
- Navigate to `http://localhost:3000/icons/icon-192.png` — should return the PNG.
- Navigate to `http://localhost:3000/icon` — should return the dynamic Next.js icon.
- Navigate to `http://localhost:3000/splash/iphone-14.png` — should return the splash PNG.
- View page source and confirm 5 `<link rel="apple-touch-startup-image">` tags are present.

Stop the server.

- [ ] **Step 6: Commit**

```bash
git add app/icon.tsx app/apple-icon.tsx app/layout.tsx public/icons public/splash scripts/gen-icons.mjs package.json pnpm-lock.yaml
git commit -m "feat(pwa): app icons, iOS splash images (5 sizes), and apple-touch-startup-image links"
```

---

## Task 20: Service Worker via Serwist

**Files:**
- Modify: `next.config.ts`
- Create: `app/sw.ts`

- [ ] **Step 1: Install Serwist**

Run:
```bash
pnpm add @serwist/next serwist
```

- [ ] **Step 2: Write the service worker entry**

Create `app/sw.ts`:
```ts
import { defaultCache } from '@serwist/next/worker';
import type { PrecacheEntry, SerwistGlobalConfig } from 'serwist';
import { Serwist } from 'serwist';

declare global {
  interface WorkerGlobalScope extends SerwistGlobalConfig {
    __SW_MANIFEST: (PrecacheEntry | string)[] | undefined;
  }
}

declare const self: ServiceWorkerGlobalScope;

const serwist = new Serwist({
  precacheEntries: self.__SW_MANIFEST,
  skipWaiting: true,
  clientsClaim: true,
  navigationPreload: true,
  runtimeCaching: defaultCache,
  fallbacks: {
    entries: [
      {
        url: '/offline',
        matcher: ({ request }) => request.destination === 'document',
      },
    ],
  },
});

serwist.addEventListeners();
```

- [ ] **Step 3: Update `next.config.ts` to wrap with Serwist**

Replace contents of `next.config.ts`:
```ts
import type { NextConfig } from 'next';
import withSerwistInit from '@serwist/next';

const withSerwist = withSerwistInit({
  swSrc: 'app/sw.ts',
  swDest: 'public/sw.js',
  cacheOnNavigation: true,
  reloadOnOnline: true,
  disable: process.env.NODE_ENV === 'development',
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default withSerwist(nextConfig);
```

- [ ] **Step 4: Build and verify the SW is generated**

Run:
```bash
pnpm build
```
Expected: build succeeds. Verify `public/sw.js` and `public/swe-worker-*.js` were generated.

Run:
```bash
pnpm start
```
Open `http://localhost:3000`. In Chrome DevTools → Application → Service Workers, expect a registered SW at scope `/`.

Stop the server.

- [ ] **Step 5: Commit**

```bash
git add next.config.ts app/sw.ts package.json pnpm-lock.yaml
git commit -m "feat(pwa): wire @serwist/next service worker with offline fallback"
```

---

## Task 21: Offline Fallback Page

**Files:**
- Create: `app/offline/page.tsx`

- [ ] **Step 1: Write the offline page**

Create `app/offline/page.tsx`:
```tsx
'use client';

import { Screen } from '@/components/chrome/Screen';
import { Card } from '@/components/ui/Card';
import { GhostButton } from '@/components/ui/GhostButton';
import { C } from '@/lib/tokens';

export default function OfflinePage() {
  return (
    <Screen>
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '32px 24px',
        textAlign: 'center',
        gap: 20,
      }}>
        <div style={{
          width: 96, height: 96, borderRadius: 48,
          background: C.pale,
          border: `1px solid ${C.ink06}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 44,
        }}>
          📡
        </div>
        <div>
          <h1 style={{ margin: 0, fontSize: 24, fontWeight: 800, color: C.navy, letterSpacing: -0.6 }}>You're offline</h1>
          <p style={{ margin: '12px 0 0', fontSize: 14, color: C.ink70, lineHeight: 1.5 }}>
            Check your connection and try again.
          </p>
        </div>
        <Card p={14} style={{ textAlign: 'left', width: '100%', maxWidth: 320 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: C.ink50, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 6 }}>
            Tip
          </div>
          <div style={{ fontSize: 13, color: C.ink70, lineHeight: 1.5 }}>
            Already-visited screens will still work — just navigate away and back.
          </div>
        </Card>
        <div style={{ width: '100%', maxWidth: 320 }}>
          <GhostButton onClick={() => location.reload()}>Try again</GhostButton>
        </div>
      </div>
    </Screen>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/offline/page.tsx
git commit -m "feat(pwa): /offline fallback page using Screen + Card + GhostButton"
```

---

## Task 22: Dev Screen Index

**Files:**
- Create: `app/_dev/page.tsx`

- [ ] **Step 1: Write the dev index**

Create `app/_dev/page.tsx`:
```tsx
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { Card } from '@/components/ui/Card';
import { C } from '@/lib/tokens';

interface ScreenEntry {
  s: string;
  name: string;
  href: string;
}

const SCREENS: ScreenEntry[] = [
  { s: 'S01', name: 'Splash', href: '/' },
];

export default function DevIndex() {
  if (process.env.NODE_ENV === 'production') notFound();

  return (
    <Screen>
      <div style={{ padding: '16px 24px 40px' }}>
        <h1 style={{ fontSize: 24, fontWeight: 800, color: C.navy, letterSpacing: -0.6, margin: '0 0 4px' }}>
          /_dev — Screen Index
        </h1>
        <p style={{ fontSize: 13, color: C.ink70, margin: '0 0 20px' }}>
          Foundation seeds this with S01. Each phase appends new screens.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {SCREENS.map(s => (
            <Link key={s.s} href={s.href} style={{ textDecoration: 'none' }}>
              <Card p={14}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: C.ink50, letterSpacing: 0.5 }}>{s.s}</div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: C.navy, marginTop: 2 }}>{s.name}</div>
                  </div>
                  <div style={{ fontSize: 12, color: C.orange, fontWeight: 600, fontFamily: 'var(--font-mono)' }}>
                    {s.href}
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </Screen>
  );
}
```

- [ ] **Step 2: Verify**

Run `pnpm dev`, navigate to `http://localhost:3000/_dev`. Expected: list with one entry (S01 Splash) linking to `/`. Run `pnpm build && pnpm start`, navigate to `http://localhost:3000/_dev` — expect 404 (production-hidden). Stop the server.

- [ ] **Step 3: Commit**

```bash
git add app/_dev/page.tsx
git commit -m "feat(dev): /_dev screen index, NODE_ENV-gated; seeded with S01"
```

---

## Task 23: Routing Conventions Doc

**Files:**
- Create: `docs/superpowers/specs/routing-conventions.md`

- [ ] **Step 1: Write the conventions doc**

Create `docs/superpowers/specs/routing-conventions.md`:
```markdown
# Homely — Routing Conventions

> Referenced by every phase spec (Phases 1–5). Defined in the Foundation spec, Section 9.

## Rules

1. **Phase = route group.** `(onboarding)`, `(kyc)`, `(guest)`, `(owner)`, `(manager)`. Each owns a `layout.tsx` for its shared chrome — e.g. `(guest)/layout.tsx` mounts `TabBar`, `(owner)/layout.tsx` mounts an owner top bar.

2. **One mockup = one page file**, named semantically (not by S##). The S## lives in a comment header inside the page file:
   ```
   // Mockup: S07 Sign In
   ```

3. **Wizards collapse to dynamic `[step]` routes.**
   - KYC 4 steps → `(kyc)/verify/[step]/page.tsx`
   - Listing 9 steps → `(owner)/listings/new/[step]/page.tsx`

   Step numbers map to S## via the file comment header and the per-phase mapping appendix.

4. **Multi-part screens collapse to one scrollable page.** S30/S31/S32 (property detail top/middle/bottom) become `(guest)/property/[id]/page.tsx`. The split exists only for canvas readability.

5. **Modal/sheet screens are NOT routes.** S27 Filter, S47 Cancel, S76 Deactivate — these are React state on their parent route: `<FilterSheet open={...} />`. No URL change.

6. **`/` always renders S01 Splash.** From `/`, splash eventually redirects to `/welcome` (no session) or `/discover` (session + KYC verified). Foundation only ships the static splash; redirect logic is Phase 1's concern.

7. **Each phase spec MUST include an S## ↔ route appendix table.**

## Anti-patterns

- ❌ `/screens/s07` per-S## routes — canvas numbering is build-time scaffolding, not app information architecture.
- ❌ Putting tab-bar JSX inside each screen — it lives once in `(guest)/layout.tsx`.
- ❌ Naming page directories by S## — use semantic names like `welcome`, `sign-in`, `discover`.

## Dev-only screen index

`app/_dev/page.tsx` lists every implemented screen with deep links. Hidden in production via `process.env.NODE_ENV` check. Each phase appends its screens to the `SCREENS` array in that file.
```

- [ ] **Step 2: Commit**

```bash
git add docs/superpowers/specs/routing-conventions.md
git commit -m "docs: routing conventions referenced by every phase spec"
```

---

## Task 24: Final Verification Pass

This task runs the Section 11 verification checklist from the spec. No code changes — just confirmation. Each step's expected outcome is from the spec.

- [ ] **Step 1: `pnpm dev` runs clean**

Run:
```bash
pnpm dev
```
Expected: dev server starts. Open `http://localhost:3000` in Chrome with DevTools open. No TS errors, no console errors, no hydration warnings in the console. Stop the server.

- [ ] **Step 2: `/` renders S01 Splash on Chrome desktop with window <500px wide**

Run `pnpm dev`. Resize Chrome window to <500px wide. Visit `/`. Expected: S01 Splash renders (navy bg, logo, wordmark, dots).

- [ ] **Step 3: `/` shows `<DesktopBlock />` on Chrome desktop with window ≥500px wide**

In the same dev session, resize the window to ≥500px. Visit `/`. Expected: "Homely is mobile-first" block renders.

- [ ] **Step 4: `/` renders S01 Splash on phone widths**

In Chrome DevTools, open the device toolbar. Test the following presets:
- iPhone SE (375×667) — expect S01 Splash, no horizontal scroll, no pillar bars
- iPhone 14 (390×844) — expect S01 Splash, content fills viewport
- Pixel 7 Pro (412×915) — expect S01 Splash, no pillar bars

Stop the dev server.

- [ ] **Step 5: `pnpm build` succeeds with zero warnings**

Run:
```bash
pnpm build
```
Expected: build completes. No warnings beyond the standard Next.js info output. If any unexpected warning appears (e.g. about hooks, suspense, hydration), investigate and fix before proceeding.

- [ ] **Step 6: Lighthouse PWA audit passes on the built app**

Run:
```bash
pnpm start
```
Open `http://localhost:3000` in Chrome. Run Lighthouse (DevTools → Lighthouse → Mobile + PWA categories). Expected:
- Installable ✓
- PWA Optimized ✓
- Valid web app manifest ✓
- Service worker registers ✓

Stop the server.

- [ ] **Step 7: Install to home screen and verify standalone launch**

Run `pnpm start`. From the built/served app:
- **iOS Safari** (real device or simulator): Visit `http://<local-IP>:3000`. Use "Add to Home Screen". Tap the home-screen icon. Expected: app opens in standalone mode (no Safari chrome). S01 Splash renders. Fake StatusBar/HomeIndicator are HIDDEN (real iOS draws its own).
- **Android Chrome (DevTools "Add to Home Screen" emulation is acceptable for Foundation)**: In Chrome DevTools, Application → Manifest → "Add to home screen". Expected: emulated install succeeds; no errors.

Stop the server.

- [ ] **Step 8: Kill network after install — shell still renders**

Install the PWA (iOS or via DevTools). With the PWA open and on `/`:
- Stop the local server, OR set Chrome DevTools → Network → Offline.
- Reload the app.

Expected: shell still renders (either S01 Splash from cache, or the `/offline` page if Splash isn't cached yet).

- [ ] **Step 9: `/_dev` lists S01 with a working deep link**

Run `pnpm dev`. Navigate to `http://localhost:3000/_dev`. Expected: a card showing "S01 — Splash" linking to `/`. Click the card. Expected: lands on S01 Splash.

Stop the server.

- [ ] **Step 10: Foundation Done**

If steps 1–9 all passed: Foundation is complete. Tag the commit and announce.

Run:
```bash
git tag foundation-v0.1.0
git log --oneline | head -30
```

Foundation is ready. Phase 1 (Onboarding & Auth) can now be brainstormed → planned → implemented.

---

## Done

All 24 tasks complete. The substrate, primitives, PWA setup, and S01 Splash smoke screen are in place. Each phase spec from here on consumes Foundation rather than rebuilding it.
