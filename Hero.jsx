/* Hero — the thesis line, in large Bodoni, with a plotted orange ring and a
   couple of breathing frames scattered to the side. */
function Hero() {
  const DS = window.DanielaFajardoDesignSystem_305341;
  const { Button, Tag } = DS;
  const tags = [
    ['Applied ML', 'purple'],
    ['Human rhythms', 'green'],
    ['0-to-1 products', 'orange'],
    ["Women's health", 'pink'],
    ['Research', 'yellow'],
  ];
  return (
    <header id="top" style={{ position: 'relative', overflow: 'clip' }}>
      <div aria-hidden style={{
        position: 'absolute', right: '5%', top: '14%',
        width: 'clamp(240px, 30vw, 460px)', aspectRatio: '1',
        border: '1.5px solid var(--orange)', borderRadius: '50%', opacity: 0.85, pointerEvents: 'none',
      }} />
      <div aria-hidden style={{
        position: 'absolute', right: 'calc(5% + 36px)', top: 'calc(14% + 36px)',
        width: 'clamp(160px, 20vw, 320px)', aspectRatio: '1',
        background: 'var(--orange-soft)', borderRadius: '50%', opacity: 0.55, pointerEvents: 'none', filter: 'blur(2px)',
      }} />

      <div style={{
        position: 'relative', zIndex: 2,
        maxWidth: 'var(--content-max)', margin: '0 auto',
        padding: 'clamp(3rem, 8vw, 7rem) var(--page-gutter) clamp(2.5rem, 6vw, 5rem)',
      }}>
        <p className="df-eyebrow" style={{ marginBottom: 'var(--space-5)' }}>
          Daniela Fajardo Londoño · San Francisco, CA
        </p>

        <h1 style={{ fontSize: 'clamp(2rem, 4.8vw, 4.5rem)', fontWeight: 900, margin: '0 0 var(--space-6)', maxWidth: '20ch' }}>
          <span style={{ fontFamily: 'var(--font-body)', fontWeight: 800, letterSpacing: 'var(--tracking-tight)' }}>Humans are rhythmic systems.</span><br /><br />I build algorithms that{' '}
          <span style={{ fontStyle: 'italic', fontWeight: 500, color: 'var(--green)' }}>listen</span>{' '}
          and products that{' '}
          <span style={{ fontStyle: 'italic', fontWeight: 500, color: 'var(--orange)' }}>move</span>{' '}
          with them.
        </h1>

        <p style={{ maxWidth: '52ch', fontSize: 'var(--text-subhead)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-secondary)', margin: '0 0 var(--space-3)' }}>
          What happens when you give a mathematician something to care about.
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
