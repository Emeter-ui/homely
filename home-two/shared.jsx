// shared.jsx — Homely brand tokens + primitive UI components used across all screens.
// All components are exported to window so they're available to every Babel file.

const C = /* Homely color tokens */ {
  navy: '#000066',
  navySoft: '#1a1a7a',
  orange: '#F48536',
  orangeSoft: '#FFB47A',
  green: '#99CC33',
  greenSoft: '#C9E58A',
  pale: '#FEF3EB',
  paleDeep: '#FBE7D3',
  ink: '#000000',
  ink70: 'rgba(0,0,0,0.70)',
  ink50: 'rgba(0,0,0,0.50)',
  ink30: 'rgba(0,0,0,0.30)',
  ink12: 'rgba(0,0,0,0.12)',
  ink06: 'rgba(0,0,0,0.06)',
  red: '#E53E3E',
  white: '#FFFFFF',
};

const F = {
  ui: '"Inter", -apple-system, system-ui, sans-serif',
  mono: '"JetBrains Mono", ui-monospace, monospace',
};

// Mobile frame wrapper — light pale background, no device chrome (canvas already supplies it).
// We render our own thin status bar in the brand palette to keep the canvas tidy.
function Screen({ children, bg = C.pale, dark = false, statusBarDark = false, padBottom = 0, scroll = true }) {
  return (
    <div style={{
      width: 390, height: 844, position: 'relative', overflow: 'hidden',
      background: bg, fontFamily: F.ui,
      color: dark ? C.white : C.ink,
      display: 'flex', flexDirection: 'column',
      WebkitFontSmoothing: 'antialiased',
    }}>
      <StatusBar dark={statusBarDark || dark} />
      <div style={{
        flex: 1, overflow: scroll ? 'auto' : 'hidden', position: 'relative',
        paddingBottom: padBottom,
      }}>{children}</div>
      <HomeIndicator dark={dark} />
    </div>
  );
}

function StatusBar({ dark = false, time = '9:41' }) {
  const c = dark ? '#fff' : '#000';
  return (
    <div style={{
      height: 47, display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', padding: '0 28px',
      fontFamily: F.ui, fontWeight: 600, fontSize: 15, color: c,
      flexShrink: 0, position: 'relative', zIndex: 5,
    }}>
      <span>{time}</span>
      <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
        <svg width="17" height="11" viewBox="0 0 17 11"><rect x="0" y="7" width="3" height="4" rx="0.5" fill={c}/><rect x="4.5" y="5" width="3" height="6" rx="0.5" fill={c}/><rect x="9" y="2.5" width="3" height="8.5" rx="0.5" fill={c}/><rect x="13.5" y="0" width="3" height="11" rx="0.5" fill={c}/></svg>
        <svg width="24" height="11" viewBox="0 0 24 11"><rect x="0.5" y="0.5" width="20" height="10" rx="2.5" stroke={c} strokeOpacity="0.4" fill="none"/><rect x="2" y="2" width="17" height="7" rx="1.5" fill={c}/><rect x="21.5" y="3.5" width="1.5" height="4" rx="0.5" fill={c} opacity="0.5"/></svg>
      </div>
    </div>
  );
}

function HomeIndicator({ dark = false }) {
  return (
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0, height: 24,
      display: 'flex', justifyContent: 'center', alignItems: 'flex-end',
      paddingBottom: 7, pointerEvents: 'none', zIndex: 100,
    }}>
      <div style={{ width: 134, height: 5, borderRadius: 100,
        background: dark ? 'rgba(255,255,255,0.85)' : 'rgba(0,0,0,0.55)' }} />
    </div>
  );
}

// Top header — used on most internal screens
function TopHeader({ title, back = true, dark = false, right, subtitle }) {
  const fg = dark ? C.white : C.ink;
  return (
    <div style={{
      padding: '8px 16px 12px', display: 'flex', alignItems: 'center', gap: 12,
      background: dark ? C.navy : 'transparent', color: fg,
      borderBottom: dark ? 'none' : `1px solid ${C.ink06}`,
    }}>
      {back && (
        <div style={{
          width: 36, height: 36, borderRadius: 18, display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          background: dark ? 'rgba(255,255,255,0.1)' : C.white,
          border: dark ? 'none' : `1px solid ${C.ink06}`,
        }}>
          <svg width="10" height="16" viewBox="0 0 10 16"><path d="M8 1L1 8l7 7" stroke={fg} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
      )}
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 17, fontWeight: 700, letterSpacing: -0.2 }}>{title}</div>
        {subtitle && <div style={{ fontSize: 12, color: dark ? 'rgba(255,255,255,0.7)' : C.ink50 }}>{subtitle}</div>}
      </div>
      {right}
    </div>
  );
}

// Navy header (taller, brand-forward)
function NavyHeader({ title, subtitle, back = true, right }) {
  return (
    <div style={{
      background: C.navy, color: C.white,
      padding: '8px 16px 18px',
      borderRadius: '0 0 20px 20px',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, minHeight: 36 }}>
        {back && (
          <div style={{
            width: 36, height: 36, borderRadius: 18, display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            background: 'rgba(255,255,255,0.12)',
          }}>
            <svg width="10" height="16" viewBox="0 0 10 16"><path d="M8 1L1 8l7 7" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
        )}
        <div style={{ flex: 1, fontSize: 17, fontWeight: 700 }}>{title}</div>
        {right}
      </div>
      {subtitle && <div style={{ marginTop: 10, fontSize: 13, color: 'rgba(255,255,255,0.75)', lineHeight: 1.45 }}>{subtitle}</div>}
    </div>
  );
}

// Primary CTA — orange fill, white text, pill
function PrimaryButton({ children, full = true, size = 'md', icon, style }) {
  const sizes = {
    md: { h: 52, fs: 15, px: 24 },
    lg: { h: 56, fs: 16, px: 28 },
    sm: { h: 40, fs: 14, px: 18 },
  };
  const s = sizes[size];
  return (
    <button style={{
      height: s.h, padding: `0 ${s.px}px`, borderRadius: s.h / 2,
      background: C.orange, color: C.white, border: 'none',
      fontFamily: F.ui, fontWeight: 600, fontSize: s.fs, letterSpacing: -0.1,
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
      width: full ? '100%' : 'auto', cursor: 'pointer',
      boxShadow: `0 8px 18px ${hexA(C.orange, 0.28)}`,
      ...style,
    }}>{icon}<span>{children}</span></button>
  );
}

// Secondary / ghost — navy outline, navy text
function GhostButton({ children, full = true, size = 'md', style }) {
  const sizes = {
    md: { h: 52, fs: 15, px: 24 },
    lg: { h: 56, fs: 16, px: 28 },
    sm: { h: 40, fs: 14, px: 18 },
  };
  const s = sizes[size];
  return (
    <button style={{
      height: s.h, padding: `0 ${s.px}px`, borderRadius: s.h / 2,
      background: 'transparent', color: C.navy,
      border: `1.5px solid ${C.navy}`,
      fontFamily: F.ui, fontWeight: 600, fontSize: s.fs, letterSpacing: -0.1,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      width: full ? '100%' : 'auto', cursor: 'pointer',
      ...style,
    }}>{children}</button>
  );
}

function DangerButton({ children, full = true, style }) {
  return (
    <button style={{
      height: 52, padding: '0 24px', borderRadius: 26,
      background: C.red, color: C.white, border: 'none',
      fontFamily: F.ui, fontWeight: 600, fontSize: 15,
      width: full ? '100%' : 'auto', cursor: 'pointer',
      ...style,
    }}>{children}</button>
  );
}

// Text input
function Input({ label, placeholder, value, type = 'text', icon, right, error, hint }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      {label && <label style={{ fontSize: 13, fontWeight: 600, color: C.ink, letterSpacing: -0.1 }}>{label}</label>}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        height: 52, padding: '0 16px', borderRadius: 12,
        background: C.white, border: `1px solid ${error ? C.red : C.ink12}`,
      }}>
        {icon}
        {type === 'password'
          ? <span style={{ flex: 1, fontSize: 15, letterSpacing: 4, color: C.ink }}>{value ? '•'.repeat(value.length) : ''}{!value && <span style={{ color: C.ink30, letterSpacing: -0.1 }}>{placeholder}</span>}</span>
          : <span style={{ flex: 1, fontSize: 15, color: value ? C.ink : C.ink30 }}>{value || placeholder}</span>}
        {right}
      </div>
      {hint && !error && <span style={{ fontSize: 12, color: C.ink50 }}>{hint}</span>}
      {error && <span style={{ fontSize: 12, color: C.red }}>{error}</span>}
    </div>
  );
}

// Badge
function Badge({ children, kind = 'green', size = 'md' }) {
  const map = {
    green: { bg: hexA(C.green, 0.2), fg: '#3d6610', dot: C.green },
    orange: { bg: hexA(C.orange, 0.15), fg: '#a4541a', dot: C.orange },
    navy: { bg: hexA(C.navy, 0.1), fg: C.navy, dot: C.navy },
    red: { bg: hexA(C.red, 0.12), fg: '#a82a2a', dot: C.red },
    gray: { bg: C.ink06, fg: C.ink70, dot: C.ink50 },
  };
  const m = map[kind];
  const sizeMap = { md: { fs: 12, h: 24, px: 10 }, sm: { fs: 11, h: 20, px: 8 } };
  const s = sizeMap[size];
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      background: m.bg, color: m.fg, height: s.h, padding: `0 ${s.px}px`,
      borderRadius: s.h / 2, fontSize: s.fs, fontWeight: 600,
    }}>
      <span style={{ width: 6, height: 6, borderRadius: 3, background: m.dot }} />
      {children}
    </span>
  );
}

// Verified shield badge — Martian Green
function VerifiedBadge({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18">
      <path d="M9 1L2 4v5c0 4 3 7 7 8 4-1 7-4 7-8V4l-7-3z" fill={C.green}/>
      <path d="M5.5 9L8 11.5 12.5 6.5" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Image placeholder — subtle stripes + monospace caption
function ImagePh({ w = '100%', h = 200, label = 'image', radius = 12, tone = 'pale', style }) {
  const tones = {
    pale: { bg: C.paleDeep, stripe: 'rgba(0,0,0,0.04)', fg: C.ink50 },
    navy: { bg: C.navy, stripe: 'rgba(255,255,255,0.06)', fg: 'rgba(255,255,255,0.65)' },
    dark: { bg: '#1f1f33', stripe: 'rgba(255,255,255,0.05)', fg: 'rgba(255,255,255,0.55)' },
    light: { bg: '#ECE6DC', stripe: 'rgba(0,0,0,0.04)', fg: C.ink50 },
  };
  const t = tones[tone] || tones.pale;
  return (
    <div style={{
      width: w, height: h, borderRadius: radius, position: 'relative',
      background: `repeating-linear-gradient(135deg, ${t.bg} 0 12px, ${t.stripe} 12px 13px), ${t.bg}`,
      overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center',
      ...style,
    }}>
      <span style={{
        fontFamily: F.mono, fontSize: 10, color: t.fg, letterSpacing: 0.5,
        textTransform: 'uppercase', padding: '4px 8px', borderRadius: 4,
        background: 'rgba(0,0,0,0.03)',
      }}>{label}</span>
    </div>
  );
}

// Card surface
function Card({ children, style, p = 16 }) {
  return (
    <div style={{
      background: C.white, borderRadius: 16, padding: p,
      border: `1px solid ${C.ink06}`,
      ...style,
    }}>{children}</div>
  );
}

// Bottom nav bar (guest)
function BottomNav({ active = 'home', dark = false }) {
  const items = [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'search', label: 'Search', icon: 'search' },
    { id: 'bookings', label: 'Bookings', icon: 'calendar' },
    { id: 'favs', label: 'Saved', icon: 'heart' },
    { id: 'profile', label: 'Profile', icon: 'user' },
  ];
  return (
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0,
      height: 82, paddingBottom: 24, paddingTop: 8,
      background: dark ? C.navy : C.white,
      borderTop: `1px solid ${dark ? 'rgba(255,255,255,0.1)' : C.ink06}`,
      display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start',
      zIndex: 50,
    }}>
      {items.map(it => {
        const a = it.id === active;
        const color = a ? C.orange : (dark ? 'rgba(255,255,255,0.55)' : C.ink50);
        return (
          <div key={it.id} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
            color, fontSize: 10, fontWeight: 600, flex: 1,
          }}>
            <NavIcon kind={it.icon} color={color} filled={a} />
            <span>{it.label}</span>
          </div>
        );
      })}
    </div>
  );
}

function NavIcon({ kind, color, filled }) {
  const s = { width: 22, height: 22, stroke: color, fill: filled ? color : 'none', strokeWidth: 1.8 };
  switch (kind) {
    case 'home':
      return <svg viewBox="0 0 24 24" width={s.width} height={s.height}><path d="M3 11l9-7 9 7v9a1 1 0 01-1 1h-5v-6h-6v6H4a1 1 0 01-1-1v-9z" stroke={s.stroke} strokeWidth={s.strokeWidth} fill={s.fill} strokeLinejoin="round"/></svg>;
    case 'search':
      return <svg viewBox="0 0 24 24" width={s.width} height={s.height}><circle cx="11" cy="11" r="7" stroke={s.stroke} strokeWidth={s.strokeWidth} fill={filled ? hexA(color, 0.15) : 'none'}/><path d="M20 20l-3.5-3.5" stroke={s.stroke} strokeWidth={s.strokeWidth} strokeLinecap="round"/></svg>;
    case 'calendar':
      return <svg viewBox="0 0 24 24" width={s.width} height={s.height}><rect x="3" y="5" width="18" height="16" rx="2" stroke={s.stroke} strokeWidth={s.strokeWidth} fill={filled ? hexA(color, 0.15) : 'none'}/><path d="M3 10h18M8 3v4M16 3v4" stroke={s.stroke} strokeWidth={s.strokeWidth} strokeLinecap="round"/></svg>;
    case 'heart':
      return <svg viewBox="0 0 24 24" width={s.width} height={s.height}><path d="M12 21s-7-4.5-9.5-9.5C1 7.5 4 4 7.5 4c2 0 3.5 1 4.5 2.5C13 5 14.5 4 16.5 4 20 4 23 7.5 21.5 11.5 19 16.5 12 21 12 21z" stroke={s.stroke} strokeWidth={s.strokeWidth} fill={s.fill} strokeLinejoin="round"/></svg>;
    case 'user':
      return <svg viewBox="0 0 24 24" width={s.width} height={s.height}><circle cx="12" cy="8" r="4" stroke={s.stroke} strokeWidth={s.strokeWidth} fill={filled ? hexA(color, 0.15) : 'none'}/><path d="M4 21c0-4.5 3.5-8 8-8s8 3.5 8 8" stroke={s.stroke} strokeWidth={s.strokeWidth} strokeLinecap="round" fill="none"/></svg>;
  }
}

// Generic icon
function Ico({ name, size = 20, color = C.ink }) {
  const sw = 1.8;
  const p = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth: sw, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (name) {
    case 'mail': return <svg {...p}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>;
    case 'lock': return <svg {...p}><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/></svg>;
    case 'eye': return <svg {...p}><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>;
    case 'user': return <svg {...p}><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.5 3.5-8 8-8s8 3.5 8 8"/></svg>;
    case 'phone': return <svg {...p}><path d="M5 4h4l2 5-3 2a12 12 0 006 6l2-3 5 2v4a2 2 0 01-2 2A18 18 0 013 6a2 2 0 012-2z"/></svg>;
    case 'google': return <svg width={size} height={size} viewBox="0 0 24 24"><path d="M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.4c-.2 1.2-1 2.3-2.1 3v2.5h3.4c2-1.8 3.1-4.5 3.1-7.3z" fill="#4285F4"/><path d="M12 22c2.8 0 5.2-.9 7-2.5l-3.4-2.6c-.9.6-2.1 1-3.6 1-2.8 0-5.1-1.9-6-4.4H2.5v2.7C4.3 19.6 7.9 22 12 22z" fill="#34A853"/><path d="M6 13.5c-.2-.6-.4-1.3-.4-2s.1-1.4.4-2V6.8H2.5C1.8 8.4 1.4 10.1 1.4 12s.4 3.6 1.1 5.2L6 13.5z" fill="#FBBC04"/><path d="M12 5.5c1.6 0 3 .6 4.1 1.6l3-3C17.2 2.5 14.8 1.5 12 1.5 7.9 1.5 4.3 3.9 2.5 7.5L6 10.2c.9-2.5 3.2-4.7 6-4.7z" fill="#EA4335"/></svg>;
    case 'apple': return <svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M17.6 12.5c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.5-.2-2.9.9-3.6.9-.8 0-1.9-.9-3.1-.8-1.6 0-3.1 1-3.9 2.4-1.7 2.9-.4 7.2 1.2 9.6.8 1.2 1.7 2.5 3 2.4 1.2 0 1.7-.8 3.1-.8 1.4 0 1.9.8 3.1.7 1.3 0 2.1-1.2 2.9-2.4.9-1.4 1.3-2.7 1.3-2.8-.1-.1-2.5-1-2.6-3.9zm-2.4-7.1c.7-.8 1.1-2 1-3.1-1 0-2.2.7-2.9 1.5-.6.7-1.2 1.9-1 3 1.1.1 2.3-.6 2.9-1.4z"/></svg>;
    case 'star': return <svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M12 2l3 6.5 7 1-5 5 1 7-6-3.5L6 21.5l1-7-5-5 7-1L12 2z"/></svg>;
    case 'heart': return <svg {...p}><path d="M12 21s-7-4.5-9.5-9.5C1 7.5 4 4 7.5 4c2 0 3.5 1 4.5 2.5C13 5 14.5 4 16.5 4 20 4 23 7.5 21.5 11.5 19 16.5 12 21 12 21z"/></svg>;
    case 'heart-fill': return <svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M12 21s-7-4.5-9.5-9.5C1 7.5 4 4 7.5 4c2 0 3.5 1 4.5 2.5C13 5 14.5 4 16.5 4 20 4 23 7.5 21.5 11.5 19 16.5 12 21 12 21z"/></svg>;
    case 'search': return <svg {...p}><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>;
    case 'filter': return <svg {...p}><path d="M3 5h18M6 12h12M10 19h4"/></svg>;
    case 'map': return <svg {...p}><path d="M9 4l-6 2v14l6-2 6 2 6-2V4l-6 2-6-2z"/><path d="M9 4v14M15 6v14"/></svg>;
    case 'pin': return <svg {...p}><path d="M12 21s-7-7-7-12a7 7 0 0114 0c0 5-7 12-7 12z"/><circle cx="12" cy="9" r="3"/></svg>;
    case 'wifi': return <svg {...p}><path d="M5 12.5a10 10 0 0114 0M8 16a6 6 0 018 0M12 19h.01"/></svg>;
    case 'check': return <svg {...p}><path d="M4 12l5 5L20 6"/></svg>;
    case 'check-c': return <svg {...p}><circle cx="12" cy="12" r="9"/><path d="M8 12l3 3 5-6"/></svg>;
    case 'x': return <svg {...p}><path d="M5 5l14 14M19 5L5 19"/></svg>;
    case 'x-c': return <svg {...p}><circle cx="12" cy="12" r="9"/><path d="M9 9l6 6M15 9l-6 6"/></svg>;
    case 'plus': return <svg {...p}><path d="M12 5v14M5 12h14"/></svg>;
    case 'minus': return <svg {...p}><path d="M5 12h14"/></svg>;
    case 'chev-r': return <svg {...p}><path d="M9 6l6 6-6 6"/></svg>;
    case 'chev-l': return <svg {...p}><path d="M15 6l-6 6 6 6"/></svg>;
    case 'chev-d': return <svg {...p}><path d="M6 9l6 6 6-6"/></svg>;
    case 'chev-u': return <svg {...p}><path d="M6 15l6-6 6 6"/></svg>;
    case 'arr-r': return <svg {...p}><path d="M4 12h16M14 6l6 6-6 6"/></svg>;
    case 'bell': return <svg {...p}><path d="M6 8a6 6 0 0112 0c0 7 3 8 3 8H3s3-1 3-8M10 21a2 2 0 004 0"/></svg>;
    case 'settings': return <svg {...p}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.8-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 11-4 0v-.1a1.7 1.7 0 00-1-1.5 1.7 1.7 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.8 1.7 1.7 0 00-1.5-1H3a2 2 0 110-4h.1a1.7 1.7 0 001.5-1 1.7 1.7 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.8.3h.1a1.7 1.7 0 001-1.5V3a2 2 0 114 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.8v.1a1.7 1.7 0 001.5 1H21a2 2 0 110 4h-.1a1.7 1.7 0 00-1.5 1z"/></svg>;
    case 'edit': return <svg {...p}><path d="M12 20h9M16.5 3.5a2.1 2.1 0 113 3L7 19l-4 1 1-4 12.5-12.5z"/></svg>;
    case 'trash': return <svg {...p}><path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/></svg>;
    case 'camera': return <svg {...p}><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>;
    case 'upload': return <svg {...p}><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"/></svg>;
    case 'share': return <svg {...p}><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5L15.4 17.5M15.4 6.5L8.6 10.5"/></svg>;
    case 'msg': return <svg {...p}><path d="M21 12a8 8 0 01-12 7l-5 1 1-5a8 8 0 1116-3z"/></svg>;
    case 'card': return <svg {...p}><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>;
    case 'wallet': return <svg {...p}><path d="M21 7H5a2 2 0 00-2 2v9a2 2 0 002 2h16V7zM3 7V5a2 2 0 012-2h11v4"/><circle cx="17" cy="14" r="1.5"/></svg>;
    case 'doc': return <svg {...p}><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"/><path d="M14 2v6h6M8 13h8M8 17h8M8 9h2"/></svg>;
    case 'home': return <svg {...p}><path d="M3 11l9-7 9 7v9a1 1 0 01-1 1h-5v-6h-6v6H4a1 1 0 01-1-1v-9z"/></svg>;
    case 'bed': return <svg {...p}><path d="M2 18v-7a2 2 0 012-2h16a2 2 0 012 2v7M2 14h20M6 9V5h6v4"/></svg>;
    case 'bath': return <svg {...p}><path d="M3 12h18v4a3 3 0 01-3 3H6a3 3 0 01-3-3v-4zM7 12V6a2 2 0 014 0M3 19l1 2M21 19l-1 2"/></svg>;
    case 'wifi-amenity': return <svg {...p}><path d="M5 12.5a10 10 0 0114 0M8 16a6 6 0 018 0M12 19h.01"/></svg>;
    case 'parking': return <svg {...p}><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 17V7h4a3 3 0 010 6H9"/></svg>;
    case 'kitchen': return <svg {...p}><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 3v6M15 13v8"/></svg>;
    case 'sun': return <svg {...p}><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2 12h2M20 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>;
    case 'moon': return <svg {...p}><path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z"/></svg>;
    case 'info': return <svg {...p}><circle cx="12" cy="12" r="9"/><path d="M12 8v.01M11 12h1v5h1"/></svg>;
    case 'alert': return <svg {...p}><path d="M12 2L2 21h20L12 2zM12 9v5M12 18v.01"/></svg>;
    case 'logout': return <svg {...p}><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9"/></svg>;
    case 'globe': return <svg {...p}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg>;
    case 'flag': return <svg {...p}><path d="M4 21V4M4 4h13l-2 4 2 4H4"/></svg>;
    case 'qr': return <svg {...p}><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><path d="M14 14h3v3M21 14v3M14 21h7"/></svg>;
    case 'sliders': return <svg {...p}><path d="M4 21V14M4 10V3M12 21V12M12 8V3M20 21V16M20 12V3M1 14h6M9 8h6M17 16h6"/></svg>;
    case 'wave': return <svg {...p}><path d="M2 12c2-3 4-3 6 0s4 3 6 0 4-3 6 0"/></svg>;
    case 'tree': return <svg {...p}><path d="M12 2L5 13h3l-2 5h4v4h4v-4h4l-2-5h3L12 2z"/></svg>;
    case 'building': return <svg {...p}><rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 9h.01M15 9h.01M9 13h.01M15 13h.01M9 17h.01M15 17h.01"/></svg>;
    case 'paperclip': return <svg {...p}><path d="M21 11.5l-9 9a6 6 0 11-8.5-8.5l9-9a4 4 0 015.5 5.5L9.5 16a2 2 0 11-3-3L15 5"/></svg>;
    case 'send': return <svg {...p}><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>;
    case 'download': return <svg {...p}><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>;
    case 'copy': return <svg {...p}><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>;
    case 'shield': return <svg {...p}><path d="M12 2l9 4v6c0 5-3.5 9-9 10-5.5-1-9-5-9-10V6l9-4z"/></svg>;
    case 'flame': return <svg {...p}><path d="M12 2s5 5 5 10a5 5 0 11-10 0c0-3 2-4 2-7 0 0 3 1 3 4 0-3 0-7 0-7z"/></svg>;
    case 'menu': return <svg {...p}><path d="M3 6h18M3 12h18M3 18h18"/></svg>;
    case 'more': return <svg {...p}><circle cx="5" cy="12" r="1.5" fill={color} stroke="none"/><circle cx="12" cy="12" r="1.5" fill={color} stroke="none"/><circle cx="19" cy="12" r="1.5" fill={color} stroke="none"/></svg>;
    case 'sparkle': return <svg {...p}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/></svg>;
    default: return <svg {...p}><circle cx="12" cy="12" r="9"/></svg>;
  }
}

function hexA(hex, a) {
  const h = hex.replace('#','');
  const r = parseInt(h.slice(0,2),16), g = parseInt(h.slice(2,4),16), b = parseInt(h.slice(4,6),16);
  return `rgba(${r},${g},${b},${a})`;
}

// Avatar circle
function Avatar({ src, name = '?', size = 40, verified = false, ring = false }) {
  const initials = name.split(' ').map(s => s[0]).slice(0,2).join('').toUpperCase();
  const colors = ['#000066', '#F48536', '#99CC33', '#7c5fc5', '#3a8fb7'];
  const c = colors[name.charCodeAt(0) % colors.length];
  return (
    <div style={{ position: 'relative', width: size, height: size, flexShrink: 0 }}>
      <div style={{
        width: size, height: size, borderRadius: size/2,
        background: c, color: '#fff', display: 'flex',
        alignItems: 'center', justifyContent: 'center',
        fontSize: size * 0.36, fontWeight: 600, fontFamily: F.ui,
        border: ring ? `2px solid ${C.orange}` : 'none',
      }}>{initials}</div>
      {verified && (
        <div style={{
          position: 'absolute', bottom: -2, right: -2,
          width: size * 0.4, height: size * 0.4, borderRadius: size*0.2,
          background: C.green, border: '2px solid #fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width={size*0.2} height={size*0.2} viewBox="0 0 12 12"><path d="M3 6l2 2 4-4" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
      )}
    </div>
  );
}

// Star rating
function Stars({ value = 5, max = 5, size = 14 }) {
  return (
    <div style={{ display: 'inline-flex', gap: 2 }}>
      {Array.from({ length: max }).map((_, i) => (
        <Ico key={i} name="star" size={size} color={i < value ? C.orange : C.ink12} />
      ))}
    </div>
  );
}

// Logo mark
function Logo({ size = 32, color = C.white, withWord = true }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <svg width={size} height={size} viewBox="0 0 32 32">
        <path d="M4 16L16 4l12 12v12a2 2 0 01-2 2h-6V20h-8v10H6a2 2 0 01-2-2V16z" fill={color} />
        <circle cx="16" cy="13" r="3" fill={C.orange} />
      </svg>
      {withWord && <span style={{ fontFamily: F.ui, fontWeight: 800, fontSize: size * 0.62, color, letterSpacing: -0.5 }}>homely</span>}
    </div>
  );
}

Object.assign(window, {
  C, F, Screen, StatusBar, HomeIndicator, TopHeader, NavyHeader,
  PrimaryButton, GhostButton, DangerButton, Input, Badge, VerifiedBadge,
  ImagePh, Card, BottomNav, NavIcon, Ico, hexA, Avatar, Stars, Logo,
});
