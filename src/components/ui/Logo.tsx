import { C } from '@/lib/tokens';

interface LogoProps {
  size?: number;
  color?: string;
  withWord?: boolean;
}

export function Logo({ size = 32, color = C.navy, withWord = false }: LogoProps) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
      <svg width={size} height={size} viewBox="0 0 96 96" aria-hidden>
        <path d="M48 8L8 44v44h28V60h24v28h28V44L48 8z" fill={color} />
        <circle cx="48" cy="44" r="6" fill={C.orange} />
      </svg>
      {withWord && (
        <span style={{ fontSize: size * 0.55, fontWeight: 800, color, letterSpacing: -0.8 }}>
          homely
        </span>
      )}
    </div>
  );
}
