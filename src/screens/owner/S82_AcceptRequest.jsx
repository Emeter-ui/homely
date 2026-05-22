// Mockup: S82 Accept Request
'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { TopHeader } from '@/components/chrome/TopHeader';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { GhostButton } from '@/components/ui/GhostButton';
import { Avatar } from '@/components/ui/Avatar';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Ico } from '@/components/ui/Ico';
import { C, F, hexA } from '@/lib/tokens';

export default function S82_AcceptRequest() {
  const router = useRouter();
  return (
    <Screen>
      <TopHeader title="Booking request" />
      <div style={{ padding: '8px 20px 120px' }}>
        <Badge kind="orange">Awaiting your decision</Badge>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: C.navy, letterSpacing: -0.5, margin: '8px 0 4px' }}>Sofia wants to book</h2>
        <p style={{ fontSize: 13, color: C.ink70, margin: '0 0 16px' }}>Auto-cancel in <b style={{ color: C.navy, fontFamily: F.mono }}>23h 47m</b></p>

        {/* Guest card */}
        <Card p={14} style={{ marginBottom: 12 }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <Avatar name="Sofia P" size={56} verified={false} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: C.navy }}>Sofia P.</div>
              <div style={{ fontSize: 11, color: C.ink50, marginTop: 2 }}>2 trips · 1 review · Joined 2025</div>
              <div style={{ marginTop: 4, display: 'flex', gap: 6 }}>
                <Badge kind="green" size="sm">KYC verified</Badge>
                <Badge kind="gray" size="sm">No-smoker</Badge>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 12, padding: 10, background: C.pale, borderRadius: 10, fontSize: 12, color: C.ink70, lineHeight: 1.5 }}>
            "Hi! Visiting for a friend's wedding in Lekki. We're quiet and tidy — no parties. Hope to hear from you!"
          </div>
        </Card>

        {/* Stay summary */}
        <Card p={14} style={{ marginBottom: 14 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0' }}><span style={{ fontSize: 12, color: C.ink70 }}>Property</span><span style={{ fontSize: 13, fontWeight: 600 }}>Ocean View Studio</span></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0' }}><span style={{ fontSize: 12, color: C.ink70 }}>Dates</span><span style={{ fontSize: 13, fontWeight: 600 }}>3 – 9 Jul · 6 nights</span></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0' }}><span style={{ fontSize: 12, color: C.ink70 }}>Guests</span><span style={{ fontSize: 13, fontWeight: 600 }}>2 adults</span></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0 0', borderTop: `1px solid ${C.ink06}`, marginTop: 4 }}>
            <span style={{ fontSize: 13, color: C.ink70 }}>You'll earn</span>
            <span style={{ fontSize: 18, fontWeight: 800, color: C.green }}>£295</span>
          </div>
        </Card>

        <Card p={14} style={{ background: hexA(C.green, 0.15), border: 'none' }}>
          <div style={{ display: 'flex', gap: 10 }}>
            <Ico name="sparkle" size={18} color="#3d6610" />
            <div style={{ fontSize: 12, color: '#3d6610', lineHeight: 1.5 }}>
              <b>Recommended:</b> Sofia matches your typical guest profile (KYC, 100% positive history).
            </div>
          </div>
        </Card>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '14px 16px 24px', background: '#fff', borderTop: `1px solid ${C.ink06}`, display: 'flex', gap: 10 }}>
        <GhostButton onClick={() => router.push('/owner/reservations/1/decline')}>Decline</GhostButton>
        <PrimaryButton onClick={() => router.push('/owner/reservations')}>Accept booking</PrimaryButton>
      </div>
    </Screen>
  );
}
