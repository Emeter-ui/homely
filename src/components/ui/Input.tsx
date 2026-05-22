'use client';

import { type ReactNode, useState } from 'react';
import { C } from '@/lib/tokens';

interface InputProps {
  label?: string;
  value?: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'tel' | 'number';
  icon?: ReactNode;
  right?: ReactNode;
  onChange?: (v: string) => void;
}

export function Input({ label, value, placeholder, type = 'text', icon, right, onChange }: InputProps) {
  const [internal, setInternal] = useState(value ?? '');
  const v = value ?? internal;

  return (
    <div>
      {label && (
        <label style={{ fontSize: 13, fontWeight: 600, color: C.ink, letterSpacing: -0.1, display: 'block', marginBottom: 8 }}>
          {label}
        </label>
      )}
      <div style={{
        height: 52,
        borderRadius: 14,
        background: C.white,
        border: `1.5px solid ${C.ink12}`,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '0 14px',
      }}>
        {icon}
        <input
          type={type}
          value={v}
          placeholder={placeholder}
          onChange={(e) => {
            setInternal(e.target.value);
            onChange?.(e.target.value);
          }}
          style={{
            flex: 1,
            border: 'none',
            outline: 'none',
            background: 'transparent',
            fontSize: 15,
            color: C.ink,
            padding: 0,
            minWidth: 0,
          }}
        />
        {right}
      </div>
    </div>
  );
}
