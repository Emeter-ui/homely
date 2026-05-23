const PHONE_PATTERNS = [/iPhone/i, /Android.*Mobile/i, /Windows Phone/i, /IEMobile/i];

export function isDesktopUA(ua: string | undefined): boolean {
  if (!ua) return false;
  if (PHONE_PATTERNS.some(p => p.test(ua))) return false;
  return true;
}

export const MOBILE_MAX_WIDTH = 768;
