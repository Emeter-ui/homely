import { C } from '@/lib/tokens';
import { VerifiedBadge } from './VerifiedBadge';

interface AvatarProps {
  name: string;
  size?: number;
  verified?: boolean;
}

export function Avatar({ name, size = 40, verified }: AvatarProps) {
  const initial = name.trim().charAt(0).toUpperCase() || '?';
  return (
    <div style={{ position: 'relative', width: size, height: size, flexShrink: 0 }}>
      <div
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
          background: C.navy,
          color: C.white,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: size * 0.4,
          fontWeight: 700,
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
