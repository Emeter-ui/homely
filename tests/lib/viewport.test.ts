import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useViewport, isDesktopUA } from '@/lib/viewport';

describe('useViewport', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'innerWidth', { writable: true, value: 390 });
    Object.defineProperty(window, 'innerHeight', { writable: true, value: 844 });
    window.matchMedia = vi.fn().mockImplementation((q: string) => ({
      matches: q.includes('coarse'),
      media: q,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    })) as unknown as typeof window.matchMedia;
  });

  it('returns initial width, height, hasFinePointer', () => {
    const { result } = renderHook(() => useViewport());
    expect(result.current.width).toBe(390);
    expect(result.current.height).toBe(844);
    expect(result.current.hasFinePointer).toBe(false);
  });

  it('updates on window resize', () => {
    const { result } = renderHook(() => useViewport());
    act(() => {
      Object.defineProperty(window, 'innerWidth', { writable: true, value: 800 });
      window.dispatchEvent(new Event('resize'));
    });
    expect(result.current.width).toBe(800);
  });
});

describe('isDesktopUA', () => {
  it('returns true for a Mac desktop UA', () => {
    expect(isDesktopUA('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15')).toBe(true);
  });

  it('returns false for an iPhone UA', () => {
    expect(isDesktopUA('Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15')).toBe(false);
  });

  it('returns false for an Android UA', () => {
    expect(isDesktopUA('Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36')).toBe(false);
  });

  it('returns true for empty or undefined', () => {
    expect(isDesktopUA('')).toBe(false);
    expect(isDesktopUA(undefined)).toBe(false);
  });
});
