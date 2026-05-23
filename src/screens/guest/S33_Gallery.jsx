// Mockup: S33 Image gallery fullscreen
'use client';

import { useRouter } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { Ico } from '@/components/ui/Ico';
import { ImagePh } from '@/components/ui/ImagePh';
import { C } from '@/lib/tokens';

export default function S33_Gallery() {
  const router = useRouter();

  return (
    <Screen bg="#000" dark scroll={false}>
      <div style={{ position: 'absolute', inset: 0, background: '#000' }}>
        <div style={{ position: 'absolute', top: 56, left: 16, right: 16, display: 'flex', alignItems: 'center', justifyContent: 'space-between', zIndex: 5 }}>
          <div
            onClick={() => router.back()}
            style={{ width: 40, height: 40, borderRadius: 20, background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
          >
            <Ico name="x" size={20} color="#fff" />
          </div>
          <div style={{ background: 'rgba(255,255,255,0.15)', padding: '6px 14px', borderRadius: 14, color: '#fff', fontSize: 13, fontWeight: 700 }}>4 / 24</div>
          <div style={{ width: 40, height: 40, borderRadius: 20, background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Ico name="share" size={18} color="#fff" />
          </div>
        </div>
        {/* Big image */}
        <div style={{ position: 'absolute', top: 120, left: 0, right: 0, bottom: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 8 }}>
          <ImagePh w="100%" h="100%" label="image · 4" radius={14} tone="dark" />
        </div>
        {/* Thumbs strip */}
        <div style={{ position: 'absolute', bottom: 100, left: 16, right: 16, display: 'flex', gap: 8, overflowX: 'auto' }}>
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} style={{ width: 56, height: 56, borderRadius: 8, position: 'relative', flexShrink: 0,
              border: i === 3 ? `2px solid ${C.orange}` : `1px solid rgba(255,255,255,0.2)`, overflow: 'hidden' }}>
              <ImagePh w="100%" h="100%" label={String(i+1)} radius={6} tone="dark" />
            </div>
          ))}
        </div>
        {/* Caption */}
        <div style={{ position: 'absolute', bottom: 40, left: 16, right: 16, color: '#fff', textAlign: 'center', fontSize: 13, opacity: 0.85 }}>
          Living room — afternoon light
        </div>
      </div>
    </Screen>
  );
}
