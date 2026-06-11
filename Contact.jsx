/* Contact — a big sparse invitation, an email, and a footer. The orange
   circle motif returns, balancing the hero. */
function Contact() {
  const DS = window.DanielaFajardoDesignSystem_305341;
  const { Eyebrow, Button, SectionDivider } = DS;
  const { DoodleFlower, DoodleStar } = window;
  return (
    <section id="contact" style={{ marginTop: 'var(--space-section)', position: 'relative', overflow: 'clip' }}>
      <div aria-hidden style={{
        position: 'absolute', left: '-6%', bottom: '-30%',
        width: 'clamp(300px, 36vw, 560px)', aspectRatio: '1',
        border: '1.5px solid var(--orange)', borderRadius: '50%', opacity: 0.5, pointerEvents: 'none',
      }} />

      {/* doodles */}
      <div aria-hidden style={{ position: 'absolute', top: '8%', right: '6%', pointerEvents: 'none', zIndex: 1 }}>
        <DoodleFlower color="var(--pink)" size={56} delay={0.3} />
      </div>
      <div aria-hidden style={{ position: 'absolute', top: '40%', right: '3%', pointerEvents: 'none', zIndex: 1 }}>
        <DoodleStar color="var(--orange)" size={34} delay={1.0} />
      </div>

      <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto', padding: '0 var(--page-gutter)', position: 'relative', zIndex: 2 }}>
        <div>
          <Eyebrow index="04">Contact</Eyebrow>
          <h2 style={{ fontSize: 'var(--text-hero)', fontWeight: 900, margin: 'var(--space-5) 0 var(--space-6)', maxWidth: '12ch' }}>
            Give me something to <span style={{ fontStyle: 'italic', fontWeight: 500, color: 'var(--orange)' }}>care</span> about.
          </h2>
          <p style={{ maxWidth: '42ch', fontSize: 'var(--text-subhead)', color: 'var(--text-secondary)', margin: '0 0 var(--space-6)' }}>
            Collaborations, talks, or a hard problem with a human at the center of it —
            I'd like to hear about it.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)', alignItems: 'center' }}>
            <Button variant="accent" size="lg" href="mailto:daniela.fajardo@berkeley.edu">daniela.fajardo@berkeley.edu</Button>
            <Button variant="link" href="https://www.linkedin.com/in/daniela-fajardo-londono/" target="_blank" rel="noopener">LinkedIn ↗</Button>
            <Button variant="link" href="https://heelsoff.substack.com/" target="_blank" rel="noopener">Substack ↗</Button>
            <Button variant="link" href="https://x.com/danfajardolm" target="_blank" rel="noopener">X ↗</Button>
            <Button variant="link" href="https://github.com/danielafajardol" target="_blank" rel="noopener">GitHub ↗</Button>
          </div>
        </div>

        <div style={{ marginTop: 'var(--space-9)', paddingBottom: 'var(--space-7)' }}>
          <SectionDivider node={false} />
          <footer style={{
            display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center',
            gap: 'var(--space-4)', paddingTop: 'var(--space-5)',
          }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.2rem', letterSpacing: '-0.02em' }}>
              Daniela&nbsp;Fajardo&nbsp;Londoño<span style={{ color: 'var(--orange)' }}>.</span>
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-micro)', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
              Math, made to care · © 2026
            </span>
          </footer>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { DFContact: Contact });
