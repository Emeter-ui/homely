// Mockup: S49 Write a Review
'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { TopHeader } from '@/components/chrome/TopHeader';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { Card } from '@/components/ui/Card';
import { Ico } from '@/components/ui/Ico';
import { ImagePh } from '@/components/ui/ImagePh';
import { C } from '@/lib/tokens';

function Stars({ value = 5, size = 18 }) {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {[1,2,3,4,5].map(i => (
        <Ico key={i} name="star" size={size} color={i <= value ? C.orange : C.ink12} />
      ))}
    </div>
  );
}

export default function S49_WriteReview() {
  const router = useRouter();

  return (
    <Screen>
      <TopHeader title="Leave a review" />
      <div style={{ padding: '8px 20px 120px' }}>
        <Card p={12} style={{ marginBottom: 14 }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <ImagePh w={64} h={64} label="prop" radius={10} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, color: C.ink50 }}>You stayed Apr 4 – 8</div>
              <div style={{ fontSize: 14, fontWeight: 700 }}>Brutalist Apartment</div>
              <div style={{ fontSize: 12, color: C.ink70 }}>Hosted by Mira K.</div>
            </div>
          </div>
        </Card>

        {/* Overall rating */}
        <Card p={16} style={{ marginBottom: 14 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 4 }}>How was your stay overall?</div>
          <div style={{ fontSize: 12, color: C.ink50, marginBottom: 12 }}>Tap to rate</div>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
            {[1,2,3,4,5].map(i => (
              <div key={i} style={{ cursor: 'pointer' }}>
                <Ico name="star" size={40} color={i <= 4 ? C.orange : C.ink12} />
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', fontSize: 14, fontWeight: 700, color: C.navy, marginTop: 8 }}>Loved it</div>
        </Card>

        {/* Category ratings */}
        <Card p={14} style={{ marginBottom: 14 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 8 }}>Rate by category</div>
          {[
            { l: 'Cleanliness', v: 5 },
            { l: 'Accuracy', v: 4 },
            { l: 'Check-in', v: 5 },
            { l: 'Communication', v: 4 },
            { l: 'Location', v: 5 },
            { l: 'Value', v: 4 },
          ].map((r, i) => (
            <div key={r.l} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderTop: i ? `1px solid ${C.ink06}` : 'none' }}>
              <span style={{ fontSize: 13, fontWeight: 600 }}>{r.l}</span>
              <Stars value={r.v} size={18} />
            </div>
          ))}
        </Card>

        {/* Write */}
        <Card p={14}>
          <div style={{ fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 8 }}>Tell future guests</div>
          <div style={{ background: C.pale, borderRadius: 10, padding: 12, minHeight: 100, fontSize: 13, color: C.ink70, lineHeight: 1.5 }}>
            The apartment was beautifully designed and exactly as the photos suggested. Mira&apos;s communication was clear, and check-in was effortless…
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
            <span style={{ fontSize: 11, color: C.ink50 }}>Min 25 characters</span>
            <span style={{ fontSize: 11, color: C.ink50 }}>142 / 1000</span>
          </div>
          <div style={{ marginTop: 12, paddingTop: 12, borderTop: `1px solid ${C.ink06}`, display: 'flex', gap: 8 }}>
            <Ico name="camera" size={20} color={C.navy} />
            <span style={{ fontSize: 12, color: C.navy, fontWeight: 600 }}>Add photos (optional)</span>
          </div>
        </Card>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '14px 16px 24px', background: '#fff', borderTop: `1px solid ${C.ink06}` }}>
        <PrimaryButton onClick={() => router.push('/reviews/submitted')}>Submit review</PrimaryButton>
      </div>
    </Screen>
  );
}
