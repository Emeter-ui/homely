'use client';

import { Screen } from '@/components/chrome/Screen';
import { Card } from '@/components/ui/Card';
import { GhostButton } from '@/components/ui/GhostButton';
import { C } from '@/lib/tokens';

export default function OfflinePage() {
  return (
    <Screen>
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '32px 24px',
        textAlign: 'center',
        gap: 20,
      }}>
        <div style={{
          width: 96, height: 96, borderRadius: 48,
          background: C.pale,
          border: `1px solid ${C.ink06}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 44,
        }}>
          📡
        </div>
        <div>
          <h1 style={{ margin: 0, fontSize: 24, fontWeight: 800, color: C.navy, letterSpacing: -0.6 }}>You're offline</h1>
          <p style={{ margin: '12px 0 0', fontSize: 14, color: C.ink70, lineHeight: 1.5 }}>
            Check your connection and try again.
          </p>
        </div>
        <Card p={14} style={{ textAlign: 'left', width: '100%', maxWidth: 320 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: C.ink50, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 6 }}>
            Tip
          </div>
          <div style={{ fontSize: 13, color: C.ink70, lineHeight: 1.5 }}>
            Already-visited screens will still work — just navigate away and back.
          </div>
        </Card>
        <div style={{ width: '100%', maxWidth: 320 }}>
          <GhostButton onClick={() => location.reload()}>Try again</GhostButton>
        </div>
      </div>
    </Screen>
  );
}
