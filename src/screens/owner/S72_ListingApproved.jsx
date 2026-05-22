// Mockup: S72 Listing Approved
'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { GhostButton } from '@/components/ui/GhostButton';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Ico } from '@/components/ui/Ico';
import { ImagePh } from '@/components/ui/ImagePh';
import { C, F } from '@/lib/tokens';

export default function S72_ListingApproved() {
  const router = useRouter();
  return (
    <Screen>
      <div style={{ padding: '40px 24px 40px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', height: '100%' }}>
        <div style={{ width: 132, height: 132, borderRadius: 66, background: C.green, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 16px 40px ${C.green}80` }}>
          <Ico name="check" size={64} color="#fff" />
        </div>
        <Badge kind="green" style={{ marginTop: 20 }}>Live</Badge>
        <h1 style={{ fontSize: 30, fontWeight: 800, color: C.navy, letterSpacing: -1, margin: '12px 0 8px' }}>Your listing is live! 🎉</h1>
        <p style={{ fontSize: 14, color: C.ink70, margin: 0, lineHeight: 1.5, padding: '0 8px' }}>
          Lekki Phase 1 — Ocean View Studio is now visible on Homely. Bookings can begin immediately.
        </p>

        <Card style={{ width: '100%', textAlign: 'left', marginTop: 24 }} p={12}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <ImagePh w={64} h={64} label="cover" radius={10} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 700 }}>Ocean View Studio</div>
              <div style={{ fontSize: 11, color: C.ink50, fontFamily: F.mono }}>LST-29481</div>
              <div style={{ fontSize: 12, color: C.green, fontWeight: 700, marginTop: 2 }}>Approved · 20 May</div>
            </div>
          </div>
        </Card>

        <Card style={{ width: '100%', textAlign: 'left', marginTop: 12 }} p={14}>
          <div style={{ fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 8 }}>Next steps</div>
          {['Share your listing link', 'Calibrate your calendar', 'Respond to messages within 1h'].map(s => (
            <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 0', fontSize: 13 }}>
              <Ico name="check-c" size={16} color={C.green} />
              <span style={{ color: C.ink70 }}>{s}</span>
            </div>
          ))}
        </Card>

        <div style={{ flex: 1 }} />
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <PrimaryButton onClick={() => router.push('/owner/listings/1')}>View my listing</PrimaryButton>
          <GhostButton>Share link</GhostButton>
        </div>
      </div>
    </Screen>
  );
}
