'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { TopHeader } from '@/components/chrome/TopHeader';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Avatar } from '@/components/ui/Avatar';
import { VerifiedBadge } from '@/components/ui/VerifiedBadge';
import { Ico } from '@/components/ui/Ico';
import { C, hexA } from '@/lib/tokens';

export default function S22_KycVerified() {
  const router = useRouter();

  return (
    <Screen bg={C.pale}>
      <TopHeader title="" />
      <div style={{ padding: '32px 24px 40px', display: 'flex', flexDirection: 'column',
        alignItems: 'center', textAlign: 'center', gap: 22 }}>
        {/* Confetti dots */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
          {Array.from({ length: 14 }).map((_, i) => {
            const colors = [C.orange, C.green, C.navy, C.orangeSoft];
            return (
              <div key={i} style={{
                position: 'absolute', width: 8, height: 8,
                top: 50 + (i * 37) % 400, left: 20 + (i * 71) % 360,
                background: colors[i % 4], borderRadius: i % 2 ? 4 : 1,
                transform: `rotate(${i * 23}deg)`,
              }} />
            );
          })}
        </div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ width: 132, height: 132, borderRadius: 66, background: C.green,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: `0 16px 40px ${hexA(C.green, 0.5)}` }}>
            <Ico name="check" size={64} color="#fff" />
          </div>
        </div>
        <div>
          <Badge kind="green">Verified</Badge>
          <h1 style={{ fontSize: 28, fontWeight: 800, color: C.navy, letterSpacing: -0.9, margin: '12px 0 0' }}>You're verified!</h1>
          <p style={{ fontSize: 14, color: C.ink70, margin: '12px 0 0', lineHeight: 1.6, padding: '0 8px' }}>
            Your account now has a green verified badge. You can host, book, and earn without limits.
          </p>
        </div>

        <Card style={{ width: '100%', textAlign: 'left' }} p={14}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Avatar name="Amelia Bankole" size={48} verified />
            <div>
              <div style={{ fontSize: 15, fontWeight: 700, color: C.navy, display: 'flex', alignItems: 'center', gap: 6 }}>
                Amelia Bankole <VerifiedBadge size={16} />
              </div>
              <div style={{ fontSize: 12, color: C.ink50 }}>Verified · 20 May 2026</div>
            </div>
          </div>
        </Card>

        <PrimaryButton onClick={() => router.push('/discover')}>Continue to Homely</PrimaryButton>
      </div>
    </Screen>
  );
}
