function DataStrip() {
  const text = 'x̄ = 0.73  ·  σ = 0.12  ·  f(t) = sin(2πt/T)  ·  HRV: 64ms  ·  cycle: 28d  ·  gradient: −0.003  ·  ΔT = 0.4°C  ·  n = 1,847  ·  p < 0.001  ·  R² = 0.91  ·  ω = 2π/T  ·  μ = 36.8°C  ·  ';
  const repeated = text + text;
  return (
    <div style={{
      width: '100%', overflow: 'hidden',
      background: 'var(--ink)', padding: '10px 0',
      borderTop: '1px solid var(--hairline)', borderBottom: '1px solid var(--hairline)',
    }}>
      <div style={{
        display: 'inline-block', whiteSpace: 'nowrap',
        animation: 'ticker-scroll 28s linear infinite',
      }}>
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: 'var(--text-micro)',
          letterSpacing: '0.1em', color: 'rgba(255,255,255,0.7)',
        }}>{repeated}{repeated}</span>
      </div>
    </div>
  );
}

function Portfolio() {
  const { DFNav, DFHero, DFCareAbout, DFNowNext, DFProjects, DFTimeline, DFContact } = window;
  return (
    <React.Fragment>
      <DFNav />
      <main>
        <DFHero />
        <DataStrip />
        <DFCareAbout />
        <DFNowNext />
        <DFProjects />
        <DFTimeline />
        <DFContact />
      </main>
    </React.Fragment>
  );
}

Object.assign(window, { DFPortfolio: Portfolio });
