import { C, hexA } from '@/lib/tokens';

export function DesktopBlock() {
  return (
    <div style={{
      position: 'fixed', inset: 0, background: C.pale,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 32, fontFamily: 'var(--font-inter)',
    }}>
      <div style={{
        maxWidth: 420, width: '100%', background: C.white,
        borderRadius: 24, padding: 32, textAlign: 'center',
        boxShadow: `0 12px 40px ${hexA(C.navy, 0.12)}`,
      }}>
        <div style={{
          width: 64, height: 64, borderRadius: 16,
          background: C.navy, color: C.white,
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: 24, fontSize: 24, fontWeight: 800, letterSpacing: -0.5,
        }}>H</div>
        <h1 style={{
          margin: '0 0 12px', fontSize: 28, fontWeight: 800,
          color: C.navy, letterSpacing: -0.8,
        }}>
          Homely is mobile-first
        </h1>
        <p style={{ margin: '0 0 24px', fontSize: 15, color: C.ink70, lineHeight: 1.5 }}>
          Open this on your phone for the full experience.
        </p>
        <!-- Phone view mockup container -->
        <div style={{
          width: 200,
          height: 400,
          margin: '0 auto 24px',
          borderRadius: 24,
          border: `4px solid ${C.navy}`,
          background: C.white,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}>
          {/* Inner placeholder representing the app UI on the phone */}
          <div style={{
            width: '100%',
            height: '100%',
            background: hexA(C.navy, 0.06),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 12,
            color: C.ink50,
          }}>
            Phone view mockup
          </div>
        </div>
        <!-- QR placeholder remains -->
        <div style={{
          width: 160, height: 160, margin: '0 auto 24px',
          background: hexA(C.navy, 0.06), borderRadius: 12,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 12, color: C.ink50,
        }}>
          QR placeholder
        </div>
        <p style={{ margin: 0, fontSize: 12, color: C.ink50 }}>
          Or resize your browser window to under 500px wide to preview.
        </p>
      </div>
    </div>
  );
}
