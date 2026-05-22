// screens-guest-booking.jsx — Section 3.3–3.4 (screens 36–48): Booking flow + My Bookings

// 36 — Date selection
function S36_DateSelect() {
  return (
    <Screen>
      <TopHeader title="Choose dates" />
      <div style={{ padding: '8px 20px 120px' }}>
        <Card p={14} style={{ marginBottom: 14 }}>
          <div style={{ display: 'flex', gap: 8 }}>
            <div style={{ flex: 1, padding: 12, borderRadius: 10, border: `1.5px solid ${C.orange}` }}>
              <div style={{ fontSize: 11, color: C.ink50, fontWeight: 600, textTransform: 'uppercase' }}>Check-in</div>
              <div style={{ fontSize: 16, fontWeight: 800, color: C.navy, marginTop: 2 }}>Sun, 14 Jun</div>
            </div>
            <div style={{ flex: 1, padding: 12, borderRadius: 10, border: `1.5px solid ${C.ink12}` }}>
              <div style={{ fontSize: 11, color: C.ink50, fontWeight: 600, textTransform: 'uppercase' }}>Check-out</div>
              <div style={{ fontSize: 16, fontWeight: 800, color: C.navy, marginTop: 2 }}>Sun, 21 Jun</div>
            </div>
          </div>
          <div style={{ marginTop: 10, fontSize: 12, color: C.ink50, textAlign: 'center' }}>7 nights · 2 guests</div>
        </Card>

        {['June 2026', 'July 2026'].map((m, mi) => (
          <div key={m} style={{ marginTop: mi ? 24 : 0 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: C.navy, marginBottom: 12 }}>{m}</div>
            <MiniCalendar
              selected={mi === 0 ? [14,15,16,17,18,19,20,21] : []}
              booked={mi === 0 ? [5,6,7,12,13,25,26] : [3,4,10,11,17,18]}
            />
          </div>
        ))}

        <Card style={{ marginTop: 24 }} p={14}>
          <div style={{ fontSize: 12, fontWeight: 700, color: C.navy, marginBottom: 8 }}>Stay length</div>
          <div style={{ display: 'flex', gap: 8 }}>
            {['Weekend', '1 week', '2 weeks', 'Month'].map((d, i) => (
              <div key={d} style={{ flex: 1, padding: '8px 0', borderRadius: 10, textAlign: 'center', background: i === 1 ? C.navy : '#fff', color: i === 1 ? '#fff' : C.navy, fontSize: 12, fontWeight: 600, border: `1px solid ${i === 1 ? C.navy : C.ink12}` }}>{d}</div>
            ))}
          </div>
        </Card>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '14px 16px 24px', background: '#fff', borderTop: `1px solid ${C.ink06}` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ flex: 1, fontSize: 11, color: C.ink70 }}>Clear dates</div>
          <PrimaryButton full={false} style={{ width: 200 }}>Confirm dates</PrimaryButton>
        </div>
      </div>
    </Screen>
  );
}

// 37 — Booking Summary
function S37_BookingSummary() {
  return (
    <Screen>
      <TopHeader title="Confirm and pay" />
      <div style={{ padding: '8px 20px 120px' }}>
        {/* Property strip */}
        <Card p={12} style={{ marginBottom: 14 }}>
          <div style={{ display: 'flex', gap: 12 }}>
            <ImagePh w={68} h={68} label="prop" radius={10} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12, color: C.ink50 }}>Lagos · Studio</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: C.navy, lineHeight: 1.25 }}>Ocean View Studio</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 4 }}>
                <Ico name="star" size={12} color={C.orange} />
                <span style={{ fontSize: 12, fontWeight: 600 }}>4.92 (184)</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Trip facts */}
        <Card p={14} style={{ marginBottom: 14 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: C.navy, marginBottom: 12 }}>Your trip</div>
          {[
            { l: 'Dates', v: 'Jun 14 – 21, 2026', sub: '7 nights' },
            { l: 'Guests', v: '2 adults · 1 child' },
          ].map(r => (
            <div key={r.l} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderTop: `1px solid ${C.ink06}` }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700 }}>{r.l}</div>
                <div style={{ fontSize: 12, color: C.ink50, marginTop: 2 }}>{r.v}{r.sub && <span> · {r.sub}</span>}</div>
              </div>
              <span style={{ fontSize: 12, color: C.orange, fontWeight: 700 }}>Edit</span>
            </div>
          ))}
        </Card>

        {/* Guests stepper */}
        <Card p={14} style={{ marginBottom: 14 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: C.navy, marginBottom: 10 }}>Guests</div>
          {[
            { l: 'Adults', s: 'Age 13+', v: 2 },
            { l: 'Children', s: 'Age 2–12', v: 1 },
            { l: 'Infants', s: 'Under 2', v: 0 },
            { l: 'Pets', s: 'Service animals always welcome', v: 0 },
          ].map((r, i, arr) => (
            <div key={r.l} style={{ display: 'flex', alignItems: 'center', padding: '10px 0', borderTop: i ? `1px solid ${C.ink06}` : 'none' }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 600 }}>{r.l}</div>
                <div style={{ fontSize: 11, color: C.ink50 }}>{r.s}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 30, height: 30, borderRadius: 15, border: `1.5px solid ${r.v > 0 ? C.navy : C.ink12}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Ico name="minus" size={14} color={r.v > 0 ? C.navy : C.ink30} />
                </div>
                <span style={{ width: 18, textAlign: 'center', fontSize: 14, fontWeight: 700 }}>{r.v}</span>
                <div style={{ width: 30, height: 30, borderRadius: 15, border: `1.5px solid ${C.navy}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Ico name="plus" size={14} color={C.navy} />
                </div>
              </div>
            </div>
          ))}
        </Card>

        {/* Price breakdown */}
        <Card p={14}>
          <div style={{ fontSize: 14, fontWeight: 700, color: C.navy, marginBottom: 10 }}>Price details</div>
          {[
            { l: '£42 × 7 nights', v: '£294' },
            { l: 'Cleaning fee', v: '£25' },
            { l: 'Service fee', v: '£18' },
            { l: 'Long-stay discount', v: '−£14', highlight: true },
          ].map(r => (
            <div key={r.l} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', fontSize: 13 }}>
              <span style={{ color: C.ink70, textDecoration: r.highlight ? 'none' : 'none' }}>{r.l}</span>
              <span style={{ color: r.highlight ? '#3d6610' : C.ink, fontWeight: r.highlight ? 700 : 500 }}>{r.v}</span>
            </div>
          ))}
          <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 12, marginTop: 4, borderTop: `1px solid ${C.ink06}` }}>
            <span style={{ fontSize: 15, fontWeight: 800, color: C.navy }}>Total · GBP</span>
            <span style={{ fontSize: 18, fontWeight: 800, color: C.navy }}>£323</span>
          </div>
        </Card>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '14px 16px 24px', background: '#fff', borderTop: `1px solid ${C.ink06}` }}>
        <PrimaryButton>Confirm & pay £323</PrimaryButton>
      </div>
    </Screen>
  );
}

// 38 — Booking Confirmation
function S38_BookingConfirm() {
  return (
    <Screen>
      <TopHeader title="" />
      <div style={{ padding: '0 20px 40px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '20px 0' }}>
          <div style={{ width: 84, height: 84, borderRadius: 42, background: C.green, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 12px 32px ${hexA(C.green, 0.4)}` }}>
            <Ico name="check" size={42} color="#fff" />
          </div>
          <h1 style={{ fontSize: 26, fontWeight: 800, color: C.navy, letterSpacing: -0.8, margin: '16px 0 4px' }}>Booking confirmed</h1>
          <p style={{ fontSize: 14, color: C.ink70, margin: 0 }}>You're going to Lagos.</p>
        </div>

        {/* Ticket card */}
        <div style={{ background: C.white, borderRadius: 18, border: `1px solid ${C.ink06}`, overflow: 'hidden' }}>
          <ImagePh w="100%" h={140} label="property" radius={0} />
          <div style={{ padding: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: 11, color: C.ink50, fontFamily: F.mono }}>HM-29481-LGS</div>
                <div style={{ fontSize: 15, fontWeight: 800, color: C.navy, marginTop: 2 }}>Ocean View Studio</div>
              </div>
              <Badge kind="green">Confirmed</Badge>
            </div>
            <div style={{ marginTop: 14, display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 10, color: C.ink50, textTransform: 'uppercase', fontWeight: 600 }}>Check-in</div>
                <div style={{ fontSize: 16, fontWeight: 800, color: C.navy }}>14 Jun</div>
                <div style={{ fontSize: 11, color: C.ink50 }}>After 14:00</div>
              </div>
              <div style={{ flex: 1, position: 'relative' }}>
                <div style={{ position: 'absolute', left: -20, right: -20, top: 16, height: 2, borderTop: `2px dashed ${C.ink12}` }} />
                <div style={{ position: 'absolute', top: 8, left: '50%', transform: 'translateX(-50%)', background: '#fff', padding: '0 6px', display: 'flex', alignItems: 'center', gap: 4 }}>
                  <Ico name="arr-r" size={16} color={C.orange} />
                  <span style={{ fontSize: 11, color: C.orange, fontWeight: 700 }}>7 nights</span>
                </div>
              </div>
              <div style={{ flex: 1, textAlign: 'right' }}>
                <div style={{ fontSize: 10, color: C.ink50, textTransform: 'uppercase', fontWeight: 600 }}>Check-out</div>
                <div style={{ fontSize: 16, fontWeight: 800, color: C.navy }}>21 Jun</div>
                <div style={{ fontSize: 11, color: C.ink50 }}>By 11:00</div>
              </div>
            </div>
            <div style={{ borderTop: `1px dashed ${C.ink12}`, marginTop: 14, paddingTop: 14, display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 12, color: C.ink70 }}>Total paid</span>
              <span style={{ fontSize: 14, fontWeight: 800 }}>£323.00</span>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <PrimaryButton icon={<Ico name="download" size={18} color="#fff" />}>Download receipt (PDF)</PrimaryButton>
          <GhostButton>Message Tunde, your host</GhostButton>
        </div>

        <Card style={{ marginTop: 14 }} p={14}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
            <Ico name="info" size={18} color={C.navy} />
            <div style={{ fontSize: 12, color: C.ink70, lineHeight: 1.5 }}>
              Free cancellation until 7 Jun. Full refund issued automatically to your original card.
            </div>
          </div>
        </Card>
      </div>
    </Screen>
  );
}

// 39 — Payment / Stripe Checkout
function S39_Payment() {
  return (
    <Screen bg={C.pale}>
      <TopHeader title="Payment" right={<Ico name="lock" size={18} color={C.navy} />} />
      <div style={{ padding: '8px 20px 120px' }}>
        <Card style={{ marginBottom: 14, background: C.navy, color: '#fff' }} p={16}>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', letterSpacing: 0.5, textTransform: 'uppercase' }}>You'll pay</div>
          <div style={{ fontSize: 32, fontWeight: 800, marginTop: 2, letterSpacing: -1 }}>£323.00</div>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', marginTop: 4 }}>For Ocean View Studio · 7 nights</div>
        </Card>

        {/* Saved methods */}
        <div style={{ fontSize: 12, fontWeight: 700, color: C.ink50, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 8 }}>Payment method</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[
            { brand: 'Visa', last: '4421', a: true, exp: '06/27' },
            { brand: 'Mastercard', last: '8812', exp: '11/26' },
            { brand: '+ Add new card', add: true },
          ].map((c, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 14, padding: 14, border: `1.5px solid ${c.a ? C.orange : C.ink12}`, display: 'flex', alignItems: 'center', gap: 12 }}>
              {c.add ? <>
                <div style={{ width: 36, height: 36, borderRadius: 18, background: hexA(C.orange, 0.15), display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Ico name="plus" size={18} color={C.orange} />
                </div>
                <div style={{ fontSize: 13, fontWeight: 700, color: C.navy }}>Add new card</div>
              </> : <>
                <div style={{ width: 44, height: 30, borderRadius: 6, background: c.brand === 'Visa' ? '#1A1F71' : '#EB001B', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 10, fontWeight: 800 }}>{c.brand === 'Visa' ? 'VISA' : 'MC'}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, fontFamily: F.mono }}>•••• {c.last}</div>
                  <div style={{ fontSize: 11, color: C.ink50 }}>{c.brand} · Exp {c.exp}</div>
                </div>
                {c.a && <div style={{ width: 20, height: 20, borderRadius: 10, background: C.orange, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Ico name="check" size={12} color="#fff" />
                </div>}
              </>}
            </div>
          ))}
        </div>

        {/* CVV */}
        <div style={{ marginTop: 14 }}>
          <Input label="Confirm CVV" placeholder="•••" />
        </div>

        <div style={{ marginTop: 14, padding: 14, background: '#fff', borderRadius: 12, display: 'flex', gap: 10, alignItems: 'center' }}>
          <Ico name="shield" size={20} color={C.green} />
          <div style={{ fontSize: 12, color: C.ink70, lineHeight: 1.5, flex: 1 }}>
            Payments are processed by <span style={{ color: C.navy, fontWeight: 700 }}>Stripe</span>. Your card never touches Homely's servers.
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '14px 16px 24px', background: '#fff', borderTop: `1px solid ${C.ink06}` }}>
        <PrimaryButton icon={<Ico name="lock" size={16} color="#fff" />}>Pay £323 securely</PrimaryButton>
      </div>
    </Screen>
  );
}

// 40 — Payment success
function S40_PaySuccess() {
  return (
    <Screen>
      <div style={{ padding: '60px 24px 40px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', height: '100%' }}>
        <div style={{ width: 132, height: 132, borderRadius: 66, background: C.green, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 16px 40px ${hexA(C.green, 0.5)}`, position: 'relative' }}>
          <Ico name="check" size={64} color="#fff" />
          {/* Rays */}
          {[0, 60, 120, 180, 240, 300].map(a => (
            <div key={a} style={{ position: 'absolute', width: 4, height: 16, background: C.green, borderRadius: 2, top: -20, left: '50%', transformOrigin: '50% 86px', transform: `translateX(-50%) rotate(${a}deg)`, opacity: 0.7 }} />
          ))}
        </div>
        <h1 style={{ fontSize: 30, fontWeight: 800, color: C.navy, letterSpacing: -1, margin: '24px 0 8px' }}>Paid!</h1>
        <p style={{ fontSize: 15, color: C.ink70, margin: 0, lineHeight: 1.5 }}>£323 charged to Visa •••• 4421.<br/>Receipt sent to amelia@email.com.</p>
        <Card style={{ width: '100%', textAlign: 'left', marginTop: 24 }} p={14}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <ImagePh w={56} h={56} label="prop" radius={10} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, color: C.ink50, fontFamily: F.mono }}>HM-29481-LGS</div>
              <div style={{ fontSize: 14, fontWeight: 700 }}>Ocean View Studio</div>
              <div style={{ fontSize: 12, color: C.ink50 }}>Jun 14 – 21</div>
            </div>
          </div>
        </Card>
        <div style={{ flex: 1 }} />
        <PrimaryButton>View my booking</PrimaryButton>
        <span style={{ marginTop: 12, fontSize: 13, color: C.navy, fontWeight: 600 }}>Back to home</span>
      </div>
    </Screen>
  );
}

// 41 — Payment failed
function S41_PayFail() {
  return (
    <Screen>
      <div style={{ padding: '60px 24px 40px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', height: '100%' }}>
        <div style={{ width: 120, height: 120, borderRadius: 60, background: hexA(C.red, 0.12), display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Ico name="x" size={56} color={C.red} />
        </div>
        <h1 style={{ fontSize: 26, fontWeight: 800, color: C.navy, letterSpacing: -0.8, margin: '24px 0 8px' }}>Payment failed</h1>
        <p style={{ fontSize: 14, color: C.ink70, margin: 0, lineHeight: 1.5 }}>Your bank declined the charge. No money was taken.</p>

        <Card style={{ width: '100%', textAlign: 'left', marginTop: 24, border: `1.5px solid ${hexA(C.red, 0.25)}` }} p={14}>
          <div style={{ fontSize: 11, fontWeight: 700, color: C.red, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 6 }}>Reason</div>
          <div style={{ fontSize: 14, fontWeight: 600 }}>Card declined by issuer</div>
          <div style={{ fontSize: 12, color: C.ink50, marginTop: 4, fontFamily: F.mono }}>err_card_declined · stripe</div>
          <div style={{ marginTop: 12, paddingTop: 12, borderTop: `1px solid ${C.ink06}`, fontSize: 12, color: C.ink70, lineHeight: 1.5 }}>
            Try a different card, or contact your bank to authorise the transaction.
          </div>
        </Card>

        <div style={{ flex: 1 }} />
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <PrimaryButton>Try again</PrimaryButton>
          <GhostButton>Use a different card</GhostButton>
        </div>
      </div>
    </Screen>
  );
}

// 42 — Request to Book
function S42_RequestBook() {
  return (
    <Screen>
      <TopHeader title="Request to book" />
      <div style={{ padding: '8px 20px 120px' }}>
        <Card p={12} style={{ marginBottom: 14 }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <Avatar name="Mira K" size={48} verified />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 700 }}>Mira K. · Host</div>
              <div style={{ fontSize: 11, color: C.ink50 }}>Usually responds in 1 hour</div>
            </div>
          </div>
        </Card>

        <div style={{ background: hexA(C.orange, 0.1), padding: 12, borderRadius: 10, display: 'flex', gap: 10, marginBottom: 16 }}>
          <Ico name="info" size={18} color={C.orange} />
          <div style={{ fontSize: 12, color: '#a4541a', lineHeight: 1.5 }}>
            This property requires host approval. Your card is held but not charged until Mira accepts.
          </div>
        </div>

        <div style={{ fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 8 }}>Introduce yourself</div>
        <div style={{ background: '#fff', borderRadius: 14, padding: 14, border: `1px solid ${C.ink12}`, minHeight: 140 }}>
          <div style={{ fontSize: 14, color: C.ink, lineHeight: 1.5 }}>
            Hi Mira! My partner and I are visiting for a wedding in Hackney. We're quiet, tidy, no parties — just looking for a comfy base near the venue. Let me know if you need anything else from us 🙌
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', fontSize: 11, color: C.ink50, marginTop: 4 }}>148 / 1000</div>

        <Card p={14} style={{ marginTop: 14 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 8 }}>Trip summary</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0' }}><span style={{ fontSize: 12, color: C.ink70 }}>Dates</span><span style={{ fontSize: 13, fontWeight: 600 }}>14 – 21 Jun</span></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0' }}><span style={{ fontSize: 12, color: C.ink70 }}>Guests</span><span style={{ fontSize: 13, fontWeight: 600 }}>2 adults</span></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0' }}><span style={{ fontSize: 12, color: C.ink70 }}>Total</span><span style={{ fontSize: 13, fontWeight: 700, color: C.navy }}>£1,176</span></div>
        </Card>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '14px 16px 24px', background: '#fff', borderTop: `1px solid ${C.ink06}` }}>
        <PrimaryButton icon={<Ico name="send" size={18} color="#fff" />}>Send request to Mira</PrimaryButton>
      </div>
    </Screen>
  );
}

// 43 — Booking Request Sent
function S43_RequestSent() {
  return (
    <Screen>
      <div style={{ padding: '40px 24px 40px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', height: '100%' }}>
        <div style={{ position: 'relative', width: 132, height: 132 }}>
          <div style={{ position: 'absolute', inset: 0, borderRadius: 66, background: hexA(C.orange, 0.18), display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Ico name="send" size={56} color={C.orange} />
          </div>
          {/* Pulse ring */}
          <div style={{ position: 'absolute', inset: -8, borderRadius: 70, border: `2px solid ${C.orange}`, opacity: 0.4 }} />
          <div style={{ position: 'absolute', inset: -16, borderRadius: 74, border: `2px solid ${C.orange}`, opacity: 0.2 }} />
        </div>
        <Badge kind="orange" >Awaiting host</Badge>
        <h1 style={{ fontSize: 26, fontWeight: 800, color: C.navy, letterSpacing: -0.8, margin: '14px 0 8px' }}>Request sent to Mira</h1>
        <p style={{ fontSize: 14, color: C.ink70, margin: 0, lineHeight: 1.6, padding: '0 12px' }}>
          Mira typically responds within an hour. We'll notify you as soon as she replies.
        </p>

        <Card style={{ width: '100%', textAlign: 'left', marginTop: 24 }} p={14}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <ImagePh w={56} h={56} label="prop" radius={10} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 700 }}>Shoreditch Loft</div>
              <div style={{ fontSize: 11, color: C.ink50 }}>14 – 21 Jun · £1,176</div>
            </div>
            <Badge kind="orange" size="sm">Pending</Badge>
          </div>
          <div style={{ marginTop: 14, paddingTop: 12, borderTop: `1px solid ${C.ink06}`, display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 12, color: C.ink70 }}>Auto-cancel</span>
            <span style={{ fontSize: 12, color: C.navy, fontWeight: 700, fontFamily: F.mono }}>23:47:12</span>
          </div>
        </Card>

        <div style={{ flex: 1 }} />
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <PrimaryButton>Browse similar stays</PrimaryButton>
          <GhostButton>Cancel request</GhostButton>
        </div>
      </div>
    </Screen>
  );
}

// 44 — My Bookings (Upcoming)
function S44_MyBookingsUp() {
  return (
    <Screen padBottom={88}>
      <TopHeader title="My bookings" back={false} right={<Ico name="search" size={20} color={C.navy} />} />
      {/* Tabs */}
      <div style={{ padding: '0 20px' }}>
        <div style={{ display: 'flex', borderBottom: `1px solid ${C.ink06}` }}>
          {['Upcoming', 'Past', 'Cancelled'].map((t, i) => (
            <div key={t} style={{ flex: 1, padding: '12px 0', textAlign: 'center', fontSize: 13, fontWeight: 700, color: i === 0 ? C.navy : C.ink50, borderBottom: i === 0 ? `2px solid ${C.orange}` : 'none', marginBottom: -1 }}>{t}</div>
          ))}
        </div>
      </div>
      <div style={{ padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {/* Featured - next trip */}
        <Card p={0} style={{ overflow: 'hidden' }}>
          <div style={{ background: C.orange, padding: '8px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: '#fff', letterSpacing: 0.5, textTransform: 'uppercase' }}>Your next trip · in 24 days</span>
            <Ico name="flame" size={14} color="#fff" />
          </div>
          <div style={{ padding: 14 }}>
            <div style={{ display: 'flex', gap: 12 }}>
              <ImagePh w={88} h={88} label="prop" radius={10} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 11, color: C.ink50 }}>Lagos · Studio</div>
                <div style={{ fontSize: 15, fontWeight: 800, color: C.navy, lineHeight: 1.2 }}>Ocean View Studio</div>
                <div style={{ fontSize: 12, color: C.ink70, marginTop: 6 }}>Jun 14 – 21, 2026</div>
                <Badge kind="green" size="sm">Confirmed</Badge>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, marginTop: 12 }}>
              {[
                { ic: 'msg', l: 'Message' },
                { ic: 'pin', l: 'Directions' },
                { ic: 'doc', l: 'Details' },
              ].map(b => (
                <button key={b.l} style={{ height: 36, borderRadius: 10, background: C.pale, border: 'none', fontWeight: 600, fontSize: 12, color: C.navy, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                  <Ico name={b.ic} size={14} color={C.navy} />{b.l}
                </button>
              ))}
            </div>
          </div>
        </Card>

        {[
          { t: 'Shoreditch Loft', d: 'Aug 3 – 9', s: 'pending', l: 'London' },
          { t: 'Tarkwa Bay Bungalow', d: 'Oct 12 – 18', s: 'confirmed', l: 'Lagos' },
        ].map(b => (
          <Card key={b.t} p={12}>
            <div style={{ display: 'flex', gap: 12 }}>
              <ImagePh w={72} h={72} label="prop" radius={10} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 11, color: C.ink50 }}>{b.l}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: C.navy }}>{b.t}</div>
                <div style={{ fontSize: 12, color: C.ink70, marginTop: 2 }}>{b.d}</div>
                <div style={{ marginTop: 4 }}>
                  {b.s === 'pending' ? <Badge kind="orange" size="sm">Awaiting host</Badge> : <Badge kind="green" size="sm">Confirmed</Badge>}
                </div>
              </div>
              <Ico name="chev-r" size={18} color={C.ink30} />
            </div>
          </Card>
        ))}
      </div>
      <BottomNav active="bookings" />
    </Screen>
  );
}

// 45 — My Bookings (Past)
function S45_MyBookingsPast() {
  return (
    <Screen padBottom={88}>
      <TopHeader title="My bookings" back={false} right={<Ico name="search" size={20} color={C.navy} />} />
      <div style={{ padding: '0 20px' }}>
        <div style={{ display: 'flex', borderBottom: `1px solid ${C.ink06}` }}>
          {['Upcoming', 'Past', 'Cancelled'].map((t, i) => (
            <div key={t} style={{ flex: 1, padding: '12px 0', textAlign: 'center', fontSize: 13, fontWeight: 700, color: i === 1 ? C.navy : C.ink50, borderBottom: i === 1 ? `2px solid ${C.orange}` : 'none', marginBottom: -1 }}>{t}</div>
          ))}
        </div>
      </div>
      <div style={{ padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {[
          { t: 'Brutalist Apartment', d: 'Apr 4 – 8, 2026', l: 'London', review: false },
          { t: 'Quiet Bungalow', d: 'Feb 12 – 19, 2026', l: 'Tarkwa Bay', review: true },
          { t: 'Lekki Studio', d: 'Dec 22 – 28, 2025', l: 'Lagos', review: true },
          { t: 'Mile End Flat', d: 'Oct 1 – 4, 2025', l: 'London', review: true },
        ].map(b => (
          <Card key={b.t} p={12}>
            <div style={{ display: 'flex', gap: 12 }}>
              <div style={{ position: 'relative' }}>
                <ImagePh w={72} h={72} label="prop" radius={10} tone="light" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 11, color: C.ink50 }}>{b.l}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: C.navy }}>{b.t}</div>
                <div style={{ fontSize: 12, color: C.ink70, marginTop: 2 }}>{b.d}</div>
                <div style={{ marginTop: 6 }}>
                  {b.review ? <Badge kind="gray" size="sm">Reviewed</Badge> : <button style={{ height: 26, padding: '0 12px', borderRadius: 13, background: C.orange, color: '#fff', border: 'none', fontWeight: 700, fontSize: 11 }}>Leave review</button>}
                </div>
              </div>
              <Ico name="chev-r" size={18} color={C.ink30} />
            </div>
          </Card>
        ))}
      </div>
      <BottomNav active="bookings" />
    </Screen>
  );
}

// 46 — Booking Detail
function S46_BookingDetail() {
  return (
    <Screen>
      <TopHeader title="Booking details" right={<Ico name="more" size={20} color={C.navy} />} />
      <div style={{ padding: '8px 20px 40px' }}>
        <ImagePh w="100%" h={180} label="property" radius={14} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: 14 }}>
          <div>
            <Badge kind="green">Confirmed · 24 days away</Badge>
            <h2 style={{ fontSize: 20, fontWeight: 800, color: C.navy, margin: '8px 0 2px', letterSpacing: -0.4 }}>Ocean View Studio</h2>
            <div style={{ fontSize: 12, color: C.ink50, fontFamily: F.mono }}>HM-29481-LGS</div>
          </div>
        </div>

        <Card style={{ marginTop: 14 }} p={14}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 10, color: C.ink50, textTransform: 'uppercase', fontWeight: 600 }}>Check-in</div>
              <div style={{ fontSize: 18, fontWeight: 800, color: C.navy, marginTop: 2 }}>Sun 14 Jun</div>
              <div style={{ fontSize: 11, color: C.ink50 }}>After 14:00</div>
            </div>
            <Ico name="arr-r" size={22} color={C.orange} />
            <div style={{ flex: 1, textAlign: 'right' }}>
              <div style={{ fontSize: 10, color: C.ink50, textTransform: 'uppercase', fontWeight: 600 }}>Check-out</div>
              <div style={{ fontSize: 18, fontWeight: 800, color: C.navy, marginTop: 2 }}>Sun 21 Jun</div>
              <div style={{ fontSize: 11, color: C.ink50 }}>By 11:00</div>
            </div>
          </div>
        </Card>

        {/* Actions grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 14 }}>
          {[
            { ic: 'msg', l: 'Message host', sub: 'Tunde A.' },
            { ic: 'pin', l: 'Get directions', sub: 'Map · 12.4km' },
            { ic: 'doc', l: 'Receipt', sub: 'PDF · 24 KB' },
            { ic: 'shield', l: 'House rules', sub: 'Read again' },
          ].map(a => (
            <Card key={a.l} p={12}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Ico name={a.ic} size={18} color={C.navy} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 12, fontWeight: 700 }}>{a.l}</div>
                  <div style={{ fontSize: 10, color: C.ink50 }}>{a.sub}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card style={{ marginTop: 14 }} p={14}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Avatar name="Tunde A" size={40} verified />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 6 }}>Tunde A. <VerifiedBadge size={12} /></div>
              <div style={{ fontSize: 11, color: C.ink50 }}>Your host · joined 2022</div>
            </div>
            <Ico name="chev-r" size={18} color={C.ink50} />
          </div>
        </Card>

        <Card style={{ marginTop: 14 }} p={14}>
          <div style={{ fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 10 }}>Payment</div>
          {[
            { l: 'Total paid', v: '£323.00', bold: true },
            { l: 'Card', v: 'Visa •••• 4421' },
            { l: 'Paid on', v: 'May 20, 2026' },
          ].map(r => (
            <div key={r.l} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', fontSize: 13 }}>
              <span style={{ color: C.ink70 }}>{r.l}</span>
              <span style={{ fontWeight: r.bold ? 800 : 600, color: r.bold ? C.navy : C.ink }}>{r.v}</span>
            </div>
          ))}
        </Card>

        <button style={{ width: '100%', marginTop: 18, padding: 14, background: 'transparent', color: C.red, border: 'none', fontWeight: 700, fontSize: 14 }}>
          Cancel this booking
        </button>
      </div>
    </Screen>
  );
}

// 47 — Cancel Booking
function S47_Cancel() {
  return (
    <Screen>
      <TopHeader title="Cancel booking" />
      <div style={{ padding: '8px 20px 120px' }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: C.navy, letterSpacing: -0.6, margin: '8px 0' }}>Are you sure?</h2>
        <p style={{ fontSize: 14, color: C.ink70, margin: '0 0 18px', lineHeight: 1.5 }}>
          Review your cancellation policy and refund below before confirming.
        </p>

        <Card p={14} style={{ marginBottom: 14 }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <ImagePh w={64} h={64} label="prop" radius={10} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 700 }}>Ocean View Studio</div>
              <div style={{ fontSize: 12, color: C.ink50, fontFamily: F.mono }}>HM-29481-LGS</div>
              <div style={{ fontSize: 12, color: C.ink70 }}>Jun 14 – 21 · £323</div>
            </div>
          </div>
        </Card>

        <Card p={14} style={{ marginBottom: 14 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 8 }}>Cancellation policy</div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start', padding: '8px 0' }}>
            <Ico name="check-c" size={18} color={C.green} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 600 }}>Free cancellation until 7 Jun</div>
              <div style={{ fontSize: 11, color: C.ink50, marginTop: 2 }}>You're 24 days away — full refund applies.</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start', padding: '8px 0', borderTop: `1px solid ${C.ink06}` }}>
            <Ico name="info" size={18} color={C.ink50} />
            <div style={{ fontSize: 12, color: C.ink70, lineHeight: 1.5 }}>
              After 7 Jun, 50% refund. After check-in, no refund.
            </div>
          </div>
        </Card>

        <Card p={14} style={{ background: hexA(C.green, 0.15), border: 'none', marginBottom: 14 }}>
          <div style={{ fontSize: 11, color: '#3d6610', fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase' }}>You'll get back</div>
          <div style={{ fontSize: 32, fontWeight: 800, color: '#3d6610', letterSpacing: -1, marginTop: 2 }}>£323.00</div>
          <div style={{ fontSize: 12, color: '#3d6610', opacity: 0.85 }}>Refunded to Visa •••• 4421 within 5–10 business days</div>
        </Card>

        <div style={{ fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 8 }}>Reason for cancellation</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[
            { l: 'Plans changed', a: true },
            { l: 'Found another place' },
            { l: 'Cost too much' },
            { l: 'Other' },
          ].map(r => (
            <div key={r.l} style={{ padding: '12px 14px', borderRadius: 12, background: '#fff', border: `1.5px solid ${r.a ? C.orange : C.ink12}`, display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 18, height: 18, borderRadius: 9, border: `1.5px solid ${r.a ? C.orange : C.ink12}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {r.a && <div style={{ width: 8, height: 8, borderRadius: 4, background: C.orange }} />}
              </div>
              <span style={{ fontSize: 14, fontWeight: 600, color: C.navy }}>{r.l}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '14px 16px 24px', background: '#fff', borderTop: `1px solid ${C.ink06}` }}>
        <DangerButton>Confirm cancellation</DangerButton>
      </div>
    </Screen>
  );
}

// 48 — Cancellation Confirmation
function S48_CancelConfirm() {
  return (
    <Screen>
      <div style={{ padding: '40px 24px 40px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', height: '100%' }}>
        <div style={{ width: 120, height: 120, borderRadius: 60, background: hexA(C.green, 0.18), display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Ico name="check" size={56} color={C.green} />
        </div>
        <h1 style={{ fontSize: 26, fontWeight: 800, color: C.navy, letterSpacing: -0.8, margin: '24px 0 8px' }}>Booking cancelled</h1>
        <p style={{ fontSize: 14, color: C.ink70, margin: 0, lineHeight: 1.5 }}>Your refund is on its way.</p>

        <Card style={{ width: '100%', textAlign: 'left', marginTop: 24 }} p={16}>
          <div style={{ fontSize: 11, fontWeight: 700, color: C.ink50, letterSpacing: 0.5, textTransform: 'uppercase' }}>Refund</div>
          <div style={{ fontSize: 32, fontWeight: 800, color: C.navy, letterSpacing: -1, margin: '4px 0 14px' }}>£323.00</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderTop: `1px solid ${C.ink06}` }}>
            <span style={{ fontSize: 12, color: C.ink70 }}>To</span>
            <span style={{ fontSize: 13, fontWeight: 600 }}>Visa •••• 4421</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0' }}>
            <span style={{ fontSize: 12, color: C.ink70 }}>Expected by</span>
            <span style={{ fontSize: 13, fontWeight: 600, color: C.navy }}>30 May 2026</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0' }}>
            <span style={{ fontSize: 12, color: C.ink70 }}>Reference</span>
            <span style={{ fontSize: 13, fontWeight: 600, fontFamily: F.mono }}>RFD-09281</span>
          </div>
        </Card>

        <Card style={{ width: '100%', textAlign: 'left', marginTop: 14 }} p={14}>
          <div style={{ display: 'flex', gap: 10 }}>
            <Ico name="info" size={18} color={C.navy} />
            <div style={{ fontSize: 12, color: C.ink70, lineHeight: 1.5, flex: 1 }}>
              A confirmation email is on its way to amelia@email.com. Tunde has been notified.
            </div>
          </div>
        </Card>

        <div style={{ flex: 1 }} />
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <PrimaryButton>Find another stay</PrimaryButton>
          <span style={{ fontSize: 13, color: C.navy, fontWeight: 600, padding: 8 }}>Back to bookings</span>
        </div>
      </div>
    </Screen>
  );
}

Object.assign(window, {
  S36_DateSelect, S37_BookingSummary, S38_BookingConfirm, S39_Payment,
  S40_PaySuccess, S41_PayFail, S42_RequestBook, S43_RequestSent,
  S44_MyBookingsUp, S45_MyBookingsPast, S46_BookingDetail, S47_Cancel, S48_CancelConfirm,
});
