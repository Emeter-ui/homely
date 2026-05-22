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
