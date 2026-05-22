// Mockup: S54 Edit Profile
'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { TopHeader } from '@/components/chrome/TopHeader';
import { Input } from '@/components/ui/Input';
import { Avatar } from '@/components/ui/Avatar';
import { Badge } from '@/components/ui/Badge';
import { Ico } from '@/components/ui/Ico';
import { C } from '@/lib/tokens';

export default function S54_EditProfile() {
  const router = useRouter();

  return (
    <Screen>
      <TopHeader
        title="Edit profile"
        right={<span onClick={() => router.push('/profile')} style={{ fontSize: 14, color: C.orange, fontWeight: 700, cursor: 'pointer' }}>Save</span>}
      />
      <div style={{ padding: '8px 20px 40px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px 0' }}>
          <div style={{ position: 'relative' }}>
            <Avatar name="Amelia Bankole" size={108} />
            <div style={{ position: 'absolute', bottom: 0, right: 0, width: 36, height: 36, borderRadius: 18, background: C.orange, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '3px solid #fff' }}>
              <Ico name="camera" size={16} color="#fff" />
            </div>
          </div>
          <span style={{ marginTop: 12, fontSize: 13, color: C.orange, fontWeight: 700 }}>Change photo</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <Input label="First name" value="Amelia" />
          <Input label="Last name" value="Bankole" />
          <Input label="Email" value="amelia@email.com" icon={<Ico name="mail" size={18} color={C.ink50} />} right={<Badge kind="green" size="sm">verified</Badge>} />
          <Input label="Phone" value="+44 7•• ••• 4821" icon={<Ico name="phone" size={18} color={C.ink50} />} />

          <div>
            <label style={{ fontSize: 13, fontWeight: 600, color: C.ink }}>Bio</label>
            <div style={{ background: '#fff', borderRadius: 12, border: `1px solid ${C.ink12}`, padding: 14, marginTop: 6, minHeight: 96, fontSize: 14, color: C.ink, lineHeight: 1.5 }}>
              Lagos-born, London-based product designer. Loves long stays, slow mornings, and finding the best coffee.
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: C.ink50, marginTop: 4 }}>
              <span>Max 250 characters</span>
              <span>118 / 250</span>
            </div>
          </div>

          <div>
            <label style={{ fontSize: 13, fontWeight: 600, color: C.ink, marginBottom: 6, display: 'block' }}>Language</label>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, height: 52, padding: '0 16px', borderRadius: 12, background: '#fff', border: `1px solid ${C.ink12}` }}>
              <Ico name="globe" size={18} color={C.ink50} />
              <span style={{ flex: 1, fontSize: 15 }}>English (UK)</span>
              <Ico name="chev-d" size={16} color={C.ink50} />
            </div>
          </div>

          <div>
            <label style={{ fontSize: 13, fontWeight: 600, color: C.ink, marginBottom: 6, display: 'block' }}>Timezone</label>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, height: 52, padding: '0 16px', borderRadius: 12, background: '#fff', border: `1px solid ${C.ink12}` }}>
              <Ico name="pin" size={18} color={C.ink50} />
              <span style={{ flex: 1, fontSize: 15 }}>(GMT+0) London</span>
              <Ico name="chev-d" size={16} color={C.ink50} />
            </div>
          </div>
        </div>
      </div>
    </Screen>
  );
}
