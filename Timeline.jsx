const STOPS = [
  {
    range: 'Sep 2025 — Present', org: 'McKinsey & Company', place: 'San Francisco, CA',
    role: 'Business Analyst, AI & Automation', c: 'orange',
    body: 'Built and deployed AI agents converting manual document-processing workflows into automated decision logic, cutting processing time 70%. Evaluated 45+ automation initiatives and built a prioritization framework shaping a roadmap of $50M+ in operational value. Developed an AI benchmarking platform for strategy teams; presents technical roadmaps directly to senior executives.',
  },
  {
    range: 'May 2024 — Aug 2024', org: 'Addepar', place: 'New York, NY',
    role: 'Research Product Management Intern', c: 'orange',
    body: 'Analyzed portfolio composition across 85+ investment firms and authored a comparative study of LATAM vs. US allocation patterns. Translated research into a 0-to-1 peer-benchmarking product using nearest-neighbors over portfolio features — from requirements through user testing to a formal company initiative.',
  },
  {
    range: 'Jan 2023 — May 2024', org: 'Berkeley Blockchain Xcelerator', place: 'Fellow',
    role: 'Investment Fellow', c: 'purple',
    body: 'Evaluated 40+ Seed and Series A startup investments to select semester cohorts. Curated a portfolio of 15 startups that have collectively raised over $40M since enrollment.',
  },
  {
    range: 'May 2023 — Aug 2023', org: 'Tesla', place: 'Palo Alto, CA',
    role: 'Power Distribution — Global Supply Chain Data Analyst', c: 'green',
    body: 'Analyzed component spend across 25+ suppliers and built Tableau models supporting negotiations that reduced low-voltage component costs by 10%. Developed demand-forecasting analysis for cross-functional resource allocation.',
  },
  {
    range: 'Aug 2021 — May 2025', org: 'UC Berkeley', place: 'B.A. · GPA 3.73',
    role: 'Computer Science & Applied Mathematics', c: 'blue',
    body: 'Coursework: Machine Learning, Computer Vision, Graduate Combinatorial Algorithms, Numerical Analysis, Linear Algebra, Abstract Algebra, Complex Analysis, Probability, Efficient Algorithms. Awards: AP Scholar with Honors; Top 25%, International Pascal Mathematics Contest.',
  },
];

/* Section 5 — Experience. Annotated axis, newest to oldest, colored nodes. */
function Timeline() {
  const DS = window.DanielaFajardoDesignSystem_305341;
  const { Eyebrow, Button, SectionDivider } = DS;
  return (
    <section id="path" style={{ maxWidth: 'var(--content-max)', margin: '0 auto', padding: 'var(--space-section) var(--page-gutter) 0' }}>
      <SectionDivider label="Trajectory" index="§04" />
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-5)', flexWrap: 'wrap', margin: 'var(--space-6) 0 var(--space-8)' }}>
        <Eyebrow index="04">Experience</Eyebrow>
        <h2 style={{ fontSize: 'var(--text-display)', fontWeight: 900 }}>Where I've been.</h2>
      </div>

      <ol style={{ listStyle: 'none', margin: 0, padding: 0, borderTop: '1px solid var(--hairline)' }}>
        {STOPS.map((s) => (
          <li key={s.org + s.range} style={{
            display: 'grid', gridTemplateColumns: 'minmax(140px, 0.6fr) 28px minmax(0, 3fr)',
            gap: 'var(--space-5)', alignItems: 'start',
            padding: 'var(--space-6) 0', borderBottom: '1px solid var(--hairline)',
          }} className="df-stop">
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-caption)', letterSpacing: '0.03em', color: 'var(--ink-soft)', paddingTop: '0.35em', position: 'relative' }}>
              {s.range}
              {s.org === 'McKinsey & Company' && (
                <span aria-hidden style={{
                  display: 'block', fontFamily: 'var(--font-hand)', fontSize: '1rem',
                  color: 'var(--orange)', transform: 'rotate(-4deg)', marginTop: '4px',
                  letterSpacing: 0,
                }}>← now</span>
              )}
            </span>
            <span aria-hidden style={{ justifySelf: 'center', paddingTop: '0.45em' }}>
              <span style={{ display: 'block', width: 11, height: 11, borderRadius: '50%', background: `var(--${s.c})` }} />
            </span>
            <div>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: 'var(--space-3)', marginBottom: 'var(--space-2)' }}>
                <h3 style={{ fontSize: 'var(--text-heading)', fontWeight: 700 }}>{s.org}</h3>
                <span style={{ color: 'var(--text-muted)', fontSize: 'var(--text-small)' }}>{s.place}</span>
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 'var(--text-small)', color: `var(--${s.c === 'yellow' ? 'yellow-ink' : s.c})`, margin: '0 0 var(--space-3)' }}>{s.role}</p>
              <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: 'var(--text-small)', lineHeight: 'var(--leading-normal)', maxWidth: '64ch' }}>{s.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <div style={{ marginTop: 'var(--space-7)' }}>
        <Button variant="outline" href="#" target="_blank" rel="noopener">Download résumé</Button>
      </div>
    </section>
  );
}

Object.assign(window, { DFTimeline: Timeline });
