import { C } from '@/lib/tokens';

interface ProgressBarProps {
  value: number;
  total: number;
  dark?: boolean;
}

export function ProgressBar({ value, total, dark = false }: ProgressBarProps) {
  const pct = total > 0 ? (value / total) * 100 : 0;
  return (
    <div style={{ padding: '0 16px 8px' }}>
      <div style={{
        height: 4,
        borderRadius: 2,
        background: dark ? 'rgba(255,255,255,0.15)' : C.ink06,
        overflow: 'hidden',
      }}>
        <div
          data-testid="progress-fill"
          style={{ width: `${pct}%`, height: '100%', background: C.orange, borderRadius: 2 }}
        />
      </div>
    </div>
  );
}
