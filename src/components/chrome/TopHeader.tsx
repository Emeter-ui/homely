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
