/* Section 2 — What I am doing now (two cards), and Section 3 — Coming soon
   (one quiet italic line). */
function NowNext() {
  const DS = window.DanielaFajardoDesignSystem_305341;
  const { Eyebrow, Card, Button, Tag, SectionDivider } = DS;
  const { DoodleFlower, DoodleSparkle } = window;
  return (
    <section id="now" style={{ maxWidth: 'var(--content-max)', margin: '0 auto', padding: 'var(--space-section) var(--page-gutter) 0', position: 'relative' }}>
      <div aria-hidden style={{ position: 'absolute', top: '0', right: '0', pointerEvents: 'none' }}>
        <DoodleSparkle color="var(--yellow)" size={28} delay={0.6} />
      </div>
      <div aria-hidden style={{ position: 'absolute', bottom: '12%', left: '-1%', pointerEvents: 'none' }}>
        <DoodleFlower color="var(--pink)" size={40} delay={1.4} />
      </div>
      <SectionDivider label="Currently" index="§02" />
      <div style={{ margin: 'var(--space-6) 0 var(--space-7)' }}>
        <Eyebrow index="02">What I'm doing now</Eyebrow>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(20px, 3vw, 40px)' }}>
        <Card accent="var(--pink)" accentBar style={{ padding: 'var(--space-7)' }}>
          <Tag tone="pink" dot>Women's health</Tag>
          <h3 style={{ fontSize: 'var(--text-title)', fontWeight: 700, margin: 'var(--space-4) 0 var(--space-4)' }}>The House of Maria</h3>
          <p style={{ color: 'var(--text-secondary)', margin: '0 0 var(--space-5)', maxWidth: '46ch' }}>
            The community I'm building around women's health done right — education, products, and a space where
            women's bodies are understood on their own terms, not as a deviation from a male default.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
            <Button variant="link" href="https://thehouseofmaria.com" target="_blank" rel="noopener">thehouseofmaria.com ↗</Button>
            <Button variant="link" href="https://instagram.com/thehouseofmaria_" target="_blank" rel="noopener">@thehouseofmaria_ ↗</Button>
          </div>
        </Card>

        <Card accent="var(--yellow)" accentBar style={{ padding: 'var(--space-7)' }}>
          <Tag tone="yellow" dot>Research</Tag>
          <h3 style={{ fontSize: 'var(--text-title)', fontWeight: 700, margin: 'var(--space-4) 0 var(--space-4)' }}>Independent research</h3>
          <p style={{ color: 'var(--text-secondary)', margin: '0 0 var(--space-4)', maxWidth: '46ch' }}>
            I spent months mapping the gap between what wearables measure and what is actually happening in women's
            bodies — temperature patterns, HRV, and wearable signal behavior across the cycle, specifically in
            high-demand professional women. The tools say one thing. The body says another. I wanted to understand why.
          </p>
          <Button variant="link" href="https://heelsoff.substack.com" target="_blank" rel="noopener">I write about this at Heels Off ↗</Button>
        </Card>
      </div>

      {/* Section 3 — Coming soon */}
      <div style={{ marginTop: 'var(--space-9)' }}>
        <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 500, fontSize: 'clamp(1.6rem, 3vw, 2.6rem)', color: 'var(--ink)', margin: 0, maxWidth: '24ch' }}>
          More research on algorithms to map human rhythms. Building from there.
        </p>
      </div>
    </section>
  );
}

Object.assign(window, { DFNowNext: NowNext });
