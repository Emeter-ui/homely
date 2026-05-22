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
