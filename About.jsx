const FACTS = [
  {
    label: 'The long ride',
    text: 'Biked Highway 1 from San Francisco to San Luis Obispo in one week. Fog, cliffs, sore legs, best decision.',
    color: 'blue', rotate: -1.5,
  },
  {
    label: 'Asia, no plan',
    text: 'Backpacked through Asia for two months. Trains, night buses, hostels, bad maps. The best kind of math problem — no closed-form solution.',
    color: 'orange', rotate: 1.2,
  },
  {
    label: 'Watercolors',
    text: 'I paint. Watercolors specifically — the medium that punishes you for being too controlling. Good practice for someone who likes to be in control.',
    color: 'pink', rotate: -0.8,
  },
  {
    label: 'Outdoors',
    text: 'Hiking whenever I can. Mountains, coasts, trails where there is no signal. The outdoors resets the whole system.',
    color: 'green', rotate: 1.8,
  },
  {
    label: 'Stillness',
    text: 'Meditation and yoga — the counterweight to everything else. A moving body and a quiet mind are not contradictions.',
    color: 'purple', rotate: -1.2,
  },
  {
    label: 'Dark chocolate',
    text: '70% minimum. Non-negotiable. If you hand me milk chocolate I will be polite about it but I will remember.',
    color: 'yellow', rotate: 0.9,
  },
];

function About() {
  const DS = window.DanielaFajardoDesignSystem_305341;
  const { Eyebrow, SectionDivider } = DS;
  const { DoodleFlower, DoodleStar, DoodleSparkle, DoodleTinyFlower } = window;

  return (
    <section id="about" style={{ maxWidth: 'var(--content-max)', margin: '0 auto', padding: 'var(--space-section) var(--page-gutter) 0', position: 'relative' }}>
      <SectionDivider label="Off the record" index="§05" />

      {/* scattered doodles */}
      <div aria-hidden style={{ position: 'absolute', top: '4%', right: '2%', pointerEvents: 'none' }}>
        <DoodleFlower color="var(--orange)" size={48} delay={0.2} />
      </div>
      <div aria-hidden style={{ position: 'absolute', top: '30%', left: '-1%', pointerEvents: 'none' }}>
        <DoodleStar color="var(--blue)" size={36} delay={0.7} />
      </div>
      <div aria-hidden style={{ position: 'absolute', bottom: '10%', right: '4%', pointerEvents: 'none' }}>
        <DoodleTinyFlower color="var(--pink)" size={30} delay={1.3} />
      </div>
      <div aria-hidden style={{ position: 'absolute', bottom: '28%', left: '3%', pointerEvents: 'none' }}>
        <DoodleSparkle color="var(--green)" size={26} delay={1.8} />
      </div>

      <div style={{ margin: 'var(--space-6) 0 var(--space-8)' }}>
        <Eyebrow index="05">The rest of me</Eyebrow>
        <h2 style={{ fontSize: 'var(--text-display)', fontWeight: 900, margin: 'var(--space-4) 0 var(--space-3)' }}>
          Outside the equation.
        </h2>
        <p style={{ fontSize: 'var(--text-subhead)', color: 'var(--text-secondary)', maxWidth: '48ch', margin: 0, lineHeight: 'var(--leading-relaxed)' }}>
          The things that don't fit on a résumé but explain why I think the way I do.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: 'clamp(16px, 2.5vw, 28px)',
      }}>
        {FACTS.map((f, i) => (
          <div key={f.label} style={{
            background: `var(--${f.color}-soft)`,
            border: `1.5px solid var(--${f.color})`,
            borderRadius: '3px',
            padding: 'clamp(18px, 3vw, 28px)',
            transform: `rotate(${f.rotate}deg)`,
            transition: 'transform 0.25s ease',
            position: 'relative',
            cursor: 'default',
          }}
            onMouseEnter={e => e.currentTarget.style.transform = 'rotate(0deg) scale(1.02)'}
            onMouseLeave={e => e.currentTarget.style.transform = `rotate(${f.rotate}deg)`}
          >
            {/* small doodle in corner */}
            <div aria-hidden style={{ position: 'absolute', top: '10px', right: '10px', opacity: 0.7 }}>
              {i % 3 === 0 && <DoodleSparkle color={`var(--${f.color})`} size={18} delay={i * 0.25 + 0.4} />}
              {i % 3 === 1 && <DoodleTinyFlower color={`var(--${f.color})`} size={20} delay={i * 0.25 + 0.4} />}
              {i % 3 === 2 && <DoodleStar color={`var(--${f.color})`} size={18} delay={i * 0.25 + 0.4} />}
            </div>

            <div style={{
              fontFamily: 'var(--font-hand)', fontWeight: 700,
              fontSize: '1.5rem', lineHeight: 1,
              color: `var(--${f.color === 'yellow' ? 'yellow-ink' : f.color})`,
              marginBottom: '10px',
            }}>{f.label}</div>

            <p style={{
              fontFamily: 'var(--font-body)', fontSize: 'var(--text-small)',
              color: 'var(--ink-soft)', margin: 0, lineHeight: 'var(--leading-normal)',
            }}>{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { DFAbout: About });
