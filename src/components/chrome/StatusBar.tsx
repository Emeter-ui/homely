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
    if (time) return;
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
