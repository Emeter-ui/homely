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
      width: '100%',
      height: '100%',
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
        paddingBottom: padBottom,
        WebkitOverflowScrolling: 'touch',
      }}>
        {children}
      </div>
      {!isStandalone && <HomeIndicator dark={dark} />}
    </div>
  );
}
