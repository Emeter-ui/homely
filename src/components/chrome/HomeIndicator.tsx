interface HomeIndicatorProps {
  dark?: boolean;
}

export function HomeIndicator({ dark = false }: HomeIndicatorProps) {
  return (
    <div
      data-testid="fake-home-indicator"
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 24,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingBottom: 7,
        pointerEvents: 'none',
        zIndex: 100,
      }}
    >
      <div
        data-testid="fake-home-indicator-bar"
        style={{
          width: 134,
          height: 5,
          borderRadius: 100,
          background: dark ? 'rgba(255, 255, 255, 0.85)' : 'rgba(0, 0, 0, 0.55)',
        }}
      />
    </div>
  );
}
