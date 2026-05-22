// Mockup: S34 Host profile mini page
'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { TopHeader } from '@/components/chrome/TopHeader';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { GhostButton } from '@/components/ui/GhostButton';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Avatar } from '@/components/ui/Avatar';
import { VerifiedBadge } from '@/components/ui/VerifiedBadge';
import { Ico } from '@/components/ui/Ico';
import { ImagePh } from '@/components/ui/ImagePh';
import { C } from '@/lib/tokens';

const PROPS = [
  { id: 'p1', title: 'Lekki Phase 1 — Ocean View Studio', city: 'Lagos · Nigeria', price: 42, rating: 4.92 },
  { id: 'p2', title: 'Shoreditch Loft with Terrace', city: 'London · UK', price: 168, rating: 4.88 },
  { id: 'p3', title: 'Quiet Bungalow near the Beach', city: 'Tarkwa Bay · Lagos', price: 88, rating: 4.95 },
];

export default function S34_HostProfile() {
  const router = useRouter();

  return (
    <Screen>
      <TopHeader title="Host" />
      <div style={{ padding: '12px 20px 40px' }}>
        <div style={{ background: C.white, borderRadius: 18, padding: 20, border: `1px solid ${C.ink06}`, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <Avatar name="Tunde A" size={88} verified />
          <h2 style={{ fontSize: 22, fontWeight: 800, color: C.navy, margin: '12px 0 4px', letterSpacing: -0.4, display: 'flex', alignItems: 'center', gap: 8 }}>
            Tunde A. <VerifiedBadge size={18} />
          </h2>
          <Badge kind="orange">Superhost</Badge>
          <div style={{ display: 'flex', gap: 18, marginTop: 18 }}>
            {[
              { v: '184', l: 'Reviews' },
              { v: '4.92', l: 'Rating' },
              { v: '4y', l: 'On Homely' },
            ].map(s => (
              <div key={s.l} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 18, fontWeight: 800, color: C.navy }}>{s.v}</div>
                <div style={{ fontSize: 11, color: C.ink50 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <Card style={{ marginTop: 16 }} p={16}>
          <div style={{ fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 8 }}>About Tunde</div>
          <p style={{ fontSize: 13, color: C.ink70, lineHeight: 1.6, margin: 0 }}>
            Architect, runner, surf-curious. I list two spaces in Lekki and one in Tarkwa Bay — both designed for long stays.
          </p>
          <div style={{ marginTop: 14, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, fontSize: 12 }}>
            {[
              { ic: 'globe', l: 'Speaks', v: 'English, Yoruba' },
              { ic: 'sparkle', l: 'Hobby', v: 'Surfing' },
              { ic: 'msg', l: 'Response', v: 'within 1h' },
              { ic: 'check-c', l: 'Verified', v: 'ID + Address' },
            ].map(r => (
              <div key={r.l}>
                <div style={{ fontSize: 11, color: C.ink50 }}>{r.l}</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: C.navy, marginTop: 2 }}>{r.v}</div>
              </div>
            ))}
          </div>
        </Card>

        <div style={{ marginTop: 16, fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 10 }}>Tunde&apos;s other listings</div>
        <div style={{ display: 'flex', gap: 12, overflowX: 'auto' }}>
          {PROPS.slice(0, 3).map(p => (
            <div key={p.id} style={{ width: 160, flexShrink: 0, cursor: 'pointer' }} onClick={() => router.push('/property/1')}>
              <ImagePh w="100%" h={120} label={p.id} radius={10} />
              <div style={{ marginTop: 8, fontSize: 13, fontWeight: 700, color: C.navy, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.title}</div>
              <div style={{ fontSize: 11, color: C.ink50, marginTop: 2 }}>£{p.price} /night · ⭐ {p.rating}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <PrimaryButton icon={<Ico name="msg" size={18} color="#fff" />}>Message Tunde</PrimaryButton>
          <GhostButton>Report this host</GhostButton>
        </div>
      </div>
    </Screen>
  );
}
