// Mockup: S67 Listing Wizard Step 6 - Photos
'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { GhostButton } from '@/components/ui/GhostButton';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Ico } from '@/components/ui/Ico';
import { ImagePh } from '@/components/ui/ImagePh';
import { C, hexA } from '@/lib/tokens';

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

export default function S67_Listing6Photos() {
  const router = useRouter();
  return (
    <Screen>
      <WizardHeader step={6} title="Photos" sub="Drag to reorder. The first photo is your cover." onBack={() => router.back()} />
      <div style={{ padding: '8px 20px 120px' }}>
        {/* Cover */}
        <div style={{ position: 'relative', marginBottom: 12 }}>
          <ImagePh w="100%" h={180} label="cover photo" radius={12} />
          <div style={{ position: 'absolute', top: 10, left: 10, background: C.orange, color: '#fff', padding: '4px 10px', borderRadius: 12, fontSize: 11, fontWeight: 700 }}>Cover</div>
          <div style={{ position: 'absolute', top: 10, right: 10, width: 32, height: 32, borderRadius: 16, background: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Ico name="more" size={16} color="#fff" />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
          {[1,2,3,4,5].map(i => (
            <div key={i} style={{ position: 'relative' }}>
              <ImagePh w="100%" h={90} label={String(i+1)} radius={10} />
              <div style={{ position: 'absolute', top: 4, right: 4, width: 22, height: 22, borderRadius: 11, background: 'rgba(0,0,0,0.55)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Ico name="x" size={12} color="#fff" />
              </div>
            </div>
          ))}
          <div style={{ aspectRatio: '1.05', borderRadius: 10, border: `1.5px dashed ${C.ink30}`, background: hexA(C.orange, 0.06), display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
            <Ico name="plus" size={22} color={C.orange} />
            <span style={{ fontSize: 11, color: C.orange, fontWeight: 700 }}>Add</span>
          </div>
        </div>

        <Card p={14} style={{ marginTop: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700 }}>6 photos uploaded</div>
              <div style={{ fontSize: 11, color: C.ink50 }}>Minimum 5 · Recommended 12+</div>
            </div>
            <Badge kind="green" size="sm">Min met</Badge>
          </div>
        </Card>

        <Card p={12} style={{ marginTop: 12, background: hexA(C.orange, 0.1), border: 'none' }}>
          <div style={{ display: 'flex', gap: 10 }}>
            <Ico name="camera" size={18} color={C.orange} />
            <div style={{ fontSize: 12, color: '#a4541a', lineHeight: 1.5 }}>
              <b>Pro tip:</b> Shoot during golden hour. Horizontal photos, wide angle. Show beds made, surfaces clear.
            </div>
          </div>
        </Card>
      </div>
      <WizardFooter onBack={() => router.back()} onNext={() => router.push('/owner/listings/new/pricing')} />
    </Screen>
  );
}
