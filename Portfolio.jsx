function DataStrip({ text }) {
  const repeated = text + '  ·  ' + text + '  ·  ';
  return (
    <div style={{
      width: '100%', overflow: 'hidden',
      background: 'var(--ink)', padding: '10px 0',
      borderTop: '1px solid var(--hairline)', borderBottom: '1px solid var(--hairline)',
    }}>
      <div style={{
        display: 'inline-block', whiteSpace: 'nowrap',
        animation: 'ticker-scroll 30s linear infinite',
      }}>
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: 'var(--text-micro)',
          letterSpacing: '0.1em', color: 'rgba(255,255,255,0.7)',
        }}>{repeated}{repeated}{repeated}</span>
      </div>
    </div>
  );
}

function Portfolio() {
  const { DFNav, DFHero, DFCareAbout, DFNowNext, DFProjects, DFTimeline, DFAbout, DFContact } = window;
  return (
    <React.Fragment>
      <DFNav />
      <main>
        <DFHero />
        <DataStrip text="x̄ = 0.73  ·  σ = 0.12  ·  f(t) = sin(2πt/T)  ·  HRV: 64ms  ·  cycle: 28d  ·  gradient: −0.003  ·  ΔT = 0.4°C  ·  n = 1,847  ·  p < 0.001  ·  R² = 0.91  ·  ω = 2π/T  ·  μ = 36.8°C" />
        <DFCareAbout />
        <DataStrip text="algorithms  ·  first principles  ·  build the equation  ·  not the import  ·  care deeply  ·  from scratch  ·  human systems  ·  women's health  ·  the gap I'm working in" />
        <DFNowNext />
        <DataStrip text="the house of maria  ·  women's health done right  ·  HRV  ·  wearable signals  ·  cycle-aware  ·  heels off  ·  independent research  ·  the tools say one thing" />
        <DFProjects />
        <DataStrip text="diffusion  ·  NeRF  ·  CLIP + KNN  ·  RANSAC  ·  PyTorch  ·  UNet  ·  positional encoding  ·  volume rendering  ·  built from the math  ·  no import statements" />
        <DFTimeline />
        <DataStrip text="McKinsey  ·  Berkeley  ·  Tesla  ·  Addepar  ·  CS + Applied Math  ·  GPA 3.73  ·  AI & Automation  ·  0-to-1  ·  $50M+ roadmap  ·  trajectory" />
        <DFAbout />
        <DataStrip text="watercolors  ·  highway 1  ·  asia  ·  dark chocolate  ·  meditation  ·  hiking  ·  yoga  ·  the full picture  ·  off the record  ·  the rest of me" />
        <DFContact />
      </main>
    </React.Fragment>
  );
}

Object.assign(window, { DFPortfolio: Portfolio });
