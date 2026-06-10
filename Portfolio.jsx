/* Portfolio — composes every screen into the full editorial site. */
function Portfolio() {
  const { DFNav, DFHero, DFCareAbout, DFNowNext, DFProjects, DFTimeline, DFContact } = window;
  return (
    <React.Fragment>
      <DFNav />
      <main>
        <DFHero />
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
