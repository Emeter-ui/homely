// Mockup: S43 Booking Request Sent
'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { GhostButton } from '@/components/ui/GhostButton';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Ico } from '@/components/ui/Ico';
import { ImagePh } from '@/components/ui/ImagePh';
import { C, F, hexA } from '@/lib/tokens';

export default function S43_RequestSent() {
  const router = useRouter();

  return (
    <Screen>
      <div style={{ padding: '40px 24px 40px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', height: '100%' }}>
        <div style={{ position: 'relative', width: 132, height: 132 }}>
          <div style={{ position: 'absolute', inset: 0, borderRadius: 66, background: hexA(C.orange, 0.18), display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Ico name="send" size={56} color={C.orange} />
          </div>
          {/* Pulse ring */}
          <div style={{ position: 'absolute', inset: -8, borderRadius: 70, border: `2px solid ${C.orange}`, opacity: 0.4 }} />
          <div style={{ position: 'absolute', inset: -16, borderRadius: 74, border: `2px solid ${C.orange}`, opacity: 0.2 }} />
        </div>
        <Badge kind="orange">Awaiting host</Badge>
        <h1 style={{ fontSize: 26, fontWeight: 800, color: C.navy, letterSpacing: -0.8, margin: '14px 0 8px' }}>Request sent to Mira</h1>
        <p style={{ fontSize: 14, color: C.ink70, margin: 0, lineHeight: 1.6, padding: '0 12px' }}>
          Mira typically responds within an hour. We&apos;ll notify you as soon as she replies.
        </p>

        <Card style={{ width: '100%', textAlign: 'left', marginTop: 24 }} p={14}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <ImagePh w={56} h={56} label="prop" radius={10} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 700 }}>Shoreditch Loft</div>
              <div style={{ fontSize: 11, color: C.ink50 }}>14 – 21 Jun · £1,176</div>
            </div>
            <Badge kind="orange" size="sm">Pending</Badge>
          </div>
          <div style={{ marginTop: 14, paddingTop: 12, borderTop: `1px solid ${C.ink06}`, display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 12, color: C.ink70 }}>Auto-cancel</span>
            <span style={{ fontSize: 12, color: C.navy, fontWeight: 700, fontFamily: F.mono }}>23:47:12</span>
          </div>
        </Card>

        <div style={{ flex: 1 }} />
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <PrimaryButton onClick={() => router.push('/trips')}>Done</PrimaryButton>
          <GhostButton>Cancel request</GhostButton>
        </div>
      </div>
    </Screen>
  );
}
