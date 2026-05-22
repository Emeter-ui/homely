// Mockup: S42 Request to Book
'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { TopHeader } from '@/components/chrome/TopHeader';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { Card } from '@/components/ui/Card';
import { Avatar } from '@/components/ui/Avatar';
import { Ico } from '@/components/ui/Ico';
import { C, hexA } from '@/lib/tokens';

export default function S42_RequestBook() {
  const router = useRouter();

  return (
    <Screen>
      <TopHeader title="Request to book" />
      <div style={{ padding: '8px 20px 120px' }}>
        <Card p={12} style={{ marginBottom: 14 }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <Avatar name="Mira K" size={48} verified />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 700 }}>Mira K. · Host</div>
              <div style={{ fontSize: 11, color: C.ink50 }}>Usually responds in 1 hour</div>
            </div>
          </div>
        </Card>

        <div style={{ background: hexA(C.orange, 0.1), padding: 12, borderRadius: 10, display: 'flex', gap: 10, marginBottom: 16 }}>
          <Ico name="info" size={18} color={C.orange} />
          <div style={{ fontSize: 12, color: '#a4541a', lineHeight: 1.5 }}>
            This property requires host approval. Your card is held but not charged until Mira accepts.
          </div>
        </div>

        <div style={{ fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 8 }}>Introduce yourself</div>
        <div style={{ background: '#fff', borderRadius: 14, padding: 14, border: `1px solid ${C.ink12}`, minHeight: 140 }}>
          <div style={{ fontSize: 14, color: C.ink, lineHeight: 1.5 }}>
            Hi Mira! My partner and I are visiting for a wedding in Hackney. We&apos;re quiet, tidy, no parties — just looking for a comfy base near the venue. Let me know if you need anything else from us 🙌
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', fontSize: 11, color: C.ink50, marginTop: 4 }}>148 / 1000</div>

        <Card p={14} style={{ marginTop: 14 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 8 }}>Trip summary</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0' }}><span style={{ fontSize: 12, color: C.ink70 }}>Dates</span><span style={{ fontSize: 13, fontWeight: 600 }}>14 – 21 Jun</span></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0' }}><span style={{ fontSize: 12, color: C.ink70 }}>Guests</span><span style={{ fontSize: 13, fontWeight: 600 }}>2 adults</span></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0' }}><span style={{ fontSize: 12, color: C.ink70 }}>Total</span><span style={{ fontSize: 13, fontWeight: 700, color: C.navy }}>£1,176</span></div>
        </Card>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '14px 16px 24px', background: '#fff', borderTop: `1px solid ${C.ink06}` }}>
        <PrimaryButton icon={<Ico name="send" size={18} color="#fff" />} onClick={() => router.push('/book/1/request-sent')}>Send request to Mira</PrimaryButton>
      </div>
    </Screen>
  );
}
