'use client';

import { useState } from 'react';
import { C, hexA } from '@/lib/tokens';

interface ImagePhProps {
  w: number | string;
  h: number | string;
  label?: string;
  radius?: number;
  tone?: 'light' | 'navy' | 'dark';
  src?: string;
  alt?: string;
}

export function ImagePh({ w, h, label, radius = 12, tone = 'light', src, alt }: ImagePhProps) {
  const [failed, setFailed] = useState(false);
  const showImage = src && !failed;

  const bg =
    tone === 'navy' ? hexA(C.navy, 0.7) :
    tone === 'dark' ? '#222' :
    hexA(C.navy, 0.08);
  const fg = tone === 'light' ? C.ink50 : 'rgba(255,255,255,0.7)';

  if (showImage) {
    return (
      <img
        src={src}
        alt={alt ?? label ?? ''}
        onError={() => setFailed(true)}
        style={{
          width: typeof w === 'number' ? `${w}px` : w,
          height: typeof h === 'number' ? `${h}px` : h,
          borderRadius: radius,
          objectFit: 'cover',
          display: 'block',
        }}
      />
    );
  }

  return (
    <div style={{
      width: w,
      height: h,
      background: bg,
      borderRadius: radius,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 11,
      color: fg,
      fontWeight: 600,
      overflow: 'hidden',
    }}>
      {label}
    </div>
  );
}
