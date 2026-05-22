import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Screen } from '@/components/chrome/Screen';
import { Card } from '@/components/ui/Card';
import { C } from '@/lib/tokens';

interface ScreenEntry {
  s: string;
  name: string;
  href: string;
}

const SCREENS: ScreenEntry[] = [
  { s: 'S01', name: 'Splash', href: '/?stay=1' },
  { s: 'S02', name: 'Welcome', href: '/welcome' },
  { s: 'S03', name: 'Onboarding · List Property', href: '/onboarding/list' },
  { s: 'S04', name: 'Onboarding · Book Confidently', href: '/onboarding/book' },
  { s: 'S05', name: 'Get Started', href: '/get-started' },
  { s: 'S06', name: 'Sign Up', href: '/sign-up' },
  { s: 'S07', name: 'Sign In', href: '/sign-in' },
  { s: 'S08', name: 'OAuth Loading', href: '/oauth-loading' },
  { s: 'S09', name: 'Verify Phone (OTP)', href: '/verify-phone' },
  { s: 'S10', name: 'Verify Email', href: '/verify-email' },
  { s: 'S11', name: 'Forgot Password', href: '/forgot-password' },
  { s: 'S12', name: 'Reset Password', href: '/reset-password' },
  { s: 'S13', name: 'Two-Factor', href: '/two-factor' },
  { s: 'S14', name: 'Account Suspended', href: '/suspended' },
  { s: 'S15', name: 'KYC · Intro', href: '/kyc/intro' },
  { s: 'S16', name: 'KYC · Doc Type', href: '/kyc/doc-type' },
  { s: 'S17', name: 'KYC · Upload Front', href: '/kyc/upload-front' },
  { s: 'S18', name: 'KYC · Upload Back', href: '/kyc/upload-back' },
  { s: 'S19', name: 'KYC · Selfie', href: '/kyc/selfie' },
  { s: 'S20', name: 'KYC · Review', href: '/kyc/review' },
  { s: 'S21', name: 'KYC · Pending', href: '/kyc/pending' },
  { s: 'S22', name: 'KYC · Verified', href: '/kyc/verified' },
  { s: 'S23', name: 'KYC · Rejected', href: '/kyc/rejected' },
  { s: 'S24', name: 'KYC · Resubmit', href: '/kyc/resubmit' },
  // Phase 3 — Guest Flow
  { s: 'S25', name: 'Home / Discover', href: '/discover' },
  { s: 'S26', name: 'Search Results', href: '/search' },
  { s: 'S27', name: 'Filter', href: '/search/filters' },
  { s: 'S28', name: 'Map View', href: '/map' },
  { s: 'S29', name: 'Category', href: '/category/beachfront' },
  { s: 'S30-32', name: 'Property Detail', href: '/property/1' },
  { s: 'S33', name: 'Gallery', href: '/property/1/gallery' },
  { s: 'S34', name: 'Host Profile', href: '/host/1' },
  { s: 'S35', name: 'All Reviews', href: '/property/1/reviews' },
  { s: 'S36', name: 'Date Select', href: '/book/1/dates' },
  { s: 'S37', name: 'Booking Summary', href: '/book/1/summary' },
  { s: 'S38', name: 'Booking Confirm', href: '/book/1/confirm' },
  { s: 'S39', name: 'Payment', href: '/book/1/payment' },
  { s: 'S40', name: 'Pay Success', href: '/book/1/success' },
  { s: 'S41', name: 'Pay Fail', href: '/book/1/fail' },
  { s: 'S42', name: 'Request to Book', href: '/book/1/request' },
  { s: 'S43', name: 'Request Sent', href: '/book/1/request-sent' },
  { s: 'S44', name: 'Trips (Upcoming)', href: '/trips' },
  { s: 'S45', name: 'Trips (Past)', href: '/trips/past' },
  { s: 'S46', name: 'Booking Detail', href: '/trips/1' },
  { s: 'S47', name: 'Cancel Booking', href: '/trips/1/cancel' },
  { s: 'S48', name: 'Cancel Confirm', href: '/trips/1/cancelled' },
  { s: 'S49', name: 'Write Review', href: '/reviews/write/1' },
  { s: 'S50', name: 'Review Submitted', href: '/reviews/submitted' },
  { s: 'S51', name: 'My Reviews', href: '/reviews/mine' },
  { s: 'S52', name: 'Favourites', href: '/favourites' },
  { s: 'S53', name: 'Guest Profile', href: '/profile' },
  { s: 'S54', name: 'Edit Profile', href: '/profile/edit' },
  { s: 'S55', name: 'Notif Prefs', href: '/profile/notifications' },
  { s: 'S56', name: 'Account Settings', href: '/profile/settings' },
  { s: 'S57', name: 'Delete Account', href: '/profile/delete' },
];

export default function DevIndex() {
  if (process.env.NODE_ENV === 'production') notFound();

  return (
    <Screen>
      <div style={{ padding: '16px 24px 40px' }}>
        <h1 style={{ fontSize: 24, fontWeight: 800, color: C.navy, letterSpacing: -0.6, margin: '0 0 4px' }}>
          /dev — Screen Index
        </h1>
        <p style={{ fontSize: 13, color: C.ink70, margin: '0 0 20px' }}>
          Foundation seeds this with S01. Each phase appends new screens.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {SCREENS.map(s => (
            <Link key={s.s} href={s.href} style={{ textDecoration: 'none' }}>
              <Card p={14}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: C.ink50, letterSpacing: 0.5 }}>{s.s}</div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: C.navy, marginTop: 2 }}>{s.name}</div>
                  </div>
                  <div style={{ fontSize: 12, color: C.orange, fontWeight: 600, fontFamily: 'var(--font-mono)' }}>
                    {s.href}
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </Screen>
  );
}
