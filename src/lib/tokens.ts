export const C = {
  navy: '#000066',
  navySoft: '#1a1a7a',
  orange: '#F48536',
  orangeSoft: '#FFB47A',
  green: '#99CC33',
  greenSoft: '#C9E58A',
  pale: '#FEF3EB',
  paleDeep: '#FBE7D3',
  ink: '#000000',
  ink70: 'rgba(0,0,0,0.70)',
  ink50: 'rgba(0,0,0,0.50)',
  ink30: 'rgba(0,0,0,0.30)',
  ink12: 'rgba(0,0,0,0.12)',
  ink06: 'rgba(0,0,0,0.06)',
  red: '#E53E3E',
  white: '#FFFFFF',
} as const;

export const F = {
  ui: '"Inter", -apple-system, system-ui, sans-serif',
  mono: '"JetBrains Mono", ui-monospace, monospace',
} as const;

export const hexA = (hex: string, a: number): string => {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`;
};
