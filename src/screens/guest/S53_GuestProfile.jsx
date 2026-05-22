// Mockup: S53 Guest Profile
'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { GhostButton } from '@/components/ui/GhostButton';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Avatar } from '@/components/ui/Avatar';
import { VerifiedBadge } from '@/components/ui/VerifiedBadge';
import { Ico } from '@/components/ui/Ico';
import { C, F } from '@/lib/tokens';

export default function S53_GuestProfile() {
  const router = useRouter();

  return (
    <Screen padBottom={88}>
      {/* Header with avatar */}
      <div style={{ background: C.navy, color: '#fff', padding: '16px 20px 80px', borderRadius: '0 0 28px 28px', position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: 17, fontWeight: 800 }}>Profile</div>
          <div onClick={() => router.push('/profile/settings')} style={{ cursor: 'pointer' }}>
            <Ico name="settings" size={20} color="#fff" />
          </div>
        </div>
      </div>
      <div style={{ padding: '0 20px', marginTop: -60 }}>
        <Card p={20}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
            <Avatar name="Amelia Bankole" size={68} verified />
            <div style={{ flex: 1 }}>
              <h2 style={{ fontSize: 20, fontWeight: 800, color: C.navy, margin: 0, letterSpacing: -0.4, display: 'flex', alignItems: 'center', gap: 6 }}>
                Amelia B. <VerifiedBadge size={16} />
              </h2>
              <div style={{ fontSize: 12, color: C.ink50, marginTop: 2 }}>amelia@email.com</div>
              <Badge kind="green" size="sm">KYC verified</Badge>
            </div>
          </div>

          <p style={{ fontSize: 13, color: C.ink70, lineHeight: 1.5, margin: 0 }}>
            Lagos-born, London-based product designer. Loves long stays, slow mornings, and finding the best coffee.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginTop: 16, padding: 12, background: C.pale, borderRadius: 12 }}>
            {[
              { v: '14', l: 'Trips' },
              { v: '7', l: 'Reviews' },
              { v: '3y', l: 'On Homely' },
            ].map(s => (
              <div key={s.l} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 20, fontWeight: 800, color: C.navy }}>{s.v}</div>
                <div style={{ fontSize: 11, color: C.ink50 }}>{s.l}</div>
              </div>
            ))}
          </div>

          <GhostButton onClick={() => router.push('/profile/edit')}>Edit profile</GhostButton>
        </Card>

        <Card style={{ marginTop: 14 }} p={4}>
          {[
            { ic: 'card', l: 'Payment methods', sub: '2 cards saved', route: null },
            { ic: 'globe', l: 'Language & region', sub: 'English (UK) · GBP', route: null },
            { ic: 'bell', l: 'Notifications', sub: 'Push, email, SMS', route: '/profile/notifications' },
            { ic: 'shield', l: 'Privacy & security', sub: '2FA enabled', route: null },
            { ic: 'doc', l: 'Refer a friend', sub: 'Earn £25 in credit', route: null },
            { ic: 'msg', l: 'Help & support', sub: '24/7 chat', route: null },
            { ic: 'heart', l: 'Favourites', sub: '24 saved', route: '/favourites' },
            { ic: 'star', l: 'My reviews', sub: '7 written', route: '/reviews/mine' },
            { ic: 'logout', l: 'Sign out', route: null },
          ].map((r, i, arr) => (
            <div
              key={r.l}
              onClick={() => r.route && router.push(r.route)}
              style={{ display: 'flex', alignItems: 'center', gap: 14, padding: 14, borderBottom: i < arr.length - 1 ? `1px solid ${C.ink06}` : 'none', cursor: r.route ? 'pointer' : 'default' }}
            >
              <div style={{ width: 36, height: 36, borderRadius: 10, background: C.pale, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Ico name={r.ic} size={18} color={r.ic === 'logout' ? C.red : C.navy} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: r.ic === 'logout' ? C.red : C.navy }}>{r.l}</div>
                {r.sub && <div style={{ fontSize: 11, color: C.ink50, marginTop: 2 }}>{r.sub}</div>}
              </div>
              {r.ic !== 'logout' && <Ico name="chev-r" size={16} color={C.ink30} />}
            </div>
          ))}
        </Card>

        <div style={{ textAlign: 'center', marginTop: 16, fontSize: 11, color: C.ink50, fontFamily: F.mono }}>v1.0.0 · build 4821</div>
      </div>
    </Screen>
  );
}
