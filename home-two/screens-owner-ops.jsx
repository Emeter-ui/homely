// screens-owner-ops.jsx — Section 4.3–4.6 (screens 77–89): Calendar, Reservations, Payouts, Reviews

// 77 — Availability Calendar
function S77_AvailCalendar() {
  return (
    <Screen padBottom={88}>
      <TopHeader title="Calendar" right={
        <div style={{ display: 'flex', gap: 8 }}>
          <Ico name="filter" size={20} color={C.navy} />
          <Ico name="plus" size={20} color={C.navy} />
        </div>
      } />
      {/* Property selector */}
      <div style={{ padding: '0 20px 12px' }}>
        <div style={{ background: '#fff', borderRadius: 12, padding: '10px 14px', border: `1px solid ${C.ink06}`, display: 'flex', alignItems: 'center', gap: 12 }}>
          <ImagePh w={36} h={36} label="" radius={8} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: C.navy }}>Ocean View Studio</div>
            <div style={{ fontSize: 10, color: C.ink50 }}>Lekki · 78% booked next 60d</div>
          </div>
          <Ico name="chev-d" size={16} color={C.ink50} />
        </div>
      </div>

      {/* Month header */}
      <div style={{ padding: '0 20px 8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontSize: 16, fontWeight: 800, color: C.navy }}>June 2026</div>
        <div style={{ display: 'flex', gap: 6 }}>
          <div style={{ width: 30, height: 30, borderRadius: 8, background: '#fff', border: `1px solid ${C.ink06}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Ico name="chev-l" size={14} color={C.navy} />
          </div>
          <div style={{ width: 30, height: 30, borderRadius: 8, background: '#fff', border: `1px solid ${C.ink06}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Ico name="chev-r" size={14} color={C.navy} />
          </div>
        </div>
      </div>

      {/* Calendar */}
      <div style={{ padding: '0 20px' }}>
        <Card p={14}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4, fontSize: 10, color: C.ink50, fontWeight: 600, padding: '0 0 6px', textAlign: 'center' }}>
            {['M','T','W','T','F','S','S'].map((d, i) => <div key={i}>{d}</div>)}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4 }}>
            {Array.from({ length: 35 }).map((_, i) => {
              const num = i - 1 > 0 && i - 1 <= 30 ? i - 1 : null;
              const blocked = [3, 4, 23, 24].includes(num);
              const booked = [10, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21].includes(num);
              const avail = num && !blocked && !booked;
              let bg = 'transparent', col = C.navy, label = '';
              if (blocked) { bg = C.navy; col = '#fff'; }
              else if (booked) { bg = hexA(C.orange, 0.2); col = '#a4541a'; }
              else if (avail) { bg = hexA(C.green, 0.15); col = '#3d6610'; }

              return (
                <div key={i} style={{
                  aspectRatio: '0.85', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  background: bg, color: col, borderRadius: 6, fontSize: 12, fontWeight: 600,
                  position: 'relative',
                }}>
                  <div>{num || ''}</div>
                  {booked && num === 14 && <div style={{ fontSize: 7, opacity: 0.8, marginTop: 1, fontWeight: 700 }}>£42</div>}
                </div>
              );
            })}
          </div>
        </Card>

        <div style={{ marginTop: 12, display: 'flex', gap: 14, fontSize: 11, color: C.ink50, justifyContent: 'center' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><span style={{ width: 10, height: 10, borderRadius: 3, background: hexA(C.green, 0.4) }} />Available</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><span style={{ width: 10, height: 10, borderRadius: 3, background: hexA(C.orange, 0.4) }} />Booked</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><span style={{ width: 10, height: 10, borderRadius: 3, background: C.navy }} />Blocked</span>
        </div>

        {/* Selected date detail */}
        <Card p={14} style={{ marginTop: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: 11, color: C.ink50, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase' }}>Jun 14, 2026</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: C.navy, marginTop: 2 }}>Amelia B. checks in</div>
              <div style={{ fontSize: 11, color: C.ink50, marginTop: 2 }}>Booked May 15 · 7 nights · £294</div>
            </div>
            <Avatar name="Amelia B" size={40} verified />
          </div>
        </Card>
      </div>
      <OwnerNav active="rentals" />
    </Screen>
  );
}

// 78 — Block date range
function S78_BlockDates() {
  return (
    <Screen>
      <TopHeader title="Block dates" />
      <div style={{ padding: '8px 20px 120px' }}>
        <Card p={14} style={{ marginBottom: 14 }}>
          <div style={{ display: 'flex', gap: 8 }}>
            <div style={{ flex: 1, padding: 12, borderRadius: 10, border: `1.5px solid ${C.orange}` }}>
              <div style={{ fontSize: 11, color: C.ink50, fontWeight: 600, textTransform: 'uppercase' }}>From</div>
              <div style={{ fontSize: 16, fontWeight: 800, color: C.navy, marginTop: 2 }}>23 Jun</div>
              <div style={{ fontSize: 11, color: C.ink50 }}>Sunday</div>
            </div>
            <div style={{ flex: 1, padding: 12, borderRadius: 10, border: `1.5px solid ${C.ink12}` }}>
              <div style={{ fontSize: 11, color: C.ink50, fontWeight: 600, textTransform: 'uppercase' }}>To</div>
              <div style={{ fontSize: 16, fontWeight: 800, color: C.navy, marginTop: 2 }}>24 Jun</div>
              <div style={{ fontSize: 11, color: C.ink50 }}>Monday</div>
            </div>
          </div>
          <div style={{ fontSize: 12, color: C.ink50, textAlign: 'center', marginTop: 10 }}>2 nights blocked</div>
        </Card>

        <MiniCalendar selected={[23, 24]} booked={[10, 11, 14, 15, 16, 17, 18, 19, 20, 21]} />

        <Card p={14} style={{ marginTop: 16 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 8 }}>Reason for block</div>
          {[
            { l: 'Personal use', a: true },
            { l: 'Cleaning / maintenance' },
            { l: 'Property unavailable' },
            { l: 'Other' },
          ].map(r => (
            <div key={r.l} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderTop: `1px solid ${C.ink06}` }}>
              <div style={{ width: 18, height: 18, borderRadius: 9, border: `1.5px solid ${r.a ? C.orange : C.ink12}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {r.a && <div style={{ width: 8, height: 8, borderRadius: 4, background: C.orange }} />}
              </div>
              <span style={{ fontSize: 13, fontWeight: 500 }}>{r.l}</span>
            </div>
          ))}
        </Card>

        <div style={{ marginTop: 14 }}>
          <label style={{ fontSize: 13, fontWeight: 600, color: C.ink }}>Internal note (optional)</label>
          <div style={{ background: '#fff', borderRadius: 12, border: `1px solid ${C.ink12}`, padding: 14, marginTop: 6, minHeight: 70, fontSize: 13, color: C.ink50, lineHeight: 1.5 }}>
            Visiting family this weekend.
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '14px 16px 24px', background: '#fff', borderTop: `1px solid ${C.ink06}` }}>
        <PrimaryButton>Confirm block</PrimaryButton>
      </div>
    </Screen>
  );
}

// 79 — Pricing rules
function S79_PricingRules() {
  return (
    <Screen>
      <TopHeader title="Pricing rules" right={<span style={{ fontSize: 14, color: C.orange, fontWeight: 700 }}>Save</span>} />
      <div style={{ padding: '8px 20px 30px' }}>
        {/* Quick preview */}
        <Card p={16} style={{ background: C.navy, color: '#fff', marginBottom: 14 }}>
          <div style={{ fontSize: 11, opacity: 0.65, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase' }}>Smart price now</div>
          <div style={{ fontSize: 30, fontWeight: 800, marginTop: 2, letterSpacing: -1 }}>£42 → £58</div>
          <div style={{ fontSize: 12, opacity: 0.7, marginTop: 2 }}>+38% during peak demand (Fri 23 May)</div>
        </Card>

        {[
          { ic: 'calendar', l: 'Minimum stay', v: '2 nights', sub: 'Per booking' },
          { ic: 'sparkle', l: 'Last-minute discount', v: '−10%', sub: 'Bookings within 3 days' },
          { ic: 'moon', l: 'Long-stay discount', v: '−15% / week', sub: 'Stays of 7+ nights' },
          { ic: 'flame', l: 'Weekend surcharge', v: '+£10', sub: 'Fri & Sat' },
          { ic: 'shield', l: 'Advance notice', v: '24 hours', sub: 'Time before check-in' },
          { ic: 'wallet', l: 'Currency', v: 'GBP', sub: 'Pound sterling' },
        ].map(r => (
          <Card key={r.l} p={14} style={{ marginBottom: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: C.pale, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Ico name={r.ic} size={18} color={C.navy} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 700 }}>{r.l}</div>
                <div style={{ fontSize: 11, color: C.ink50 }}>{r.sub}</div>
              </div>
              <div style={{ fontSize: 14, fontWeight: 700, color: C.navy }}>{r.v}</div>
              <Ico name="chev-r" size={16} color={C.ink30} />
            </div>
          </Card>
        ))}

        <Card p={14} style={{ marginTop: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: hexA(C.orange, 0.15), display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Ico name="sparkle" size={18} color={C.orange} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 700 }}>Smart pricing</div>
              <div style={{ fontSize: 11, color: C.ink50 }}>Auto-adjust to local demand</div>
            </div>
            <Toggle on={true} />
          </div>
        </Card>
      </div>
    </Screen>
  );
}

// 80 — Reservations List
function S80_ReservationsList() {
  return (
    <Screen padBottom={88}>
      <TopHeader title="Reservations" back={false} right={<Ico name="search" size={20} color={C.navy} />} />
      {/* Tabs */}
      <div style={{ padding: '0 20px' }}>
        <div style={{ display: 'flex', borderBottom: `1px solid ${C.ink06}` }}>
          {[
            { l: 'All', n: 14, a: true },
            { l: 'Pending', n: 2 },
            { l: 'Confirmed', n: 9 },
            { l: 'Past', n: 3 },
          ].map(t => (
            <div key={t.l} style={{ flex: 1, padding: '12px 0', textAlign: 'center', fontSize: 12, fontWeight: 700, color: t.a ? C.navy : C.ink50, borderBottom: t.a ? `2px solid ${C.orange}` : 'none', marginBottom: -1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span>{t.l}</span>
              <span style={{ fontSize: 10, color: t.a ? C.orange : C.ink50 }}>{t.n}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {[
          { n: 'Amelia B.', d: 'Jun 14 – 21', nights: 7, amt: 294, prop: 'Ocean View Studio', status: 'today', verified: true },
          { n: 'David O.', d: 'Jun 22 – 25', nights: 3, amt: 168, prop: 'Tarkwa Bay', status: 'confirmed', verified: true },
          { n: 'Sofia P.', d: 'Jul 03 – 09', nights: 6, amt: 336, prop: 'Ocean View Studio', status: 'pending', verified: false },
          { n: 'Marcus L.', d: 'Jul 14 – 18', nights: 4, amt: 224, prop: 'Ocean View Studio', status: 'confirmed', verified: true },
          { n: 'Yuki S.', d: 'Aug 01 – 03', nights: 2, amt: 112, prop: 'Tarkwa Bay', status: 'pending', verified: true },
        ].map((b, i) => (
          <Card key={i} p={12}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <Avatar name={b.n} size={44} verified={b.verified} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ fontSize: 14, fontWeight: 700, color: C.navy }}>{b.n}</span>
                  {b.status === 'today' && <Badge kind="orange" size="sm">Today</Badge>}
                  {b.status === 'pending' && <Badge kind="orange" size="sm">Pending</Badge>}
                </div>
                <div style={{ fontSize: 12, color: C.ink70, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{b.prop}</div>
                <div style={{ fontSize: 11, color: C.ink50 }}>{b.d} · {b.nights}n</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 14, fontWeight: 800, color: C.navy }}>£{b.amt}</div>
                <Ico name="chev-r" size={14} color={C.ink30} />
              </div>
            </div>
          </Card>
        ))}
      </div>
      <OwnerNav active="bookings" />
    </Screen>
  );
}

// 81 — Reservation Detail
function S81_ReservationDetail() {
  return (
    <Screen>
      <TopHeader title="Reservation" right={<Ico name="more" size={20} color={C.navy} />} />
      <div style={{ padding: '8px 20px 40px' }}>
        {/* Status banner */}
        <div style={{ background: C.green, color: '#fff', padding: '10px 14px', borderRadius: 12, display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
          <Ico name="check-c" size={20} color="#fff" />
          <div style={{ flex: 1, fontSize: 13, fontWeight: 600 }}>Confirmed · checking in today at 14:00</div>
        </div>

        {/* Guest */}
        <Card p={14} style={{ marginBottom: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Avatar name="Amelia B" size={56} verified />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 16, fontWeight: 700, color: C.navy, display: 'flex', alignItems: 'center', gap: 6 }}>
                Amelia B. <VerifiedBadge size={14} />
              </div>
              <div style={{ fontSize: 12, color: C.ink50 }}>14 trips · 7 reviews · 3y on Homely</div>
              <Stars value={5} size={12} />
            </div>
            <div style={{ width: 40, height: 40, borderRadius: 20, background: C.orange, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Ico name="msg" size={18} color="#fff" />
            </div>
          </div>
        </Card>

        {/* Details */}
        <Card p={14} style={{ marginBottom: 14 }}>
          <div style={{ fontSize: 11, color: C.ink50, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 10 }}>Stay</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 10, color: C.ink50, textTransform: 'uppercase', fontWeight: 600 }}>Check-in</div>
              <div style={{ fontSize: 16, fontWeight: 800, color: C.navy }}>Sun 14 Jun</div>
              <div style={{ fontSize: 11, color: C.ink50 }}>After 14:00</div>
            </div>
            <Ico name="arr-r" size={20} color={C.orange} />
            <div style={{ flex: 1, textAlign: 'right' }}>
              <div style={{ fontSize: 10, color: C.ink50, textTransform: 'uppercase', fontWeight: 600 }}>Check-out</div>
              <div style={{ fontSize: 16, fontWeight: 800, color: C.navy }}>Sun 21 Jun</div>
              <div style={{ fontSize: 11, color: C.ink50 }}>By 11:00</div>
            </div>
          </div>
          <div style={{ marginTop: 12, paddingTop: 12, borderTop: `1px solid ${C.ink06}`, display: 'flex', justifyContent: 'space-between', fontSize: 12 }}>
            <span style={{ color: C.ink70 }}>7 nights · 2 guests · 1 child</span>
            <span style={{ color: C.navy, fontWeight: 700, fontFamily: F.mono }}>HM-29481-LGS</span>
          </div>
        </Card>

        {/* Payout */}
        <Card p={14} style={{ marginBottom: 14 }}>
          <div style={{ fontSize: 11, color: C.ink50, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 10 }}>Your earnings</div>
          {[
            { l: '£42 × 7 nights', v: '£294' },
            { l: 'Cleaning fee', v: '£25' },
            { l: 'Service fee', v: '£18' },
            { l: 'Long-stay discount', v: '−£14' },
            { l: 'Homely fee (12%)', v: '−£35', red: true },
          ].map(r => (
            <div key={r.l} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', fontSize: 13 }}>
              <span style={{ color: C.ink70 }}>{r.l}</span>
              <span style={{ color: r.red ? C.red : C.ink, fontWeight: 500 }}>{r.v}</span>
            </div>
          ))}
          <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 10, marginTop: 4, borderTop: `1px solid ${C.ink06}` }}>
            <span style={{ fontSize: 15, fontWeight: 800, color: C.navy }}>You earn</span>
            <span style={{ fontSize: 20, fontWeight: 800, color: C.green, letterSpacing: -0.4 }}>£288</span>
          </div>
        </Card>

        {/* Quick actions */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {[
            { ic: 'msg', l: 'Message guest' },
            { ic: 'doc', l: 'Receipt' },
          ].map(b => (
            <button key={b.l} style={{ height: 44, borderRadius: 12, background: '#fff', border: `1px solid ${C.ink06}`, fontWeight: 600, fontSize: 13, color: C.navy, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
              <Ico name={b.ic} size={16} color={C.navy} />{b.l}
            </button>
          ))}
        </div>
      </div>
    </Screen>
  );
}

// 82 — Accept request
function S82_AcceptRequest() {
  return (
    <Screen>
      <TopHeader title="Booking request" />
      <div style={{ padding: '8px 20px 120px' }}>
        <Badge kind="orange">Awaiting your decision</Badge>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: C.navy, letterSpacing: -0.5, margin: '8px 0 4px' }}>Sofia wants to book</h2>
        <p style={{ fontSize: 13, color: C.ink70, margin: '0 0 16px' }}>Auto-cancel in <b style={{ color: C.navy, fontFamily: F.mono }}>23h 47m</b></p>

        {/* Guest card */}
        <Card p={14} style={{ marginBottom: 12 }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <Avatar name="Sofia P" size={56} verified={false} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: C.navy }}>Sofia P.</div>
              <div style={{ fontSize: 11, color: C.ink50, marginTop: 2 }}>2 trips · 1 review · Joined 2025</div>
              <div style={{ marginTop: 4, display: 'flex', gap: 6 }}>
                <Badge kind="green" size="sm">KYC verified</Badge>
                <Badge kind="gray" size="sm">No-smoker</Badge>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 12, padding: 10, background: C.pale, borderRadius: 10, fontSize: 12, color: C.ink70, lineHeight: 1.5 }}>
            "Hi! Visiting for a friend's wedding in Lekki. We're quiet and tidy — no parties. Hope to hear from you!"
          </div>
        </Card>

        {/* Stay summary */}
        <Card p={14} style={{ marginBottom: 14 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0' }}><span style={{ fontSize: 12, color: C.ink70 }}>Property</span><span style={{ fontSize: 13, fontWeight: 600 }}>Ocean View Studio</span></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0' }}><span style={{ fontSize: 12, color: C.ink70 }}>Dates</span><span style={{ fontSize: 13, fontWeight: 600 }}>3 – 9 Jul · 6 nights</span></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0' }}><span style={{ fontSize: 12, color: C.ink70 }}>Guests</span><span style={{ fontSize: 13, fontWeight: 600 }}>2 adults</span></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0 0', borderTop: `1px solid ${C.ink06}`, marginTop: 4 }}>
            <span style={{ fontSize: 13, color: C.ink70 }}>You'll earn</span>
            <span style={{ fontSize: 18, fontWeight: 800, color: C.green }}>£295</span>
          </div>
        </Card>

        <Card p={14} style={{ background: hexA(C.green, 0.15), border: 'none' }}>
          <div style={{ display: 'flex', gap: 10 }}>
            <Ico name="sparkle" size={18} color="#3d6610" />
            <div style={{ fontSize: 12, color: '#3d6610', lineHeight: 1.5 }}>
              <b>Recommended:</b> Sofia matches your typical guest profile (KYC, 100% positive history).
            </div>
          </div>
        </Card>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '14px 16px 24px', background: '#fff', borderTop: `1px solid ${C.ink06}`, display: 'flex', gap: 10 }}>
        <GhostButton>Decline</GhostButton>
        <PrimaryButton>Accept booking</PrimaryButton>
      </div>
    </Screen>
  );
}

// 83 — Decline request
function S83_DeclineRequest() {
  return (
    <Screen>
      <TopHeader title="Decline request" />
      <div style={{ padding: '8px 20px 120px' }}>
        <div style={{ width: 64, height: 64, borderRadius: 32, background: hexA(C.red, 0.12), display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Ico name="x" size={28} color={C.red} />
        </div>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: C.navy, letterSpacing: -0.5, margin: '12px 0 6px' }}>Decline Sofia's request?</h2>
        <p style={{ fontSize: 13, color: C.ink70, margin: '0 0 20px', lineHeight: 1.5 }}>
          Sofia will be notified and your dates remain open. Frequent declines may affect your search ranking.
        </p>

        <Card p={14} style={{ marginBottom: 14 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 8 }}>Why are you declining?</div>
          {[
            { l: 'Dates no longer available', a: true },
            { l: 'Concerns about guest fit' },
            { l: 'Price needs adjusting' },
            { l: 'Personal reasons' },
            { l: 'Other' },
          ].map(r => (
            <div key={r.l} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderTop: `1px solid ${C.ink06}` }}>
              <div style={{ width: 18, height: 18, borderRadius: 9, border: `1.5px solid ${r.a ? C.orange : C.ink12}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {r.a && <div style={{ width: 8, height: 8, borderRadius: 4, background: C.orange }} />}
              </div>
              <span style={{ fontSize: 13, fontWeight: 500 }}>{r.l}</span>
            </div>
          ))}
        </Card>

        <div>
          <label style={{ fontSize: 13, fontWeight: 600, color: C.ink }}>Message to Sofia (optional)</label>
          <div style={{ background: '#fff', borderRadius: 12, border: `1px solid ${C.ink12}`, padding: 14, marginTop: 6, minHeight: 100, fontSize: 13, color: C.ink50, lineHeight: 1.5 }}>
            Hi Sofia, those dates were just booked by another guest minutes ago — sorry about that. Let me know if other dates work for you!
          </div>
        </div>

        <Card p={12} style={{ marginTop: 14, background: hexA(C.orange, 0.1), border: 'none' }}>
          <div style={{ display: 'flex', gap: 10 }}>
            <Ico name="info" size={16} color={C.orange} />
            <div style={{ fontSize: 12, color: '#a4541a', lineHeight: 1.5 }}>
              Declining hurts your acceptance rate. Keep it above 90% for Superhost.
            </div>
          </div>
        </Card>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '14px 16px 24px', background: '#fff', borderTop: `1px solid ${C.ink06}`, display: 'flex', gap: 10 }}>
        <GhostButton>Cancel</GhostButton>
        <DangerButton>Confirm decline</DangerButton>
      </div>
    </Screen>
  );
}

// 84 — Payout Dashboard
function S84_PayoutDash() {
  return (
    <Screen padBottom={88}>
      <TopHeader title="Payouts" right={<Ico name="settings" size={20} color={C.navy} />} />
      <div style={{ padding: '8px 20px 30px' }}>
        <Card p={20} style={{ background: C.navy, color: '#fff', marginBottom: 14, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', right: -20, top: -20, width: 140, height: 140, borderRadius: 70, background: hexA(C.orange, 0.18) }} />
          <div style={{ fontSize: 11, opacity: 0.65, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase', position: 'relative' }}>Total earned · 2026</div>
          <div style={{ fontSize: 38, fontWeight: 800, letterSpacing: -1.4, marginTop: 2, position: 'relative' }}>£14,820.50</div>
          <div style={{ marginTop: 14, display: 'flex', gap: 10, position: 'relative' }}>
            <div style={{ flex: 1, padding: 10, borderRadius: 10, background: 'rgba(255,255,255,0.1)' }}>
              <div style={{ fontSize: 10, opacity: 0.65 }}>Available now</div>
              <div style={{ fontSize: 16, fontWeight: 800 }}>£1,840</div>
            </div>
            <div style={{ flex: 1, padding: 10, borderRadius: 10, background: 'rgba(255,255,255,0.1)' }}>
              <div style={{ fontSize: 10, opacity: 0.65 }}>Pending</div>
              <div style={{ fontSize: 16, fontWeight: 800 }}>£720</div>
            </div>
          </div>
        </Card>

        {/* Next payout */}
        <Card p={14} style={{ marginBottom: 14, border: `1.5px solid ${C.orange}`, background: hexA(C.orange, 0.05) }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 48, height: 48, borderRadius: 24, background: C.orange, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Ico name="wallet" size={22} color="#fff" />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, color: C.orange, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase' }}>Next payout</div>
              <div style={{ fontSize: 20, fontWeight: 800, color: C.navy, letterSpacing: -0.5 }}>£1,840.00</div>
              <div style={{ fontSize: 11, color: C.ink70 }}>Mon 26 May · to Stripe •••• 4421</div>
            </div>
          </div>
        </Card>

        {/* Payout history */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: C.navy }}>Recent payouts</div>
          <span style={{ fontSize: 12, color: C.orange, fontWeight: 700 }}>See all</span>
        </div>
        <Card p={4}>
          {[
            { d: '12 May 2026', v: 1240, n: 4, paid: true },
            { d: '5 May 2026', v: 892, n: 3, paid: true },
            { d: '28 Apr 2026', v: 1480, n: 5, paid: true },
            { d: '21 Apr 2026', v: 640, n: 2, paid: true },
            { d: '14 Apr 2026', v: 1056, n: 4, paid: true },
          ].map((r, i, arr) => (
            <div key={r.d} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 14, borderBottom: i < arr.length - 1 ? `1px solid ${C.ink06}` : 'none' }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: hexA(C.green, 0.15), display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Ico name="check" size={16} color="#3d6610" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 700 }}>£{r.v.toLocaleString()}</div>
                <div style={{ fontSize: 11, color: C.ink50 }}>{r.d} · {r.n} bookings</div>
              </div>
              <Ico name="chev-r" size={16} color={C.ink30} />
            </div>
          ))}
        </Card>
      </div>
      <OwnerNav active="dash" />
    </Screen>
  );
}

// 85 — Payout Detail
function S85_PayoutDetail() {
  return (
    <Screen>
      <TopHeader title="Payout · 12 May" right={<Ico name="download" size={20} color={C.navy} />} />
      <div style={{ padding: '8px 20px 40px' }}>
        <Card p={20} style={{ marginBottom: 14, textAlign: 'center' }}>
          <Badge kind="green">Paid</Badge>
          <div style={{ fontSize: 36, fontWeight: 800, color: C.navy, letterSpacing: -1.2, marginTop: 8 }}>£1,240.00</div>
          <div style={{ fontSize: 12, color: C.ink50, marginTop: 4 }}>Transferred 12 May 2026 · 14:08</div>
        </Card>

        <Card p={14} style={{ marginBottom: 14 }}>
          <div style={{ fontSize: 11, color: C.ink50, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 10 }}>Destination</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 44, height: 30, borderRadius: 6, background: '#1A1F71', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 10, fontWeight: 800 }}>VISA</div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, fontFamily: F.mono }}>•••• 4421</div>
              <div style={{ fontSize: 11, color: C.ink50 }}>Stripe Connect · Standard</div>
            </div>
          </div>
        </Card>

        <Card p={14} style={{ marginBottom: 14 }}>
          <div style={{ fontSize: 11, color: C.ink50, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 10 }}>Breakdown · 4 bookings</div>
          {[
            { n: 'Amelia B.', d: '4 May', v: 294 },
            { n: 'David O.', d: '6 May', v: 168 },
            { n: 'Yuki S.', d: '8 May', v: 224 },
            { n: 'Marcus L.', d: '10 May', v: 718 },
          ].map(r => (
            <div key={r.n} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderTop: `1px solid ${C.ink06}` }}>
              <Avatar name={r.n} size={32} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600 }}>{r.n}</div>
                <div style={{ fontSize: 10, color: C.ink50 }}>{r.d}</div>
              </div>
              <div style={{ fontSize: 13, fontWeight: 700, color: C.navy }}>£{r.v}</div>
            </div>
          ))}
        </Card>

        <Card p={14}>
          <div style={{ fontSize: 11, color: C.ink50, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 10 }}>Summary</div>
          {[
            { l: 'Gross income', v: '£1,420.00' },
            { l: 'Platform fee (12%)', v: '−£170.40', red: true },
            { l: 'Stripe processing', v: '−£9.60', red: true },
          ].map(r => (
            <div key={r.l} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', fontSize: 13 }}>
              <span style={{ color: C.ink70 }}>{r.l}</span>
              <span style={{ color: r.red ? C.red : C.ink, fontWeight: 500 }}>{r.v}</span>
            </div>
          ))}
          <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 10, marginTop: 4, borderTop: `1px solid ${C.ink06}` }}>
            <span style={{ fontSize: 14, fontWeight: 800, color: C.navy }}>Net payout</span>
            <span style={{ fontSize: 16, fontWeight: 800, color: C.navy }}>£1,240.00</span>
          </div>
        </Card>
      </div>
    </Screen>
  );
}

// 86 — Add Bank Account (Stripe Connect onboarding)
function S86_AddBank() {
  return (
    <Screen>
      <TopHeader title="Add bank account" />
      <div style={{ padding: '8px 20px 120px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: 12, background: C.white, borderRadius: 12, border: `1px solid ${C.ink06}`, marginBottom: 16 }}>
          <Ico name="shield" size={20} color={C.green} />
          <div style={{ fontSize: 12, color: C.ink70, lineHeight: 1.5, flex: 1 }}>
            Powered by <b style={{ color: '#635BFF' }}>Stripe Connect</b>. Your data is encrypted and never seen by Homely.
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <Input label="Account holder name" value="Tunde A. Adebayo" icon={<Ico name="user" size={18} color={C.ink50} />} />
          <Input label="Country" value="United Kingdom" icon={<Ico name="globe" size={18} color={C.ink50} />} right={<Ico name="chev-d" size={16} color={C.ink50} />} />
          <Input label="Sort code" value="40-20-13" icon={<Ico name="card" size={18} color={C.ink50} />} hint="6-digit code" />
          <Input label="Account number" value="••••5821" icon={<Ico name="lock" size={18} color={C.ink50} />} />
        </div>

        <Card p={14} style={{ marginTop: 16 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 8 }}>Payout schedule</div>
          {[
            { l: 'Weekly · every Monday', a: true },
            { l: 'Monthly · 1st of each month' },
            { l: 'Manual · I trigger payouts' },
          ].map(r => (
            <div key={r.l} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderTop: `1px solid ${C.ink06}` }}>
              <div style={{ width: 18, height: 18, borderRadius: 9, border: `1.5px solid ${r.a ? C.orange : C.ink12}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {r.a && <div style={{ width: 8, height: 8, borderRadius: 4, background: C.orange }} />}
              </div>
              <span style={{ fontSize: 13, fontWeight: 500 }}>{r.l}</span>
            </div>
          ))}
        </Card>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '14px 16px 24px', background: '#fff', borderTop: `1px solid ${C.ink06}` }}>
        <PrimaryButton icon={<Ico name="lock" size={16} color="#fff" />}>Verify & link account</PrimaryButton>
      </div>
    </Screen>
  );
}

// 87 — Bank Account Verified
function S87_BankVerified() {
  return (
    <Screen>
      <div style={{ padding: '40px 24px 40px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', height: '100%' }}>
        <div style={{ width: 132, height: 132, borderRadius: 66, background: C.green, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 16px 40px ${hexA(C.green, 0.5)}` }}>
          <Ico name="check" size={64} color="#fff" />
        </div>
        <h1 style={{ fontSize: 28, fontWeight: 800, color: C.navy, letterSpacing: -0.8, margin: '20px 0 8px' }}>Bank linked</h1>
        <p style={{ fontSize: 14, color: C.ink70, margin: 0, lineHeight: 1.5 }}>You're ready to receive payouts.</p>

        <Card style={{ width: '100%', textAlign: 'left', marginTop: 24 }} p={14}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 44, height: 30, borderRadius: 6, background: '#1A1F71', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 10, fontWeight: 800 }}>VISA</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 700, fontFamily: F.mono }}>HSBC •••• 5821</div>
              <div style={{ fontSize: 11, color: C.ink50 }}>Verified · Tunde A. Adebayo</div>
            </div>
            <Badge kind="green" size="sm">Default</Badge>
          </div>
          <div style={{ marginTop: 12, paddingTop: 12, borderTop: `1px solid ${C.ink06}`, display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 12, color: C.ink70 }}>Next payout</span>
            <span style={{ fontSize: 13, fontWeight: 700, color: C.navy }}>Mon 26 May</span>
          </div>
        </Card>

        <div style={{ flex: 1 }} />
        <PrimaryButton>Go to payouts</PrimaryButton>
      </div>
    </Screen>
  );
}

// 88 — Reviews Received
function S88_ReviewsReceived() {
  return (
    <Screen padBottom={88}>
      <TopHeader title="Reviews received" />
      <div style={{ padding: '8px 20px 30px' }}>
        <Card p={16}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div>
              <div style={{ fontSize: 36, fontWeight: 800, color: C.navy, letterSpacing: -1 }}>4.92</div>
              <Stars value={5} />
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
          {['All 184', 'Needs reply · 3', 'This month', '5-star', 'Below 4'].map((f, i) => (
            <div key={f} style={{ padding: '6px 12px', borderRadius: 16, background: i === 0 ? C.navy : (i === 1 ? hexA(C.orange, 0.15) : '#fff'), color: i === 0 ? '#fff' : (i === 1 ? '#a4541a' : C.navy), fontSize: 12, fontWeight: 600, border: `1px solid ${i === 0 ? C.navy : (i === 1 ? 'transparent' : C.ink12)}`, flexShrink: 0 }}>{f}</div>
          ))}
        </div>

        <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            { n: 'Mira K.', d: 'May 2026', stars: 5, q: 'Stunning view, peaceful, easy check-in. Tunde left a welcome basket — total class. Would book again.', replied: false, urgent: true },
            { n: 'David O.', d: 'Apr 2026', stars: 5, q: 'Perfect for a workation. Wifi held up for all my calls.', replied: true },
            { n: 'Sofia P.', d: 'Apr 2026', stars: 4, q: 'Bigger than the photos suggest. Beach 5 min walk. Could use better coffee machine.', replied: false, urgent: true },
          ].map(r => (
            <Card key={r.n} p={14}>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 8 }}>
                <Avatar name={r.n} size={36} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 700 }}>{r.n}</div>
                  <div style={{ fontSize: 11, color: C.ink50 }}>{r.d}</div>
                </div>
                <Stars value={r.stars} />
              </div>
              <p style={{ fontSize: 13, color: C.ink70, margin: '0 0 10px', lineHeight: 1.5 }}>"{r.q}"</p>
              {r.replied
                ? <Badge kind="gray" size="sm">Replied</Badge>
                : <button style={{ height: 32, padding: '0 14px', borderRadius: 16, background: r.urgent ? C.orange : '#fff', color: r.urgent ? '#fff' : C.navy, border: r.urgent ? 'none' : `1px solid ${C.ink12}`, fontWeight: 700, fontSize: 12 }}>
                    {r.urgent ? 'Reply now' : 'Reply'}
                  </button>}
            </Card>
          ))}
        </div>
      </div>
      <OwnerNav active="dash" />
    </Screen>
  );
}

// 89 — Reply to Review
function S89_ReplyReview() {
  return (
    <Screen>
      <TopHeader title="Reply" />
      <div style={{ padding: '8px 20px 120px' }}>
        {/* Original review */}
        <Card p={14} style={{ marginBottom: 14, background: C.pale }}>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 8 }}>
            <Avatar name="Mira K" size={36} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 700 }}>Mira K.</div>
              <div style={{ fontSize: 11, color: C.ink50 }}>May 2026 · 4 nights</div>
            </div>
            <Stars value={5} />
          </div>
          <p style={{ fontSize: 13, color: C.ink70, margin: 0, lineHeight: 1.5 }}>
            "Stunning view, peaceful, easy check-in. Tunde left a welcome basket — total class. Would book again."
          </p>
        </Card>

        <div style={{ fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 8 }}>Your public reply</div>
        <div style={{ background: '#fff', borderRadius: 14, padding: 14, border: `1.5px solid ${C.orange}`, minHeight: 140, fontSize: 14, color: C.ink, lineHeight: 1.5 }}>
          Thanks Mira! Glad you enjoyed the welcome basket — looking forward to having you back any time. Safe travels!
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: C.ink50, marginTop: 6 }}>
          <span>Public · visible to all guests</span>
          <span>124 / 500</span>
        </div>

        {/* Templates */}
        <div style={{ marginTop: 16 }}>
          <div style={{ fontSize: 12, color: C.ink50, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 8 }}>Quick templates</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'Thank you for the kind words!',
              'Looking forward to hosting you again',
              'Glad the wifi worked out for your calls',
            ].map(t => (
              <button key={t} style={{ padding: 12, background: '#fff', border: `1px solid ${C.ink12}`, borderRadius: 10, textAlign: 'left', fontSize: 13, color: C.ink70 }}>+ {t}</button>
            ))}
          </div>
        </div>

        <Card p={12} style={{ marginTop: 14, background: hexA(C.orange, 0.1), border: 'none' }}>
          <div style={{ display: 'flex', gap: 10 }}>
            <Ico name="info" size={16} color={C.orange} />
            <div style={{ fontSize: 12, color: '#a4541a', lineHeight: 1.5 }}>
              Hosts who reply within 48h see 18% more repeat bookings.
            </div>
          </div>
        </Card>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '14px 16px 24px', background: '#fff', borderTop: `1px solid ${C.ink06}` }}>
        <PrimaryButton>Post reply</PrimaryButton>
      </div>
    </Screen>
  );
}

Object.assign(window, {
  S77_AvailCalendar, S78_BlockDates, S79_PricingRules,
  S80_ReservationsList, S81_ReservationDetail, S82_AcceptRequest, S83_DeclineRequest,
  S84_PayoutDash, S85_PayoutDetail, S86_AddBank, S87_BankVerified,
  S88_ReviewsReceived, S89_ReplyReview,
});
