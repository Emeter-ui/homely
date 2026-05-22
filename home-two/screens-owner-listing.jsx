// screens-owner-listing.jsx — Section 4.1–4.2 (screens 58–76): Owner dashboard + listing management

// Owner bottom nav — different items than guest
function OwnerNav({ active = 'dash' }) {
  const items = [
    { id: 'dash', label: 'Dashboard', icon: 'sparkle' },
    { id: 'rentals', label: 'Rentals', icon: 'building' },
    { id: 'bookings', label: 'Reservations', icon: 'calendar' },
    { id: 'msg', label: 'Inbox', icon: 'msg' },
    { id: 'profile', label: 'Profile', icon: 'user' },
  ];
  return (
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0,
      height: 82, paddingBottom: 24, paddingTop: 8,
      background: C.white, borderTop: `1px solid ${C.ink06}`,
      display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start', zIndex: 50,
    }}>
      {items.map(it => {
        const a = it.id === active;
        const color = a ? C.orange : C.ink50;
        return (
          <div key={it.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, color, fontSize: 10, fontWeight: 600, flex: 1 }}>
            <Ico name={it.icon} size={20} color={color} />
            <span>{it.label}</span>
          </div>
        );
      })}
    </div>
  );
}

// Wizard top — back chevron + step pill + progress
function WizardHeader({ step, total = 9, title, sub }) {
  return (
    <div>
      <div style={{ padding: '8px 16px 12px', display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ width: 36, height: 36, borderRadius: 18, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${C.ink06}` }}>
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

function WizardFooter({ next = 'Continue', back = true }) {
  return (
    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '14px 16px 24px', background: '#fff', borderTop: `1px solid ${C.ink06}`, display: 'flex', gap: 10, zIndex: 50 }}>
      {back && <GhostButton style={{ width: 100, flex: 'none' }} size="md">Back</GhostButton>}
      <PrimaryButton>{next}</PrimaryButton>
    </div>
  );
}

// Bar chart for revenue
function BarChart({ values, labels, color = C.orange, height = 100 }) {
  const max = Math.max(...values);
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height, padding: '0 4px' }}>
      {values.map((v, i) => (
        <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, height: '100%' }}>
          <div style={{ flex: 1, width: '100%', display: 'flex', alignItems: 'flex-end' }}>
            <div style={{ width: '100%', height: `${(v/max)*100}%`, background: i === values.length - 1 ? C.navy : color, borderRadius: '4px 4px 0 0' }} />
          </div>
          {labels && <div style={{ fontSize: 9, color: C.ink50, fontWeight: 600 }}>{labels[i]}</div>}
        </div>
      ))}
    </div>
  );
}

// 58 — Owner Dashboard Home
function S58_OwnerDash() {
  return (
    <Screen padBottom={88}>
      <div style={{ background: C.navy, color: '#fff', padding: '16px 20px 80px', borderRadius: '0 0 28px 28px', position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>Welcome back,</div>
            <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: -0.3 }}>Tunde A. 👋</div>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <div style={{ width: 40, height: 40, borderRadius: 20, background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <Ico name="bell" size={18} color="#fff" />
              <div style={{ position: 'absolute', top: 8, right: 9, width: 8, height: 8, borderRadius: 4, background: C.orange, border: '2px solid #000066' }} />
            </div>
            <Avatar name="Tunde A" size={40} verified />
          </div>
        </div>
        <div style={{ marginTop: 20 }}>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)' }}>Revenue this month</div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginTop: 4 }}>
            <div style={{ fontSize: 36, fontWeight: 800, letterSpacing: -1.2 }}>£2,840</div>
            <Badge kind="green" size="sm">+18% MoM</Badge>
          </div>
          <div style={{ marginTop: 12 }}>
            <BarChart values={[18, 22, 28, 24, 32, 38, 36, 42]} labels={['M','T','W','T','F','S','S','M']} height={50} color="rgba(244,133,54,0.7)" />
          </div>
        </div>
      </div>

      <div style={{ padding: '0 20px', marginTop: -56 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {[
            { l: 'Active listings', v: '3', sub: '2 instant book', ic: 'building' },
            { l: 'This week', v: '6', sub: 'new bookings', ic: 'calendar' },
            { l: 'Occupancy', v: '82%', sub: 'next 30 days', ic: 'check-c' },
            { l: 'Avg rating', v: '4.92', sub: '184 reviews', ic: 'star' },
          ].map(s => (
            <Card key={s.l} p={12}>
              <Ico name={s.ic} size={18} color={C.orange} />
              <div style={{ fontSize: 22, fontWeight: 800, color: C.navy, marginTop: 6, letterSpacing: -0.5 }}>{s.v}</div>
              <div style={{ fontSize: 11, fontWeight: 600 }}>{s.l}</div>
              <div style={{ fontSize: 10, color: C.ink50, marginTop: 1 }}>{s.sub}</div>
            </Card>
          ))}
        </div>
      </div>

      {/* Upcoming check-ins */}
      <SectionHeader title="Upcoming check-ins" cta="See all" />
      <div style={{ padding: '8px 20px 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {[
          { n: 'Amelia B.', d: 'Today · 14:00', p: 'Ocean View Studio', tag: 'today' },
          { n: 'David O.', d: 'Tomorrow · 15:30', p: 'Tarkwa Bay Bungalow' },
          { n: 'Sofia P.', d: 'Fri 22 May · 16:00', p: 'Ocean View Studio' },
        ].map((b, i) => (
          <Card key={i} p={12}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <Avatar name={b.n} size={44} verified />
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ fontSize: 14, fontWeight: 700 }}>{b.n}</span>
                  {b.tag === 'today' && <Badge kind="orange" size="sm">Today</Badge>}
                </div>
                <div style={{ fontSize: 12, color: C.ink70 }}>{b.p}</div>
                <div style={{ fontSize: 11, color: C.ink50, marginTop: 2 }}>{b.d}</div>
              </div>
              <Ico name="msg" size={18} color={C.navy} />
            </div>
          </Card>
        ))}
      </div>

      {/* Quick actions */}
      <SectionHeader title="Quick actions" />
      <div style={{ padding: '8px 20px 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {[
          { ic: 'plus', l: 'New listing', orange: true },
          { ic: 'calendar', l: 'Block dates' },
          { ic: 'wallet', l: 'Payouts' },
          { ic: 'star', l: 'Reviews' },
        ].map(a => (
          <Card key={a.l} p={14}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: a.orange ? C.orange : C.pale, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Ico name={a.ic} size={18} color={a.orange ? '#fff' : C.navy} />
              </div>
              <span style={{ fontSize: 13, fontWeight: 700, color: C.navy }}>{a.l}</span>
            </div>
          </Card>
        ))}
      </div>
      <div style={{ height: 20 }} />
      <OwnerNav active="dash" />
    </Screen>
  );
}

// 59 — Revenue Analytics
function S59_RevenueAnalytics() {
  return (
    <Screen padBottom={88}>
      <TopHeader title="Revenue" right={<Ico name="download" size={20} color={C.navy} />} />
      <div style={{ padding: '8px 20px 30px' }}>
        {/* Period selector */}
        <div style={{ display: 'flex', gap: 4, padding: 4, background: C.white, borderRadius: 10, border: `1px solid ${C.ink06}`, marginBottom: 16 }}>
          {['Week', 'Month', 'Quarter', 'Year', 'All'].map((p, i) => (
            <div key={p} style={{ flex: 1, padding: '8px 0', textAlign: 'center', borderRadius: 7, background: i === 1 ? C.navy : 'transparent', color: i === 1 ? '#fff' : C.ink70, fontSize: 12, fontWeight: 600 }}>{p}</div>
          ))}
        </div>

        <Card p={16} style={{ marginBottom: 14 }}>
          <div style={{ fontSize: 11, color: C.ink50, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase' }}>Earnings · May 2026</div>
          <div style={{ fontSize: 36, fontWeight: 800, color: C.navy, letterSpacing: -1.2, marginTop: 2 }}>£2,840.50</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 2 }}>
            <Badge kind="green" size="sm">+18% MoM</Badge>
            <span style={{ fontSize: 12, color: C.ink50 }}>+£433 vs April</span>
          </div>
          <div style={{ marginTop: 18 }}>
            <BarChart values={[140, 280, 320, 240, 380, 460, 420, 510, 480, 380, 540, 580]} labels={['J','F','M','A','M','J','J','A','S','O','N','D']} height={120} color={C.orange} />
          </div>
          <div style={{ display: 'flex', gap: 16, marginTop: 12, justifyContent: 'center', fontSize: 11, color: C.ink50 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><span style={{ width: 10, height: 10, borderRadius: 3, background: C.orange }} />Earnings</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><span style={{ width: 10, height: 10, borderRadius: 3, background: C.navy }} />This month</span>
          </div>
        </Card>

        {/* Yearly line */}
        <Card p={16} style={{ marginBottom: 14 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: C.navy }}>3-year trend</div>
              <div style={{ fontSize: 11, color: C.ink50 }}>Cumulative earnings</div>
            </div>
            <div style={{ fontSize: 13, fontWeight: 800, color: C.green }}>+247%</div>
          </div>
          <svg width="100%" height="80" style={{ marginTop: 10 }} viewBox="0 0 300 80" preserveAspectRatio="none">
            <defs>
              <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor={C.orange} stopOpacity="0.3" />
                <stop offset="100%" stopColor={C.orange} stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,72 L30,64 L60,68 L90,52 L120,48 L150,32 L180,38 L210,24 L240,18 L270,14 L300,8 L300,80 L0,80 Z" fill="url(#g)" />
            <path d="M0,72 L30,64 L60,68 L90,52 L120,48 L150,32 L180,38 L210,24 L240,18 L270,14 L300,8" stroke={C.orange} strokeWidth="2.5" fill="none" />
            <circle cx="300" cy="8" r="4" fill={C.orange} />
          </svg>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: C.ink50, marginTop: 4 }}>
            <span>2023</span><span>2024</span><span>2025</span><span>2026</span>
          </div>
        </Card>

        {/* Per property */}
        <div style={{ fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 8 }}>Breakdown by property</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[
            { t: 'Ocean View Studio', v: 1840, pct: 65 },
            { t: 'Tarkwa Bay Bungalow', v: 720, pct: 25 },
            { t: 'Lekki Pied-à-terre', v: 280, pct: 10 },
          ].map(p => (
            <Card key={p.t} p={12}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontSize: 13, fontWeight: 600 }}>{p.t}</div>
                <div style={{ fontSize: 14, fontWeight: 800, color: C.navy }}>£{p.v}</div>
              </div>
              <div style={{ marginTop: 8, height: 6, background: C.ink06, borderRadius: 3 }}>
                <div style={{ width: `${p.pct}%`, height: '100%', background: C.orange, borderRadius: 3 }} />
              </div>
            </Card>
          ))}
        </div>
      </div>
      <OwnerNav active="dash" />
    </Screen>
  );
}

// 60 — Reservations Stats
function S60_ReservationStats() {
  return (
    <Screen padBottom={88}>
      <TopHeader title="Reservation stats" />
      <div style={{ padding: '8px 20px 30px' }}>
        <div style={{ display: 'flex', gap: 4, padding: 4, background: C.white, borderRadius: 10, border: `1px solid ${C.ink06}`, marginBottom: 16 }}>
          {['30d', '90d', '1y', 'All time'].map((p, i) => (
            <div key={p} style={{ flex: 1, padding: '8px 0', textAlign: 'center', borderRadius: 7, background: i === 2 ? C.navy : 'transparent', color: i === 2 ? '#fff' : C.ink70, fontSize: 12, fontWeight: 600 }}>{p}</div>
          ))}
        </div>

        {/* Occupancy donut */}
        <Card p={16} style={{ marginBottom: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <div style={{ position: 'relative', width: 110, height: 110 }}>
              <svg width="110" height="110" viewBox="0 0 110 110">
                <circle cx="55" cy="55" r="46" stroke={C.ink06} strokeWidth="12" fill="none" />
                <circle cx="55" cy="55" r="46" stroke={C.orange} strokeWidth="12" fill="none" strokeLinecap="round" strokeDasharray={`${2 * Math.PI * 46 * 0.82} ${2 * Math.PI * 46}`} transform="rotate(-90 55 55)" />
              </svg>
              <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ fontSize: 26, fontWeight: 800, color: C.navy, letterSpacing: -0.5 }}>82%</div>
                <div style={{ fontSize: 10, color: C.ink50 }}>occupied</div>
              </div>
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div>
                <div style={{ fontSize: 11, color: C.ink50, fontWeight: 600 }}>Avg nightly rate</div>
                <div style={{ fontSize: 20, fontWeight: 800, color: C.navy, letterSpacing: -0.4 }}>£64.20</div>
              </div>
              <div>
                <div style={{ fontSize: 11, color: C.ink50, fontWeight: 600 }}>Avg stay length</div>
                <div style={{ fontSize: 20, fontWeight: 800, color: C.navy, letterSpacing: -0.4 }}>4.8 nights</div>
              </div>
            </div>
          </div>
        </Card>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 14 }}>
          {[
            { l: 'Total bookings', v: '142', delta: '+24', dir: 'up' },
            { l: 'Confirmed', v: '128', delta: '+22', dir: 'up' },
            { l: 'Pending', v: '6', delta: '−2', dir: 'down', color: C.orange },
            { l: 'Cancelled', v: '8', delta: '+1', dir: 'up', color: C.red },
          ].map(s => (
            <Card key={s.l} p={12}>
              <div style={{ fontSize: 11, color: C.ink50, fontWeight: 600 }}>{s.l}</div>
              <div style={{ fontSize: 24, fontWeight: 800, color: s.color || C.navy, letterSpacing: -0.5, marginTop: 2 }}>{s.v}</div>
              <div style={{ fontSize: 11, color: s.dir === 'up' ? '#3d6610' : C.ink50, fontWeight: 600, marginTop: 2 }}>{s.delta} this period</div>
            </Card>
          ))}
        </div>

        {/* Total payout */}
        <Card p={16} style={{ background: C.navy, color: '#fff', marginBottom: 14 }}>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.65)', fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase' }}>Total payout · 1 year</div>
          <div style={{ fontSize: 32, fontWeight: 800, letterSpacing: -1.2, marginTop: 2 }}>£28,420.00</div>
          <div style={{ marginTop: 12, display: 'flex', gap: 12 }}>
            <div style={{ flex: 1, padding: 10, borderRadius: 10, background: 'rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize: 10, opacity: 0.6 }}>Gross</div>
              <div style={{ fontSize: 15, fontWeight: 800 }}>£32,180</div>
            </div>
            <div style={{ flex: 1, padding: 10, borderRadius: 10, background: 'rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize: 10, opacity: 0.6 }}>Platform fee</div>
              <div style={{ fontSize: 15, fontWeight: 800 }}>−£3,760</div>
            </div>
          </div>
        </Card>
      </div>
      <OwnerNav active="dash" />
    </Screen>
  );
}

// 61 — My Rentals (list of owner's properties)
function S61_MyRentals() {
  const rentals = [
    { t: 'Ocean View Studio', city: 'Lekki, Lagos', price: 42, rating: 4.92, reviews: 184, status: 'live', occ: 92, next: 'Today' },
    { t: 'Tarkwa Bay Bungalow', city: 'Tarkwa Bay', price: 88, rating: 4.95, reviews: 67, status: 'live', occ: 78, next: 'Fri' },
    { t: 'Lekki Pied-à-terre', city: 'Lekki Phase 2', price: 56, rating: null, reviews: 0, status: 'review', occ: 0, next: '—' },
    { t: 'Yaba Loft', city: 'Yaba, Lagos', price: 64, rating: 4.6, reviews: 12, status: 'paused', occ: 0, next: '—' },
  ];
  return (
    <Screen padBottom={88}>
      <TopHeader title="My rentals" back={false} right={<div style={{ width: 36, height: 36, borderRadius: 18, background: C.orange, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Ico name="plus" size={18} color="#fff" /></div>} />
      {/* Stats strip */}
      <div style={{ padding: '4px 20px 12px' }}>
        <Card p={14}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {[
              { v: '4', l: 'Total' },
              { v: '2', l: 'Live' },
              { v: '1', l: 'Review' },
              { v: '1', l: 'Paused' },
            ].map(s => (
              <div key={s.l} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 20, fontWeight: 800, color: C.navy }}>{s.v}</div>
                <div style={{ fontSize: 10, color: C.ink50 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Filter chips */}
      <div style={{ padding: '0 20px 12px', display: 'flex', gap: 8, overflowX: 'auto' }}>
        {['All 4', 'Live', 'Pending review', 'Paused', 'Drafts'].map((f, i) => (
          <div key={f} style={{ padding: '6px 12px', borderRadius: 16, background: i === 0 ? C.navy : '#fff', color: i === 0 ? '#fff' : C.navy, fontSize: 12, fontWeight: 600, border: `1px solid ${i === 0 ? C.navy : C.ink12}`, flexShrink: 0 }}>{f}</div>
        ))}
      </div>

      <div style={{ padding: '4px 20px 0', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {rentals.map((p, i) => (
          <Card key={i} p={12}>
            <div style={{ display: 'flex', gap: 12 }}>
              <div style={{ position: 'relative' }}>
                <ImagePh w={96} h={96} label={p.t.split(' ')[0]} radius={10} />
                {p.status === 'paused' && <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 11, fontWeight: 700 }}>Paused</div>}
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 4 }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 700, color: C.navy, lineHeight: 1.25 }}>{p.t}</div>
                    <div style={{ fontSize: 11, color: C.ink50 }}>{p.city}</div>
                  </div>
                  <Ico name="more" size={18} color={C.ink50} />
                </div>
                <div style={{ marginTop: 6 }}>
                  {p.status === 'live' && <Badge kind="green" size="sm">Live</Badge>}
                  {p.status === 'review' && <Badge kind="orange" size="sm">Under review</Badge>}
                  {p.status === 'paused' && <Badge kind="gray" size="sm">Paused</Badge>}
                </div>
                <div style={{ flex: 1 }} />
                <div style={{ display: 'flex', gap: 12, fontSize: 11, color: C.ink70, marginTop: 6 }}>
                  <span><b style={{ color: C.navy, fontWeight: 700 }}>£{p.price}</b>/night</span>
                  {p.rating && <span>⭐ {p.rating} <span style={{ color: C.ink50 }}>({p.reviews})</span></span>}
                  {p.status === 'live' && <span style={{ color: C.ink50 }}>{p.occ}% occ</span>}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <OwnerNav active="rentals" />
    </Screen>
  );
}

// 62 — Listing wizard step 1: Property type
function S62_Listing1Type() {
  const types = [
    { ic: 'home', l: 'House', s: 'Entire home', a: false },
    { ic: 'building', l: 'Flat', s: 'Apartment', a: true },
    { ic: 'bed', l: 'Studio', s: 'Single room' },
    { ic: 'tree', l: 'Cabin' },
    { ic: 'sun', l: 'Villa' },
    { ic: 'wave', l: 'Beach house' },
    { ic: 'building', l: 'Co-living' },
    { ic: 'sparkle', l: 'Unique stay' },
  ];
  return (
    <Screen>
      <WizardHeader step={1} title="Property type" sub="Which best describes your space?" />
      <div style={{ padding: '8px 20px 120px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {types.map(t => (
            <div key={t.l} style={{ padding: 16, borderRadius: 14, background: '#fff', border: `1.5px solid ${t.a ? C.orange : C.ink12}`, position: 'relative' }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: t.a ? hexA(C.orange, 0.15) : C.pale, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Ico name={t.ic} size={20} color={t.a ? C.orange : C.navy} />
              </div>
              <div style={{ fontSize: 14, fontWeight: 700, color: C.navy, marginTop: 10 }}>{t.l}</div>
              {t.s && <div style={{ fontSize: 11, color: C.ink50, marginTop: 2 }}>{t.s}</div>}
              {t.a && <div style={{ position: 'absolute', top: 10, right: 10, width: 18, height: 18, borderRadius: 9, background: C.orange, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Ico name="check" size={12} color="#fff" />
              </div>}
            </div>
          ))}
        </div>
      </div>
      <WizardFooter back={false} />
    </Screen>
  );
}

// 63 — Step 2: Location
function S63_Listing2Loc() {
  return (
    <Screen>
      <WizardHeader step={2} title="Where is it?" sub="Address only shared with confirmed guests." />
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
      <WizardFooter />
    </Screen>
  );
}

// 64 — Step 3: Basic info
function S64_Listing3Info() {
  return (
    <Screen>
      <WizardHeader step={3} title="Title & description" sub="Make it scannable. Use the first 50 chars wisely." />
      <div style={{ padding: '8px 20px 120px' }}>
        <Input label="Listing title" value="Lekki Phase 1 — Ocean View Studio" hint="50 of 70 characters used" />
        <div style={{ marginTop: 14 }}>
          <label style={{ fontSize: 13, fontWeight: 600, color: C.ink }}>Description</label>
          <div style={{ background: '#fff', borderRadius: 12, border: `1px solid ${C.ink12}`, padding: 14, marginTop: 6, minHeight: 140, fontSize: 14, color: C.ink, lineHeight: 1.5 }}>
            A bright studio overlooking the lagoon, two minutes from the beach. Floor-to-ceiling windows, fibre wifi, and a 6-foot work desk make this ideal for digital nomads.
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: C.ink50, marginTop: 4 }}>
            <span>Min 50 characters</span>
            <span>238 / 1000</span>
          </div>
        </div>

        <div style={{ marginTop: 14 }}>
          <label style={{ fontSize: 13, fontWeight: 600, color: C.ink }}>House rules</label>
          <div style={{ marginTop: 8, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            {[
              { l: 'No smoking', on: true },
              { l: 'No parties', on: true },
              { l: 'No pets', on: false },
              { l: 'No children', on: false },
            ].map(r => (
              <div key={r.l} style={{ padding: 12, borderRadius: 10, background: '#fff', border: `1.5px solid ${r.on ? C.orange : C.ink12}`, display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 20, height: 20, borderRadius: 5, background: r.on ? C.orange : 'transparent', border: r.on ? 'none' : `1.5px solid ${C.ink12}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {r.on && <Ico name="check" size={14} color="#fff" />}
                </div>
                <span style={{ fontSize: 12, fontWeight: 600 }}>{r.l}</span>
              </div>
            ))}
          </div>
        </div>

        <Card p={12} style={{ marginTop: 14, background: hexA(C.orange, 0.1), border: 'none' }}>
          <div style={{ display: 'flex', gap: 10 }}>
            <Ico name="sparkle" size={16} color={C.orange} />
            <div style={{ fontSize: 12, color: '#a4541a', lineHeight: 1.5 }}>
              <b>Tip:</b> Mentioning "fibre wifi" and "workspace" boosts views from remote workers by 36%.
            </div>
          </div>
        </Card>
      </div>
      <WizardFooter />
    </Screen>
  );
}

// 65 — Step 4: Details (counters)
function S65_Listing4Details() {
  return (
    <Screen>
      <WizardHeader step={4} title="Property details" sub="How many of each?" />
      <div style={{ padding: '8px 20px 120px' }}>
        <Card p={4}>
          {[
            { l: 'Guests', s: 'Max capacity', v: 4, ic: 'user' },
            { l: 'Bedrooms', s: '0 for studios', v: 1, ic: 'bed' },
            { l: 'Beds', s: 'Total beds across rooms', v: 2, ic: 'bed' },
            { l: 'Bathrooms', s: 'Half-bath counts as 0.5', v: 1, ic: 'bath' },
          ].map((r, i, arr) => (
            <div key={r.l} style={{ display: 'flex', alignItems: 'center', padding: 14, borderBottom: i < arr.length - 1 ? `1px solid ${C.ink06}` : 'none' }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: C.pale, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 12 }}>
                <Ico name={r.ic} size={20} color={C.navy} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: C.navy }}>{r.l}</div>
                <div style={{ fontSize: 11, color: C.ink50 }}>{r.s}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 32, height: 32, borderRadius: 16, border: `1.5px solid ${C.navy}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Ico name="minus" size={14} color={C.navy} />
                </div>
                <span style={{ width: 22, textAlign: 'center', fontSize: 16, fontWeight: 800, color: C.navy }}>{r.v}</span>
                <div style={{ width: 32, height: 32, borderRadius: 16, border: `1.5px solid ${C.navy}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Ico name="plus" size={14} color={C.navy} />
                </div>
              </div>
            </div>
          ))}
        </Card>

        <Card p={14} style={{ marginTop: 14 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 10 }}>Space type</div>
          <div style={{ display: 'flex', gap: 8 }}>
            {[
              { l: 'Entire place', a: true },
              { l: 'Private room' },
              { l: 'Shared room' },
            ].map(r => (
              <div key={r.l} style={{ flex: 1, padding: '10px 8px', borderRadius: 10, background: '#fff', border: `1.5px solid ${r.a ? C.orange : C.ink12}`, textAlign: 'center', fontSize: 12, fontWeight: 600, color: C.navy }}>{r.l}</div>
            ))}
          </div>
        </Card>
      </div>
      <WizardFooter />
    </Screen>
  );
}

// 66 — Step 5: Amenities
function S66_Listing5Amen() {
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
      <WizardHeader step={5} title="Amenities" sub="Check everything you offer. 24 amenities available." />
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
      <WizardFooter />
    </Screen>
  );
}

// 67 — Step 6: Photos
function S67_Listing6Photos() {
  return (
    <Screen>
      <WizardHeader step={6} title="Photos" sub="Drag to reorder. The first photo is your cover." />
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
      <WizardFooter />
    </Screen>
  );
}

// 68 — Step 7: Pricing
function S68_Listing7Pricing() {
  return (
    <Screen>
      <WizardHeader step={7} title="Pricing" sub="You can change this anytime." />
      <div style={{ padding: '8px 20px 120px' }}>
        {/* Base price */}
        <Card p={20} style={{ marginBottom: 14, textAlign: 'center' }}>
          <div style={{ fontSize: 11, color: C.ink50, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase' }}>Base nightly rate</div>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 6, marginTop: 8 }}>
            <span style={{ fontSize: 28, fontWeight: 600, color: C.navy }}>£</span>
            <span style={{ fontSize: 56, fontWeight: 800, color: C.navy, letterSpacing: -2 }}>42</span>
            <span style={{ fontSize: 13, color: C.ink50, marginLeft: 6 }}>/ night</span>
          </div>
          <div style={{ marginTop: 12, display: 'flex', justifyContent: 'center', gap: 8 }}>
            <div style={{ width: 36, height: 36, borderRadius: 18, border: `1.5px solid ${C.navy}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Ico name="minus" size={14} color={C.navy} />
            </div>
            <div style={{ width: 36, height: 36, borderRadius: 18, border: `1.5px solid ${C.navy}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Ico name="plus" size={14} color={C.navy} />
            </div>
          </div>
          <div style={{ marginTop: 14, padding: 10, background: hexA(C.green, 0.15), borderRadius: 10, fontSize: 12, color: '#3d6610', fontWeight: 600 }}>
            Suggested £38 – £52 for similar studios in Lekki
          </div>
        </Card>

        {/* Other prices */}
        <Card p={4}>
          {[
            { l: 'Weekend rate', s: 'Fri & Sat', v: '£52' },
            { l: 'Cleaning fee', s: 'One-time per stay', v: '£25' },
            { l: 'Extra guest fee', s: 'After 2 guests', v: '£10/night' },
            { l: 'Minimum stay', s: 'Nights', v: '2' },
          ].map((r, i, arr) => (
            <div key={r.l} style={{ display: 'flex', alignItems: 'center', padding: 14, borderBottom: i < arr.length - 1 ? `1px solid ${C.ink06}` : 'none' }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 600 }}>{r.l}</div>
                <div style={{ fontSize: 11, color: C.ink50 }}>{r.s}</div>
              </div>
              <div style={{ fontSize: 14, fontWeight: 700, color: C.navy }}>{r.v}</div>
              <Ico name="chev-r" size={16} color={C.ink30} />
            </div>
          ))}
        </Card>

        {/* Earnings projection */}
        <Card p={14} style={{ marginTop: 14, background: C.navy, color: '#fff' }}>
          <div style={{ fontSize: 11, opacity: 0.65, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase' }}>Projected monthly</div>
          <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: -0.8, marginTop: 2 }}>£980 – £1,240</div>
          <div style={{ fontSize: 11, opacity: 0.7, marginTop: 2 }}>Based on 70–80% occupancy</div>
        </Card>
      </div>
      <WizardFooter />
    </Screen>
  );
}

// 69 — Step 8: Management Mode
function S69_Listing8Mgmt() {
  return (
    <Screen>
      <WizardHeader step={8} title="Who manages this?" sub="Pick the option that fits your time." />
      <div style={{ padding: '8px 20px 120px' }}>
        {/* Option 1: Yes — managed */}
        <Card p={16} style={{ marginBottom: 12, border: `2px solid ${C.orange}`, position: 'relative' }}>
          <div style={{ position: 'absolute', top: -10, right: 12, background: C.orange, color: '#fff', padding: '3px 10px', borderRadius: 10, fontSize: 10, fontWeight: 700 }}>RECOMMENDED</div>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
            <div style={{ width: 44, height: 44, borderRadius: 22, background: hexA(C.orange, 0.15), display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Ico name="sparkle" size={22} color={C.orange} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ fontSize: 16, fontWeight: 800, color: C.navy }}>Yes, manage for me</div>
                <div style={{ width: 22, height: 22, borderRadius: 11, background: C.orange, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Ico name="check" size={14} color="#fff" />
                </div>
              </div>
              <div style={{ fontSize: 12, color: C.ink70, marginTop: 6, lineHeight: 1.5 }}>
                Homely handles guest messages, check-ins, cleaning coordination and disputes. You just collect payouts.
              </div>
              <div style={{ marginTop: 12, padding: 10, borderRadius: 10, background: C.pale, display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: 10, color: C.ink50, fontWeight: 700, textTransform: 'uppercase' }}>Our fee</div>
                  <div style={{ fontSize: 14, fontWeight: 800, color: C.navy }}>22% per booking</div>
                </div>
                <div>
                  <div style={{ fontSize: 10, color: C.ink50, fontWeight: 700, textTransform: 'uppercase' }}>Payout</div>
                  <div style={{ fontSize: 14, fontWeight: 800, color: C.navy }}>Monthly</div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Option 2: Self managed */}
        <Card p={16}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
            <div style={{ width: 44, height: 44, borderRadius: 22, background: C.pale, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Ico name="user" size={22} color={C.navy} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ fontSize: 16, fontWeight: 800, color: C.navy }}>I'll manage it myself</div>
                <div style={{ width: 22, height: 22, borderRadius: 11, border: `1.5px solid ${C.ink12}` }} />
              </div>
              <div style={{ fontSize: 12, color: C.ink70, marginTop: 6, lineHeight: 1.5 }}>
                You handle everything: messages, check-ins, cleaning, and any guest issues that come up.
              </div>
              <div style={{ marginTop: 12, padding: 10, borderRadius: 10, background: C.pale, display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: 10, color: C.ink50, fontWeight: 700, textTransform: 'uppercase' }}>Platform fee</div>
                  <div style={{ fontSize: 14, fontWeight: 800, color: C.navy }}>12% per booking</div>
                </div>
                <div>
                  <div style={{ fontSize: 10, color: C.ink50, fontWeight: 700, textTransform: 'uppercase' }}>Payout</div>
                  <div style={{ fontSize: 14, fontWeight: 800, color: C.navy }}>Weekly</div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card p={12} style={{ marginTop: 14, background: hexA(C.green, 0.15), border: 'none' }}>
          <div style={{ display: 'flex', gap: 10 }}>
            <Ico name="info" size={18} color="#3d6610" />
            <div style={{ fontSize: 12, color: '#3d6610', lineHeight: 1.5 }}>
              You can change this later from each listing's settings. Need help deciding? <b>Chat with us.</b>
            </div>
          </div>
        </Card>
      </div>
      <WizardFooter />
    </Screen>
  );
}

// 70 — Step 9: Review & Submit
function S70_Listing9Review() {
  return (
    <Screen>
      <WizardHeader step={9} title="Review & submit" sub="Everything look right? Submit for review." />
      <div style={{ padding: '8px 20px 120px' }}>
        <ImagePh w="100%" h={160} label="cover" radius={14} />
        <h2 style={{ fontSize: 20, fontWeight: 800, color: C.navy, margin: '16px 0 4px', letterSpacing: -0.4 }}>Lekki Phase 1 — Ocean View Studio</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: C.ink70, fontSize: 12 }}>
          <Ico name="pin" size={12} color={C.ink50} />Lekki, Lagos · Entire flat
        </div>

        <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
          {[{ic:'user',v:'4 guests'},{ic:'bed',v:'1 bed'},{ic:'bath',v:'1 bath'}].map(s => (
            <div key={s.v} style={{ background: '#fff', borderRadius: 10, padding: 10, textAlign: 'center', border: `1px solid ${C.ink06}` }}>
              <Ico name={s.ic} size={18} color={C.navy} />
              <div style={{ fontSize: 12, fontWeight: 600, marginTop: 4 }}>{s.v}</div>
            </div>
          ))}
        </div>

        <Card p={14} style={{ marginTop: 14 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 8 }}>Your setup</div>
          {[
            { l: 'Base rate', v: '£42 / night' },
            { l: 'Cleaning fee', v: '£25' },
            { l: 'Min stay', v: '2 nights' },
            { l: 'Amenities', v: '9 of 24' },
            { l: 'Photos', v: '6 uploaded' },
            { l: 'Management', v: 'Homely (recommended)' },
          ].map((r, i, arr) => (
            <div key={r.l} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderTop: i ? `1px solid ${C.ink06}` : 'none' }}>
              <span style={{ fontSize: 13, color: C.ink70 }}>{r.l}</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: C.navy }}>{r.v}</span>
            </div>
          ))}
        </Card>

        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginTop: 16 }}>
          <div style={{ width: 20, height: 20, borderRadius: 5, background: C.orange, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
            <Ico name="check" size={14} color="#fff" />
          </div>
          <span style={{ fontSize: 12, color: C.ink70, lineHeight: 1.5 }}>
            I confirm I have the right to list this property and that all information is accurate.
          </span>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '14px 16px 24px', background: '#fff', borderTop: `1px solid ${C.ink06}`, display: 'flex', gap: 10 }}>
        <GhostButton style={{ width: 100, flex: 'none' }} size="md">Back</GhostButton>
        <PrimaryButton>Submit for review</PrimaryButton>
      </div>
    </Screen>
  );
}

// 71 — Submitted / Pending Review
function S71_ListingPending() {
  return (
    <Screen>
      <TopHeader title="" />
      <div style={{ padding: '32px 24px 40px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 22 }}>
        <div style={{ width: 132, height: 132, borderRadius: 66, background: C.white, border: `1px solid ${C.ink06}`, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Ico name="building" size={56} color={C.navy} />
          <div style={{ position: 'absolute', inset: -4, borderRadius: 70, border: `3px solid ${C.orange}`, borderRightColor: 'transparent', animation: 'spin 2s linear infinite' }} />
          <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
        </div>
        <div>
          <Badge kind="orange">Under review</Badge>
          <h1 style={{ fontSize: 26, fontWeight: 800, color: C.navy, letterSpacing: -0.8, margin: '12px 0 6px' }}>Listing submitted</h1>
          <p style={{ fontSize: 14, color: C.ink70, margin: 0, lineHeight: 1.6 }}>
            We review listings to keep quality high. Most decisions arrive within <b style={{ color: C.navy }}>48 hours</b>.
          </p>
        </div>

        <Card style={{ width: '100%', textAlign: 'left' }} p={14}>
          {[
            { i: 0, t: 'Submitted', sub: 'Just now', done: true },
            { i: 1, t: 'Trust & Safety check', sub: 'In progress', done: false, active: true },
            { i: 2, t: 'Quality review', sub: 'Up next', done: false },
            { i: 3, t: 'Listing goes live', sub: 'Within 48h', done: false },
          ].map((s, i, arr) => (
            <div key={s.t} style={{ display: 'flex', gap: 12, paddingBottom: i < arr.length - 1 ? 10 : 0, position: 'relative' }}>
              {i < arr.length - 1 && <div style={{ position: 'absolute', left: 11, top: 24, bottom: 0, width: 2, background: s.done ? C.green : C.ink12 }} />}
              <div style={{ width: 24, height: 24, borderRadius: 12, background: s.done ? C.green : (s.active ? C.orange : C.white), border: s.done || s.active ? 'none' : `1.5px solid ${C.ink12}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, zIndex: 1 }}>
                {s.done && <Ico name="check" size={14} color="#fff" />}
                {s.active && <div style={{ width: 8, height: 8, borderRadius: 4, background: '#fff' }} />}
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700 }}>{s.t}</div>
                <div style={{ fontSize: 11, color: C.ink50 }}>{s.sub}</div>
              </div>
            </div>
          ))}
        </Card>

        <PrimaryButton>Back to dashboard</PrimaryButton>
      </div>
    </Screen>
  );
}

// 72 — Listing Approved
function S72_ListingApproved() {
  return (
    <Screen>
      <div style={{ padding: '40px 24px 40px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', height: '100%' }}>
        <div style={{ width: 132, height: 132, borderRadius: 66, background: C.green, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 16px 40px ${hexA(C.green, 0.5)}` }}>
          <Ico name="check" size={64} color="#fff" />
        </div>
        <Badge kind="green" style={{ marginTop: 20 }}>Live</Badge>
        <h1 style={{ fontSize: 30, fontWeight: 800, color: C.navy, letterSpacing: -1, margin: '12px 0 8px' }}>Your listing is live! 🎉</h1>
        <p style={{ fontSize: 14, color: C.ink70, margin: 0, lineHeight: 1.5, padding: '0 8px' }}>
          Lekki Phase 1 — Ocean View Studio is now visible on Homely. Bookings can begin immediately.
        </p>

        <Card style={{ width: '100%', textAlign: 'left', marginTop: 24 }} p={12}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <ImagePh w={64} h={64} label="cover" radius={10} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 700 }}>Ocean View Studio</div>
              <div style={{ fontSize: 11, color: C.ink50, fontFamily: F.mono }}>LST-29481</div>
              <div style={{ fontSize: 12, color: C.green, fontWeight: 700, marginTop: 2 }}>Approved · 20 May</div>
            </div>
          </div>
        </Card>

        <Card style={{ width: '100%', textAlign: 'left', marginTop: 12 }} p={14}>
          <div style={{ fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 8 }}>Next steps</div>
          {['Share your listing link', 'Calibrate your calendar', 'Respond to messages within 1h'].map(s => (
            <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 0', fontSize: 13 }}>
              <Ico name="check-c" size={16} color={C.green} />
              <span style={{ color: C.ink70 }}>{s}</span>
            </div>
          ))}
        </Card>

        <div style={{ flex: 1 }} />
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <PrimaryButton>View my listing</PrimaryButton>
          <GhostButton>Share link</GhostButton>
        </div>
      </div>
    </Screen>
  );
}

// 73 — Listing Rejected
function S73_ListingRejected() {
  return (
    <Screen>
      <TopHeader title="" />
      <div style={{ padding: '32px 24px 40px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 22 }}>
        <div style={{ width: 120, height: 120, borderRadius: 60, background: hexA(C.red, 0.12), display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Ico name="alert" size={56} color={C.red} />
        </div>
        <div>
          <Badge kind="red">Rejected</Badge>
          <h1 style={{ fontSize: 26, fontWeight: 800, color: C.navy, letterSpacing: -0.8, margin: '12px 0 6px' }}>Listing needs work</h1>
          <p style={{ fontSize: 14, color: C.ink70, margin: 0, lineHeight: 1.6 }}>
            We can't approve yet — here's what to fix.
          </p>
        </div>

        <Card style={{ width: '100%', textAlign: 'left' }} p={16}>
          <div style={{ fontSize: 11, fontWeight: 700, color: C.red, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 10 }}>Issues found</div>
          {[
            { t: 'Photos too dark', s: 'Daylight shots required' },
            { t: 'Title misleading', s: 'Says "ocean view" — show in photos' },
            { t: 'Missing safety info', s: 'Add smoke alarm details' },
          ].map(i => (
            <div key={i.t} style={{ display: 'flex', gap: 10, padding: '8px 0', borderTop: `1px solid ${C.ink06}` }}>
              <Ico name="alert" size={16} color={C.red} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 700 }}>{i.t}</div>
                <div style={{ fontSize: 11, color: C.ink50 }}>{i.s}</div>
              </div>
            </div>
          ))}
          <div style={{ marginTop: 12, paddingTop: 12, borderTop: `1px solid ${C.ink06}`, fontSize: 11, color: C.ink50, fontFamily: F.mono }}>
            LST-29481 · Reviewed by HM-Quality
          </div>
        </Card>

        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <PrimaryButton>Edit and resubmit</PrimaryButton>
          <GhostButton>Read review policy</GhostButton>
        </div>
      </div>
    </Screen>
  );
}

// 74 — Edit Listing
function S74_EditListing() {
  return (
    <Screen padBottom={20}>
      <TopHeader title="Edit listing" right={<span style={{ fontSize: 14, color: C.orange, fontWeight: 700 }}>Save</span>} />
      <div style={{ padding: '8px 20px 30px' }}>
        <Card p={12} style={{ marginBottom: 14 }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <ImagePh w={56} h={56} label="cover" radius={10} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 700 }}>Ocean View Studio</div>
              <div style={{ fontSize: 11, color: C.ink50, fontFamily: F.mono }}>LST-29481</div>
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

// 75 — Owner Listing Detail (preview)
function S75_OwnerListingDetail() {
  return (
    <Screen>
      <div style={{ position: 'relative' }}>
        <ImagePh w="100%" h={220} label="property · main" radius={0} />
        <div style={{ position: 'absolute', top: 56, left: 16, right: 16, display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ width: 40, height: 40, borderRadius: 20, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}>
            <Ico name="chev-l" size={20} color={C.navy} />
          </div>
          <div style={{ background: 'rgba(0,0,0,0.6)', color: '#fff', padding: '6px 14px', borderRadius: 14, fontSize: 12, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 6 }}>
            <Ico name="eye" size={14} color="#fff" />Preview as guest
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: 12, left: 16 }}>
          <Badge kind="green">Live · LST-29481</Badge>
        </div>
      </div>
      <div style={{ padding: '14px 20px 40px' }}>
        <h2 style={{ fontSize: 20, fontWeight: 800, color: C.navy, margin: '0 0 4px', letterSpacing: -0.4 }}>Ocean View Studio</h2>
        <div style={{ fontSize: 12, color: C.ink70 }}>Lekki Phase 1, Lagos · Entire flat</div>

        {/* Performance row */}
        <Card p={14} style={{ marginTop: 14 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: C.ink50, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 10 }}>30-day performance</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
            {[
              { v: '482', l: 'Views' },
              { v: '36', l: 'Saves' },
              { v: '14', l: 'Books' },
              { v: '92%', l: 'Occ.' },
            ].map(s => (
              <div key={s.l} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 18, fontWeight: 800, color: C.navy, letterSpacing: -0.4 }}>{s.v}</div>
                <div style={{ fontSize: 10, color: C.ink50 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </Card>

        {/* Action grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 14 }}>
          {[
            { ic: 'edit', l: 'Edit listing', orange: true },
            { ic: 'calendar', l: 'Calendar' },
            { ic: 'wallet', l: 'Pricing' },
            { ic: 'star', l: 'Reviews · 184' },
          ].map(a => (
            <button key={a.l} style={{ padding: 12, borderRadius: 12, background: a.orange ? C.orange : '#fff', color: a.orange ? '#fff' : C.navy, border: a.orange ? 'none' : `1px solid ${C.ink06}`, display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, fontWeight: 700 }}>
              <Ico name={a.ic} size={18} color={a.orange ? '#fff' : C.navy} />{a.l}
            </button>
          ))}
        </div>

        <div style={{ marginTop: 18 }}>
          <button style={{ width: '100%', padding: 14, background: 'transparent', color: C.red, border: 'none', fontWeight: 700, fontSize: 14 }}>
            Pause listing
          </button>
        </div>
      </div>
    </Screen>
  );
}

// 76 — Deactivate / Reactivate (modal)
function S76_Deactivate() {
  return (
    <Screen scroll={false}>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: '#fff', borderRadius: '24px 24px 0 0', padding: '8px 20px 30px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', padding: 6 }}>
          <div style={{ width: 40, height: 4, borderRadius: 2, background: C.ink12 }} />
        </div>
        <div style={{ width: 64, height: 64, borderRadius: 32, background: hexA(C.orange, 0.15), display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '8px auto 12px' }}>
          <Ico name="moon" size={28} color={C.orange} />
        </div>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: C.navy, letterSpacing: -0.6, textAlign: 'center', margin: '0 0 6px' }}>Pause this listing?</h2>
        <p style={{ fontSize: 13, color: C.ink70, textAlign: 'center', margin: '0 0 20px', lineHeight: 1.5 }}>
          Guests can't see or book it while paused. Existing bookings stay confirmed.
        </p>

        <Card p={14} style={{ marginBottom: 14 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 8 }}>Why are you pausing?</div>
          {[
            { l: "Taking a break from hosting", a: true },
            { l: 'Property is being renovated' },
            { l: 'Issues with bookings or guests' },
            { l: 'Other' },
          ].map(r => (
            <div key={r.l} style={{ padding: '10px 0', borderTop: `1px solid ${C.ink06}`, display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 18, height: 18, borderRadius: 9, border: `1.5px solid ${r.a ? C.orange : C.ink12}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {r.a && <div style={{ width: 8, height: 8, borderRadius: 4, background: C.orange }} />}
              </div>
              <span style={{ fontSize: 13, fontWeight: 500 }}>{r.l}</span>
            </div>
          ))}
        </Card>

        <Card p={12} style={{ background: hexA(C.orange, 0.1), border: 'none', marginBottom: 16 }}>
          <div style={{ display: 'flex', gap: 10 }}>
            <Ico name="info" size={16} color={C.orange} />
            <div style={{ fontSize: 11, color: '#a4541a', lineHeight: 1.5 }}>
              You have <b>3 upcoming bookings</b>. These remain active — pausing only affects new ones.
            </div>
          </div>
        </Card>

        <div style={{ display: 'flex', gap: 10 }}>
          <GhostButton>Cancel</GhostButton>
          <PrimaryButton>Pause listing</PrimaryButton>
        </div>
      </div>
    </Screen>
  );
}

Object.assign(window, {
  S58_OwnerDash, S59_RevenueAnalytics, S60_ReservationStats, S61_MyRentals,
  S62_Listing1Type, S63_Listing2Loc, S64_Listing3Info, S65_Listing4Details,
  S66_Listing5Amen, S67_Listing6Photos, S68_Listing7Pricing, S69_Listing8Mgmt, S70_Listing9Review,
  S71_ListingPending, S72_ListingApproved, S73_ListingRejected, S74_EditListing, S75_OwnerListingDetail, S76_Deactivate,
  OwnerNav, WizardHeader, WizardFooter, BarChart,
});
