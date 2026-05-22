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
