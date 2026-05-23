// Mockup: S45 My Bookings (Past)
'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { TopHeader } from '@/components/chrome/TopHeader';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Ico } from '@/components/ui/Ico';
import { ImagePh } from '@/components/ui/ImagePh';
import { C } from '@/lib/tokens';
import { PROPERTY_IMG } from '@/lib/sample-images';

export default function S45_MyBookingsPast() {
  const router = useRouter();

  return (
    <Screen padBottom={88}>
      <TopHeader title="My bookings" back={false} right={<Ico name="search" size={20} color={C.navy} />} />
      <div style={{ padding: '0 20px' }}>
        <div style={{ display: 'flex', borderBottom: `1px solid ${C.ink06}` }}>
          {['Upcoming', 'Past', 'Cancelled'].map((t, i) => (
            <div
              key={t}
              onClick={() => i === 0 && router.push('/trips')}
              style={{ flex: 1, padding: '12px 0', textAlign: 'center', fontSize: 13, fontWeight: 700, color: i === 1 ? C.navy : C.ink50, borderBottom: i === 1 ? `2px solid ${C.orange}` : 'none', marginBottom: -1, cursor: i !== 1 ? 'pointer' : 'default' }}
            >{t}</div>
          ))}
        </div>
      </div>
      <div style={{ padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {[
          { t: 'Brutalist Apartment', d: 'Apr 4 – 8, 2026', l: 'London', review: false, img: PROPERTY_IMG.brutalistApt },
          { t: 'Quiet Bungalow', d: 'Feb 12 – 19, 2026', l: 'Tarkwa Bay', review: true, img: PROPERTY_IMG.quietBungalow },
          { t: 'Lekki Studio', d: 'Dec 22 – 28, 2025', l: 'Lagos', review: true, img: PROPERTY_IMG.lekkiStudio },
          { t: 'Mile End Flat', d: 'Oct 1 – 4, 2025', l: 'London', review: true, img: PROPERTY_IMG.mileEndFlat },
        ].map(b => (
          <Card key={b.t} p={12}>
            <div style={{ display: 'flex', gap: 12 }}>
              <div style={{ position: 'relative' }}>
                <ImagePh w={72} h={72} src={b.img} alt={b.t} radius={10} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 11, color: C.ink50 }}>{b.l}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: C.navy }}>{b.t}</div>
                <div style={{ fontSize: 12, color: C.ink70, marginTop: 2 }}>{b.d}</div>
                <div style={{ marginTop: 6 }}>
                  {b.review
                    ? <Badge kind="navy" size="sm">Reviewed</Badge>
                    : <button
                        onClick={() => router.push('/reviews/write/1')}
                        style={{ height: 26, padding: '0 12px', borderRadius: 13, background: C.orange, color: '#fff', border: 'none', fontWeight: 700, fontSize: 11, cursor: 'pointer' }}
                      >Leave review</button>
                  }
                </div>
              </div>
              <Ico name="chev-r" size={18} color={C.ink30} />
            </div>
          </Card>
        ))}
      </div>
    </Screen>
  );
}
