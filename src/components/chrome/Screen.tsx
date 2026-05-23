'use client';

import type { ReactNode, CSSProperties } from 'react';
import { C, F } from '@/lib/tokens';

interface ScreenProps {
  children: ReactNode;
  bg?: string;
  dark?: boolean;
  padBottom?: number;
  scroll?: boolean;
  style?: CSSProperties;
}

export function Screen({
  children,
  bg = C.pale,
  dark = false,
  padBottom = 0,
  scroll = true,
  style,
}: ScreenProps) {
  const fixedHeight = !scroll;
  return (
    <div style={{
      width: '100%',
      ...(fixedHeight
        ? { height: '100dvh', overflow: 'hidden' }
        : { minHeight: '100dvh' }),
      position: 'relative',
      background: bg,
      fontFamily: F.ui,
      color: dark ? C.white : C.ink,
      display: 'flex',
      flexDirection: 'column',
      paddingTop: 'var(--safe-top)',
      paddingBottom: `calc(var(--safe-bottom) + ${padBottom}px)`,
      WebkitFontSmoothing: 'antialiased',
      ...style,
    }}>
      {children}
    </div>
  );
}
