// Mockup: S66 Listing Wizard Step 5 - Amenities
'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { GhostButton } from '@/components/ui/GhostButton';
import { Card } from '@/components/ui/Card';
import { Ico } from '@/components/ui/Ico';
import { C } from '@/lib/tokens';

function WizardHeader({ step, total = 9, title, sub, onBack }) {
  return (
    <div>
      <div style={{ padding: '8px 16px 12px', display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ width: 36, height: 36, borderRadius: 18, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${C.ink06}`, cursor: 'pointer' }} onClick={onBack}>
          <Ico name="chev-l" size={18} color={C.navy} />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 11, color: C.orange, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase' }}>Step {step} of {total}</div>
          <div style={{ fontSize: 17, fontWeight: 800, color: C.navy, letterSpacing: -0.3 }}>{title}</div>
        </div>
        <span style={{ fontSize: 13, color: C.ink70, fontWeight: 500 }}>Save & exit</span>
      </div>
      <div style={{ padding: '0 16px 12px' }}>
        <div style={{ height: 4, borderRadius: 2, background: C.ink06, overflow: 'hidden' }}>
          <div style={{ width: `${(step/total)*100}%`, height: '100%', background: C.orange, borderRadius: 2, transition: 'width 0.3s' }} />
        </div>
      </div>
      {sub && <div style={{ padding: '0 20px 12px', fontSize: 13, color: C.ink70, lineHeight: 1.5 }}>{sub}</div>}
    </div>
  );
}

function WizardFooter({ next = 'Continue', back = true, onNext, onBack }) {
  return (
    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '14px 16px 24px', background: '#fff', borderTop: `1px solid ${C.ink06}`, display: 'flex', gap: 10, zIndex: 50 }}>
      {back && <GhostButton style={{ width: 100, flex: 'none' }} size="md" onClick={onBack}>Back</GhostButton>}
      <PrimaryButton onClick={onNext}>{next}</PrimaryButton>
    </div>
  );
}

export default function S66_Listing5Amen() {
  const router = useRouter();
  const groups = [
    { h: 'Essentials', items: [
      { ic: 'wifi-amenity', l: 'Wifi', on: true },
      { ic: 'kitchen', l: 'Kitchen', on: true },
      { ic: 'bath', l: 'Heating', on: true },
      { ic: 'wave', l: 'Air con', on: true },
      { ic: 'sun', l: 'Hot water', on: true },
      { ic: 'parking', l: 'Parking', on: false },
    ]},
    { h: 'Standout', items: [
      { ic: 'sparkle', l: 'Pool', on: false },
      { ic: 'flame', l: 'Fireplace', on: false },
      { ic: 'wave', l: 'Beach access', on: true },
      { ic: 'sun', l: 'Balcony', on: true },
    ]},
  ];
  return (
    <Screen>
      <WizardHeader step={5} title="Amenities" sub="Check everything you offer. 24 amenities available." onBack={() => router.back()} />
      <div style={{ padding: '8px 20px 120px' }}>
        {groups.map(g => (
          <div key={g.h} style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: C.ink50, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 10 }}>{g.h}</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              {g.items.map(a => (
                <div key={a.l} style={{ padding: 12, borderRadius: 12, background: '#fff', border: `1.5px solid ${a.on ? C.orange : C.ink12}`, display: 'flex', alignItems: 'center', gap: 10 }}>
                  <Ico name={a.ic} size={20} color={a.on ? C.orange : C.navy} />
                  <span style={{ flex: 1, fontSize: 13, fontWeight: 600, color: C.navy }}>{a.l}</span>
                  {a.on && <Ico name="check-c" size={18} color={C.orange} />}
                </div>
              ))}
            </div>
          </div>
        ))}

        <Card p={14} style={{ marginTop: 6 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700 }}>9 of 24 amenities selected</div>
              <div style={{ fontSize: 11, color: C.ink50, marginTop: 2 }}>Listings with 10+ get 24% more bookings</div>
            </div>
            <span style={{ fontSize: 12, color: C.orange, fontWeight: 700 }}>Show more</span>
          </div>
        </Card>
      </div>
      <WizardFooter onBack={() => router.back()} onNext={() => router.push('/owner/listings/new/photos')} />
    </Screen>
  );
}
