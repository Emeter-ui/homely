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
