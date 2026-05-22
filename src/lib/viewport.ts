'use client';

export { isDesktopUA, MOBILE_MAX_WIDTH } from './viewport.server';

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

