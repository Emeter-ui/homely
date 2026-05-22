// Mockup: S38 Booking Confirmation
'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { TopHeader } from '@/components/chrome/TopHeader';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { GhostButton } from '@/components/ui/GhostButton';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Ico } from '@/components/ui/Ico';
import { ImagePh } from '@/components/ui/ImagePh';
import { C, F, hexA } from '@/lib/tokens';

export default function S38_BookingConfirm() {
  const router = useRouter();

  return (
    <Screen>
      <TopHeader title="" />
      <div style={{ padding: '0 20px 40px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '20px 0' }}>
          <div style={{ width: 84, height: 84, borderRadius: 42, background: C.green, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 12px 32px ${hexA(C.green, 0.4)}` }}>
            <Ico name="check" size={42} color="#fff" />
          </div>
          <h1 style={{ fontSize: 26, fontWeight: 800, color: C.navy, letterSpacing: -0.8, margin: '16px 0 4px' }}>Booking confirmed</h1>
          <p style={{ fontSize: 14, color: C.ink70, margin: 0 }}>You&apos;re going to Lagos.</p>
        </div>

        {/* Ticket card */}
        <div style={{ background: C.white, borderRadius: 18, border: `1px solid ${C.ink06}`, overflow: 'hidden' }}>
          <ImagePh w="100%" h={140} label="property" radius={0} />
          <div style={{ padding: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: 11, color: C.ink50, fontFamily: F.mono }}>HM-29481-LGS</div>
                <div style={{ fontSize: 15, fontWeight: 800, color: C.navy, marginTop: 2 }}>Ocean View Studio</div>
              </div>
              <Badge kind="green">Confirmed</Badge>
            </div>
            <div style={{ marginTop: 14, display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 10, color: C.ink50, textTransform: 'uppercase', fontWeight: 600 }}>Check-in</div>
                <div style={{ fontSize: 16, fontWeight: 800, color: C.navy }}>14 Jun</div>
                <div style={{ fontSize: 11, color: C.ink50 }}>After 14:00</div>
              </div>
              <div style={{ flex: 1, position: 'relative' }}>
                <div style={{ position: 'absolute', left: -20, right: -20, top: 16, height: 2, borderTop: `2px dashed ${C.ink12}` }} />
                <div style={{ position: 'absolute', top: 8, left: '50%', transform: 'translateX(-50%)', background: '#fff', padding: '0 6px', display: 'flex', alignItems: 'center', gap: 4 }}>
                  <Ico name="arr-r" size={16} color={C.orange} />
                  <span style={{ fontSize: 11, color: C.orange, fontWeight: 700 }}>7 nights</span>
                </div>
              </div>
              <div style={{ flex: 1, textAlign: 'right' }}>
                <div style={{ fontSize: 10, color: C.ink50, textTransform: 'uppercase', fontWeight: 600 }}>Check-out</div>
                <div style={{ fontSize: 16, fontWeight: 800, color: C.navy }}>21 Jun</div>
                <div style={{ fontSize: 11, color: C.ink50 }}>By 11:00</div>
              </div>
            </div>
            <div style={{ borderTop: `1px dashed ${C.ink12}`, marginTop: 14, paddingTop: 14, display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 12, color: C.ink70 }}>Total paid</span>
              <span style={{ fontSize: 14, fontWeight: 800 }}>£323.00</span>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <PrimaryButton icon={<Ico name="download" size={18} color="#fff" />}>Download receipt (PDF)</PrimaryButton>
          <GhostButton>Message Tunde, your host</GhostButton>
        </div>

        <Card style={{ marginTop: 14 }} p={14}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
            <Ico name="info" size={18} color={C.navy} />
            <div style={{ fontSize: 12, color: C.ink70, lineHeight: 1.5 }}>
              Free cancellation until 7 Jun. Full refund issued automatically to your original card.
            </div>
          </div>
        </Card>

        <div style={{ marginTop: 16 }}>
          <PrimaryButton onClick={() => router.push('/trips')}>Done</PrimaryButton>
        </div>
      </div>
    </Screen>
  );
}
