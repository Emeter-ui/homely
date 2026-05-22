// screens-kyc.jsx — Section 2: KYC & Identity Verification (screens 15–24)

// 15 — KYC Intro
function S15_KycIntro() {
  return (
    <Screen bg={C.pale}>
      <TopHeader title="Verify your identity" subtitle="Step 1 of 4" />
      <div style={{ padding: '0 24px 40px' }}>
        <div style={{
          padding: 20, borderRadius: 18, background: C.navy, color: C.white,
          position: 'relative', overflow: 'hidden', marginBottom: 20,
        }}>
          <div style={{ position: 'absolute', right: -20, top: -20, width: 140, height: 140,
            borderRadius: 70, background: hexA(C.orange, 0.15) }} />
          <Ico name="shield" size={28} color={C.orange} />
          <div style={{ fontSize: 20, fontWeight: 800, marginTop: 12, letterSpacing: -0.4, position: 'relative' }}>
            Why we verify
          </div>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)', margin: '6px 0 0', lineHeight: 1.5, position: 'relative' }}>
            KYC keeps Homely safe for everyone. Hosts and high-value guests need a one-time check before transacting.
          </p>
        </div>

        <div style={{ fontSize: 12, fontWeight: 700, color: C.ink50, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 10 }}>You'll need</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[
            { ic: 'doc', t: 'Government ID', s: 'Passport · driver\'s licence · NIN' },
            { ic: 'camera', t: 'A quick selfie', s: 'For liveness check (10 seconds)' },
            { ic: 'wifi', t: 'Stable connection', s: 'Photo upload only — no streaming' },
          ].map(r => (
            <Card key={r.t} p={14}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: C.pale, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Ico name={r.ic} size={20} color={C.navy} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: C.navy }}>{r.t}</div>
                  <div style={{ fontSize: 12, color: C.ink50, marginTop: 2 }}>{r.s}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div style={{ marginTop: 20, padding: 14, borderRadius: 12, background: hexA(C.green, 0.15), display: 'flex', gap: 12, alignItems: 'center' }}>
          <Ico name="check-c" size={22} color="#3d6610" />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#3d6610' }}>Takes ~3 minutes</div>
            <div style={{ fontSize: 12, color: '#3d6610', opacity: 0.85 }}>Most checks approved in under 24h</div>
          </div>
        </div>

        <div style={{ marginTop: 20 }}>
          <PrimaryButton>Start verification</PrimaryButton>
        </div>
        <div style={{ textAlign: 'center', marginTop: 12, fontSize: 13, color: C.ink70 }}>I'll do this later</div>
      </div>
    </Screen>
  );
}

// 16 — Document Type Selector
function S16_KycDocType() {
  const types = [
    { id: 'nin', t: 'NIN slip', s: 'National Identification Number', ic: 'doc', active: true },
    { id: 'passport', t: 'International passport', s: 'Photo page', ic: 'globe' },
    { id: 'license', t: "Driver's licence", s: 'Front & back', ic: 'card' },
    { id: 'biz', t: 'Business registration', s: 'For company hosts', ic: 'building' },
  ];
  return (
    <Screen bg={C.pale}>
      <TopHeader title="Choose document" subtitle="Step 2 of 4" />
      <ProgressBar value={2} total={4} />
      <div style={{ padding: '20px 24px 40px' }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: C.navy, letterSpacing: -0.6, margin: '0 0 8px' }}>Which ID will you use?</h2>
        <p style={{ fontSize: 14, color: C.ink70, margin: '0 0 20px' }}>Pick the document you have to hand.</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {types.map(t => (
            <div key={t.id} style={{
              padding: 16, borderRadius: 14, background: C.white,
              border: `1.5px solid ${t.active ? C.orange : C.ink12}`,
              display: 'flex', alignItems: 'center', gap: 14,
            }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: t.active ? hexA(C.orange, 0.15) : C.pale,
                display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Ico name={t.ic} size={22} color={t.active ? C.orange : C.navy} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: C.navy }}>{t.t}</div>
                <div style={{ fontSize: 12, color: C.ink50, marginTop: 2 }}>{t.s}</div>
              </div>
              <div style={{
                width: 22, height: 22, borderRadius: 11,
                background: t.active ? C.orange : 'transparent',
                border: t.active ? 'none' : `1.5px solid ${C.ink12}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {t.active && <Ico name="check" size={14} color="#fff" />}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 24 }}>
          <PrimaryButton>Continue</PrimaryButton>
        </div>
      </div>
    </Screen>
  );
}

// 17 — Doc Upload Front
function S17_KycUploadFront() {
  return (
    <Screen bg={C.pale}>
      <TopHeader title="Upload ID — front" subtitle="Step 3 of 4" />
      <ProgressBar value={3} total={4} />
      <div style={{ padding: '20px 24px 40px' }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: C.navy, letterSpacing: -0.6, margin: '0 0 8px' }}>Front of your ID</h2>
        <p style={{ fontSize: 14, color: C.ink70, margin: '0 0 20px' }}>Make sure all four corners are visible and the text is legible.</p>

        <div style={{
          width: '100%', aspectRatio: '1.6', borderRadius: 18,
          background: C.navy, position: 'relative', overflow: 'hidden',
          border: `2px dashed ${hexA(C.orange, 0.6)}`,
        }}>
          <div style={{ position: 'absolute', inset: 0, background:
            'repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0 10px, transparent 10px 20px)' }} />
          {/* Corner brackets */}
          {[
            { top: 12, left: 12, brd: 'tl' }, { top: 12, right: 12, brd: 'tr' },
            { bottom: 12, left: 12, brd: 'bl' }, { bottom: 12, right: 12, brd: 'br' },
          ].map((p, i) => (
            <div key={i} style={{
              position: 'absolute', width: 30, height: 30,
              borderTop: p.brd.includes('t') ? `3px solid ${C.orange}` : 'none',
              borderBottom: p.brd.includes('b') ? `3px solid ${C.orange}` : 'none',
              borderLeft: p.brd.includes('l') ? `3px solid ${C.orange}` : 'none',
              borderRight: p.brd.includes('r') ? `3px solid ${C.orange}` : 'none',
              borderTopLeftRadius: p.brd === 'tl' ? 12 : 0,
              borderTopRightRadius: p.brd === 'tr' ? 12 : 0,
              borderBottomLeftRadius: p.brd === 'bl' ? 12 : 0,
              borderBottomRightRadius: p.brd === 'br' ? 12 : 0,
              ...p,
            }} />
          ))}
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: 12 }}>
            <div style={{ width: 56, height: 56, borderRadius: 28, background: 'rgba(255,255,255,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Ico name="camera" size={26} color="#fff" />
            </div>
            <div style={{ color: '#fff', fontSize: 14, fontWeight: 600 }}>Align ID inside the frame</div>
            <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12 }}>Auto-capture when steady</div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 16 }}>
          <button style={{ height: 52, borderRadius: 14, background: C.navy, color: '#fff', border: 'none', fontWeight: 600, fontSize: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            <Ico name="camera" size={18} color="#fff" />Capture
          </button>
          <button style={{ height: 52, borderRadius: 14, background: C.white, color: C.navy, border: `1.5px solid ${C.ink12}`, fontWeight: 600, fontSize: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            <Ico name="upload" size={18} color={C.navy} />Upload
          </button>
        </div>

        <div style={{ marginTop: 16, display: 'flex', gap: 10, padding: 14, borderRadius: 12, background: hexA(C.orange, 0.1) }}>
          <Ico name="info" size={18} color={C.orange} />
          <div style={{ fontSize: 12, color: '#a4541a', lineHeight: 1.5 }}>
            Avoid glare and shadows. Place ID on a plain dark surface.
          </div>
        </div>
      </div>
    </Screen>
  );
}

// 18 — Doc Upload Back
function S18_KycUploadBack() {
  return (
    <Screen bg={C.pale}>
      <TopHeader title="Upload ID — back" subtitle="Step 3 of 4" />
      <ProgressBar value={3} total={4} />
      <div style={{ padding: '20px 24px 40px' }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: C.navy, letterSpacing: -0.6, margin: '0 0 8px' }}>Now the back</h2>
        <p style={{ fontSize: 14, color: C.ink70, margin: '0 0 20px' }}>One more capture and you're done with documents.</p>

        {/* Already-captured front thumbnail */}
        <Card p={12} style={{ marginBottom: 16 }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <ImagePh w={72} h={48} label="front" radius={8} tone="light" />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 700 }}>Front captured</div>
              <div style={{ fontSize: 11, color: C.ink50, fontFamily: F.mono }}>nin_front_4.2mb.jpg</div>
            </div>
            <Ico name="check-c" size={22} color={C.green} />
          </div>
        </Card>

        <div style={{
          width: '100%', aspectRatio: '1.6', borderRadius: 18,
          background: C.navy, position: 'relative', overflow: 'hidden',
          border: `2px dashed ${hexA(C.orange, 0.6)}`,
        }}>
          {[
            { top: 12, left: 12, brd: 'tl' }, { top: 12, right: 12, brd: 'tr' },
            { bottom: 12, left: 12, brd: 'bl' }, { bottom: 12, right: 12, brd: 'br' },
          ].map((p, i) => (
            <div key={i} style={{
              position: 'absolute', width: 30, height: 30,
              borderTop: p.brd.includes('t') ? `3px solid ${C.orange}` : 'none',
              borderBottom: p.brd.includes('b') ? `3px solid ${C.orange}` : 'none',
              borderLeft: p.brd.includes('l') ? `3px solid ${C.orange}` : 'none',
              borderRight: p.brd.includes('r') ? `3px solid ${C.orange}` : 'none',
              ...p,
            }} />
          ))}
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: 12 }}>
            <div style={{ width: 56, height: 56, borderRadius: 28, background: 'rgba(255,255,255,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Ico name="camera" size={26} color="#fff" />
            </div>
            <div style={{ color: '#fff', fontSize: 14, fontWeight: 600 }}>Flip your ID over</div>
            <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12 }}>Capture the back side</div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 16 }}>
          <button style={{ height: 52, borderRadius: 14, background: C.navy, color: '#fff', border: 'none', fontWeight: 600, fontSize: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            <Ico name="camera" size={18} color="#fff" />Capture
          </button>
          <button style={{ height: 52, borderRadius: 14, background: C.white, color: C.navy, border: `1.5px solid ${C.ink12}`, fontWeight: 600, fontSize: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            <Ico name="upload" size={18} color={C.navy} />Upload
          </button>
        </div>
      </div>
    </Screen>
  );
}

// 19 — Selfie / Liveness
function S19_KycSelfie() {
  return (
    <Screen bg={C.navy} dark statusBarDark>
      <TopHeader title="Liveness check" subtitle="Step 3 of 4" dark />
      <div style={{ padding: '8px 24px 40px', color: '#fff' }}>
        <ProgressBar value={3} total={4} dark />
        <h2 style={{ fontSize: 22, fontWeight: 800, letterSpacing: -0.6, margin: '20px 0 6px' }}>Look at the camera</h2>
        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', margin: '0 0 24px' }}>Keep your face centered. We'll detect blinks automatically.</p>

        <div style={{ width: '100%', aspectRatio: '0.85', position: 'relative', borderRadius: 24, overflow: 'hidden' }}>
          <ImagePh w="100%" h="100%" label="camera feed" radius={24} tone="dark" />
          {/* Face oval guide */}
          <svg viewBox="0 0 240 280" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
            <defs>
              <mask id="ovMask">
                <rect width="240" height="280" fill="#fff" />
                <ellipse cx="120" cy="140" rx="80" ry="100" fill="#000" />
              </mask>
            </defs>
            <rect width="240" height="280" fill="rgba(0,0,80,0.7)" mask="url(#ovMask)" />
            <ellipse cx="120" cy="140" rx="80" ry="100" fill="none" stroke={C.orange} strokeWidth="3" strokeDasharray="8 6" />
            <ellipse cx="120" cy="140" rx="80" ry="100" fill="none" stroke={C.green} strokeWidth="3" strokeDasharray="40 100" strokeDashoffset="-180" />
          </svg>
          <div style={{ position: 'absolute', bottom: 16, left: 16, right: 16, padding: 12,
            borderRadius: 14, background: 'rgba(255,255,255,0.95)', display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 8, height: 8, borderRadius: 4, background: C.green, animation: 'pulse 1.5s infinite' }} />
            <span style={{ fontSize: 13, color: C.navy, fontWeight: 700 }}>Hold still — detecting…</span>
          </div>
        </div>
        <style>{`@keyframes pulse { 50% { opacity: 0.3 } }`}</style>

        <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 6 }}>
          {[
            { d: true, t: 'Face detected' },
            { d: true, t: 'Good lighting' },
            { d: false, t: 'Blink to confirm' },
          ].map(r => (
            <div key={r.t} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: r.d ? C.green : 'rgba(255,255,255,0.7)' }}>
              <Ico name={r.d ? 'check-c' : 'eye'} size={16} color={r.d ? C.green : 'rgba(255,255,255,0.7)'} />
              {r.t}
            </div>
          ))}
        </div>
      </div>
    </Screen>
  );
}

// 20 — KYC Review & Submit
function S20_KycReview() {
  return (
    <Screen bg={C.pale}>
      <TopHeader title="Review & submit" subtitle="Step 4 of 4" />
      <ProgressBar value={4} total={4} />
      <div style={{ padding: '20px 24px 40px' }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: C.navy, letterSpacing: -0.6, margin: '0 0 8px' }}>Everything look right?</h2>
        <p style={{ fontSize: 14, color: C.ink70, margin: '0 0 20px' }}>Confirm and we'll submit for review.</p>

        <Card p={14} style={{ marginBottom: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: C.navy }}>Documents</div>
            <span style={{ fontSize: 12, color: C.orange, fontWeight: 600 }}>Edit</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
            {[
              { l: 'front', cap: 'NIN front' },
              { l: 'back', cap: 'NIN back' },
              { l: 'selfie', cap: 'Selfie' },
            ].map(p => (
              <div key={p.l}>
                <ImagePh w="100%" h={90} label={p.l} radius={10} />
                <div style={{ fontSize: 11, color: C.ink70, marginTop: 4, textAlign: 'center', fontWeight: 600 }}>{p.cap}</div>
              </div>
            ))}
          </div>
        </Card>

        <Card p={14} style={{ marginBottom: 12 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 10 }}>Submitted details</div>
          {[
            { k: 'Full name', v: 'Amelia O. Bankole' },
            { k: 'Date of birth', v: '14 Mar 1994' },
            { k: 'Document type', v: 'NIN slip' },
            { k: 'Document number', v: '••• ••• 4821', mono: true },
          ].map(r => (
            <div key={r.k} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: `1px solid ${C.ink06}` }}>
              <span style={{ fontSize: 13, color: C.ink70 }}>{r.k}</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: C.navy, fontFamily: r.mono ? F.mono : F.ui }}>{r.v}</span>
            </div>
          ))}
        </Card>

        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, margin: '16px 0' }}>
          <div style={{ width: 20, height: 20, borderRadius: 5, background: C.orange, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
            <Ico name="check" size={14} color="#fff" />
          </div>
          <span style={{ fontSize: 12, color: C.ink70, lineHeight: 1.5 }}>
            I confirm the documents submitted are authentic and belong to me.
          </span>
        </div>

        <PrimaryButton>Submit for review</PrimaryButton>
      </div>
    </Screen>
  );
}

// 21 — KYC Pending
function S21_KycPending() {
  return (
    <Screen bg={C.pale}>
      <TopHeader title="" />
      <div style={{ padding: '32px 24px 40px', display: 'flex', flexDirection: 'column',
        alignItems: 'center', textAlign: 'center', gap: 22 }}>
        <div style={{ width: 120, height: 120, borderRadius: 60, background: C.white,
          border: `1px solid ${C.ink06}`, position: 'relative',
          display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Ico name="shield" size={50} color={C.navy} />
          <div style={{ position: 'absolute', inset: -4, borderRadius: 64,
            border: `3px solid ${C.orange}`, borderRightColor: 'transparent',
            animation: 'spin 2s linear infinite' }} />
          <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
        </div>
        <div>
          <Badge kind="orange">Under review</Badge>
          <h1 style={{ fontSize: 26, fontWeight: 800, color: C.navy, letterSpacing: -0.8, margin: '12px 0 0' }}>We're checking your docs</h1>
          <p style={{ fontSize: 14, color: C.ink70, margin: '12px 0 0', lineHeight: 1.6, padding: '0 8px' }}>
            Most submissions are reviewed within <span style={{ color: C.navy, fontWeight: 700 }}>24 hours</span>. We'll notify you by email and push.
          </p>
        </div>

        <Card style={{ width: '100%', textAlign: 'left' }} p={14}>
          <div style={{ fontSize: 11, fontWeight: 700, color: C.ink50, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 8 }}>Submission</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0' }}>
            <span style={{ fontSize: 13, color: C.ink70 }}>Reference</span>
            <span style={{ fontSize: 13, fontWeight: 600, fontFamily: F.mono }}>KYC-29481</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0' }}>
            <span style={{ fontSize: 13, color: C.ink70 }}>Submitted</span>
            <span style={{ fontSize: 13, fontWeight: 600, color: C.navy }}>Just now</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0' }}>
            <span style={{ fontSize: 13, color: C.ink70 }}>Expected by</span>
            <span style={{ fontSize: 13, fontWeight: 600, color: C.navy }}>Tomorrow, 11:00</span>
          </div>
        </Card>

        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <PrimaryButton>Browse properties while you wait</PrimaryButton>
          <GhostButton>Notify me when done</GhostButton>
        </div>
      </div>
    </Screen>
  );
}

// 22 — KYC Verified
function S22_KycVerified() {
  return (
    <Screen bg={C.pale}>
      <TopHeader title="" />
      <div style={{ padding: '32px 24px 40px', display: 'flex', flexDirection: 'column',
        alignItems: 'center', textAlign: 'center', gap: 22 }}>
        {/* Confetti dots */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
          {Array.from({ length: 14 }).map((_, i) => {
            const colors = [C.orange, C.green, C.navy, C.orangeSoft];
            return (
              <div key={i} style={{
                position: 'absolute', width: 8, height: 8,
                top: 50 + (i * 37) % 400, left: 20 + (i * 71) % 360,
                background: colors[i % 4], borderRadius: i % 2 ? 4 : 1,
                transform: `rotate(${i * 23}deg)`,
              }} />
            );
          })}
        </div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ width: 132, height: 132, borderRadius: 66, background: C.green,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: `0 16px 40px ${hexA(C.green, 0.5)}` }}>
            <Ico name="check" size={64} color="#fff" />
          </div>
        </div>
        <div>
          <Badge kind="green">Verified</Badge>
          <h1 style={{ fontSize: 28, fontWeight: 800, color: C.navy, letterSpacing: -0.9, margin: '12px 0 0' }}>You're verified!</h1>
          <p style={{ fontSize: 14, color: C.ink70, margin: '12px 0 0', lineHeight: 1.6, padding: '0 8px' }}>
            Your account now has a green verified badge. You can host, book, and earn without limits.
          </p>
        </div>

        <Card style={{ width: '100%', textAlign: 'left' }} p={14}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Avatar name="Amelia Bankole" size={48} verified />
            <div>
              <div style={{ fontSize: 15, fontWeight: 700, color: C.navy, display: 'flex', alignItems: 'center', gap: 6 }}>
                Amelia Bankole <VerifiedBadge size={16} />
              </div>
              <div style={{ fontSize: 12, color: C.ink50 }}>Verified · 20 May 2026</div>
            </div>
          </div>
        </Card>

        <PrimaryButton>Continue to Homely</PrimaryButton>
      </div>
    </Screen>
  );
}

// 23 — KYC Rejected
function S23_KycRejected() {
  return (
    <Screen bg={C.pale}>
      <TopHeader title="" />
      <div style={{ padding: '32px 24px 40px', display: 'flex', flexDirection: 'column',
        alignItems: 'center', textAlign: 'center', gap: 22 }}>
        <div style={{ width: 120, height: 120, borderRadius: 60, background: hexA(C.red, 0.12),
          display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Ico name="x" size={56} color={C.red} />
        </div>
        <div>
          <Badge kind="red">Rejected</Badge>
          <h1 style={{ fontSize: 26, fontWeight: 800, color: C.navy, letterSpacing: -0.8, margin: '12px 0 0' }}>We couldn't verify you</h1>
          <p style={{ fontSize: 14, color: C.ink70, margin: '12px 0 0', lineHeight: 1.6 }}>
            Your submission didn't pass our checks. You can resubmit with corrected documents.
          </p>
        </div>

        <Card style={{ width: '100%', textAlign: 'left' }} p={16}>
          <div style={{ fontSize: 11, fontWeight: 700, color: C.red, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 10 }}>Reasons</div>
          {[
            'Selfie was blurry — we couldn\'t match face',
            'Document back side cut off at edge',
          ].map((r,i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '6px 0', fontSize: 13, color: C.ink70, lineHeight: 1.5 }}>
              <Ico name="alert" size={16} color={C.red} />{r}
            </div>
          ))}
          <div style={{ marginTop: 12, paddingTop: 12, borderTop: `1px solid ${C.ink06}`, fontSize: 12, color: C.ink50, fontFamily: F.mono }}>
            KYC-29481 · Reviewed by HM-Trust
          </div>
        </Card>

        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <PrimaryButton>Resubmit documents</PrimaryButton>
          <GhostButton>Contact support</GhostButton>
        </div>
      </div>
    </Screen>
  );
}

// 24 — KYC Re-submission
function S24_KycResubmit() {
  return (
    <Screen bg={C.pale}>
      <TopHeader title="Resubmit" subtitle="Re-uploading flagged items" />
      <ProgressBar value={2} total={3} />
      <div style={{ padding: '20px 24px 40px' }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: C.navy, letterSpacing: -0.6, margin: '0 0 8px' }}>Replace flagged docs</h2>
        <p style={{ fontSize: 14, color: C.ink70, margin: '0 0 20px' }}>We've kept your good submissions. Only replace what's flagged.</p>

        {/* Kept */}
        <div style={{ fontSize: 12, fontWeight: 700, color: C.ink50, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 8 }}>Looks good</div>
        <Card p={12} style={{ marginBottom: 16 }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <ImagePh w={64} h={44} label="front" radius={8} tone="light" />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 700 }}>NIN front</div>
              <div style={{ fontSize: 11, color: C.ink50, fontFamily: F.mono }}>nin_front_4.2mb.jpg</div>
            </div>
            <Badge kind="green" size="sm">OK</Badge>
          </div>
        </Card>

        {/* Replace */}
        <div style={{ fontSize: 12, fontWeight: 700, color: C.red, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 8 }}>Replace these</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            { t: 'NIN back', reason: 'Edge cut off', ic: 'doc' },
            { t: 'Selfie', reason: 'Too blurry', ic: 'camera' },
          ].map(r => (
            <Card key={r.t} p={12} style={{ border: `1.5px solid ${hexA(C.red, 0.3)}` }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: hexA(C.red, 0.1),
                  display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Ico name={r.ic} size={20} color={C.red} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: C.navy }}>{r.t}</div>
                  <div style={{ fontSize: 12, color: C.red }}>{r.reason}</div>
                </div>
                <button style={{
                  height: 36, padding: '0 14px', borderRadius: 18, background: C.orange, color: '#fff',
                  border: 'none', fontWeight: 600, fontSize: 13,
                }}>Replace</button>
              </div>
            </Card>
          ))}
        </div>

        <div style={{ marginTop: 24 }}>
          <PrimaryButton>Resubmit for review</PrimaryButton>
        </div>
      </div>
    </Screen>
  );
}

// Helper: progress bar
function ProgressBar({ value = 1, total = 4, dark = false }) {
  return (
    <div style={{ padding: '0 16px 8px' }}>
      <div style={{ height: 4, borderRadius: 2,
        background: dark ? 'rgba(255,255,255,0.15)' : C.ink06, overflow: 'hidden' }}>
        <div style={{ width: `${(value/total)*100}%`, height: '100%', background: C.orange, borderRadius: 2 }} />
      </div>
    </div>
  );
}

Object.assign(window, {
  S15_KycIntro, S16_KycDocType, S17_KycUploadFront, S18_KycUploadBack, S19_KycSelfie,
  S20_KycReview, S21_KycPending, S22_KycVerified, S23_KycRejected, S24_KycResubmit,
  ProgressBar,
});
