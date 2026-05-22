// Mockup: S75 Owner Listing Detail
'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Ico } from '@/components/ui/Ico';
import { ImagePh } from '@/components/ui/ImagePh';
import { C } from '@/lib/tokens';

export default function S75_OwnerListingDetail() {
  const router = useRouter();
  return (
    <Screen>
      <div style={{ position: 'relative' }}>
        <ImagePh w="100%" h={220} label="property · main" radius={0} />
        <div style={{ position: 'absolute', top: 56, left: 16, right: 16, display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ width: 40, height: 40, borderRadius: 20, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', cursor: 'pointer' }} onClick={() => router.back()}>
            <Ico name="chev-l" size={20} color={C.navy} />
          </div>
          <div style={{ background: 'rgba(0,0,0,0.6)', color: '#fff', padding: '6px 14px', borderRadius: 14, fontSize: 12, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer' }} onClick={() => router.push('/property/1')}>
            <Ico name="eye" size={14} color="#fff" />Preview as guest
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: 12, left: 16 }}>
          <Badge kind="green">Live · LST-29481</Badge>
        </div>
      </div>
      <div style={{ padding: '14px 20px 40px' }}>
        <h2 style={{ fontSize: 20, fontWeight: 800, color: C.navy, margin: '0 0 4px', letterSpacing: -0.4 }}>Ocean View Studio</h2>
        <div style={{ fontSize: 12, color: C.ink70 }}>Lekki Phase 1, Lagos · Entire flat</div>

        {/* Performance row */}
        <Card p={14} style={{ marginTop: 14 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: C.ink50, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 10 }}>30-day performance</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
            {[
              { v: '482', l: 'Views' },
              { v: '36', l: 'Saves' },
              { v: '14', l: 'Books' },
              { v: '92%', l: 'Occ.' },
            ].map(s => (
              <div key={s.l} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 18, fontWeight: 800, color: C.navy, letterSpacing: -0.4 }}>{s.v}</div>
                <div style={{ fontSize: 10, color: C.ink50 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </Card>

        {/* Action grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 14 }}>
          {[
            { ic: 'edit', l: 'Edit listing', orange: true, href: '/owner/listings/1/edit' },
            { ic: 'calendar', l: 'Calendar', href: '/owner/calendar' },
            { ic: 'wallet', l: 'Pricing', href: '/owner/pricing' },
            { ic: 'star', l: 'Reviews · 184', href: '/owner/reviews' },
          ].map(a => (
            <button key={a.l} style={{ padding: 12, borderRadius: 12, background: a.orange ? C.orange : '#fff', color: a.orange ? '#fff' : C.navy, border: a.orange ? 'none' : `1px solid ${C.ink06}`, display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, fontWeight: 700 }} onClick={() => router.push(a.href)}>
              <Ico name={a.ic} size={18} color={a.orange ? '#fff' : C.navy} />{a.l}
            </button>
          ))}
        </div>

        <div style={{ marginTop: 18 }}>
          <button style={{ width: '100%', padding: 14, background: 'transparent', color: C.red, border: 'none', fontWeight: 700, fontSize: 14, cursor: 'pointer' }} onClick={() => router.push('/owner/listings/1/deactivate')}>
            Pause listing
          </button>
        </div>
      </div>
    </Screen>
  );
}
