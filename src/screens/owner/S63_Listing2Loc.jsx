// Mockup: S63 Listing Wizard Step 2 - Location
'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { GhostButton } from '@/components/ui/GhostButton';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Ico } from '@/components/ui/Ico';
import { C, F } from '@/lib/tokens';

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

export default function S63_Listing2Loc() {
  const router = useRouter();
  return (
    <Screen>
      <WizardHeader step={2} title="Where is it?" sub="Address only shared with confirmed guests." onBack={() => router.back()} />
      <div style={{ padding: '8px 20px 120px' }}>
        <Input label="Address" value="12 Banana Island Rd, Lekki" icon={<Ico name="pin" size={18} color={C.ink50} />} />
        {/* Map */}
        <div style={{ marginTop: 16, position: 'relative', height: 220, borderRadius: 14, overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, #d8e4c8, #e6d9c4)` }}>
            <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0 }}>
              <path d="M -20 100 Q 100 80 180 140 T 410 220" stroke="#fff" strokeWidth="5" fill="none" />
              <path d="M 150 -10 L 180 240" stroke="#fff" strokeWidth="3" fill="none" />
              <circle cx="60" cy="160" r="80" fill="rgba(0,0,102,0.12)" />
            </svg>
          </div>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -100%)' }}>
            <div style={{ width: 44, height: 44, borderRadius: 22, background: C.orange, border: '4px solid #fff', boxShadow: '0 6px 16px rgba(0,0,0,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Ico name="home" size={18} color="#fff" />
            </div>
          </div>
          <div style={{ position: 'absolute', bottom: 8, right: 8, background: '#fff', padding: '4px 10px', borderRadius: 8, fontSize: 11, fontWeight: 600, fontFamily: F.mono, boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}>
            6.4281°N · 3.4521°E
          </div>
        </div>
        <div style={{ fontSize: 12, color: C.ink70, marginTop: 12, lineHeight: 1.5 }}>
          Drag the pin to fine-tune your exact location. Guests see a 500m circle until they book.
        </div>

        <Card p={14} style={{ marginTop: 16 }}>
          <div style={{ display: 'flex', gap: 12 }}>
            <Ico name="info" size={18} color={C.navy} />
            <div style={{ fontSize: 12, color: C.ink70, lineHeight: 1.5 }}>
              <b style={{ color: C.navy }}>Why we ask:</b> A precise location helps guests plan their trip, but yours stays private until booked.
            </div>
          </div>
        </Card>
      </div>
      <WizardFooter onBack={() => router.back()} onNext={() => router.push('/owner/listings/new/info')} />
    </Screen>
  );
}
