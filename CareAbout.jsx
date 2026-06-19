const CARE = [
  {
    title: 'Algorithms', color: 'var(--purple)', rawColor: '#7C3AED',
    body: 'I studied CS and Applied Math because I am drawn to the challenge of taking something messy and mapping it to something precise. Not approximating, actually understanding the structure underneath. I build from first principles. I trained diffusion models from scratch because I needed to know what a denoising step actually does. I built NeRF from scratch because I wanted to understand how a neural network reconstructs space. The algorithm is not a tool I reach for. It is the thing I start with.',
  },
  {
    title: 'Human systems', color: 'var(--green)', rawColor: '#10B981',
    body: 'People are not clean data. They move in rhythms and cycles, but how someone feels does not always match what a sensor says, and what someone decides is shaped by things no device captures. I am passionate about the parts of a person that data alone never explains, behavior, context, subjective experience, and about what it would take to build models that hold all of it. Most software does not try. I think building systems that can carry a whole person, not just their signals, is the most interesting unsolved problem in technology right now.',
  },
  {
    title: "Women's health", color: 'var(--pink)', rawColor: '#F72585',
    body: "I focus that work on women's health, because it is where the gap is widest. Women have been an afterthought in medical research, diagnostic tools, and consumer technology for decades. The data exists. The algorithms do not. That is the gap I work in, through The House of Maria, the women's health community I am building, and through independent research on what wearables actually measure across the cycle in women carrying high-demand lives.",
  },
];

function CareAbout() {
  const DS = window.DanielaFajardoDesignSystem_305341;
  const { Eyebrow, SectionDivider } = DS;
  const { DoodleSparkle, DoodleTinyFlower, DoodleFlower, DoodleStar } = window;
  const doodles = [
    { C: DoodleSparkle, color: 'var(--purple)', size: 30, delay: 0.4 },
    { C: DoodleTinyFlower, color: 'var(--green)', size: 34, delay: 1.1 },
    { C: DoodleSparkle, color: 'var(--pink)', size: 26, delay: 1.7 },
  ];
  return (
    <section id="care" style={{ maxWidth: 'var(--content-max)', margin: '0 auto', padding: 'var(--space-section) var(--page-gutter) 0', position: 'relative' }}>
      {/* extra scattered doodles */}
      <div aria-hidden style={{ position: 'absolute', top: '2%', right: '1%', pointerEvents: 'none' }}>
        <DoodleFlower color="var(--purple)" size={42} delay={0.3} />
      </div>
      <div aria-hidden style={{ position: 'absolute', bottom: '5%', right: '3%', pointerEvents: 'none' }}>
        <DoodleStar color="var(--green)" size={30} delay={1.4} />
      </div>

      <SectionDivider label="The why before the what" index="§01" />
      <div style={{ margin: 'var(--space-6) 0 var(--space-8)' }}>
        <Eyebrow index="01">What I care about</Eyebrow>
      </div>

      <div style={{ display: 'grid', gap: 'var(--space-8)' }}>
        {CARE.map((c, i) => (
          <div key={c.title} style={{
            display: 'grid', gridTemplateColumns: 'minmax(0, 0.85fr) minmax(0, 1.4fr)',
            gap: 'clamp(24px, 5vw, 80px)', alignItems: 'start',
            paddingTop: i === 0 ? 0 : 'var(--space-8)',
            borderTop: i === 0 ? 'none' : '1px solid var(--hairline)',
            position: 'relative',
          }} className="df-care-row">
            {/* ghosted large index number */}
            <div aria-hidden style={{
              position: 'absolute', left: '-0.04em', top: '-0.25em',
              fontFamily: 'var(--font-display)', fontWeight: 900,
              fontSize: 'clamp(5rem, 10vw, 9rem)', lineHeight: 1,
              color: c.color, opacity: 0.07, userSelect: 'none', pointerEvents: 'none',
              letterSpacing: '-0.04em',
            }}>
              {String(i + 1).padStart(2, '0')}
            </div>

            <div style={{ position: 'relative' }}>
              {/* margin doodle */}
              <div aria-hidden style={{ position: 'absolute', left: '-2.8rem', top: '0.2rem' }}>
                {React.createElement(doodles[i].C, { color: doodles[i].color, size: doodles[i].size, delay: doodles[i].delay })}
              </div>
              <h2 style={{ fontSize: 'var(--text-display)', fontWeight: 900, color: c.color, lineHeight: 1.02 }}>
                {c.title}
              </h2>
            </div>
            <p style={{ fontSize: 'var(--text-subhead)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-secondary)', maxWidth: '60ch', margin: 0 }}>
              {c.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { DFCareAbout: CareAbout });
