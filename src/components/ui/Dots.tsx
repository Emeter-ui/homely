import { C } from '@/lib/tokens';

interface DotsProps {
  active: number;
  total?: number;
}

export function Dots({ active, total = 3 }: DotsProps) {
  return (
    <div style={{ display: 'flex', gap: 6, justifyContent: 'center' }}>
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          data-testid="dot"
          style={{
            width: i === active ? 24 : 8,
            height: 8,
            borderRadius: 4,
            background: i === active ? C.orange : C.ink12,
            transition: 'all 0.2s',
          }}
        />
      ))}
    </div>
  );
}
