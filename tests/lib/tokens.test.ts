import { describe, it, expect } from 'vitest';
import { C, F, hexA } from '@/lib/tokens';

describe('tokens', () => {
  it('C has the full Homely palette', () => {
    expect(C.navy).toBe('#000066');
    expect(C.orange).toBe('#F48536');
    expect(C.green).toBe('#99CC33');
    expect(C.pale).toBe('#FEF3EB');
    expect(C.red).toBe('#E53E3E');
    expect(C.white).toBe('#FFFFFF');
  });

  it('F exposes Inter UI and JetBrains Mono', () => {
    expect(F.ui).toContain('Inter');
    expect(F.mono).toContain('JetBrains Mono');
  });

  it('hexA converts hex+alpha to rgba()', () => {
    expect(hexA('#000066', 0.5)).toBe('rgba(0, 0, 102, 0.5)');
    expect(hexA('#F48536', 0.25)).toBe('rgba(244, 133, 54, 0.25)');
    expect(hexA('#FFFFFF', 1)).toBe('rgba(255, 255, 255, 1)');
  });
});
