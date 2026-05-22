'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { TopHeader } from '@/components/chrome/TopHeader';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Card } from '@/components/ui/Card';
import { ImagePh } from '@/components/ui/ImagePh';
import { Ico } from '@/components/ui/Ico';
import { C, F, hexA } from '@/lib/tokens';

export default function S20_KycReview() {
  const router = useRouter();

  return (
    <Screen bg={C.pale}>
      <TopHeader title="Review & submit" subtitle="Step 4 of 4" />
      <ProgressBar value={4} total={4} />
      <div style={{ padding: '20px 24px 40px' }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: C.navy, letterSpacing: -0.6, margin: '0 0 8px' }}>Everything look right?</h2>
        <p style={{ fontSize: 14, color: C.ink70, margin: '0 0 20px' }}>Confirm and we'll submit for review.</p>

        <Card p={14} style={{ marginBottom: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: C.navy }}>Documents</div>
            <span style={{ fontSize: 12, color: C.orange, fontWeight: 600 }}>Edit</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
            {[
              { l: 'front', cap: 'NIN front' },
              { l: 'back', cap: 'NIN back' },
              { l: 'selfie', cap: 'Selfie' },
            ].map(p => (
              <div key={p.l}>
                <ImagePh w="100%" h={90} label={p.l} radius={10} />
                <div style={{ fontSize: 11, color: C.ink70, marginTop: 4, textAlign: 'center', fontWeight: 600 }}>{p.cap}</div>
              </div>
            ))}
          </div>
        </Card>

        <Card p={14} style={{ marginBottom: 12 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 10 }}>Submitted details</div>
          {[
            { k: 'Full name', v: 'Amelia O. Bankole' },
            { k: 'Date of birth', v: '14 Mar 1994' },
            { k: 'Document type', v: 'NIN slip' },
            { k: 'Document number', v: '••• ••• 4821', mono: true },
          ].map(r => (
            <div key={r.k} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: `1px solid ${C.ink06}` }}>
              <span style={{ fontSize: 13, color: C.ink70 }}>{r.k}</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: C.navy, fontFamily: r.mono ? F.mono : F.ui }}>{r.v}</span>
            </div>
          ))}
        </Card>

        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, margin: '16px 0' }}>
          <div style={{ width: 20, height: 20, borderRadius: 5, background: C.orange, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
            <Ico name="check" size={14} color="#fff" />
          </div>
          <span style={{ fontSize: 12, color: C.ink70, lineHeight: 1.5 }}>
            I confirm the documents submitted are authentic and belong to me.
          </span>
        </div>

        <PrimaryButton onClick={() => router.push('/kyc/pending')}>Submit for review</PrimaryButton>
      </div>
    </Screen>
  );
}
