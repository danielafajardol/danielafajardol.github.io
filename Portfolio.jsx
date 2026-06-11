function Portfolio() {
  const { DFNav, DFHero, DFCareAbout, DFNowNext, DFProjects, DFTimeline, DFAbout, DFContact } = window;
  return (
    <React.Fragment>
      <DFNav />
      <main>
        <DFHero />
        <DFCareAbout />
        <DFNowNext />
        <DFProjects />
        <DFTimeline />
        <DFAbout />
        <DFContact />
      </main>
    </React.Fragment>
  );
}

Object.assign(window, { DFPortfolio: Portfolio });
