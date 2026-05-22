// Mockup: S29 Category Browse
'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { TopHeader } from '@/components/chrome/TopHeader';
import { Ico } from '@/components/ui/Ico';
import { C, hexA } from '@/lib/tokens';

export default function S29_Category() {
  const router = useRouter();

  const cats = [
    { l: 'Beachfront', ic: 'wave', n: 184, tone: 'pale' },
    { l: 'Lagos vibes', ic: 'building', n: 92, tone: 'navy' },
    { l: 'Cabins', ic: 'tree', n: 38, tone: 'pale' },
    { l: 'City flats', ic: 'building', n: 256, tone: 'pale' },
    { l: 'Tiny homes', ic: 'home', n: 12, tone: 'navy' },
    { l: 'Luxe villas', ic: 'sun', n: 47, tone: 'pale' },
    { l: 'Workstays', ic: 'sparkle', n: 64, tone: 'navy' },
    { l: 'Pets ok', ic: 'heart', n: 89, tone: 'pale' },
  ];

  return (
    <Screen padBottom={88}>
      <TopHeader title="Browse categories" />
      <div style={{ padding: '12px 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {cats.map(c => (
            <div
              key={c.l}
              onClick={() => router.push('/property/1')}
              style={{
                aspectRatio: '1', borderRadius: 18, padding: 14, position: 'relative', overflow: 'hidden',
                background: c.tone === 'navy' ? C.navy : C.white, color: c.tone === 'navy' ? '#fff' : C.navy,
                border: c.tone === 'pale' ? `1px solid ${C.ink06}` : 'none',
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                cursor: 'pointer',
              }}
            >
              <div style={{ width: 44, height: 44, borderRadius: 12,
                background: c.tone === 'navy' ? 'rgba(255,255,255,0.1)' : hexA(C.orange, 0.15),
                display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Ico name={c.ic} size={22} color={c.tone === 'navy' ? '#fff' : C.orange} />
              </div>
              <div>
                <div style={{ fontSize: 16, fontWeight: 800, letterSpacing: -0.3 }}>{c.l}</div>
                <div style={{ fontSize: 11, opacity: 0.7, marginTop: 2 }}>{c.n} properties</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Screen>
  );
}
