// screens-onboarding.jsx — Section 1: Onboarding & Authentication (screens 1–14)

// 01 — Splash Screen
function S01_Splash() {
  return (
    <Screen bg={C.navy} dark statusBarDark>
      <div style={{ position: 'absolute', inset: 0, display: 'flex',
        flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 24 }}>
        <div style={{ position: 'relative', width: 96, height: 96 }}>
          <div style={{ position: 'absolute', inset: -16, borderRadius: 64,
            background: `radial-gradient(circle, ${hexA(C.orange, 0.25)} 0%, transparent 70%)` }} />
          <Logo size={96} color={C.white} withWord={false} />
        </div>
        <div style={{ fontSize: 36, fontWeight: 800, color: C.white, letterSpacing: -1.2 }}>homely</div>
        <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', letterSpacing: 2, textTransform: 'uppercase' }}>find your stay</div>
      </div>
      <div style={{ position: 'absolute', bottom: 60, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 6 }}>
        {[0,1,2].map(i => <div key={i} style={{ width: 6, height: 6, borderRadius: 3, background: i === 0 ? C.orange : 'rgba(255,255,255,0.2)' }} />)}
      </div>
    </Screen>
  );
}

// 02 — Onboarding 1: Welcome
function S02_Onb1() {
  return (
    <Screen bg={C.pale}>
      <div style={{ padding: '8px 24px 0', display: 'flex', justifyContent: 'flex-end' }}>
        <span style={{ fontSize: 14, color: C.ink70, fontWeight: 500 }}>Skip</span>
      </div>
      <div style={{ padding: '20px 24px 0', display: 'flex', flexDirection: 'column', height: 'calc(100% - 40px)' }}>
        <div style={{ position: 'relative', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ImagePh w={300} h={300} label="hero · welcome" radius={24} />
          <div style={{ position: 'absolute', top: 30, right: 0, background: C.white, borderRadius: 14,
            padding: 10, boxShadow: '0 8px 24px rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center', gap: 8 }}>
            <VerifiedBadge size={20} /><span style={{ fontSize: 12, fontWeight: 600 }}>1,200+ verified hosts</span>
          </div>
          <div style={{ position: 'absolute', bottom: 30, left: -8, background: C.navy, color: '#fff', borderRadius: 14,
            padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 6, boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }}>
            <Ico name="star" size={14} color={C.orange} /><span style={{ fontSize: 12, fontWeight: 600 }}>4.9 · 28k reviews</span>
          </div>
        </div>
        <div style={{ padding: '32px 0 24px' }}>
          <h1 style={{ fontSize: 32, fontWeight: 800, color: C.navy, letterSpacing: -1.2, margin: 0, lineHeight: 1.05, textWrap: 'balance' }}>
            Stay somewhere<br/>that feels like <span style={{ color: C.orange }}>home</span>.
          </h1>
          <p style={{ fontSize: 15, color: C.ink70, margin: '12px 0 0', lineHeight: 1.5 }}>
            Verified properties, transparent pricing, and hosts you can trust — across 60+ cities.
          </p>
        </div>
        <Dots active={0} />
        <div style={{ height: 16 }} />
        <PrimaryButton>Continue</PrimaryButton>
      </div>
    </Screen>
  );
}

// 03 — Onboarding 2: List Your Property
function S03_Onb2() {
  return (
    <Screen bg={C.pale}>
      <div style={{ padding: '8px 24px 0', display: 'flex', justifyContent: 'flex-end' }}>
        <span style={{ fontSize: 14, color: C.ink70, fontWeight: 500 }}>Skip</span>
      </div>
      <div style={{ padding: '20px 24px 0', display: 'flex', flexDirection: 'column', height: 'calc(100% - 40px)' }}>
        <div style={{ position: 'relative', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ImagePh w={300} h={300} label="hero · list property" radius={24} tone="navy" />
          <div style={{ position: 'absolute', top: 16, left: -4, background: C.white, borderRadius: 14, padding: 12,
            boxShadow: '0 8px 24px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', gap: 4 }}>
            <span style={{ fontSize: 10, color: C.ink50, fontWeight: 600 }}>EARNINGS THIS MONTH</span>
            <span style={{ fontSize: 22, fontWeight: 800, color: C.navy, letterSpacing: -0.5 }}>£2,840</span>
            <Badge kind="green" size="sm">+18% MoM</Badge>
          </div>
          <div style={{ position: 'absolute', bottom: 30, right: -8, background: C.orange, color: '#fff', borderRadius: 14,
            padding: '10px 14px', fontSize: 12, fontWeight: 600, boxShadow: '0 8px 24px rgba(244,133,54,0.32)' }}>
            6 bookings · this week
          </div>
        </div>
        <div style={{ padding: '32px 0 24px' }}>
          <h1 style={{ fontSize: 32, fontWeight: 800, color: C.navy, letterSpacing: -1.2, margin: 0, lineHeight: 1.05 }}>
            Earn from your<br/>spare space.
          </h1>
          <p style={{ fontSize: 15, color: C.ink70, margin: '12px 0 0', lineHeight: 1.5 }}>
            List in 9 quick steps. We handle vetting, payouts, and disputes — you set the rules.
          </p>
        </div>
        <Dots active={1} />
        <div style={{ height: 16 }} />
        <PrimaryButton>Continue</PrimaryButton>
      </div>
    </Screen>
  );
}

// 04 — Onboarding 3: Book with Confidence
function S04_Onb3() {
  return (
    <Screen bg={C.pale}>
      <div style={{ padding: '8px 24px 0', display: 'flex', justifyContent: 'flex-end' }}>
        <span style={{ fontSize: 14, color: C.ink70, fontWeight: 500 }}>Skip</span>
      </div>
      <div style={{ padding: '20px 24px 0', display: 'flex', flexDirection: 'column', height: 'calc(100% - 40px)' }}>
        <div style={{ position: 'relative', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ImagePh w={300} h={300} label="hero · safety" radius={24} />
          <div style={{ position: 'absolute', top: 30, left: -8, background: C.green, color: C.navy, borderRadius: 14,
            padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 8, fontWeight: 700, fontSize: 13, boxShadow: '0 8px 24px rgba(153,204,51,0.4)' }}>
            <Ico name="shield" size={16} color={C.navy} />KYC verified
          </div>
          <div style={{ position: 'absolute', bottom: 24, right: -8, background: C.white, borderRadius: 14, padding: 10,
            boxShadow: '0 8px 24px rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center', gap: 8 }}>
            <Ico name="lock" size={14} color={C.navy} />
            <span style={{ fontSize: 12, fontWeight: 600 }}>Secure payments · Stripe</span>
          </div>
        </div>
        <div style={{ padding: '32px 0 24px' }}>
          <h1 style={{ fontSize: 32, fontWeight: 800, color: C.navy, letterSpacing: -1.2, margin: 0, lineHeight: 1.05 }}>
            Book with<br/>confidence.
          </h1>
          <p style={{ fontSize: 15, color: C.ink70, margin: '12px 0 0', lineHeight: 1.5 }}>
            Every host is ID-verified. Payments are held until check-in. 24/7 dispute support included.
          </p>
        </div>
        <Dots active={2} />
        <div style={{ height: 16 }} />
        <PrimaryButton>Continue</PrimaryButton>
      </div>
    </Screen>
  );
}

// 05 — Onboarding Final
function S05_OnbFinal() {
  return (
    <Screen bg={C.navy} dark statusBarDark>
      <div style={{ position: 'absolute', inset: 0, padding: '48px 24px 100px',
        display: 'flex', flexDirection: 'column', gap: 28 }}>
        <Logo size={28} color={C.white} />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 24 }}>
          <div>
            <div style={{ fontSize: 13, color: C.orange, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase' }}>Ready?</div>
            <h1 style={{ fontSize: 40, fontWeight: 800, color: C.white, letterSpacing: -1.5,
              margin: '12px 0 0', lineHeight: 1.0, textWrap: 'balance' }}>
              Your next stay<br/>starts here.
            </h1>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { icon: 'check-c', t: 'Browse 1,200+ verified properties' },
              { icon: 'check-c', t: 'Book instantly or message hosts' },
              { icon: 'check-c', t: 'Earn by listing your own space' },
            ].map((b, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <Ico name={b.icon} size={20} color={C.green} />
                <span style={{ color: C.white, fontSize: 14 }}>{b.t}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <PrimaryButton size="lg">Get Started</PrimaryButton>
          <div style={{ textAlign: 'center', fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>
            Already have an account? <span style={{ color: C.orange, fontWeight: 600 }}>Sign in</span>
          </div>
        </div>
      </div>
    </Screen>
  );
}

// 06 — Sign Up
function S06_SignUp() {
  return (
    <Screen bg={C.pale}>
      <TopHeader title="" back={false} />
      <div style={{ padding: '0 24px 40px' }}>
        <h1 style={{ fontSize: 30, fontWeight: 800, color: C.navy, letterSpacing: -1, margin: '0 0 6px' }}>Create account</h1>
        <p style={{ fontSize: 14, color: C.ink70, margin: '0 0 24px' }}>Join 38,000+ travellers and hosts on Homely.</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <Input label="Email" placeholder="you@email.com" icon={<Ico name="mail" size={18} color={C.ink50} />} />
          <Input label="Password" type="password" value="abcdefgh" placeholder="At least 8 characters" icon={<Ico name="lock" size={18} color={C.ink50} />} right={<Ico name="eye" size={18} color={C.ink50} />} />
          <Input label="Confirm password" type="password" value="abcdefgh" placeholder="Repeat password" icon={<Ico name="lock" size={18} color={C.ink50} />} />
        </div>

        <div style={{ marginTop: 22 }}>
          <label style={{ fontSize: 13, fontWeight: 600, color: C.ink, letterSpacing: -0.1 }}>I'm joining as</label>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 8 }}>
            {[
              { id: 'guest', label: 'Guest', sub: 'I want to book', active: true },
              { id: 'owner', label: 'Host', sub: 'I want to list' },
            ].map(r => (
              <div key={r.id} style={{
                padding: 14, borderRadius: 14, background: C.white,
                border: `1.5px solid ${r.active ? C.orange : C.ink12}`,
                position: 'relative',
              }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: C.navy }}>{r.label}</div>
                <div style={{ fontSize: 12, color: C.ink50, marginTop: 2 }}>{r.sub}</div>
                {r.active && <div style={{ position: 'absolute', top: 10, right: 10, width: 18, height: 18, borderRadius: 9, background: C.orange, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Ico name="check" size={12} color="#fff" />
                </div>}
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, margin: '20px 0 24px' }}>
          <div style={{ width: 20, height: 20, borderRadius: 5, background: C.orange, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
            <Ico name="check" size={14} color="#fff" />
          </div>
          <span style={{ fontSize: 12, color: C.ink70, lineHeight: 1.5 }}>
            I agree to the <span style={{ color: C.navy, fontWeight: 600, textDecoration: 'underline' }}>Terms of Service</span> and <span style={{ color: C.navy, fontWeight: 600, textDecoration: 'underline' }}>Privacy Policy</span>.
          </span>
        </div>

        <PrimaryButton>Create account</PrimaryButton>
        <div style={{ textAlign: 'center', marginTop: 16, fontSize: 14, color: C.ink70 }}>
          Have an account? <span style={{ color: C.navy, fontWeight: 700 }}>Sign in</span>
        </div>
      </div>
    </Screen>
  );
}

// 07 — Sign In
function S07_SignIn() {
  return (
    <Screen bg={C.pale}>
      <TopHeader title="" back={false} />
      <div style={{ padding: '0 24px 40px' }}>
        <h1 style={{ fontSize: 30, fontWeight: 800, color: C.navy, letterSpacing: -1, margin: '0 0 6px' }}>Welcome back</h1>
        <p style={{ fontSize: 14, color: C.ink70, margin: '0 0 24px' }}>Sign in to keep exploring.</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <Input label="Email" value="amelia@email.com" icon={<Ico name="mail" size={18} color={C.ink50} />} />
          <Input label="Password" type="password" value="abcdefghi" icon={<Ico name="lock" size={18} color={C.ink50} />} right={<Ico name="eye" size={18} color={C.ink50} />} />
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 12, marginBottom: 22 }}>
          <span style={{ fontSize: 13, color: C.navy, fontWeight: 600 }}>Forgot password?</span>
        </div>

        <PrimaryButton>Sign in</PrimaryButton>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '24px 0' }}>
          <div style={{ flex: 1, height: 1, background: C.ink12 }} />
          <span style={{ fontSize: 12, color: C.ink50, fontWeight: 500 }}>or continue with</span>
          <div style={{ flex: 1, height: 1, background: C.ink12 }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            { label: 'Continue with Google', icon: <Ico name="google" size={20} /> },
            { label: 'Continue with Apple', icon: <Ico name="apple" size={20} color="#000" /> },
          ].map(b => (
            <button key={b.label} style={{
              height: 52, borderRadius: 26, background: C.white, color: C.ink,
              border: `1px solid ${C.ink12}`, fontWeight: 600, fontSize: 15,
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, cursor: 'pointer',
            }}>{b.icon}{b.label}</button>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 22, fontSize: 14, color: C.ink70 }}>
          New to Homely? <span style={{ color: C.navy, fontWeight: 700 }}>Sign up</span>
        </div>
      </div>
    </Screen>
  );
}

// 08 — OAuth Loading
function S08_OAuthLoad() {
  return (
    <Screen bg={C.pale}>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: 22, padding: 40, textAlign: 'center' }}>
        <div style={{ position: 'relative', width: 80, height: 80 }}>
          <div style={{ position: 'absolute', inset: 0, borderRadius: 40,
            border: `4px solid ${hexA(C.navy, 0.1)}`, borderTopColor: C.orange,
            animation: 'spin 1s linear infinite' }} />
          <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Ico name="google" size={32} />
          </div>
        </div>
        <div>
          <h2 style={{ fontSize: 22, fontWeight: 800, color: C.navy, margin: 0, letterSpacing: -0.6 }}>Signing you in</h2>
          <p style={{ fontSize: 14, color: C.ink70, margin: '8px 0 0' }}>Authenticating with Google…</p>
        </div>
        <div style={{ width: '60%', height: 4, background: C.ink06, borderRadius: 2, overflow: 'hidden' }}>
          <div style={{ width: '70%', height: '100%', background: C.orange, borderRadius: 2 }} />
        </div>
      </div>
    </Screen>
  );
}

// 09 — Phone OTP
function S09_OTP() {
  return (
    <Screen bg={C.pale}>
      <TopHeader title="Verify phone" />
      <div style={{ padding: '12px 24px 40px' }}>
        <div style={{ width: 56, height: 56, borderRadius: 28, background: hexA(C.orange, 0.15),
          display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
          <Ico name="phone" size={26} color={C.orange} />
        </div>
        <h1 style={{ fontSize: 26, fontWeight: 800, color: C.navy, letterSpacing: -0.8, margin: '0 0 6px' }}>Enter the code</h1>
        <p style={{ fontSize: 14, color: C.ink70, margin: 0, lineHeight: 1.5 }}>
          We sent a 6-digit code to <span style={{ color: C.navy, fontWeight: 700 }}>+44 7•• ••• 482</span>. <span style={{ color: C.orange, fontWeight: 600 }}>Edit</span>
        </p>

        <div style={{ display: 'flex', gap: 10, marginTop: 28 }}>
          {[4,8,2,1,'',''].map((v, i) => (
            <div key={i} style={{
              flex: 1, height: 64, borderRadius: 14, background: C.white,
              border: `1.5px solid ${i === 4 ? C.orange : C.ink12}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 28, fontWeight: 700, color: C.navy, fontFamily: F.mono,
            }}>{v || (i === 4 ? <div style={{ width: 2, height: 28, background: C.orange, animation: 'blink 1s infinite' }} /> : '')}</div>
          ))}
        </div>
        <style>{`@keyframes blink { 50% { opacity: 0 } }`}</style>

        <div style={{ marginTop: 28, fontSize: 13, color: C.ink70, textAlign: 'center' }}>
          Didn't get it? <span style={{ color: C.navy, fontWeight: 700 }}>Resend in 0:24</span>
        </div>

        <div style={{ marginTop: 28 }}>
          <PrimaryButton>Verify & continue</PrimaryButton>
        </div>
      </div>
    </Screen>
  );
}

// 10 — Email Verification Pending
function S10_EmailPending() {
  return (
    <Screen bg={C.pale}>
      <TopHeader title="" />
      <div style={{ padding: '40px 24px 40px', display: 'flex', flexDirection: 'column',
        alignItems: 'center', textAlign: 'center', gap: 24 }}>
        <div style={{ width: 120, height: 120, borderRadius: 60, background: C.white,
          border: `1px solid ${C.ink06}`, position: 'relative',
          display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Ico name="mail" size={48} color={C.navy} />
          <div style={{ position: 'absolute', top: -4, right: -4, width: 36, height: 36,
            borderRadius: 18, background: C.orange, color: '#fff', display: 'flex',
            alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 800 }}>1</div>
        </div>
        <div>
          <h1 style={{ fontSize: 26, fontWeight: 800, color: C.navy, letterSpacing: -0.8, margin: 0 }}>Check your inbox</h1>
          <p style={{ fontSize: 14, color: C.ink70, margin: '12px 0 0', lineHeight: 1.5, padding: '0 8px' }}>
            We've sent a verification link to<br/>
            <span style={{ color: C.navy, fontWeight: 700 }}>amelia@email.com</span>
          </p>
        </div>
        <Card style={{ width: '100%', textAlign: 'left' }} p={14}>
          <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
            <Ico name="info" size={18} color={C.navy} />
            <div style={{ fontSize: 12, color: C.ink70, lineHeight: 1.5 }}>
              Can't find it? Check your spam folder, or try resending below.
            </div>
          </div>
        </Card>
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <PrimaryButton>Open email app</PrimaryButton>
          <GhostButton>Resend email</GhostButton>
        </div>
        <span style={{ fontSize: 13, color: C.ink50 }}>Wrong email? <span style={{ color: C.navy, fontWeight: 700 }}>Change</span></span>
      </div>
    </Screen>
  );
}

// 11 — Forgot Password
function S11_Forgot() {
  return (
    <Screen bg={C.pale}>
      <TopHeader title="Forgot password" />
      <div style={{ padding: '12px 24px 40px' }}>
        <div style={{ width: 56, height: 56, borderRadius: 28, background: hexA(C.navy, 0.1),
          display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
          <Ico name="lock" size={26} color={C.navy} />
        </div>
        <h1 style={{ fontSize: 26, fontWeight: 800, color: C.navy, letterSpacing: -0.8, margin: '0 0 8px' }}>Reset your password</h1>
        <p style={{ fontSize: 14, color: C.ink70, margin: '0 0 24px', lineHeight: 1.5 }}>
          Enter the email associated with your account and we'll send a reset link.
        </p>

        <Input label="Email" placeholder="you@email.com" value="amelia@email.com" icon={<Ico name="mail" size={18} color={C.ink50} />} />

        <div style={{ marginTop: 22 }}>
          <PrimaryButton>Send reset link</PrimaryButton>
        </div>
        <div style={{ textAlign: 'center', marginTop: 16, fontSize: 14, color: C.ink70 }}>
          Remembered it? <span style={{ color: C.navy, fontWeight: 700 }}>Sign in</span>
        </div>
      </div>
    </Screen>
  );
}

// 12 — Reset Password
function S12_Reset() {
  return (
    <Screen bg={C.pale}>
      <TopHeader title="New password" />
      <div style={{ padding: '12px 24px 40px' }}>
        <h1 style={{ fontSize: 26, fontWeight: 800, color: C.navy, letterSpacing: -0.8, margin: '0 0 8px' }}>Set a new password</h1>
        <p style={{ fontSize: 14, color: C.ink70, margin: '0 0 24px', lineHeight: 1.5 }}>
          Choose something memorable but hard to guess.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <Input label="New password" type="password" value="abcdefghi1" icon={<Ico name="lock" size={18} color={C.ink50} />} right={<Ico name="eye" size={18} color={C.ink50} />} />
          <Input label="Confirm password" type="password" value="abcdefghi1" icon={<Ico name="lock" size={18} color={C.ink50} />} />
        </div>

        <Card style={{ marginTop: 20 }} p={14}>
          <div style={{ fontSize: 12, fontWeight: 700, color: C.ink, marginBottom: 8 }}>Password strength</div>
          <div style={{ display: 'flex', gap: 4, marginBottom: 10 }}>
            {[1,1,1,0].map((v,i) => <div key={i} style={{ flex: 1, height: 4, borderRadius: 2, background: v ? C.green : C.ink12 }} />)}
          </div>
          {[
            { ok: true, t: 'At least 8 characters' },
            { ok: true, t: 'A number or symbol' },
            { ok: true, t: 'Upper and lowercase' },
            { ok: false, t: '12+ characters (recommended)' },
          ].map(r => (
            <div key={r.t} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: r.ok ? C.ink70 : C.ink50, padding: '3px 0' }}>
              <Ico name={r.ok ? 'check-c' : 'x-c'} size={14} color={r.ok ? C.green : C.ink30} />
              {r.t}
            </div>
          ))}
        </Card>

        <div style={{ marginTop: 24 }}>
          <PrimaryButton>Update password</PrimaryButton>
        </div>
      </div>
    </Screen>
  );
}

// 13 — 2FA
function S13_2FA() {
  return (
    <Screen bg={C.pale}>
      <TopHeader title="Two-factor auth" />
      <div style={{ padding: '12px 24px 40px' }}>
        <div style={{ width: 56, height: 56, borderRadius: 28, background: hexA(C.green, 0.2),
          display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
          <Ico name="shield" size={26} color="#3d6610" />
        </div>
        <h1 style={{ fontSize: 26, fontWeight: 800, color: C.navy, letterSpacing: -0.8, margin: '0 0 8px' }}>Enter 6-digit code</h1>
        <p style={{ fontSize: 14, color: C.ink70, margin: '0 0 28px', lineHeight: 1.5 }}>
          Open your authenticator app and enter the code for Homely.
        </p>

        <div style={{ display: 'flex', gap: 10 }}>
          {[7,2,9,'','',''].map((v,i) => (
            <div key={i} style={{
              flex: 1, height: 64, borderRadius: 14, background: C.white,
              border: `1.5px solid ${i === 3 ? C.orange : C.ink12}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 28, fontWeight: 700, color: C.navy, fontFamily: F.mono,
            }}>{v}</div>
          ))}
        </div>

        <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <PrimaryButton>Verify</PrimaryButton>
          <button style={{ background: 'none', border: 'none', color: C.navy, fontWeight: 600, fontSize: 14, padding: 8, cursor: 'pointer' }}>
            Use SMS code instead
          </button>
        </div>

        <Card style={{ marginTop: 16 }} p={14}>
          <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
            <Ico name="info" size={18} color={C.navy} />
            <div style={{ fontSize: 12, color: C.ink70, lineHeight: 1.5 }}>
              Lost access to your authenticator? <span style={{ color: C.navy, fontWeight: 700 }}>Use a backup code</span>.
            </div>
          </div>
        </Card>
      </div>
    </Screen>
  );
}

// 14 — Account Suspended
function S14_Suspended() {
  return (
    <Screen bg={C.pale}>
      <TopHeader title="" />
      <div style={{ padding: '32px 24px 40px', display: 'flex', flexDirection: 'column',
        alignItems: 'center', textAlign: 'center', gap: 22 }}>
        <div style={{ width: 96, height: 96, borderRadius: 48, background: hexA(C.red, 0.12),
          display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Ico name="alert" size={44} color={C.red} />
        </div>
        <div>
          <h1 style={{ fontSize: 26, fontWeight: 800, color: C.navy, letterSpacing: -0.8, margin: 0 }}>Account suspended</h1>
          <p style={{ fontSize: 14, color: C.ink70, margin: '12px 0 0', lineHeight: 1.6 }}>
            Your account access has been temporarily restricted while we investigate a recent activity.
          </p>
        </div>

        <Card style={{ width: '100%', textAlign: 'left' }} p={14}>
          <div style={{ fontSize: 11, fontWeight: 700, color: C.ink50, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 8 }}>Reason</div>
          <div style={{ fontSize: 14, fontWeight: 600, color: C.navy, marginBottom: 10 }}>
            Multiple unverified booking attempts
          </div>
          <div style={{ display: 'flex', gap: 8, fontSize: 12, color: C.ink70 }}>
            <span style={{ fontFamily: F.mono }}>Case #HM-49281</span>
            <span style={{ color: C.ink30 }}>·</span>
            <span>Opened May 20, 2026</span>
          </div>
        </Card>

        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <PrimaryButton icon={<Ico name="msg" size={18} color="#fff" />}>Contact support</PrimaryButton>
          <GhostButton>Read appeal policy</GhostButton>
        </div>
      </div>
    </Screen>
  );
}

// Dots indicator for onboarding
function Dots({ active = 0, total = 3 }) {
  return (
    <div style={{ display: 'flex', gap: 6, justifyContent: 'center' }}>
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} style={{
          width: i === active ? 24 : 8, height: 8, borderRadius: 4,
          background: i === active ? C.orange : C.ink12, transition: 'all 0.2s',
        }} />
      ))}
    </div>
  );
}

Object.assign(window, {
  S01_Splash, S02_Onb1, S03_Onb2, S04_Onb3, S05_OnbFinal,
  S06_SignUp, S07_SignIn, S08_OAuthLoad, S09_OTP, S10_EmailPending,
  S11_Forgot, S12_Reset, S13_2FA, S14_Suspended,
});
