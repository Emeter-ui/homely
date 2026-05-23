import { C } from '@/lib/tokens';
import { VerifiedBadge } from './VerifiedBadge';

interface AvatarProps {
  name: string;
  size?: number;
  verified?: boolean;
  bg?: string;
  color?: string;
  ring?: string;
}

export function Avatar({ name, size = 40, verified, bg = C.orange, color = C.white, ring }: AvatarProps) {
  const initial = name.trim().charAt(0).toUpperCase() || '?';
  return (
    <div style={{ position: 'relative', width: size, height: size, flexShrink: 0 }}>
      <div
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
          background: bg,
          color,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: size * 0.42,
          fontWeight: 700,
          letterSpacing: -0.3,
          boxShadow: ring ? `0 0 0 2px ${ring}` : undefined,
        }}
      >
        {initial}
      </div>
      {verified && (
        <div
          data-testid="avatar-verified"
          style={{
            position: 'absolute',
            bottom: -2,
            right: -2,
            background: C.white,
            borderRadius: '50%',
            padding: 1,
          }}
        >
          <VerifiedBadge size={size * 0.4} />
        </div>
      )}
    </div>
  );
}
