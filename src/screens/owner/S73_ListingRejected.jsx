// Mockup: S73 Listing Rejected
'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { TopHeader } from '@/components/chrome/TopHeader';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { GhostButton } from '@/components/ui/GhostButton';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Ico } from '@/components/ui/Ico';
import { C, F, hexA } from '@/lib/tokens';

export default function S73_ListingRejected() {
  const router = useRouter();
  return (
    <Screen>
      <TopHeader title="" />
      <div style={{ padding: '32px 24px 40px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 22 }}>
        <div style={{ width: 120, height: 120, borderRadius: 60, background: hexA(C.red, 0.12), display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Ico name="alert" size={56} color={C.red} />
        </div>
        <div>
          <Badge kind="red">Rejected</Badge>
          <h1 style={{ fontSize: 26, fontWeight: 800, color: C.navy, letterSpacing: -0.8, margin: '12px 0 6px' }}>Listing needs work</h1>
          <p style={{ fontSize: 14, color: C.ink70, margin: 0, lineHeight: 1.6 }}>
            We can't approve yet — here's what to fix.
          </p>
        </div>

        <Card style={{ width: '100%', textAlign: 'left' }} p={16}>
          <div style={{ fontSize: 11, fontWeight: 700, color: C.red, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 10 }}>Issues found</div>
          {[
            { t: 'Photos too dark', s: 'Daylight shots required' },
            { t: 'Title misleading', s: 'Says "ocean view" — show in photos' },
            { t: 'Missing safety info', s: 'Add smoke alarm details' },
          ].map(i => (
            <div key={i.t} style={{ display: 'flex', gap: 10, padding: '8px 0', borderTop: `1px solid ${C.ink06}` }}>
              <Ico name="alert" size={16} color={C.red} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 700 }}>{i.t}</div>
                <div style={{ fontSize: 11, color: C.ink50 }}>{i.s}</div>
              </div>
            </div>
          ))}
          <div style={{ marginTop: 12, paddingTop: 12, borderTop: `1px solid ${C.ink06}`, fontSize: 11, color: C.ink50, fontFamily: F.mono }}>
            LST-29481 · Reviewed by HM-Quality
          </div>
        </Card>

        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <PrimaryButton onClick={() => router.push('/owner/listings/new/type')}>Edit and resubmit</PrimaryButton>
          <GhostButton onClick={() => {}}>Read review policy</GhostButton>
        </div>
      </div>
    </Screen>
  );
}
