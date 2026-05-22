// screens-guest-profile.jsx — Section 3.5–3.7 (screens 49–57): Reviews, Favourites, Guest Profile/Settings

// 49 — Write a Review
function S49_WriteReview() {
  return (
    <Screen>
      <TopHeader title="Leave a review" />
      <div style={{ padding: '8px 20px 120px' }}>
        <Card p={12} style={{ marginBottom: 14 }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <ImagePh w={64} h={64} label="prop" radius={10} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, color: C.ink50 }}>You stayed Apr 4 – 8</div>
              <div style={{ fontSize: 14, fontWeight: 700 }}>Brutalist Apartment</div>
              <div style={{ fontSize: 12, color: C.ink70 }}>Hosted by Mira K.</div>
            </div>
          </div>
        </Card>

        {/* Overall rating */}
        <Card p={16} style={{ marginBottom: 14 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 4 }}>How was your stay overall?</div>
          <div style={{ fontSize: 12, color: C.ink50, marginBottom: 12 }}>Tap to rate</div>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
            {[1,2,3,4,5].map(i => (
              <div key={i} style={{ cursor: 'pointer' }}>
                <Ico name="star" size={40} color={i <= 4 ? C.orange : C.ink12} />
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', fontSize: 14, fontWeight: 700, color: C.navy, marginTop: 8 }}>Loved it</div>
        </Card>

        {/* Category ratings */}
        <Card p={14} style={{ marginBottom: 14 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 8 }}>Rate by category</div>
          {[
            { l: 'Cleanliness', v: 5 },
            { l: 'Accuracy', v: 4 },
            { l: 'Check-in', v: 5 },
            { l: 'Communication', v: 4 },
            { l: 'Location', v: 5 },
            { l: 'Value', v: 4 },
          ].map((r, i, arr) => (
            <div key={r.l} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderTop: i ? `1px solid ${C.ink06}` : 'none' }}>
              <span style={{ fontSize: 13, fontWeight: 600 }}>{r.l}</span>
              <Stars value={r.v} size={18} />
            </div>
          ))}
        </Card>

        {/* Write */}
        <Card p={14}>
          <div style={{ fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 8 }}>Tell future guests</div>
          <div style={{ background: C.pale, borderRadius: 10, padding: 12, minHeight: 100, fontSize: 13, color: C.ink70, lineHeight: 1.5 }}>
            The apartment was beautifully designed and exactly as the photos suggested. Mira's communication was clear, and check-in was effortless…
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
            <span style={{ fontSize: 11, color: C.ink50 }}>Min 25 characters</span>
            <span style={{ fontSize: 11, color: C.ink50 }}>142 / 1000</span>
          </div>
          <div style={{ marginTop: 12, paddingTop: 12, borderTop: `1px solid ${C.ink06}`, display: 'flex', gap: 8 }}>
            <Ico name="camera" size={20} color={C.navy} />
            <span style={{ fontSize: 12, color: C.navy, fontWeight: 600 }}>Add photos (optional)</span>
          </div>
        </Card>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '14px 16px 24px', background: '#fff', borderTop: `1px solid ${C.ink06}` }}>
        <PrimaryButton>Submit review</PrimaryButton>
      </div>
    </Screen>
  );
}

// 50 — Review Submitted
function S50_ReviewSubmitted() {
  return (
    <Screen>
      <div style={{ padding: '40px 24px 40px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', height: '100%' }}>
        <div style={{ width: 120, height: 120, borderRadius: 60, background: hexA(C.green, 0.18), display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Ico name="check" size={56} color={C.green} />
        </div>
        <h1 style={{ fontSize: 26, fontWeight: 800, color: C.navy, letterSpacing: -0.8, margin: '20px 0 8px' }}>Thanks, Amelia 🎉</h1>
        <p style={{ fontSize: 14, color: C.ink70, margin: 0, lineHeight: 1.6 }}>Your review helps future travellers and supports great hosts like Mira.</p>

        <Card style={{ width: '100%', textAlign: 'left', marginTop: 24 }} p={16}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
            <Avatar name="Amelia" size={36} verified />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 700 }}>Your review</div>
              <div style={{ fontSize: 11, color: C.ink50 }}>Public · May 20</div>
            </div>
            <Stars value={4} />
          </div>
          <p style={{ fontSize: 13, color: C.ink70, margin: 0, lineHeight: 1.5 }}>
            "The apartment was beautifully designed and exactly as the photos suggested. Mira's communication was clear, and check-in was effortless…"
          </p>
        </Card>

        <Card style={{ width: '100%', textAlign: 'left', marginTop: 12 }} p={14}>
          <div style={{ display: 'flex', gap: 10 }}>
            <Ico name="sparkle" size={18} color={C.orange} />
            <div style={{ fontSize: 12, color: C.ink70, lineHeight: 1.5, flex: 1 }}>
              You're 3 reviews away from <span style={{ fontWeight: 700, color: C.navy }}>Trusted Traveller</span> badge.
            </div>
          </div>
        </Card>

        <div style={{ flex: 1 }} />
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <PrimaryButton>Browse more stays</PrimaryButton>
          <span style={{ fontSize: 13, color: C.navy, fontWeight: 600, padding: 8 }}>See my reviews</span>
        </div>
      </div>
    </Screen>
  );
}

// 51 — My Reviews
function S51_MyReviews() {
  return (
    <Screen>
      <TopHeader title="My reviews" />
      <div style={{ padding: '8px 20px 30px' }}>
        <Card p={14} style={{ marginBottom: 14, background: C.navy, color: '#fff' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)' }}>You've written</div>
              <div style={{ fontSize: 32, fontWeight: 800, letterSpacing: -1, marginTop: 2 }}>7 reviews</div>
            </div>
            <div style={{ flex: 1 }} />
            <div style={{ textAlign: 'right' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4, justifyContent: 'flex-end' }}>
                <Ico name="star" size={14} color={C.orange} />
                <span style={{ fontSize: 16, fontWeight: 800 }}>4.7</span>
              </div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)' }}>avg rating given</div>
            </div>
          </div>
        </Card>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            { t: 'Brutalist Apartment', l: 'London', d: 'May 2026', stars: 4, q: 'Beautifully designed apartment. Mira was clear and check-in was effortless…' },
            { t: 'Quiet Bungalow', l: 'Tarkwa Bay', d: 'Mar 2026', stars: 5, q: 'Best stay this year. Will go back next dry season.' },
            { t: 'Lekki Studio', l: 'Lagos', d: 'Jan 2026', stars: 5, q: 'Excellent wifi and great views.' },
          ].map(r => (
            <Card key={r.t} p={14}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 11, color: C.ink50 }}>{r.l} · {r.d}</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: C.navy, marginTop: 2 }}>{r.t}</div>
                </div>
                <Stars value={r.stars} />
              </div>
              <p style={{ fontSize: 13, color: C.ink70, margin: '8px 0 0', lineHeight: 1.5 }}>"{r.q}"</p>
              <div style={{ display: 'flex', gap: 12, marginTop: 12, paddingTop: 12, borderTop: `1px solid ${C.ink06}` }}>
                <button style={{ background: 'transparent', border: 'none', color: C.navy, fontWeight: 600, fontSize: 12, display: 'flex', alignItems: 'center', gap: 6 }}>
                  <Ico name="edit" size={14} color={C.navy} />Edit
                </button>
                <button style={{ background: 'transparent', border: 'none', color: C.red, fontWeight: 600, fontSize: 12, display: 'flex', alignItems: 'center', gap: 6 }}>
                  <Ico name="trash" size={14} color={C.red} />Delete
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Screen>
  );
}

// 52 — Favourites
function S52_Favourites() {
  return (
    <Screen padBottom={88}>
      <TopHeader title="Saved" back={false} right={<Ico name="more" size={20} color={C.navy} />} />
      <div style={{ padding: '8px 20px 30px' }}>
        {/* Lists strip */}
        <div style={{ display: 'flex', gap: 10, overflowX: 'auto', paddingBottom: 4 }}>
          {[
            { l: 'All saved', n: 24, a: true },
            { l: 'Lagos trip', n: 8 },
            { l: 'Wishlist 2027', n: 12 },
            { l: 'Beach', n: 4 },
            { l: '+ New', add: true },
          ].map(c => (
            <div key={c.l} style={{ padding: '8px 14px', borderRadius: 14, background: c.a ? C.navy : '#fff', color: c.a ? '#fff' : C.navy, fontSize: 13, fontWeight: 700, border: c.add ? `1.5px dashed ${C.ink30}` : (c.a ? 'none' : `1px solid ${C.ink06}`), flexShrink: 0, display: 'flex', gap: 6, alignItems: 'center' }}>
              {c.l}
              {!c.add && <span style={{ background: c.a ? 'rgba(255,255,255,0.2)' : C.pale, padding: '2px 6px', borderRadius: 8, fontSize: 11 }}>{c.n}</span>}
            </div>
          ))}
        </div>

        <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          {[
            { t: 'Ocean View Studio', city: 'Lagos', p: 42, r: 4.92 },
            { t: 'Shoreditch Loft', city: 'London', p: 168, r: 4.88 },
            { t: 'Quiet Bungalow', city: 'Tarkwa Bay', p: 88, r: 4.95 },
            { t: 'Brutalist Apt', city: 'London', p: 124, r: 4.81 },
          ].map((p, i) => (
            <div key={i}>
              <div style={{ position: 'relative' }}>
                <ImagePh w="100%" h={140} label={p.t} radius={12} />
                <div style={{ position: 'absolute', top: 8, right: 8, width: 30, height: 30, borderRadius: 15, background: 'rgba(255,255,255,0.95)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Ico name="heart-fill" size={14} color={C.orange} />
                </div>
              </div>
              <div style={{ marginTop: 8 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: C.navy, flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.t}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}><Ico name="star" size={11} color={C.orange} /><span style={{ fontSize: 11, fontWeight: 600 }}>{p.r}</span></div>
                </div>
                <div style={{ fontSize: 11, color: C.ink50 }}>{p.city}</div>
                <div style={{ marginTop: 2 }}><span style={{ fontSize: 14, fontWeight: 800, color: C.navy }}>£{p.p}</span><span style={{ fontSize: 11, color: C.ink50 }}> /night</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BottomNav active="favs" />
    </Screen>
  );
}

// 53 — Guest Profile
function S53_GuestProfile() {
  return (
    <Screen padBottom={88}>
      {/* Header with avatar */}
      <div style={{ background: C.navy, color: '#fff', padding: '16px 20px 80px', borderRadius: '0 0 28px 28px', position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: 17, fontWeight: 800 }}>Profile</div>
          <Ico name="settings" size={20} color="#fff" />
        </div>
      </div>
      <div style={{ padding: '0 20px', marginTop: -60 }}>
        <Card p={20}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
            <Avatar name="Amelia Bankole" size={68} verified ring />
            <div style={{ flex: 1 }}>
              <h2 style={{ fontSize: 20, fontWeight: 800, color: C.navy, margin: 0, letterSpacing: -0.4, display: 'flex', alignItems: 'center', gap: 6 }}>
                Amelia B. <VerifiedBadge size={16} />
              </h2>
              <div style={{ fontSize: 12, color: C.ink50, marginTop: 2 }}>amelia@email.com</div>
              <Badge kind="green" size="sm">KYC verified</Badge>
            </div>
          </div>

          <p style={{ fontSize: 13, color: C.ink70, lineHeight: 1.5, margin: 0 }}>
            Lagos-born, London-based product designer. Loves long stays, slow mornings, and finding the best coffee.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginTop: 16, padding: 12, background: C.pale, borderRadius: 12 }}>
            {[
              { v: '14', l: 'Trips' },
              { v: '7', l: 'Reviews' },
              { v: '3y', l: 'On Homely' },
            ].map(s => (
              <div key={s.l} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 20, fontWeight: 800, color: C.navy }}>{s.v}</div>
                <div style={{ fontSize: 11, color: C.ink50 }}>{s.l}</div>
              </div>
            ))}
          </div>

          <GhostButton style={{ marginTop: 16 }} size="sm">Edit profile</GhostButton>
        </Card>

        <Card style={{ marginTop: 14 }} p={4}>
          {[
            { ic: 'card', l: 'Payment methods', sub: '2 cards saved' },
            { ic: 'globe', l: 'Language & region', sub: 'English (UK) · GBP' },
            { ic: 'bell', l: 'Notifications', sub: 'Push, email, SMS' },
            { ic: 'shield', l: 'Privacy & security', sub: '2FA enabled' },
            { ic: 'doc', l: 'Refer a friend', sub: 'Earn £25 in credit' },
            { ic: 'msg', l: 'Help & support', sub: '24/7 chat' },
            { ic: 'logout', l: 'Sign out' },
          ].map((r, i, arr) => (
            <div key={r.l} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: 14, borderBottom: i < arr.length - 1 ? `1px solid ${C.ink06}` : 'none' }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: C.pale, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Ico name={r.ic} size={18} color={r.ic === 'logout' ? C.red : C.navy} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: r.ic === 'logout' ? C.red : C.navy }}>{r.l}</div>
                {r.sub && <div style={{ fontSize: 11, color: C.ink50, marginTop: 2 }}>{r.sub}</div>}
              </div>
              {r.ic !== 'logout' && <Ico name="chev-r" size={16} color={C.ink30} />}
            </div>
          ))}
        </Card>

        <div style={{ textAlign: 'center', marginTop: 16, fontSize: 11, color: C.ink50, fontFamily: F.mono }}>v1.0.0 · build 4821</div>
      </div>
      <BottomNav active="profile" />
    </Screen>
  );
}

// 54 — Edit Profile
function S54_EditProfile() {
  return (
    <Screen>
      <TopHeader title="Edit profile" right={<span style={{ fontSize: 14, color: C.orange, fontWeight: 700 }}>Save</span>} />
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

// 55 — Notification Preferences
function S55_NotifPrefs() {
  return (
    <Screen>
      <TopHeader title="Notifications" />
      <div style={{ padding: '8px 20px 40px' }}>
        {[
          { h: 'Bookings', items: [
            { l: 'Booking confirmed', p: true, e: true, s: true },
            { l: 'Host accepted / declined', p: true, e: true, s: false },
            { l: 'Check-in reminders', p: true, e: false, s: true },
            { l: 'Trip changes', p: true, e: true, s: false },
          ]},
          { h: 'Messages', items: [
            { l: 'New message from host', p: true, e: false, s: false },
            { l: 'Daily digest', p: false, e: true, s: false },
          ]},
          { h: 'Marketing', items: [
            { l: 'Weekly deals', p: false, e: true, s: false },
            { l: 'New properties in my area', p: true, e: false, s: false },
          ]},
        ].map(g => (
          <div key={g.h} style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: C.ink50, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 8 }}>{g.h}</div>
            <Card p={0}>
              <div style={{ display: 'flex', padding: '10px 14px 6px', alignItems: 'center', borderBottom: `1px solid ${C.ink06}`, fontSize: 10, color: C.ink50, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase' }}>
                <span style={{ flex: 1 }}>Event</span>
                <span style={{ width: 44, textAlign: 'center' }}>Push</span>
                <span style={{ width: 44, textAlign: 'center' }}>Email</span>
                <span style={{ width: 44, textAlign: 'center' }}>SMS</span>
              </div>
              {g.items.map((it, i, arr) => (
                <div key={it.l} style={{ display: 'flex', padding: '12px 14px', alignItems: 'center', borderBottom: i < arr.length - 1 ? `1px solid ${C.ink06}` : 'none' }}>
                  <span style={{ flex: 1, fontSize: 13, fontWeight: 500 }}>{it.l}</span>
                  <div style={{ width: 44, display: 'flex', justifyContent: 'center' }}><Toggle on={it.p} /></div>
                  <div style={{ width: 44, display: 'flex', justifyContent: 'center' }}><Toggle on={it.e} /></div>
                  <div style={{ width: 44, display: 'flex', justifyContent: 'center' }}><Toggle on={it.s} /></div>
                </div>
              ))}
            </Card>
          </div>
        ))}
      </div>
    </Screen>
  );
}

function Toggle({ on = false }) {
  return (
    <div style={{ width: 36, height: 22, borderRadius: 11, background: on ? C.orange : C.ink12, position: 'relative', transition: 'background 0.2s' }}>
      <div style={{ position: 'absolute', top: 2, left: on ? 16 : 2, width: 18, height: 18, borderRadius: 9, background: '#fff', transition: 'left 0.2s', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }} />
    </div>
  );
}

// 56 — Account Settings
function S56_AccountSettings() {
  return (
    <Screen>
      <TopHeader title="Account settings" />
      <div style={{ padding: '8px 20px 40px' }}>
        {[
          { h: 'Security', items: [
            { ic: 'lock', l: 'Change password', sub: 'Last changed 3 months ago', chev: true },
            { ic: 'shield', l: 'Two-factor auth', sub: 'Enabled · Authenticator app', toggle: true, on: true },
            { ic: 'phone', l: 'Trusted devices', sub: '2 devices', chev: true },
            { ic: 'doc', l: 'Login history', chev: true },
          ]},
          { h: 'Linked accounts', items: [
            { ic: 'google', l: 'Google', sub: 'amelia@gmail.com', chev: true },
            { ic: 'apple', l: 'Apple', sub: 'Not connected', chev: true },
          ]},
          { h: 'Data', items: [
            { ic: 'download', l: 'Download my data', sub: 'GDPR · ZIP archive', chev: true },
            { ic: 'trash', l: 'Delete account', sub: 'Permanent action', danger: true, chev: true },
          ]},
        ].map(g => (
          <div key={g.h} style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: C.ink50, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 8 }}>{g.h}</div>
            <Card p={4}>
              {g.items.map((r, i, arr) => (
                <div key={r.l} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: 14, borderBottom: i < arr.length - 1 ? `1px solid ${C.ink06}` : 'none' }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: r.danger ? hexA(C.red, 0.12) : C.pale, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Ico name={r.ic} size={18} color={r.danger ? C.red : C.navy} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 600, color: r.danger ? C.red : C.navy }}>{r.l}</div>
                    {r.sub && <div style={{ fontSize: 11, color: C.ink50, marginTop: 2 }}>{r.sub}</div>}
                  </div>
                  {r.toggle && <Toggle on={r.on} />}
                  {r.chev && <Ico name="chev-r" size={16} color={C.ink30} />}
                </div>
              ))}
            </Card>
          </div>
        ))}
      </div>
    </Screen>
  );
}

// 57 — Delete Account Confirmation
function S57_DeleteAccount() {
  return (
    <Screen>
      <TopHeader title="Delete account" />
      <div style={{ padding: '12px 20px 120px' }}>
        <div style={{ width: 72, height: 72, borderRadius: 36, background: hexA(C.red, 0.12), display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
          <Ico name="alert" size={36} color={C.red} />
        </div>
        <h2 style={{ fontSize: 24, fontWeight: 800, color: C.navy, letterSpacing: -0.6, margin: '0 0 6px', textAlign: 'center' }}>This can't be undone</h2>
        <p style={{ fontSize: 14, color: C.ink70, margin: '0 0 20px', lineHeight: 1.5, textAlign: 'center' }}>
          Deleting your account will permanently remove all your data.
        </p>

        <Card p={14} style={{ marginBottom: 16, border: `1.5px solid ${hexA(C.red, 0.2)}` }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: C.red, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 10 }}>You'll lose</div>
          {[
            '14 booking records and receipts',
            "7 reviews you've written",
            '24 saved properties',
            '£25 in unused Homely credit',
          ].map(t => (
            <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '6px 0', fontSize: 13 }}>
              <Ico name="x" size={14} color={C.red} />
              <span style={{ color: C.ink70 }}>{t}</span>
            </div>
          ))}
        </Card>

        <Card p={14} style={{ marginBottom: 16, background: hexA(C.orange, 0.1), border: 'none' }}>
          <div style={{ display: 'flex', gap: 10 }}>
            <Ico name="info" size={18} color={C.orange} />
            <div style={{ fontSize: 12, color: '#a4541a', lineHeight: 1.5 }}>
              Consider <span style={{ fontWeight: 700 }}>pausing your account</span> instead — keeps your data but hides you from search.
            </div>
          </div>
        </Card>

        <label style={{ fontSize: 13, fontWeight: 700, color: C.navy }}>Type <span style={{ fontFamily: F.mono, background: C.pale, padding: '2px 6px', borderRadius: 4 }}>CONFIRM</span> to proceed</label>
        <div style={{ marginTop: 8, display: 'flex', alignItems: 'center', height: 52, padding: '0 16px', borderRadius: 12, background: '#fff', border: `1.5px solid ${C.red}` }}>
          <span style={{ fontSize: 15, fontFamily: F.mono, color: C.ink, letterSpacing: 2 }}>CONFIRM</span>
          <div style={{ width: 2, height: 22, background: C.orange, marginLeft: 4, animation: 'blink 1s infinite' }} />
        </div>
        <style>{`@keyframes blink { 50% { opacity: 0 } }`}</style>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '14px 16px 24px', background: '#fff', borderTop: `1px solid ${C.ink06}`, display: 'flex', gap: 10 }}>
        <GhostButton>Cancel</GhostButton>
        <DangerButton>Delete forever</DangerButton>
      </div>
    </Screen>
  );
}

Object.assign(window, {
  S49_WriteReview, S50_ReviewSubmitted, S51_MyReviews, S52_Favourites,
  S53_GuestProfile, S54_EditProfile, S55_NotifPrefs, S56_AccountSettings, S57_DeleteAccount,
  Toggle,
});
