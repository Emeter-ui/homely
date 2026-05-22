import { C } from '@/lib/tokens';

interface VerifiedBadgeProps {
  size?: number;
}

export function VerifiedBadge({ size = 16 }: VerifiedBadgeProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-label="verified">
      <path
        d="M12 1l2.6 1.8 3.1-.3 1.2 2.9 2.6 1.7-.5 3 1.8 2.5-1.8 2.5.5 3-2.6 1.7-1.2 2.9-3.1-.3L12 23l-2.6-1.8-3.1.3-1.2-2.9L2.5 16.9 3 13.9 1.2 11.4 3 8.9 2.5 5.9l2.6-1.7L6.3 1.3l3.1.3L12 1z"
        fill={C.green}
      />
      <path d="M7 12l3 3 6-6" stroke={C.white} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
