// screens-guest-home.jsx — Section 3.1–3.2 (screens 25–35): Discovery + Property Detail

// Sample properties used across screens
const PROPS = [
  { id: 'p1', title: 'Lekki Phase 1 — Ocean View Studio', city: 'Lagos · Nigeria', price: 42, rating: 4.92, reviews: 184, beds: 1, host: 'Tunde A.', tag: 'Superhost' },
  { id: 'p2', title: 'Shoreditch Loft with Terrace', city: 'London · UK', price: 168, rating: 4.88, reviews: 312, beds: 2, host: 'Mira K.', tag: 'New' },
  { id: 'p3', title: 'Quiet Bungalow near the Beach', city: 'Tarkwa Bay · Lagos', price: 88, rating: 4.95, reviews: 67, beds: 3, host: 'Ada O.', tag: 'Superhost' },
  { id: 'p4', title: 'Brutalist Apartment, Hackney', city: 'London · UK', price: 124, rating: 4.81, reviews: 96, beds: 1 },
];

// 25 — Home / Landing
function S25_Home() {
  return (
    <Screen padBottom={88}>
      {/* Top — search + greeting */}
      <div style={{ background: C.navy, color: '#fff', padding: '16px 20px 64px', borderRadius: '0 0 28px 28px', position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)' }}>Welcome back,</div>
            <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: -0.4 }}>Amelia 👋</div>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <div style={{ width: 40, height: 40, borderRadius: 20, background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <Ico name="bell" size={18} color="#fff" />
              <div style={{ position: 'absolute', top: 8, right: 9, width: 8, height: 8, borderRadius: 4, background: C.orange, border: '2px solid #000066' }} />
            </div>
            <Avatar name="Amelia" size={40} verified />
          </div>
        </div>
        <h1 style={{ fontSize: 28, fontWeight: 800, letterSpacing: -1, margin: '20px 0 16px', lineHeight: 1.1 }}>Where are you going next?</h1>
        <div style={{ background: '#fff', borderRadius: 14, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12, boxShadow: '0 10px 30px rgba(0,0,0,0.18)' }}>
          <Ico name="search" size={20} color={C.navy} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: C.navy }}>Search destinations</div>
            <div style={{ fontSize: 11, color: C.ink50 }}>Anywhere · Any week · Add guests</div>
          </div>
          <div style={{ width: 36, height: 36, borderRadius: 18, background: C.orange, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Ico name="sliders" size={16} color="#fff" />
          </div>
        </div>
      </div>

      {/* Categories */}
      <div style={{ padding: '16px 0 8px', marginTop: -32 }}>
        <div style={{ display: 'flex', gap: 10, padding: '0 20px', overflowX: 'auto' }}>
          {[
            { ic: 'sparkle', l: 'Trending', a: true },
            { ic: 'wave', l: 'Beach' },
            { ic: 'building', l: 'City' },
            { ic: 'tree', l: 'Nature' },
            { ic: 'home', l: 'Tiny' },
          ].map(c => (
            <div key={c.l} style={{
              padding: '10px 16px', borderRadius: 14, background: c.a ? C.navy : C.white,
              color: c.a ? '#fff' : C.navy, fontSize: 13, fontWeight: 600,
              display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0,
              border: c.a ? 'none' : `1px solid ${C.ink06}`,
            }}>
              <Ico name={c.ic} size={16} color={c.a ? '#fff' : C.navy} />
              {c.l}
            </div>
          ))}
        </div>
      </div>

      {/* Featured row */}
      <SectionHeader title="Featured this week" cta="See all" />
      <div style={{ padding: '8px 20px', display: 'flex', gap: 14, overflowX: 'auto' }}>
        {PROPS.slice(0, 3).map(p => <PropCardWide key={p.id} p={p} />)}
      </div>

      {/* Nearby */}
      <SectionHeader title="Nearby in Lagos" cta="Map view" />
      <div style={{ padding: '8px 20px', display: 'flex', flexDirection: 'column', gap: 14 }}>
        {PROPS.slice(2, 4).map(p => <PropCard key={p.id} p={p} />)}
      </div>

      {/* Hero CTA */}
      <div style={{ padding: 20 }}>
        <div style={{
          padding: 18, borderRadius: 18, background: C.orange, color: '#fff',
          display: 'flex', gap: 14, alignItems: 'center',
        }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 18, fontWeight: 800, letterSpacing: -0.3 }}>Got a spare room?</div>
            <div style={{ fontSize: 12, opacity: 0.9, marginTop: 4 }}>Start earning in 9 quick steps</div>
          </div>
          <button style={{ height: 40, padding: '0 16px', borderRadius: 20, background: C.navy, color: '#fff', border: 'none', fontWeight: 700, fontSize: 13 }}>List space</button>
        </div>
      </div>

      <BottomNav active="home" />
    </Screen>
  );
}

// 26 — Search Results
function S26_SearchResults() {
  return (
    <Screen padBottom={88}>
      {/* Sticky search bar */}
      <div style={{ padding: '8px 16px 12px', background: C.pale, borderBottom: `1px solid ${C.ink06}` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Ico name="chev-l" size={22} color={C.navy} />
          <div style={{ flex: 1, background: '#fff', borderRadius: 14, padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 10, border: `1px solid ${C.ink06}` }}>
            <Ico name="search" size={16} color={C.ink50} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: C.navy }}>Lagos, Nigeria</div>
              <div style={{ fontSize: 10, color: C.ink50 }}>Jun 14 – 21 · 2 guests</div>
            </div>
            <Ico name="x-c" size={18} color={C.ink50} />
          </div>
          <div style={{ width: 40, height: 40, borderRadius: 12, background: C.navy, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Ico name="sliders" size={16} color="#fff" />
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8, marginTop: 12, overflowX: 'auto' }}>
          {['Price ↓', 'Instant book', 'Verified host', '2+ beds', 'Pool', 'Wifi'].map((c, i) => (
            <div key={c} style={{ padding: '6px 12px', borderRadius: 16, background: i === 1 ? C.navy : '#fff', color: i === 1 ? '#fff' : C.navy, fontSize: 12, fontWeight: 600, border: `1px solid ${i === 1 ? C.navy : C.ink12}`, flexShrink: 0 }}>{c}</div>
          ))}
        </div>
      </div>

      {/* Results header */}
      <div style={{ padding: '16px 20px 8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: 18, fontWeight: 800, color: C.navy, letterSpacing: -0.4 }}>284 stays</div>
          <div style={{ fontSize: 11, color: C.ink50 }}>Lagos · Jun 14 – 21</div>
        </div>
        <div style={{ display: 'flex', gap: 6, padding: 3, background: '#fff', borderRadius: 10, border: `1px solid ${C.ink06}` }}>
          <button style={{ padding: '6px 10px', borderRadius: 7, background: C.navy, color: '#fff', fontSize: 12, fontWeight: 600, border: 'none' }}>List</button>
          <button style={{ padding: '6px 10px', borderRadius: 7, background: 'transparent', color: C.ink50, fontSize: 12, fontWeight: 600, border: 'none' }}>Map</button>
        </div>
      </div>

      <div style={{ padding: '8px 20px 0', display: 'flex', flexDirection: 'column', gap: 14 }}>
        {[...PROPS, ...PROPS].map((p, i) => <PropCard key={i} p={p} />).slice(0, 5)}
      </div>

      <BottomNav active="search" />
    </Screen>
  );
}

// 27 — Filter bottom sheet
function S27_Filter() {
  return (
    <Screen scroll={false}>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)' }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        background: C.pale, borderRadius: '24px 24px 0 0', maxHeight: '90%', overflow: 'auto',
        padding: '8px 0 30px',
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', padding: 6 }}>
          <div style={{ width: 40, height: 4, borderRadius: 2, background: C.ink12 }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 20px 16px', borderBottom: `1px solid ${C.ink06}` }}>
          <div style={{ fontSize: 11, color: C.ink50, fontWeight: 600 }}>Clear all</div>
          <div style={{ fontSize: 17, fontWeight: 800, color: C.navy }}>Filters</div>
          <div style={{ width: 28, height: 28, borderRadius: 14, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${C.ink06}` }}><Ico name="x" size={14} color={C.navy} /></div>
        </div>

        <div style={{ padding: '20px 20px 0' }}>
          <FilterGroup title="Price range">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <span style={{ fontSize: 13, color: C.ink70 }}>£24 – £680</span>
              <span style={{ fontSize: 12, color: C.ink50 }}>avg £142 / night</span>
            </div>
            {/* Histogram */}
            <div style={{ position: 'relative', height: 60, display: 'flex', alignItems: 'flex-end', gap: 2 }}>
              {[3,5,7,9,12,18,20,14,11,8,6,4,2,1,1].map((v, i) => (
                <div key={i} style={{ flex: 1, height: `${v*4}px`, background: i > 1 && i < 12 ? C.orange : C.ink12, borderRadius: '2px 2px 0 0' }} />
              ))}
            </div>
            <div style={{ height: 4, background: C.ink12, borderRadius: 2, marginTop: 2, position: 'relative' }}>
              <div style={{ position: 'absolute', left: '12%', right: '20%', height: '100%', background: C.orange, borderRadius: 2 }} />
              <div style={{ position: 'absolute', left: '11%', top: -8, width: 20, height: 20, borderRadius: 10, background: '#fff', border: `2px solid ${C.orange}` }} />
              <div style={{ position: 'absolute', right: '19%', top: -8, width: 20, height: 20, borderRadius: 10, background: '#fff', border: `2px solid ${C.orange}` }} />
            </div>
          </FilterGroup>

          <FilterGroup title="Property type">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
              {[
                { ic: 'home', l: 'House', a: true },
                { ic: 'building', l: 'Flat' },
                { ic: 'tree', l: 'Cabin' },
                { ic: 'wave', l: 'Beach' },
                { ic: 'bed', l: 'Studio' },
                { ic: 'sun', l: 'Villa', a: true },
              ].map(t => (
                <div key={t.l} style={{
                  padding: '12px 8px', borderRadius: 12, background: '#fff',
                  border: `1.5px solid ${t.a ? C.orange : C.ink12}`, textAlign: 'center',
                }}>
                  <Ico name={t.ic} size={20} color={t.a ? C.orange : C.navy} />
                  <div style={{ fontSize: 12, fontWeight: 600, color: C.navy, marginTop: 4 }}>{t.l}</div>
                </div>
              ))}
            </div>
          </FilterGroup>

          <FilterGroup title="Rating">
            <div style={{ display: 'flex', gap: 8 }}>
              {['Any', '3+', '4+', '4.5+', '4.8+'].map((r, i) => (
                <div key={r} style={{
                  padding: '8px 14px', borderRadius: 16, background: i === 3 ? C.navy : '#fff',
                  color: i === 3 ? '#fff' : C.navy, fontSize: 13, fontWeight: 600,
                  border: `1px solid ${i === 3 ? C.navy : C.ink12}`,
                }}>{r}</div>
              ))}
            </div>
          </FilterGroup>

          <FilterGroup title="Amenities" last>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {[
                { l: 'Wifi', a: true }, { l: 'Kitchen', a: true }, { l: 'AC' }, { l: 'Pool' }, { l: 'Parking' }, { l: 'Workspace' }, { l: 'Pets ok' },
              ].map(a => (
                <div key={a.l} style={{
                  padding: '6px 12px', borderRadius: 14, background: a.a ? hexA(C.orange, 0.15) : '#fff',
                  color: a.a ? '#a4541a' : C.navy, fontSize: 12, fontWeight: 600,
                  border: a.a ? 'none' : `1px solid ${C.ink12}`,
                }}>{a.l}</div>
              ))}
            </div>
          </FilterGroup>
        </div>

        <div style={{ padding: '0 20px', marginTop: 16, display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 10 }}>
          <GhostButton>Reset</GhostButton>
          <PrimaryButton>Show 184 stays</PrimaryButton>
        </div>
      </div>
    </Screen>
  );
}

function FilterGroup({ title, children, last = false }) {
  return (
    <div style={{ padding: '0 0 20px', marginBottom: 16, borderBottom: last ? 'none' : `1px solid ${C.ink06}` }}>
      <div style={{ fontSize: 14, fontWeight: 700, color: C.navy, marginBottom: 12 }}>{title}</div>
      {children}
    </div>
  );
}

// 28 — Map View
function S28_MapView() {
  return (
    <Screen scroll={false}>
      {/* Map background */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `
          repeating-linear-gradient(90deg, ${hexA(C.green, 0.06)} 0 1px, transparent 1px 80px),
          repeating-linear-gradient(0deg, ${hexA(C.green, 0.06)} 0 1px, transparent 1px 80px),
          linear-gradient(135deg, #d8e4c8, #e6d9c4)`,
      }}>
        {/* Fake roads */}
        <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0 }}>
          <path d="M -20 200 Q 150 180 200 280 T 410 380" stroke="#fff" strokeWidth="6" fill="none" />
          <path d="M -20 200 Q 150 180 200 280 T 410 380" stroke="#aaa" strokeWidth="1" strokeDasharray="6 4" fill="none" />
          <path d="M 200 -10 L 200 400" stroke="#fff" strokeWidth="4" fill="none" />
          <path d="M 300 -10 Q 280 200 380 350" stroke="#fff" strokeWidth="3" fill="none" />
          <path d="M -20 500 Q 150 480 250 600" stroke="#fff" strokeWidth="5" fill="none" />
        </svg>
        {/* Water blob */}
        <div style={{ position: 'absolute', top: 200, left: -40, width: 220, height: 280, borderRadius: '50%', background: hexA(C.navy, 0.15), filter: 'blur(2px)' }} />
      </div>

      {/* Top controls */}
      <div style={{ position: 'absolute', top: 56, left: 16, right: 16, display: 'flex', gap: 10 }}>
        <div style={{ flex: 1, background: '#fff', borderRadius: 14, padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 10, boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }}>
          <Ico name="chev-l" size={20} color={C.navy} />
          <div style={{ flex: 1, fontSize: 13, fontWeight: 700, color: C.navy }}>Lagos · 284 stays</div>
          <Ico name="search" size={18} color={C.ink50} />
        </div>
        <div style={{ width: 44, height: 44, borderRadius: 12, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }}>
          <Ico name="sliders" size={18} color={C.navy} />
        </div>
      </div>

      {/* Price pins */}
      {[
        { x: 70, y: 280, p: '£42', a: true },
        { x: 200, y: 230, p: '£168' },
        { x: 280, y: 350, p: '£88' },
        { x: 140, y: 380, p: '£124' },
        { x: 240, y: 460, p: '£64' },
        { x: 80, y: 480, p: '£210' },
      ].map((pin, i) => (
        <div key={i} style={{
          position: 'absolute', left: pin.x, top: pin.y, transform: 'translate(-50%, -100%)',
          background: pin.a ? C.navy : '#fff', color: pin.a ? '#fff' : C.navy,
          padding: '6px 12px', borderRadius: 16, fontWeight: 700, fontSize: 13,
          boxShadow: '0 6px 16px rgba(0,0,0,0.18)', border: pin.a ? 'none' : `1px solid ${C.ink12}`,
          transform: pin.a ? 'translate(-50%, -100%) scale(1.12)' : 'translate(-50%, -100%)',
        }}>{pin.p}</div>
      ))}

      {/* Recenter button */}
      <div style={{ position: 'absolute', right: 16, top: 200, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ width: 40, height: 40, borderRadius: 12, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
          <Ico name="pin" size={18} color={C.orange} />
        </div>
        <div style={{ width: 40, height: 40, borderRadius: 12, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
          <Ico name="plus" size={18} color={C.navy} />
        </div>
        <div style={{ width: 40, height: 40, borderRadius: 12, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
          <Ico name="minus" size={18} color={C.navy} />
        </div>
      </div>

      {/* Mini card for active pin */}
      <div style={{ position: 'absolute', bottom: 100, left: 16, right: 16, background: '#fff', borderRadius: 16, padding: 12, boxShadow: '0 16px 40px rgba(0,0,0,0.25)' }}>
        <div style={{ display: 'flex', gap: 12 }}>
          <ImagePh w={88} h={88} label="thumb" radius={10} />
          <div style={{ flex: 1, padding: '2px 0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ fontSize: 12, color: C.ink50 }}>Lekki Phase 1</div>
              <Ico name="heart" size={16} color={C.ink50} />
            </div>
            <div style={{ fontSize: 14, fontWeight: 700, color: C.navy, marginTop: 2, lineHeight: 1.2 }}>Ocean View Studio</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 4 }}>
              <Ico name="star" size={12} color={C.orange} />
              <span style={{ fontSize: 11, fontWeight: 600 }}>4.92</span>
              <span style={{ fontSize: 11, color: C.ink50 }}>(184)</span>
            </div>
            <div style={{ marginTop: 6 }}><span style={{ fontSize: 16, fontWeight: 800, color: C.navy }}>£42</span><span style={{ fontSize: 12, color: C.ink50 }}> /night</span></div>
          </div>
        </div>
      </div>

      <BottomNav active="search" />
    </Screen>
  );
}

// 29 — Category Browse
function S29_Category() {
  const cats = [
    { l: 'Beachfront', ic: 'wave', n: 184, tone: 'pale' },
    { l: 'Lagos vibes', ic: 'building', n: 92, tone: 'navy' },
    { l: 'Cabins', ic: 'tree', n: 38, tone: 'pale' },
    { l: 'City flats', ic: 'building', n: 256, tone: 'pale' },
    { l: 'Tiny homes', ic: 'home', n: 12, tone: 'navy' },
    { l: 'Luxe villas', ic: 'sun', n: 47, tone: 'pale' },
    { l: 'Workstays', ic: 'sparkle', n: 64, tone: 'navy' },
    { l: 'Pets ok', ic: 'heart', n: 89, tone: 'pale' },
  ];
  return (
    <Screen padBottom={88}>
      <TopHeader title="Browse categories" />
      <div style={{ padding: '12px 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {cats.map(c => (
            <div key={c.l} style={{
              aspectRatio: '1', borderRadius: 18, padding: 14, position: 'relative', overflow: 'hidden',
              background: c.tone === 'navy' ? C.navy : C.white, color: c.tone === 'navy' ? '#fff' : C.navy,
              border: c.tone === 'pale' ? `1px solid ${C.ink06}` : 'none',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            }}>
              <div style={{ width: 44, height: 44, borderRadius: 12,
                background: c.tone === 'navy' ? 'rgba(255,255,255,0.1)' : hexA(C.orange, 0.15),
                display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Ico name={c.ic} size={22} color={c.tone === 'navy' ? '#fff' : C.orange} />
              </div>
              <div>
                <div style={{ fontSize: 16, fontWeight: 800, letterSpacing: -0.3 }}>{c.l}</div>
                <div style={{ fontSize: 11, opacity: 0.7, marginTop: 2 }}>{c.n} properties</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BottomNav active="search" />
    </Screen>
  );
}

// 30 — Property Detail Top
function S30_PropDetailTop() {
  return (
    <Screen>
      {/* Hero gallery */}
      <div style={{ position: 'relative', width: '100%', aspectRatio: '0.85' }}>
        <ImagePh w="100%" h="100%" label="property · main" radius={0} />
        {/* Floating controls */}
        <div style={{ position: 'absolute', top: 56, left: 16, right: 16, display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ width: 40, height: 40, borderRadius: 20, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}>
            <Ico name="chev-l" size={20} color={C.navy} />
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <div style={{ width: 40, height: 40, borderRadius: 20, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}>
              <Ico name="share" size={16} color={C.navy} />
            </div>
            <div style={{ width: 40, height: 40, borderRadius: 20, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}>
              <Ico name="heart" size={16} color={C.navy} />
            </div>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: 16, right: 16, padding: '6px 12px', borderRadius: 14, background: 'rgba(0,0,0,0.65)', color: '#fff', fontSize: 12, fontWeight: 600 }}>
          1 / 24
        </div>
        <div style={{ position: 'absolute', bottom: 16, left: 16, display: 'flex', gap: 4 }}>
          {[1,1,0,0,0].map((v,i) => <div key={i} style={{ width: 22, height: 4, borderRadius: 2, background: v ? '#fff' : 'rgba(255,255,255,0.4)' }} />)}
        </div>
      </div>

      {/* Title block */}
      <div style={{ padding: '20px 20px 0' }}>
        <div style={{ display: 'flex', gap: 8 }}>
          <Badge kind="green"><Ico name="check" size={11} color="#3d6610" />Superhost</Badge>
          <Badge kind="orange">Instant book</Badge>
        </div>
        <h1 style={{ fontSize: 24, fontWeight: 800, color: C.navy, letterSpacing: -0.6, margin: '12px 0 6px', lineHeight: 1.2 }}>
          Lekki Phase 1 — Ocean View Studio
        </h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: C.ink70, fontSize: 13 }}>
          <Ico name="pin" size={14} color={C.ink50} /> Lagos, Nigeria
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 12 }}>
          <Ico name="star" size={16} color={C.orange} />
          <span style={{ fontSize: 14, fontWeight: 700, color: C.navy }}>4.92</span>
          <span style={{ fontSize: 13, color: C.ink50 }}>· 184 reviews</span>
          <span style={{ flex: 1 }} />
          <span style={{ fontSize: 12, color: C.navy, textDecoration: 'underline', fontWeight: 600 }}>Show all</span>
        </div>
      </div>

      {/* Host strip */}
      <div style={{ padding: 20 }}>
        <Card p={14}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Avatar name="Tunde A" size={48} verified />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: C.navy, display: 'flex', alignItems: 'center', gap: 6 }}>Hosted by Tunde A. <VerifiedBadge size={14} /></div>
              <div style={{ fontSize: 12, color: C.ink50 }}>Joined 2022 · 96% response rate</div>
            </div>
            <Ico name="chev-r" size={18} color={C.ink50} />
          </div>
        </Card>
      </div>

      {/* Quick facts */}
      <div style={{ padding: '0 20px 20px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
        {[
          { ic: 'user', l: '4 guests' },
          { ic: 'bed', l: '1 bed' },
          { ic: 'bath', l: '1 bath' },
        ].map(f => (
          <Card key={f.l} p={12}>
            <Ico name={f.ic} size={20} color={C.navy} />
            <div style={{ fontSize: 13, fontWeight: 700, marginTop: 6 }}>{f.l}</div>
          </Card>
        ))}
      </div>

      {/* Tabs */}
      <div style={{ padding: '0 20px 20px' }}>
        <div style={{ display: 'flex', gap: 4, background: C.white, padding: 4, borderRadius: 12, border: `1px solid ${C.ink06}` }}>
          {[
            { l: 'Overview', a: true },
            { l: 'Amenities' },
            { l: 'Reviews' },
          ].map(t => (
            <div key={t.l} style={{ flex: 1, padding: '8px 0', textAlign: 'center', borderRadius: 8, background: t.a ? C.navy : 'transparent', color: t.a ? '#fff' : C.ink70, fontSize: 13, fontWeight: 600 }}>{t.l}</div>
          ))}
        </div>
      </div>

      <FixedBookBar />
    </Screen>
  );
}

// 31 — Property Detail Middle
function S31_PropDetailMid() {
  return (
    <Screen>
      <TopHeader title="Ocean View Studio" right={<Ico name="heart" size={20} color={C.navy} />} />
      <div style={{ padding: '12px 20px 100px' }}>
        {/* About */}
        <h3 style={{ fontSize: 17, fontWeight: 800, color: C.navy, margin: '0 0 10px' }}>About this place</h3>
        <p style={{ fontSize: 14, color: C.ink70, lineHeight: 1.6, margin: 0 }}>
          A bright studio overlooking the lagoon, two minutes from the beach. The space was designed for digital nomads: floor-to-ceiling windows, a 6-foot work desk with monitor, and reliable fibre.{' '}
          <span style={{ color: C.navy, fontWeight: 700 }}>Read more</span>
        </p>

        {/* Amenities */}
        <h3 style={{ fontSize: 17, fontWeight: 800, color: C.navy, margin: '24px 0 12px' }}>What this place offers</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {[
            { ic: 'wifi-amenity', l: 'Fibre wifi · 200 Mbps' },
            { ic: 'kitchen', l: 'Full kitchen' },
            { ic: 'parking', l: 'Free parking' },
            { ic: 'sun', l: 'Lagoon view' },
            { ic: 'wave', l: 'Beach access' },
            { ic: 'bath', l: 'Hot water' },
          ].map(a => (
            <div key={a.l} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <Ico name={a.ic} size={20} color={C.navy} />
              <span style={{ fontSize: 13, color: C.ink, fontWeight: 500 }}>{a.l}</span>
            </div>
          ))}
        </div>
        <GhostButton style={{ marginTop: 14, height: 44 }}>Show all 28 amenities</GhostButton>

        {/* House rules */}
        <h3 style={{ fontSize: 17, fontWeight: 800, color: C.navy, margin: '28px 0 12px' }}>House rules</h3>
        <Card p={14}>
          {[
            { ic: 'flag', l: 'Check-in', v: 'After 14:00' },
            { ic: 'flag', l: 'Check-out', v: 'Before 11:00' },
            { ic: 'x-c', l: 'No smoking' },
            { ic: 'x-c', l: 'No parties' },
            { ic: 'check-c', l: 'Pets allowed', v: 'Up to 1 small pet' },
          ].map((r, i, arr) => (
            <div key={r.l} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0', borderBottom: i < arr.length - 1 ? `1px solid ${C.ink06}` : 'none' }}>
              <Ico name={r.ic} size={18} color={r.ic === 'x-c' ? C.red : C.navy} />
              <span style={{ flex: 1, fontSize: 13, fontWeight: 600 }}>{r.l}</span>
              {r.v && <span style={{ fontSize: 12, color: C.ink50, fontWeight: 600 }}>{r.v}</span>}
            </div>
          ))}
        </Card>

        {/* Safety */}
        <h3 style={{ fontSize: 17, fontWeight: 800, color: C.navy, margin: '28px 0 12px' }}>Safety & accessibility</h3>
        <Card p={14}>
          {['Smoke alarm', 'Carbon monoxide alarm', 'First-aid kit', 'Step-free entrance'].map((s, i, arr) => (
            <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0', borderBottom: i < arr.length - 1 ? `1px solid ${C.ink06}` : 'none' }}>
              <Ico name="check-c" size={18} color={C.green} />
              <span style={{ fontSize: 13, fontWeight: 500 }}>{s}</span>
            </div>
          ))}
        </Card>
      </div>
      <FixedBookBar />
    </Screen>
  );
}

// 32 — Property Detail Bottom (calendar + reviews + map + booking)
function S32_PropDetailBot() {
  return (
    <Screen>
      <TopHeader title="Ocean View Studio" right={<Ico name="heart" size={20} color={C.navy} />} />
      <div style={{ padding: '12px 20px 100px' }}>
        <h3 style={{ fontSize: 17, fontWeight: 800, color: C.navy, margin: '0 0 12px' }}>Availability</h3>
        <Card p={14}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
            <Ico name="chev-l" size={16} color={C.ink50} />
            <div style={{ fontSize: 14, fontWeight: 700, color: C.navy }}>June 2026</div>
            <Ico name="chev-r" size={16} color={C.navy} />
          </div>
          <MiniCalendar />
          <div style={{ display: 'flex', gap: 14, fontSize: 11, color: C.ink50, marginTop: 10, justifyContent: 'center' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><span style={{ width: 8, height: 8, borderRadius: 4, background: C.orange }} />Selected</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><span style={{ width: 8, height: 8, borderRadius: 4, background: C.ink12 }} />Booked</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><span style={{ width: 8, height: 8, borderRadius: 4, background: '#fff', border: `1px solid ${C.ink12}` }} />Available</span>
          </div>
        </Card>

        <h3 style={{ fontSize: 17, fontWeight: 800, color: C.navy, margin: '24px 0 12px' }}>Where you'll be</h3>
        <div style={{ position: 'relative', borderRadius: 14, overflow: 'hidden', height: 160 }}>
          <ImagePh w="100%" h="100%" label="map · lagos" radius={14} tone="light" />
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -100%)' }}>
            <div style={{ width: 40, height: 40, borderRadius: 20, background: C.orange, border: '4px solid #fff', boxShadow: '0 4px 12px rgba(0,0,0,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Ico name="home" size={16} color="#fff" />
            </div>
          </div>
        </div>
        <div style={{ marginTop: 10, fontSize: 13, color: C.ink70, lineHeight: 1.5 }}>
          Lekki Phase 1, Lagos. Exact address shared after booking.
        </div>

        <h3 style={{ fontSize: 17, fontWeight: 800, color: C.navy, margin: '28px 0 12px', display: 'flex', alignItems: 'center', gap: 10 }}>
          <Ico name="star" size={18} color={C.orange} /> 4.92 · 184 reviews
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
          {[
            { l: 'Cleanliness', v: 4.9 },
            { l: 'Accuracy', v: 4.9 },
            { l: 'Communication', v: 5.0 },
            { l: 'Location', v: 4.8 },
          ].map(r => (
            <div key={r.l}>
              <div style={{ fontSize: 12, color: C.ink70, marginBottom: 4 }}>{r.l}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ flex: 1, height: 4, background: C.ink06, borderRadius: 2 }}>
                  <div style={{ width: `${r.v/5*100}%`, height: '100%', background: C.orange, borderRadius: 2 }} />
                </div>
                <span style={{ fontSize: 12, fontWeight: 700, color: C.navy }}>{r.v}</span>
              </div>
            </div>
          ))}
        </div>
        {[
          { n: 'Mira K.', d: 'May 2026', q: 'Stunning view, peaceful, easy check-in. Tunde left a welcome basket — total class.' },
          { n: 'David O.', d: 'Apr 2026', q: 'Perfect for a workation. Wifi held up for all my calls.' },
        ].map(r => (
          <Card key={r.n} p={14} style={{ marginBottom: 10 }}>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 8 }}>
              <Avatar name={r.n} size={36} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 700 }}>{r.n}</div>
                <div style={{ fontSize: 11, color: C.ink50 }}>{r.d}</div>
              </div>
              <Stars value={5} />
            </div>
            <p style={{ fontSize: 13, color: C.ink70, margin: 0, lineHeight: 1.5 }}>"{r.q}"</p>
          </Card>
        ))}
        <GhostButton style={{ marginTop: 6, height: 44 }}>Show all 184 reviews</GhostButton>
      </div>
      <FixedBookBar />
    </Screen>
  );
}

// 33 — Image gallery fullscreen
function S33_Gallery() {
  return (
    <Screen bg="#000" dark statusBarDark scroll={false}>
      <div style={{ position: 'absolute', inset: 0, background: '#000' }}>
        <div style={{ position: 'absolute', top: 56, left: 16, right: 16, display: 'flex', alignItems: 'center', justifyContent: 'space-between', zIndex: 5 }}>
          <div style={{ width: 40, height: 40, borderRadius: 20, background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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

// 34 — Host profile mini page
function S34_HostProfile() {
  return (
    <Screen>
      <TopHeader title="Host" />
      <div style={{ padding: '12px 20px 40px' }}>
        <div style={{ background: C.white, borderRadius: 18, padding: 20, border: `1px solid ${C.ink06}`, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <Avatar name="Tunde A" size={88} verified />
          <h2 style={{ fontSize: 22, fontWeight: 800, color: C.navy, margin: '12px 0 4px', letterSpacing: -0.4, display: 'flex', alignItems: 'center', gap: 8 }}>
            Tunde A. <VerifiedBadge size={18} />
          </h2>
          <Badge kind="orange">Superhost</Badge>
          <div style={{ display: 'flex', gap: 18, marginTop: 18 }}>
            {[
              { v: '184', l: 'Reviews' },
              { v: '4.92', l: 'Rating' },
              { v: '4y', l: 'On Homely' },
            ].map(s => (
              <div key={s.l} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 18, fontWeight: 800, color: C.navy }}>{s.v}</div>
                <div style={{ fontSize: 11, color: C.ink50 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <Card style={{ marginTop: 16 }} p={16}>
          <div style={{ fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 8 }}>About Tunde</div>
          <p style={{ fontSize: 13, color: C.ink70, lineHeight: 1.6, margin: 0 }}>
            Architect, runner, surf-curious. I list two spaces in Lekki and one in Tarkwa Bay — both designed for long stays.
          </p>
          <div style={{ marginTop: 14, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, fontSize: 12 }}>
            {[
              { ic: 'globe', l: 'Speaks', v: 'English, Yoruba' },
              { ic: 'sparkle', l: 'Hobby', v: 'Surfing' },
              { ic: 'msg', l: 'Response', v: 'within 1h' },
              { ic: 'check-c', l: 'Verified', v: 'ID + Address' },
            ].map(r => (
              <div key={r.l}>
                <div style={{ fontSize: 11, color: C.ink50 }}>{r.l}</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: C.navy, marginTop: 2 }}>{r.v}</div>
              </div>
            ))}
          </div>
        </Card>

        <div style={{ marginTop: 16, fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 10 }}>Tunde's other listings</div>
        <div style={{ display: 'flex', gap: 12, overflowX: 'auto' }}>
          {PROPS.slice(0, 3).map(p => <PropCardSmall key={p.id} p={p} />)}
        </div>

        <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <PrimaryButton icon={<Ico name="msg" size={18} color="#fff" />}>Message Tunde</PrimaryButton>
          <GhostButton>Report this host</GhostButton>
        </div>
      </div>
    </Screen>
  );
}

// 35 — All Reviews
function S35_AllReviews() {
  return (
    <Screen padBottom={20}>
      <TopHeader title="All reviews" />
      <div style={{ padding: '8px 20px 30px' }}>
        <Card p={16}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div>
              <div style={{ fontSize: 36, fontWeight: 800, color: C.navy, letterSpacing: -1 }}>4.92</div>
              <Stars value={5} size={14} />
              <div style={{ fontSize: 11, color: C.ink50, marginTop: 2 }}>184 reviews</div>
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
              {[5,4,3,2,1].map(n => (
                <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11 }}>
                  <span style={{ width: 8, color: C.ink50 }}>{n}</span>
                  <div style={{ flex: 1, height: 4, background: C.ink06, borderRadius: 2 }}>
                    <div style={{ width: n === 5 ? '92%' : n === 4 ? '6%' : '2%', height: '100%', background: C.orange, borderRadius: 2 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <div style={{ display: 'flex', gap: 8, marginTop: 14, overflowX: 'auto' }}>
          {['All 184', 'Cleanliness', 'Location', 'Wifi', 'Hosting', 'Value'].map((f, i) => (
            <div key={f} style={{ padding: '6px 12px', borderRadius: 16, background: i === 0 ? C.navy : '#fff', color: i === 0 ? '#fff' : C.navy, fontSize: 12, fontWeight: 600, border: `1px solid ${i === 0 ? C.navy : C.ink12}`, flexShrink: 0 }}>{f}</div>
          ))}
        </div>

        <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            { n: 'Mira K.', d: 'May 2026', stay: '4 nights', q: 'Stunning view, peaceful, easy check-in. Tunde left a welcome basket — total class. Would book again.' },
            { n: 'David O.', d: 'Apr 2026', stay: '6 nights', q: 'Perfect for a workation. Wifi held up for all my calls. Quiet at night.' },
            { n: 'Sofia P.', d: 'Apr 2026', stay: '2 nights', q: 'Bigger than the photos suggest. Kitchen is great. Beach 5 min walk.' },
            { n: 'James R.', d: 'Mar 2026', stay: '3 nights', q: 'Clean, modern, exactly as listed. Host responsive.' },
          ].map(r => (
            <Card key={r.n} p={14}>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 8 }}>
                <Avatar name={r.n} size={36} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 700 }}>{r.n}</div>
                  <div style={{ fontSize: 11, color: C.ink50 }}>{r.d} · {r.stay}</div>
                </div>
                <Stars value={5} />
              </div>
              <p style={{ fontSize: 13, color: C.ink70, margin: 0, lineHeight: 1.5 }}>"{r.q}"</p>
            </Card>
          ))}
        </div>
      </div>
    </Screen>
  );
}

// — Reusable helpers (only used in this file) —

function PropCardWide({ p }) {
  return (
    <div style={{ width: 280, flexShrink: 0 }}>
      <div style={{ position: 'relative', borderRadius: 14, overflow: 'hidden' }}>
        <ImagePh w="100%" h={200} label={p.id} radius={14} />
        <div style={{ position: 'absolute', top: 12, left: 12 }}>
          {p.tag && <Badge kind={p.tag === 'Superhost' ? 'orange' : 'green'} size="sm">{p.tag}</Badge>}
        </div>
        <div style={{ position: 'absolute', top: 12, right: 12, width: 32, height: 32, borderRadius: 16, background: 'rgba(255,255,255,0.95)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Ico name="heart" size={16} color={C.navy} />
        </div>
      </div>
      <div style={{ padding: '10px 4px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: C.navy, letterSpacing: -0.2, flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.title}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <Ico name="star" size={12} color={C.orange} />
            <span style={{ fontSize: 12, fontWeight: 600 }}>{p.rating}</span>
          </div>
        </div>
        <div style={{ fontSize: 11, color: C.ink50, marginTop: 2 }}>{p.city}</div>
        <div style={{ marginTop: 6 }}>
          <span style={{ fontSize: 16, fontWeight: 800, color: C.navy }}>£{p.price}</span>
          <span style={{ fontSize: 12, color: C.ink50 }}> /night</span>
        </div>
      </div>
    </div>
  );
}

function PropCard({ p }) {
  return (
    <div style={{ background: '#fff', borderRadius: 16, padding: 12, border: `1px solid ${C.ink06}`, display: 'flex', gap: 12 }}>
      <ImagePh w={112} h={112} label={p.id} radius={10} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11, color: C.ink50, marginBottom: 2 }}>{p.city}</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: C.navy, lineHeight: 1.25, letterSpacing: -0.2 }}>{p.title}</div>
          </div>
          <Ico name="heart" size={18} color={C.ink50} />
        </div>
        <div style={{ flex: 1 }} />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <Ico name="star" size={13} color={C.orange} />
            <span style={{ fontSize: 12, fontWeight: 700 }}>{p.rating}</span>
            <span style={{ fontSize: 11, color: C.ink50 }}>({p.reviews})</span>
          </div>
          <div>
            <span style={{ fontSize: 16, fontWeight: 800, color: C.navy }}>£{p.price}</span>
            <span style={{ fontSize: 11, color: C.ink50 }}> /night</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function PropCardSmall({ p }) {
  return (
    <div style={{ width: 160, flexShrink: 0 }}>
      <ImagePh w="100%" h={120} label={p.id} radius={10} />
      <div style={{ marginTop: 8, fontSize: 13, fontWeight: 700, color: C.navy, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.title}</div>
      <div style={{ fontSize: 11, color: C.ink50, marginTop: 2 }}>£{p.price} /night · ⭐ {p.rating}</div>
    </div>
  );
}

function SectionHeader({ title, cta }) {
  return (
    <div style={{ padding: '20px 20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h2 style={{ fontSize: 17, fontWeight: 800, color: C.navy, letterSpacing: -0.3, margin: 0 }}>{title}</h2>
      {cta && <span style={{ fontSize: 12, color: C.orange, fontWeight: 700 }}>{cta} →</span>}
    </div>
  );
}

function FixedBookBar({ price = 42, total = 'Jun 14 – 21' } = {}) {
  return (
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0, padding: '14px 16px 24px',
      background: C.white, borderTop: `1px solid ${C.ink06}`,
      display: 'flex', alignItems: 'center', gap: 12, zIndex: 50,
    }}>
      <div style={{ flex: 1 }}>
        <div><span style={{ fontSize: 20, fontWeight: 800, color: C.navy }}>£{price}</span><span style={{ fontSize: 13, color: C.ink50 }}> /night</span></div>
        <div style={{ fontSize: 11, color: C.ink50, textDecoration: 'underline' }}>{total}</div>
      </div>
      <PrimaryButton full={false} size="md" style={{ width: 160 }}>Book now</PrimaryButton>
    </div>
  );
}

function MiniCalendar({ selected = [16, 17, 18, 19, 20, 21], booked = [5, 6, 7, 12, 13, 25, 26] } = {}) {
  const days = Array.from({ length: 35 }, (_, i) => i - 1); // -1 to 33
  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4, fontSize: 10, color: C.ink50, fontWeight: 600, padding: '0 0 6px', textAlign: 'center' }}>
        {['M','T','W','T','F','S','S'].map((d, i) => <div key={i}>{d}</div>)}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4 }}>
        {days.map((d, i) => {
          const num = d > 0 && d <= 30 ? d : null;
          const isSel = selected.includes(num);
          const isBooked = booked.includes(num);
          const isStart = num === selected[0];
          const isEnd = num === selected[selected.length - 1];
          return (
            <div key={i} style={{
              aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 12, fontWeight: 600,
              background: isSel ? (isStart || isEnd ? C.orange : hexA(C.orange, 0.2)) : 'transparent',
              color: isSel ? (isStart || isEnd ? '#fff' : C.navy) : (isBooked ? C.ink30 : C.navy),
              textDecoration: isBooked ? 'line-through' : 'none',
              borderRadius: isStart ? '8px 0 0 8px' : isEnd ? '0 8px 8px 0' : isSel ? 0 : 8,
            }}>{num || ''}</div>
          );
        })}
      </div>
    </div>
  );
}

Object.assign(window, {
  S25_Home, S26_SearchResults, S27_Filter, S28_MapView, S29_Category,
  S30_PropDetailTop, S31_PropDetailMid, S32_PropDetailBot, S33_Gallery,
  S34_HostProfile, S35_AllReviews,
  PropCard, PropCardWide, PropCardSmall, SectionHeader, FixedBookBar, MiniCalendar, PROPS,
});
