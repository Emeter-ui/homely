import { ImageResponse } from 'next/og';

export const size = { width: 192, height: 192 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#000066',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontSize: 120,
          fontWeight: 800,
          letterSpacing: -8,
        }}
      >
        h
      </div>
    ),
    { ...size }
  );
}
