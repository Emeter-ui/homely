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
