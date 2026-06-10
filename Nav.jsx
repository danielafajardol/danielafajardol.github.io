/* Site navigation — wordmark left, anchor links + contact button right. */
function Nav() {
  const { Button } = window.DanielaFajardoDesignSystem_305341;
  const links = [
    ['What I care about', '#care'],
    ['Now', '#now'],
    ['Projects', '#work'],
    ['Experience', '#path'],
  ];
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '20px var(--page-gutter)',
      background: 'rgba(255,255,255,0.84)',
      backdropFilter: 'saturate(140%) blur(8px)',
      borderBottom: '1px solid var(--hairline)',
    }}>
      <a href="#top" style={{
        fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.2rem',
        letterSpacing: '-0.02em', color: 'var(--ink)', display: 'inline-flex', alignItems: 'baseline', gap: '0.12em',
        whiteSpace: 'nowrap',
      }}>
        Daniela&nbsp;Fajardo&nbsp;Londoño<span style={{ color: 'var(--orange)' }}>.</span>
      </a>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-6)' }}>
        <ul style={{ display: 'flex', gap: 'var(--space-5)', listStyle: 'none', margin: 0, padding: 0 }}>
          {links.map(([label, href]) => (
            <li key={href}>
              <a href={href} style={{
                fontFamily: 'var(--font-body)', fontSize: 'var(--text-caption)', fontWeight: 600,
                letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--ink-soft)',
              }}>{label}</a>
            </li>
          ))}
        </ul>
        <Button variant="accent" size="sm" href="#contact">Get in touch</Button>
      </div>
    </nav>
  );
}

Object.assign(window, { DFNav: Nav });
