function SineWave() {
  const pathRef = React.useRef(null);
  React.useEffect(() => {
    const el = pathRef.current;
    if (!el) return;
    const len = el.getTotalLength();
    el.style.setProperty('--sine-len', len);
    el.style.strokeDasharray = len;
    el.style.strokeDashoffset = len;
    el.style.animation = `sine-draw 2.4s ease-in-out 0.3s forwards, sine-float 7s ease-in-out 2.8s infinite`;
  }, []);

  const W = 340, H = 110, cy = 55, A = 26, freq = 80;
  let d = `M 0 ${cy}`;
  for (let x = 0; x <= W; x += 2) {
    d += ` L ${x.toFixed(0)} ${(cy - A * Math.sin(2 * Math.PI * x / freq)).toFixed(1)}`;
  }

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width={W} height={H} style={{
      position: 'absolute', right: '3%', top: '10%',
      opacity: 0.55, pointerEvents: 'none', overflow: 'visible',
    }} aria-hidden>
      <line x1="0" y1={cy} x2={W} y2={cy} stroke="var(--hairline-strong)" strokeWidth="0.8" />
      {[0, 80, 160, 240, 320].map(x => (
        <line key={x} x1={x} y1={cy - 4} x2={x} y2={cy + 4} stroke="var(--hairline-strong)" strokeWidth="0.8" />
      ))}
      <text x="6" y="14" fontFamily="var(--font-mono)" fontSize="9" fill="var(--text-muted)" letterSpacing="0.04em">f(t) = sin(ωt)</text>
      <path ref={pathRef} d={d} fill="none" stroke="var(--orange)" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function Hero() {
  const DS = window.DanielaFajardoDesignSystem_305341;
  const { Button, Tag } = DS;
  const { DoodleFlower, DoodleStar, DoodleSparkle, DoodleTinyFlower } = window;
  const tags = [
    ['Applied ML', 'purple'],
    ['Human rhythms', 'green'],
    ['0-to-1 products', 'orange'],
    ["Women's health", 'pink'],
    ['Research', 'yellow'],
  ];
  return (
    <header id="top" style={{ position: 'relative', overflow: 'clip' }}>
      <SineWave />

      {/* Doodles */}
      <div aria-hidden style={{ position: 'absolute', top: '8%', right: '1%', pointerEvents: 'none' }}>
        <DoodleFlower color="var(--pink)" size={52} delay={0.2} />
      </div>
      <div aria-hidden style={{ position: 'absolute', bottom: '6%', left: '1%', pointerEvents: 'none' }}>
        <DoodleStar color="var(--purple)" size={38} delay={0.8} />
      </div>
      <div aria-hidden style={{ position: 'absolute', top: '55%', right: '2%', pointerEvents: 'none' }}>
        <DoodleSparkle color="var(--orange)" size={28} delay={1.2} />
      </div>
      <div aria-hidden style={{ position: 'absolute', top: '20%', left: '3%', pointerEvents: 'none' }}>
        <DoodleTinyFlower color="var(--green)" size={32} delay={1.6} />
      </div>
      <div aria-hidden style={{ position: 'absolute', bottom: '25%', right: '5%', pointerEvents: 'none' }}>
        <DoodleStar color="var(--yellow)" size={22} delay={2.0} />
      </div>

      <div style={{
        position: 'relative', zIndex: 2,
        maxWidth: 'var(--content-max)', margin: '0 auto',
        padding: 'clamp(3rem, 8vw, 7rem) var(--page-gutter) clamp(2.5rem, 6vw, 5rem)',
      }}>
        <p className="df-eyebrow" style={{ marginBottom: 'var(--space-5)' }}>
          Daniela Fajardo Londoño · San Francisco, CA
        </p>

        {/* BIG tagline — now the h1 */}
        <div style={{ position: 'relative', display: 'inline-block', marginBottom: 'var(--space-3)' }}>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 900,
            fontSize: 'clamp(2.4rem, 5.5vw, 5rem)',
            lineHeight: 1.04, letterSpacing: '-0.02em',
            margin: 0, maxWidth: '22ch',
          }}>
            What happens when you give a{' '}
            <span style={{ color: 'var(--purple)' }}>mathematician</span>{' '}
            something to{' '}
            <span style={{ color: 'var(--orange)' }}>care</span> about.
          </h1>
          {/* handwritten annotation */}
          <span aria-hidden style={{
            position: 'absolute', bottom: '-1.6rem', left: '18ch',
            fontFamily: 'var(--font-hand)', fontSize: '1.15rem',
            color: 'var(--orange)', transform: 'rotate(-3deg)',
            whiteSpace: 'nowrap', pointerEvents: 'none',
          }}>← this is me</span>
        </div>

        {/* Elaboration */}
        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.3rem)', fontWeight: 600,
          maxWidth: '36ch', lineHeight: 1.35,
          color: 'var(--ink)', margin: 'var(--space-8) 0 var(--space-4)',
        }}>
          Humans are rhythmic systems. I build algorithms that{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--green)' }}>listen</em>{' '}
          and products that{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--orange)' }}>move</em>{' '}
          with them.
        </p>

        <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-caption)', letterSpacing: '0.04em', color: 'var(--text-muted)', margin: '0 0 var(--space-6)' }}>
          CS + Applied Math, UC Berkeley · McKinsey AI &amp; Automation · Founder
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)', alignItems: 'center', marginBottom: 'var(--space-6)' }}>
          <Button variant="accent" href="#work">See my work</Button>
          <Button variant="link" href="#care">What I care about →</Button>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
          {tags.map(([t, tone]) => <Tag key={t} tone={tone} dot>{t}</Tag>)}
        </div>
      </div>
    </header>
  );
}

Object.assign(window, { DFHero: Hero });
