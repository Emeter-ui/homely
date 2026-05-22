// screens-manager.jsx — Section 5 (screens 90–100): Account Manager

// Manager bottom nav — different ID set
function MgrNav({ active = 'dash' }) {
  const items = [
    { id: 'dash', label: 'Dashboard', icon: 'sparkle' },
    { id: 'portfolio', label: 'Portfolio', icon: 'building' },
    { id: 'clients', label: 'Clients', icon: 'user' },
    { id: 'inbox', label: 'Messages', icon: 'msg' },
    { id: 'profile', label: 'Profile', icon: 'settings' },
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

// "Acting as client" banner — appears on screens where the manager is listing on behalf of a client
function ClientContextBar({ name = 'Tunde A.', avatar = 'Tunde A' }) {
  return (
    <div style={{ background: C.orange, color: '#fff', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 10 }}>
      <Ico name="sparkle" size={16} color="#fff" />
      <div style={{ flex: 1, fontSize: 12 }}>
        Listing as <b>{name}</b> · public-facing identity
      </div>
      <Avatar name={avatar} size={24} />
    </div>
  );
}

// 90 — Manager Dashboard
function S90_MgrDash() {
  return (
    <Screen padBottom={88}>
      <div style={{ background: C.navy, color: '#fff', padding: '16px 20px 80px', borderRadius: '0 0 28px 28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <Badge kind="orange">Account Manager</Badge>
            <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: -0.3, marginTop: 4 }}>Hi, Esther 👋</div>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)' }}>HM Trust · employee #ESM-218</div>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <div style={{ width: 40, height: 40, borderRadius: 20, background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <Ico name="bell" size={18} color="#fff" />
              <div style={{ position: 'absolute', top: 6, right: 7, width: 16, height: 16, borderRadius: 8, background: C.orange, color: '#fff', fontSize: 9, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #000066' }}>3</div>
            </div>
            <Avatar name="Esther" size={40} />
          </div>
        </div>
        <div style={{ marginTop: 20 }}>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)' }}>Portfolio revenue · May</div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginTop: 4 }}>
            <div style={{ fontSize: 36, fontWeight: 800, letterSpacing: -1.2 }}>£42,180</div>
            <Badge kind="green" size="sm">+24% MoM</Badge>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div style={{ padding: '0 20px', marginTop: -56 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {[
            { l: 'Assigned clients', v: '12', sub: 'KYC 11 ✓ 1 pending', ic: 'user' },
            { l: 'Managed properties', v: '38', sub: '32 live', ic: 'building' },
            { l: 'Bookings · 30d', v: '184', sub: 'across portfolio', ic: 'calendar' },
            { l: 'Avg portfolio rating', v: '4.86', sub: '1,420 reviews', ic: 'star' },
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

      {/* Alerts */}
      <SectionHeader title="Needs your attention" cta="See all" />
      <div style={{ padding: '8px 20px 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {[
          { ic: 'alert', tone: 'red', t: 'Booking dispute', s: 'Yemi A. · Lekki Studio · raised 2h ago' },
          { ic: 'msg', tone: 'orange', t: '3 unread guest messages', s: 'Tunde A.\'s properties · awaiting response' },
          { ic: 'doc', tone: 'navy', t: 'KYC expiring · Bola D.', s: 'Expires in 7 days · resubmit ID' },
        ].map((a, i) => {
          const tones = {
            red:    { bg: hexA(C.red, 0.12),    fg: C.red },
            orange: { bg: hexA(C.orange, 0.15), fg: C.orange },
            navy:   { bg: hexA(C.navy, 0.1),    fg: C.navy },
          };
          const t = tones[a.tone];
          return (
            <Card key={i} p={12}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: t.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Ico name={a.ic} size={18} color={t.fg} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: C.navy }}>{a.t}</div>
                  <div style={{ fontSize: 11, color: C.ink50 }}>{a.s}</div>
                </div>
                <Ico name="chev-r" size={16} color={C.ink30} />
              </div>
            </Card>
          );
        })}
      </div>

      <SectionHeader title="Top clients this month" cta="Portfolio" />
      <div style={{ padding: '8px 20px 0', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {[
          { n: 'Tunde A.', props: 3, rev: 8420 },
          { n: 'Bola D.', props: 5, rev: 6240 },
          { n: 'Niyi O.', props: 2, rev: 4180 },
        ].map(c => (
          <Card key={c.n} p={12}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <Avatar name={c.n} size={40} verified />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 700 }}>{c.n}</div>
                <div style={{ fontSize: 11, color: C.ink50 }}>{c.props} properties</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 14, fontWeight: 800, color: C.navy }}>£{c.rev.toLocaleString()}</div>
                <div style={{ fontSize: 10, color: C.green, fontWeight: 700 }}>+12%</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <MgrNav active="dash" />
    </Screen>
  );
}

// 91 — My Portfolio
function S91_Portfolio() {
  return (
    <Screen padBottom={88}>
      <TopHeader title="Portfolio" back={false} right={<Ico name="filter" size={20} color={C.navy} />} />
      {/* Summary */}
      <div style={{ padding: '0 20px 12px' }}>
        <Card p={14}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {[
              { v: '38', l: 'Properties' },
              { v: '12', l: 'Owners' },
              { v: '£42K', l: 'May rev.' },
              { v: '4.86', l: 'Rating' },
            ].map(s => (
              <div key={s.l} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 18, fontWeight: 800, color: C.navy, letterSpacing: -0.4 }}>{s.v}</div>
                <div style={{ fontSize: 10, color: C.ink50 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div style={{ padding: '0 20px 12px', display: 'flex', gap: 8, overflowX: 'auto' }}>
        {['All 38', 'Live · 32', 'Pending · 4', 'Paused · 2', 'High performers'].map((f, i) => (
          <div key={f} style={{ padding: '6px 12px', borderRadius: 16, background: i === 0 ? C.navy : '#fff', color: i === 0 ? '#fff' : C.navy, fontSize: 12, fontWeight: 600, border: `1px solid ${i === 0 ? C.navy : C.ink12}`, flexShrink: 0 }}>{f}</div>
        ))}
      </div>

      <div style={{ padding: '4px 20px 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {[
          { t: 'Ocean View Studio', o: 'Tunde A.', city: 'Lagos', rev: 1840, occ: 92, status: 'live' },
          { t: 'Tarkwa Bay Bungalow', o: 'Tunde A.', city: 'Tarkwa Bay', rev: 1240, occ: 78, status: 'live' },
          { t: 'Hackney Loft', o: 'Bola D.', city: 'London', rev: 2840, occ: 88, status: 'live' },
          { t: 'Yaba Co-living', o: 'Niyi O.', city: 'Lagos', rev: 0, occ: 0, status: 'review' },
          { t: 'Brixton Studio', o: 'Bola D.', city: 'London', rev: 1640, occ: 95, status: 'live' },
        ].map((p, i) => (
          <Card key={i} p={12}>
            <div style={{ display: 'flex', gap: 12 }}>
              <ImagePh w={72} h={72} label={p.t.split(' ')[0]} radius={10} />
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 700, color: C.navy }}>{p.t}</div>
                    <div style={{ fontSize: 11, color: C.ink50 }}>{p.city} · owned by <b>{p.o}</b></div>
                  </div>
                  {p.status === 'live' && <Badge kind="green" size="sm">Live</Badge>}
                  {p.status === 'review' && <Badge kind="orange" size="sm">Review</Badge>}
                </div>
                <div style={{ display: 'flex', gap: 14, marginTop: 8, fontSize: 11 }}>
                  <span><b style={{ color: C.navy, fontWeight: 700 }}>£{p.rev}</b><span style={{ color: C.ink50 }}> / mo</span></span>
                  <span style={{ color: C.ink50 }}>{p.occ}% occ</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <MgrNav active="portfolio" />
    </Screen>
  );
}

// 92 — Portfolio property detail
function S92_PortfolioPropDetail() {
  return (
    <Screen>
      <TopHeader title="Portfolio property" right={<Ico name="more" size={20} color={C.navy} />} />
      <div style={{ padding: '8px 20px 40px' }}>
        <ImagePh w="100%" h={180} label="property" radius={14} />
        <div style={{ marginTop: 14 }}>
          <Badge kind="green">Live · LST-29481</Badge>
          <h2 style={{ fontSize: 20, fontWeight: 800, color: C.navy, margin: '8px 0 4px', letterSpacing: -0.4 }}>Ocean View Studio</h2>
          <div style={{ fontSize: 12, color: C.ink70 }}>Lekki, Lagos · owned by <b>Tunde A.</b></div>
        </div>

        {/* 30d stats */}
        <Card p={14} style={{ marginTop: 14 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: C.ink50, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 12 }}>30-day performance</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8, marginBottom: 12 }}>
            {[
              { v: '£1,840', l: 'Revenue', d: '+18%' },
              { v: '14', l: 'Bookings', d: '+3' },
              { v: '92%', l: 'Occupancy', d: '+4' },
              { v: '4.92', l: 'Rating', d: '+0.04' },
            ].map(s => (
              <div key={s.l} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 14, fontWeight: 800, color: C.navy, letterSpacing: -0.3 }}>{s.v}</div>
                <div style={{ fontSize: 9, color: C.ink50 }}>{s.l}</div>
                <div style={{ fontSize: 9, color: C.green, fontWeight: 700 }}>{s.d}</div>
              </div>
            ))}
          </div>
          <BarChart values={[18, 22, 28, 24, 32, 38, 36, 42, 38, 46, 52, 48]} height={60} color={C.orange} />
        </Card>

        {/* Manager actions */}
        <div style={{ marginTop: 14 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: C.ink50, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 10 }}>Manage on behalf of Tunde</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {[
              { ic: 'edit', l: 'Edit listing' },
              { ic: 'calendar', l: 'Calendar' },
              { ic: 'msg', l: 'Recent inbox' },
              { ic: 'wallet', l: 'Pricing rules' },
              { ic: 'doc', l: 'Monthly report' },
              { ic: 'user', l: 'Client profile' },
            ].map(a => (
              <button key={a.l} style={{ padding: 12, background: '#fff', border: `1px solid ${C.ink06}`, borderRadius: 12, display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, fontWeight: 700, color: C.navy }}>
                <Ico name={a.ic} size={16} color={C.navy} />{a.l}
              </button>
            ))}
          </div>
        </div>

        {/* Upcoming */}
        <div style={{ marginTop: 18 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: C.ink50, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 10 }}>Upcoming · 3 bookings</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              { n: 'Amelia B.', d: 'Today · 14:00', amt: 294 },
              { n: 'David O.', d: 'Sat 24 · 16:00', amt: 168 },
              { n: 'Sofia P.', d: 'Wed 3 Jul', amt: 336 },
            ].map((b, i) => (
              <Card key={i} p={12}>
                <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                  <Avatar name={b.n} size={32} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 700 }}>{b.n}</div>
                    <div style={{ fontSize: 11, color: C.ink50 }}>{b.d}</div>
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: C.navy }}>£{b.amt}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Screen>
  );
}

// 93 — Select Client (when listing on behalf)
function S93_SelectClient() {
  return (
    <Screen>
      <TopHeader title="Whose listing?" />
      <div style={{ padding: '8px 20px 30px' }}>
        <p style={{ fontSize: 14, color: C.ink70, margin: '0 0 16px', lineHeight: 1.5 }}>
          Choose which client this listing belongs to. They'll appear as the public host.
        </p>

        {/* Search */}
        <div style={{ background: '#fff', borderRadius: 12, padding: '10px 14px', border: `1px solid ${C.ink12}`, display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
          <Ico name="search" size={16} color={C.ink50} />
          <span style={{ flex: 1, fontSize: 14, color: C.ink30 }}>Search your 12 clients…</span>
        </div>

        <div style={{ fontSize: 12, color: C.ink50, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 8 }}>Your clients</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[
            { n: 'Tunde A.', props: 3, kyc: true, a: true },
            { n: 'Bola D.', props: 5, kyc: true },
            { n: 'Niyi O.', props: 2, kyc: true },
            { n: 'Femi A.', props: 1, kyc: true },
            { n: 'Chioma U.', props: 4, kyc: false },
          ].map(c => (
            <div key={c.n} style={{ background: '#fff', borderRadius: 12, padding: 12, border: `1.5px solid ${c.a ? C.orange : C.ink12}`, display: 'flex', alignItems: 'center', gap: 12 }}>
              <Avatar name={c.n} size={44} verified={c.kyc} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: C.navy }}>{c.n}</div>
                <div style={{ fontSize: 11, color: C.ink50 }}>{c.props} properties · {c.kyc ? 'KYC verified' : 'KYC pending'}</div>
              </div>
              {c.a && <div style={{ width: 22, height: 22, borderRadius: 11, background: C.orange, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Ico name="check" size={14} color="#fff" />
              </div>}
              {!c.kyc && <Badge kind="orange" size="sm">KYC</Badge>}
            </div>
          ))}
        </div>

        <Card p={12} style={{ marginTop: 14, background: hexA(C.navy, 0.06), border: 'none' }}>
          <div style={{ display: 'flex', gap: 10 }}>
            <Ico name="info" size={16} color={C.navy} />
            <div style={{ fontSize: 12, color: C.ink70, lineHeight: 1.5 }}>
              Only KYC-verified clients can have new listings created. To add a new client, contact Admin.
            </div>
          </div>
        </Card>

        <div style={{ marginTop: 18 }}>
          <PrimaryButton>Continue as Tunde A.</PrimaryButton>
        </div>
      </div>
    </Screen>
  );
}

// 94 — Manager creates listing (wizard step view with client banner)
function S94_MgrListingWizard() {
  return (
    <Screen>
      <ClientContextBar name="Tunde A." avatar="Tunde A" />
      <WizardHeader step={3} title="Title & description" sub="This will appear on Tunde's public listing." />
      <div style={{ padding: '8px 20px 120px' }}>
        <Input label="Listing title" value="Lekki Phase 1 — Ocean View Studio" hint="50 of 70 characters used" />
        <div style={{ marginTop: 14 }}>
          <label style={{ fontSize: 13, fontWeight: 600, color: C.ink }}>Description</label>
          <div style={{ background: '#fff', borderRadius: 12, border: `1px solid ${C.ink12}`, padding: 14, marginTop: 6, minHeight: 130, fontSize: 14, color: C.ink, lineHeight: 1.5 }}>
            A bright studio overlooking the lagoon, two minutes from the beach. Floor-to-ceiling windows, fibre wifi, and a 6-foot work desk make this ideal for digital nomads.
          </div>
        </div>

        <Card p={14} style={{ marginTop: 14, background: hexA(C.orange, 0.1), border: 'none' }}>
          <div style={{ display: 'flex', gap: 10 }}>
            <Ico name="info" size={18} color={C.orange} />
            <div style={{ fontSize: 12, color: '#a4541a', lineHeight: 1.5, flex: 1 }}>
              <b>Tunde will approve</b> this listing before it goes live. He receives an email with the full draft.
            </div>
          </div>
        </Card>

        {/* Internal notes (manager only) */}
        <div style={{ marginTop: 14 }}>
          <label style={{ fontSize: 13, fontWeight: 600, color: C.ink, display: 'flex', alignItems: 'center', gap: 6 }}>
            <Ico name="shield" size={14} color={C.navy} />Internal notes (only you can see)
          </label>
          <div style={{ background: C.pale, borderRadius: 12, border: `1px solid ${C.ink12}`, padding: 14, marginTop: 6, minHeight: 70, fontSize: 12, color: C.ink70, lineHeight: 1.5, fontStyle: 'italic' }}>
            Tunde wants weekend rate bumped 25%. Cleaning is via June's team — confirmed via WhatsApp 12 May.
          </div>
        </div>
      </div>
      <WizardFooter />
    </Screen>
  );
}

// 95 — Client identity preview
function S95_ClientPreview() {
  return (
    <Screen>
      <TopHeader title="Public identity preview" />
      <div style={{ padding: '8px 20px 30px' }}>
        <Card p={12} style={{ marginBottom: 14, background: hexA(C.orange, 0.1), border: 'none' }}>
          <div style={{ display: 'flex', gap: 10 }}>
            <Ico name="eye" size={16} color={C.orange} />
            <div style={{ fontSize: 12, color: '#a4541a', lineHeight: 1.5 }}>
              This is what guests will see. Your name as account manager is hidden.
            </div>
          </div>
        </Card>

        {/* Phone-in-phone preview */}
        <div style={{ background: C.white, borderRadius: 24, border: `8px solid ${C.navy}`, padding: 16, position: 'relative' }}>
          <div style={{ width: 60, height: 5, background: C.navy, borderRadius: 3, margin: '-8px auto 14px' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Avatar name="Tunde A" size={56} verified />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, color: C.ink50 }}>Hosted by</div>
              <div style={{ fontSize: 18, fontWeight: 800, color: C.navy, display: 'flex', alignItems: 'center', gap: 6 }}>Tunde A. <VerifiedBadge size={14} /></div>
              <Badge kind="orange" size="sm">Superhost</Badge>
            </div>
          </div>
          <p style={{ fontSize: 13, color: C.ink70, lineHeight: 1.5, margin: '12px 0 0' }}>
            Architect, runner, surf-curious. I list two spaces in Lekki and one in Tarkwa Bay.
          </p>
          <div style={{ marginTop: 12, display: 'flex', gap: 14, fontSize: 11 }}>
            <span><b style={{ color: C.navy }}>184</b><span style={{ color: C.ink50 }}> reviews</span></span>
            <span><b style={{ color: C.navy }}>4.92</b><span style={{ color: C.ink50 }}> rating</span></span>
            <span><b style={{ color: C.navy }}>4y</b><span style={{ color: C.ink50 }}> on Homely</span></span>
          </div>
        </div>

        <Card p={14} style={{ marginTop: 16 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 8 }}>Internal · for HM Trust only</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0' }}>
            <span style={{ fontSize: 12, color: C.ink70 }}>Managed by</span>
            <span style={{ fontSize: 13, fontWeight: 600 }}>Esther A. (you)</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0' }}>
            <span style={{ fontSize: 12, color: C.ink70 }}>Owner agreement</span>
            <span style={{ fontSize: 13, fontWeight: 600, fontFamily: F.mono }}>AGR-029-TUN</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0' }}>
            <span style={{ fontSize: 12, color: C.ink70 }}>Revenue split</span>
            <span style={{ fontSize: 13, fontWeight: 600 }}>Owner 78% · Homely 22%</span>
          </div>
        </Card>
      </div>
    </Screen>
  );
}

// 96 — Listing submitted on behalf
function S96_SubmittedOnBehalf() {
  return (
    <Screen>
      <div style={{ padding: '40px 24px 40px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', height: '100%' }}>
        <div style={{ position: 'relative', width: 132, height: 132 }}>
          <div style={{ width: 132, height: 132, borderRadius: 66, background: hexA(C.orange, 0.18), display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Ico name="building" size={56} color={C.orange} />
          </div>
          <div style={{ position: 'absolute', bottom: -4, right: -4 }}>
            <Avatar name="Tunde A" size={44} verified ring />
          </div>
        </div>
        <Badge kind="orange" style={{ marginTop: 20 }}>Pending review</Badge>
        <h1 style={{ fontSize: 24, fontWeight: 800, color: C.navy, letterSpacing: -0.6, margin: '12px 0 6px', textWrap: 'balance' }}>
          Submitted under Tunde's name
        </h1>
        <p style={{ fontSize: 14, color: C.ink70, margin: 0, lineHeight: 1.5, padding: '0 8px' }}>
          Tunde will get an email to approve the draft. Homely reviews within 48h after his sign-off.
        </p>

        <Card style={{ width: '100%', textAlign: 'left', marginTop: 24 }} p={14}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <ImagePh w={56} h={56} label="cover" radius={10} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 700 }}>Ocean View Studio</div>
              <div style={{ fontSize: 11, color: C.ink50, fontFamily: F.mono }}>LST-29482 · DRAFT</div>
              <div style={{ fontSize: 11, color: C.orange, fontWeight: 700, marginTop: 2 }}>Awaiting Tunde A.</div>
            </div>
          </div>
        </Card>

        <Card style={{ width: '100%', textAlign: 'left', marginTop: 12 }} p={12}>
          <div style={{ fontSize: 11, color: C.ink50, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 8 }}>Next steps</div>
          {[
            { i: 1, t: 'Tunde reviews & approves draft', e: 'Email + push sent now' },
            { i: 2, t: 'Homely Trust & Quality review', e: 'Within 48h after approval' },
            { i: 3, t: 'Goes live on Homely', e: 'Notifications to all parties' },
          ].map(s => (
            <div key={s.t} style={{ display: 'flex', gap: 10, padding: '6px 0' }}>
              <div style={{ width: 20, height: 20, borderRadius: 10, background: C.navy, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700, flexShrink: 0 }}>{s.i}</div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700 }}>{s.t}</div>
                <div style={{ fontSize: 10, color: C.ink50 }}>{s.e}</div>
              </div>
            </div>
          ))}
        </Card>

        <div style={{ flex: 1 }} />
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <PrimaryButton>Back to portfolio</PrimaryButton>
          <GhostButton>Message Tunde now</GhostButton>
        </div>
      </div>
    </Screen>
  );
}

// 97 — My Clients
function S97_MyClients() {
  return (
    <Screen padBottom={88}>
      <TopHeader title="My clients" back={false} right={<Ico name="search" size={20} color={C.navy} />} />
      <div style={{ padding: '0 20px 12px', display: 'flex', gap: 8, overflowX: 'auto' }}>
        {['All · 12', 'KYC verified', 'KYC pending · 1', 'Top earners', 'Inactive'].map((f, i) => (
          <div key={f} style={{ padding: '6px 12px', borderRadius: 16, background: i === 0 ? C.navy : '#fff', color: i === 0 ? '#fff' : C.navy, fontSize: 12, fontWeight: 600, border: `1px solid ${i === 0 ? C.navy : C.ink12}`, flexShrink: 0 }}>{f}</div>
        ))}
      </div>

      <div style={{ padding: '4px 20px 0', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {[
          { n: 'Tunde A.', props: 3, rev: 8420, kyc: true, msg: 2 },
          { n: 'Bola D.', props: 5, rev: 6240, kyc: true, msg: 0 },
          { n: 'Niyi O.', props: 2, rev: 4180, kyc: true, msg: 1 },
          { n: 'Femi A.', props: 1, rev: 1240, kyc: true, msg: 0 },
          { n: 'Chioma U.', props: 4, rev: 0, kyc: false, msg: 0, kycMsg: 'KYC expires in 7d' },
          { n: 'Adaeze N.', props: 2, rev: 2640, kyc: true, msg: 0 },
        ].map(c => (
          <Card key={c.n} p={12}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <Avatar name={c.n} size={44} verified={c.kyc} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ fontSize: 14, fontWeight: 700, color: C.navy }}>{c.n}</span>
                  {c.msg > 0 && <Badge kind="orange" size="sm">{c.msg} new</Badge>}
                </div>
                {c.kyc ? (
                  <div style={{ fontSize: 11, color: C.ink50 }}>{c.props} properties · £{c.rev.toLocaleString()}/mo</div>
                ) : (
                  <div style={{ fontSize: 11, color: C.red, fontWeight: 600 }}>{c.kycMsg}</div>
                )}
              </div>
              <Ico name="chev-r" size={16} color={C.ink30} />
            </div>
          </Card>
        ))}
      </div>
      <MgrNav active="clients" />
    </Screen>
  );
}

// 98 — Client Profile (manager view)
function S98_ClientProfile() {
  return (
    <Screen>
      <TopHeader title="Client" right={<Ico name="more" size={20} color={C.navy} />} />
      <div style={{ padding: '8px 20px 40px' }}>
        <Card p={20}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 14 }}>
            <Avatar name="Tunde A" size={68} verified ring />
            <div style={{ flex: 1 }}>
              <h2 style={{ fontSize: 20, fontWeight: 800, color: C.navy, margin: 0, display: 'flex', alignItems: 'center', gap: 8 }}>
                Tunde A. <VerifiedBadge size={16} />
              </h2>
              <div style={{ fontSize: 12, color: C.ink50, marginTop: 2 }}>Client since Mar 2022</div>
              <div style={{ marginTop: 4, display: 'flex', gap: 6 }}>
                <Badge kind="orange" size="sm">Superhost</Badge>
                <Badge kind="green" size="sm">KYC ✓</Badge>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, padding: 12, background: C.pale, borderRadius: 12 }}>
            {[
              { v: '3', l: 'Properties' },
              { v: '£8,420', l: 'May rev.' },
              { v: '4.92', l: 'Avg rating' },
            ].map(s => (
              <div key={s.l} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 18, fontWeight: 800, color: C.navy, letterSpacing: -0.4 }}>{s.v}</div>
                <div style={{ fontSize: 10, color: C.ink50 }}>{s.l}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 8, marginTop: 14 }}>
            <button style={{ flex: 1, height: 40, borderRadius: 20, background: C.orange, color: '#fff', border: 'none', fontWeight: 700, fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
              <Ico name="msg" size={14} color="#fff" />Message
            </button>
            <button style={{ flex: 1, height: 40, borderRadius: 20, background: 'transparent', color: C.navy, border: `1.5px solid ${C.navy}`, fontWeight: 700, fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
              <Ico name="phone" size={14} color={C.navy} />Call
            </button>
          </div>
        </Card>

        {/* Properties */}
        <div style={{ marginTop: 14, fontSize: 12, fontWeight: 700, color: C.ink50, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 10 }}>Tunde's properties</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[
            { t: 'Ocean View Studio', rev: 1840, occ: 92 },
            { t: 'Tarkwa Bay Bungalow', rev: 1240, occ: 78 },
            { t: 'Lekki Pied-à-terre', rev: 0, occ: 0, status: 'paused' },
          ].map((p, i) => (
            <Card key={i} p={12}>
              <div style={{ display: 'flex', gap: 12 }}>
                <ImagePh w={56} h={56} label={p.t.split(' ')[0]} radius={10} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 700 }}>{p.t}</div>
                  <div style={{ fontSize: 11, color: C.ink50, marginTop: 2 }}>{p.status === 'paused' ? 'Paused since Mar' : `£${p.rev}/mo · ${p.occ}% occ`}</div>
                </div>
                <Ico name="chev-r" size={16} color={C.ink30} />
              </div>
            </Card>
          ))}
        </div>

        <div style={{ marginTop: 18, fontSize: 12, fontWeight: 700, color: C.ink50, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 10 }}>Quick actions</div>
        <Card p={4}>
          {[
            { ic: 'plus', l: 'List new property as Tunde' },
            { ic: 'doc', l: 'Generate monthly report' },
            { ic: 'wallet', l: 'View payout history' },
            { ic: 'shield', l: 'Open agreement (AGR-029-TUN)' },
          ].map((r, i, arr) => (
            <div key={r.l} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 14, borderBottom: i < arr.length - 1 ? `1px solid ${C.ink06}` : 'none' }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: C.pale, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Ico name={r.ic} size={16} color={C.navy} />
              </div>
              <span style={{ flex: 1, fontSize: 13, fontWeight: 600 }}>{r.l}</span>
              <Ico name="chev-r" size={16} color={C.ink30} />
            </div>
          ))}
        </Card>
      </div>
    </Screen>
  );
}

// 99 — Monthly Report
function S99_MonthlyReport() {
  return (
    <Screen>
      <TopHeader title="Monthly report" right={<Ico name="share" size={20} color={C.navy} />} />
      <div style={{ padding: '8px 20px 30px' }}>
        <Card p={16} style={{ marginBottom: 14, background: C.navy, color: '#fff' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
            <Avatar name="Tunde A" size={40} verified />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, opacity: 0.65 }}>Report for</div>
              <div style={{ fontSize: 15, fontWeight: 700 }}>Tunde A. · May 2026</div>
            </div>
          </div>
          <div style={{ fontSize: 32, fontWeight: 800, letterSpacing: -1 }}>£8,420.50</div>
          <div style={{ fontSize: 12, opacity: 0.7 }}>Gross revenue across 3 properties</div>
        </Card>

        {/* Highlights */}
        <div style={{ fontSize: 12, fontWeight: 700, color: C.ink50, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 8 }}>Highlights</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 14 }}>
          {[
            { v: '24', l: 'Bookings', d: '+8', icon: 'calendar' },
            { v: '4.92', l: 'Rating', d: '+0.04', icon: 'star' },
            { v: '85%', l: 'Occupancy', d: '+11pt', icon: 'check-c' },
            { v: '96%', l: 'Response rate', d: '+2pt', icon: 'msg' },
          ].map(s => (
            <Card key={s.l} p={12}>
              <Ico name={s.icon} size={16} color={C.orange} />
              <div style={{ fontSize: 22, fontWeight: 800, color: C.navy, marginTop: 4, letterSpacing: -0.4 }}>{s.v}</div>
              <div style={{ fontSize: 11, fontWeight: 600 }}>{s.l}</div>
              <div style={{ fontSize: 10, color: C.green, fontWeight: 700 }}>{s.d}</div>
            </Card>
          ))}
        </div>

        {/* Per property */}
        <Card p={14} style={{ marginBottom: 14 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 10 }}>Revenue by property</div>
          {[
            { t: 'Ocean View Studio', v: 4180, pct: 50 },
            { t: 'Tarkwa Bay Bungalow', v: 3240, pct: 38 },
            { t: 'Lekki Pied-à-terre', v: 1000, pct: 12 },
          ].map(p => (
            <div key={p.t} style={{ padding: '8px 0', borderTop: `1px solid ${C.ink06}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                <span style={{ fontSize: 13, fontWeight: 600 }}>{p.t}</span>
                <span style={{ fontSize: 13, fontWeight: 800, color: C.navy }}>£{p.v.toLocaleString()}</span>
              </div>
              <div style={{ height: 6, background: C.ink06, borderRadius: 3 }}>
                <div style={{ width: `${p.pct}%`, height: '100%', background: C.orange, borderRadius: 3 }} />
              </div>
            </div>
          ))}
        </Card>

        {/* Manager notes */}
        <Card p={14}>
          <div style={{ fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 8 }}>Your notes (visible to client)</div>
          <div style={{ background: C.pale, borderRadius: 10, padding: 12, fontSize: 13, color: C.ink70, lineHeight: 1.5 }}>
            Strong month — Ocean View Studio hit Superhost criteria for the quarter. Recommend bumping weekend rate by 12% from June. Lekki Pied-à-terre had only 4 bookings; suggest we review pricing together.
          </div>
        </Card>

        <div style={{ marginTop: 18, display: 'flex', gap: 10 }}>
          <GhostButton>Download PDF</GhostButton>
          <PrimaryButton>Send to Tunde</PrimaryButton>
        </div>
      </div>
    </Screen>
  );
}

// 100 — Message Client (chat thread)
function S100_MessageClient() {
  return (
    <Screen padBottom={70}>
      <TopHeader title="" right={<Ico name="phone" size={20} color={C.navy} />} />
      <div style={{ padding: '0 20px 12px', display: 'flex', alignItems: 'center', gap: 10, borderBottom: `1px solid ${C.ink06}`, paddingBottom: 12 }}>
        <Avatar name="Tunde A" size={42} verified />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: C.navy, display: 'flex', alignItems: 'center', gap: 6 }}>Tunde A. <VerifiedBadge size={12} /></div>
          <div style={{ fontSize: 11, color: C.green, fontWeight: 600 }}>● Active now</div>
        </div>
        <Badge kind="orange" size="sm">Client</Badge>
      </div>

      <div style={{ padding: '12px 20px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {/* Date divider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '8px 0' }}>
          <div style={{ flex: 1, height: 1, background: C.ink06 }} />
          <span style={{ fontSize: 11, color: C.ink50, fontWeight: 600 }}>Tuesday, 19 May</span>
          <div style={{ flex: 1, height: 1, background: C.ink06 }} />
        </div>

        <Bubble side="them" name="Tunde A">Hey Esther — got a sec? Wondering if we should bump rates for the long weekend in June.</Bubble>
        <Bubble side="me">Yes, I was about to ping you about that. The Lekki market is up 15% week-on-week.</Bubble>
        <Bubble side="me">I'd suggest +18% Fri–Sun for Ocean View, +12% for Tarkwa Bay.</Bubble>
        <Bubble side="them" name="Tunde A">Sounds right. Can you do it?</Bubble>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '8px 0' }}>
          <div style={{ flex: 1, height: 1, background: C.ink06 }} />
          <span style={{ fontSize: 11, color: C.ink50, fontWeight: 600 }}>Today</span>
          <div style={{ flex: 1, height: 1, background: C.ink06 }} />
        </div>

        <Bubble side="me">Done — rates updated, takes effect tomorrow midnight.</Bubble>
        <Bubble side="me" attach>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Ico name="doc" size={20} color="#fff" />
            <div>
              <div style={{ fontSize: 13, fontWeight: 700 }}>May report.pdf</div>
              <div style={{ fontSize: 11, opacity: 0.7 }}>1.2 MB · 8 pages</div>
            </div>
          </div>
        </Bubble>
        <Bubble side="them" name="Tunde A">Brilliant 🙌 will check tonight.</Bubble>
      </div>

      {/* Composer */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '10px 16px 20px', background: '#fff', borderTop: `1px solid ${C.ink06}`, display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 36, height: 36, borderRadius: 18, background: C.pale, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Ico name="paperclip" size={18} color={C.navy} />
        </div>
        <div style={{ flex: 1, height: 40, borderRadius: 20, background: C.pale, padding: '0 16px', display: 'flex', alignItems: 'center', fontSize: 14, color: C.ink50 }}>
          Message Tunde…
        </div>
        <div style={{ width: 40, height: 40, borderRadius: 20, background: C.orange, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Ico name="send" size={16} color="#fff" />
        </div>
      </div>
    </Screen>
  );
}

function Bubble({ side, children, attach, name }) {
  const me = side === 'me';
  return (
    <div style={{ display: 'flex', justifyContent: me ? 'flex-end' : 'flex-start', gap: 8 }}>
      {!me && <Avatar name={name} size={28} />}
      <div style={{
        maxWidth: '75%', padding: attach ? 12 : '10px 14px',
        borderRadius: me ? '18px 18px 4px 18px' : '4px 18px 18px 18px',
        background: me ? C.navy : '#fff',
        color: me ? '#fff' : C.ink,
        fontSize: 14, lineHeight: 1.4,
        border: me ? 'none' : `1px solid ${C.ink06}`,
        boxShadow: me ? `0 4px 12px ${hexA(C.navy, 0.15)}` : 'none',
      }}>{children}</div>
    </div>
  );
}

Object.assign(window, {
  S90_MgrDash, S91_Portfolio, S92_PortfolioPropDetail,
  S93_SelectClient, S94_MgrListingWizard, S95_ClientPreview, S96_SubmittedOnBehalf,
  S97_MyClients, S98_ClientProfile, S99_MonthlyReport, S100_MessageClient,
  MgrNav, Bubble,
});
