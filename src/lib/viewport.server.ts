const DESKTOP_PATTERNS = [/Macintosh/i, /Windows NT/i, /X11; Linux/i];
const MOBILE_PATTERNS = [/iPhone/i, /iPad/i, /Android/i, /Mobile/i];

export function isDesktopUA(ua: string | undefined): boolean {
  if (!ua) return false;
  if (MOBILE_PATTERNS.some(p => p.test(ua))) return false;
  return DESKTOP_PATTERNS.some(p => p.test(ua));
}

export const MOBILE_MAX_WIDTH = 500;
