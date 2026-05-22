// Mockup: S89 Reply to Review
'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { TopHeader } from '@/components/chrome/TopHeader';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { Avatar } from '@/components/ui/Avatar';
import { Card } from '@/components/ui/Card';
import { Ico } from '@/components/ui/Ico';
import { C, hexA } from '@/lib/tokens';

function Stars({ value = 5, size = 12 }) {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {[1,2,3,4,5].map(i => (
        <Ico key={i} name="star" size={size} color={i <= value ? C.orange : C.ink12} />
      ))}
    </div>
  );
}

export default function S89_ReplyReview() {
  const router = useRouter();
  return (
    <Screen>
      <TopHeader title="Reply" />
      <div style={{ padding: '8px 20px 120px' }}>
        {/* Original review */}
        <Card p={14} style={{ marginBottom: 14, background: C.pale }}>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 8 }}>
            <Avatar name="Mira K" size={36} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 700 }}>Mira K.</div>
              <div style={{ fontSize: 11, color: C.ink50 }}>May 2026 · 4 nights</div>
            </div>
            <Stars value={5} />
          </div>
          <p style={{ fontSize: 13, color: C.ink70, margin: 0, lineHeight: 1.5 }}>
            "Stunning view, peaceful, easy check-in. Tunde left a welcome basket — total class. Would book again."
          </p>
        </Card>

        <div style={{ fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 8 }}>Your public reply</div>
        <div style={{ background: '#fff', borderRadius: 14, padding: 14, border: `1.5px solid ${C.orange}`, minHeight: 140, fontSize: 14, color: C.ink, lineHeight: 1.5 }}>
          Thanks Mira! Glad you enjoyed the welcome basket — looking forward to having you back any time. Safe travels!
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: C.ink50, marginTop: 6 }}>
          <span>Public · visible to all guests</span>
          <span>124 / 500</span>
        </div>

        {/* Templates */}
        <div style={{ marginTop: 16 }}>
          <div style={{ fontSize: 12, color: C.ink50, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 8 }}>Quick templates</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'Thank you for the kind words!',
              'Looking forward to hosting you again',
              'Glad the wifi worked out for your calls',
            ].map(t => (
              <button key={t} style={{ padding: 12, background: '#fff', border: `1px solid ${C.ink12}`, borderRadius: 10, textAlign: 'left', fontSize: 13, color: C.ink70, cursor: 'pointer' }}>+ {t}</button>
            ))}
          </div>
        </div>

        <Card p={12} style={{ marginTop: 14, background: hexA(C.orange, 0.1), border: 'none' }}>
          <div style={{ display: 'flex', gap: 10 }}>
            <Ico name="info" size={16} color={C.orange} />
            <div style={{ fontSize: 12, color: '#a4541a', lineHeight: 1.5 }}>
              Hosts who reply within 48h see 18% more repeat bookings.
            </div>
          </div>
        </Card>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '14px 16px 24px', background: '#fff', borderTop: `1px solid ${C.ink06}` }}>
        <PrimaryButton onClick={() => router.push('/owner/reviews')}>Post reply</PrimaryButton>
      </div>
    </Screen>
  );
}
