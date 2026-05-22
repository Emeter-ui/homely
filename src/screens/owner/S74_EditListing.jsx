// Mockup: S74 Edit Listing
'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { TopHeader } from '@/components/chrome/TopHeader';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Ico } from '@/components/ui/Ico';
import { ImagePh } from '@/components/ui/ImagePh';
import { C, hexA } from '@/lib/tokens';

export default function S74_EditListing() {
  const router = useRouter();
  return (
    <Screen padBottom={20}>
      <TopHeader title="Edit listing" right={
        <span style={{ fontSize: 14, color: C.orange, fontWeight: 700, cursor: 'pointer' }} onClick={() => router.push('/owner/listings/1')}>Save</span>
      } />
      <div style={{ padding: '8px 20px 30px' }}>
        <Card p={12} style={{ marginBottom: 14 }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <ImagePh w={56} h={56} label="cover" radius={10} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 700 }}>Ocean View Studio</div>
              <div style={{ fontSize: 11, color: C.ink50 }}>LST-29481</div>
            </div>
            <Badge kind="green" size="sm">Live</Badge>
          </div>
        </Card>

        {[
          { h: 'Basics', items: [
            { ic: 'building', l: 'Property type', v: 'Flat · Entire place' },
            { ic: 'pin', l: 'Location', v: 'Lekki Phase 1, Lagos' },
            { ic: 'edit', l: 'Title & description', v: 'Last edit · 12d ago' },
            { ic: 'bed', l: 'Beds & guests', v: '4 guests · 1 bed' },
          ]},
          { h: 'Listing', items: [
            { ic: 'kitchen', l: 'Amenities', v: '9 of 24', warn: true, warnText: 'Add 1 more' },
            { ic: 'camera', l: 'Photos', v: '6 photos' },
            { ic: 'wallet', l: 'Pricing & fees', v: '£42 / night' },
            { ic: 'calendar', l: 'Calendar & availability', v: '78% booked next 60d' },
          ]},
          { h: 'Advanced', items: [
            { ic: 'sparkle', l: 'Management mode', v: 'Homely managed' },
            { ic: 'shield', l: 'House rules', v: '4 rules' },
            { ic: 'moon', l: 'Pause listing', v: '', danger: true },
          ]},
        ].map(g => (
          <div key={g.h} style={{ marginBottom: 18 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: C.ink50, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 8 }}>{g.h}</div>
            <Card p={4}>
              {g.items.map((r, i, arr) => (
                <div key={r.l} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: 14, borderBottom: i < arr.length - 1 ? `1px solid ${C.ink06}` : 'none' }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: r.danger ? hexA(C.red, 0.12) : C.pale, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Ico name={r.ic} size={18} color={r.danger ? C.red : C.navy} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 600, color: r.danger ? C.red : C.navy }}>{r.l}</div>
                    <div style={{ fontSize: 11, color: r.warn ? C.orange : C.ink50, marginTop: 2 }}>{r.warn ? r.warnText : r.v}</div>
                  </div>
                  <Ico name="chev-r" size={16} color={C.ink30} />
                </div>
              ))}
            </Card>
          </div>
        ))}
      </div>
    </Screen>
  );
}
