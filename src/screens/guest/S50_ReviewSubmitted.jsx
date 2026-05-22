// Mockup: S50 Review Submitted
'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { Card } from '@/components/ui/Card';
import { Avatar } from '@/components/ui/Avatar';
import { Ico } from '@/components/ui/Ico';
import { C, hexA } from '@/lib/tokens';

function Stars({ value = 5 }) {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {[1,2,3,4,5].map(i => (
        <Ico key={i} name="star" size={12} color={i <= value ? C.orange : C.ink12} />
      ))}
    </div>
  );
}

export default function S50_ReviewSubmitted() {
  const router = useRouter();

  return (
    <Screen>
      <div style={{ padding: '40px 24px 40px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', height: '100%' }}>
        <div style={{ width: 120, height: 120, borderRadius: 60, background: hexA(C.green, 0.18), display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Ico name="check" size={56} color={C.green} />
        </div>
        <h1 style={{ fontSize: 26, fontWeight: 800, color: C.navy, letterSpacing: -0.8, margin: '20px 0 8px' }}>Thanks, Amelia 🎉</h1>
        <p style={{ fontSize: 14, color: C.ink70, margin: 0, lineHeight: 1.6 }}>Your review helps future travellers and supports great hosts like Mira.</p>

        <Card style={{ width: '100%', textAlign: 'left', marginTop: 24 }} p={16}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
            <Avatar name="Amelia" size={36} verified />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 700 }}>Your review</div>
              <div style={{ fontSize: 11, color: C.ink50 }}>Public · May 20</div>
            </div>
            <Stars value={4} />
          </div>
          <p style={{ fontSize: 13, color: C.ink70, margin: 0, lineHeight: 1.5 }}>
            &quot;The apartment was beautifully designed and exactly as the photos suggested. Mira&apos;s communication was clear, and check-in was effortless…&quot;
          </p>
        </Card>

        <Card style={{ width: '100%', textAlign: 'left', marginTop: 12 }} p={14}>
          <div style={{ display: 'flex', gap: 10 }}>
            <Ico name="sparkle" size={18} color={C.orange} />
            <div style={{ fontSize: 12, color: C.ink70, lineHeight: 1.5, flex: 1 }}>
              You&apos;re 3 reviews away from <span style={{ fontWeight: 700, color: C.navy }}>Trusted Traveller</span> badge.
            </div>
          </div>
        </Card>

        <div style={{ flex: 1 }} />
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <PrimaryButton onClick={() => router.push('/trips')}>Done</PrimaryButton>
          <span
            onClick={() => router.push('/reviews/mine')}
            style={{ fontSize: 13, color: C.navy, fontWeight: 600, padding: 8, cursor: 'pointer' }}
          >See my reviews</span>
        </div>
      </div>
    </Screen>
  );
}
