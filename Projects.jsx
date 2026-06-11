const PROJECTS = [
  {
    n: '01', title: 'Diffusion models from scratch', c: 'purple',
    body: 'Built the full pipeline from the mathematics: forward noising, a UNet, classifier-free guidance, iterative denoising. Then went further: inpainting, SDEdit-style translation, visual anagrams that flip at 180°, and frequency-separated hybrids. You understand something differently when you build the equation, not the import statement.',
    tags: ['PyTorch', 'UNet', 'Generative AI', 'Diffusion'],
    link: 'https://danielafajardol.github.io/cs180/project5.html',
  },
  {
    n: '02', title: 'Neural radiance fields from scratch', c: 'blue',
    body: '3D scene reconstruction from 2D images. Ray casting, sinusoidal positional encoding, volume rendering, novel view synthesis. Started with a 2D coordinate-to-RGB task, then built the full 3D system and ran ablations on depth, width, and encoding frequency. PSNR 23+ at 5,000 iterations.',
    tags: ['PyTorch', 'NeRF', '3D reconstruction', 'Positional encoding'],
    link: 'https://danielafajardol.github.io/cs180/finalprojects.html',
  },
  {
    n: '03', title: 'Image geolocation: CLIP + KNN', c: 'green',
    body: 'Predicted latitude and longitude from images using K-nearest-neighbors over OpenAI CLIP embeddings. Pretrained foundation-model features as the representation space instead of training from scratch. A study in knowing when not to reinvent the wheel.',
    tags: ['CLIP', 'KNN', 'Foundation models', 'Computer vision'],
    link: null,
  },
  {
    n: '04', title: 'DonorLoop: PM and AI lead', c: 'orange',
    body: 'Built an AI pipeline that parses unstructured IRS 990 filings into structured financial datasets, normalizing noisy inputs to surface comparable nonprofit metrics. Validated through 10+ structured interviews with NGO stakeholders. Led the product from research question to shipped application.',
    tags: ['Vue.js', 'AI pipelines', 'Product', '0-to-1'],
    link: 'https://github.com/maria-romano/CS160-Group-V-Project',
  },
  {
    n: '05', title: 'Facial keypoints: CNN to U-Net', c: 'pink',
    body: 'Trained CNNs from scratch and fine-tuned ResNet18 for facial-landmark regression, from single-point nose detection to 68 keypoints. Converted coordinates to Gaussian heatmaps for pixelwise supervision. Validated on in-the-wild faces.',
    tags: ['CNN', 'ResNet18', 'U-Net', 'Regression'],
    link: null,
  },
  {
    n: '06', title: 'Image mosaicing and auto-stitching', c: 'yellow',
    body: 'Built panoramic stitching from scratch: Harris corner detection, Adaptive Non-Maximal Suppression, Lowe\'s-ratio feature matching, and RANSAC-based homography estimation. No library wrappers. Every step written from the algorithm.',
    tags: ['Harris corners', 'RANSAC', 'Homography', 'Computer vision'],
    link: null,
  },
];

/* Squiggly hand-drawn underline under a project title */
function SquiggleUnderline({ color }) {
  return (
    <svg height="7" style={{ display: 'block', width: '100%', marginTop: '3px', overflow: 'visible' }} aria-hidden>
      <path
        d="M0,4 C10,1 20,6 30,3 C40,0 50,6 60,3 C70,0 80,6 90,3 C100,0 110,6 120,3 C130,0 140,6 150,3 C160,0 170,6 180,3 C190,0 200,6 210,3 C220,0 230,6 240,3 C250,0 260,6 270,3 C280,0 290,6 300,3"
        fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round"
      />
    </svg>
  );
}

const SCATTER_DOODLES = [
  { type: 'flower', color: 'var(--pink)',   size: 38, delay: 0.5,  top: '-24px', left: '60%'  },
  { type: 'star',   color: 'var(--blue)',   size: 32, delay: 1.2,  top: '40%',   right: '-18px' },
  { type: 'tiny',   color: 'var(--green)',  size: 28, delay: 0.9,  bottom: '30%', left: '-20px' },
  { type: 'spark',  color: 'var(--yellow)', size: 24, delay: 1.6,  bottom: '-16px', left: '30%' },
];

function Projects() {
  const DS = window.DanielaFajardoDesignSystem_305341;
  const { Eyebrow, Card, Tag, Button, SectionDivider } = DS;
  const { DoodleFlower, DoodleStar, DoodleTinyFlower, DoodleSparkle } = window;

  const doodleMap = { flower: DoodleFlower, star: DoodleStar, tiny: DoodleTinyFlower, spark: DoodleSparkle };

  return (
    <section id="work" style={{ maxWidth: 'var(--content-max)', margin: '0 auto', padding: 'var(--space-section) var(--page-gutter) 0' }}>
      <SectionDivider label="Selected work" index="§03" />
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-5)', flexWrap: 'wrap', margin: 'var(--space-6) 0 var(--space-8)' }}>
        <Eyebrow index="03">Projects</Eyebrow>
        <h2 style={{ fontSize: 'var(--text-display)', fontWeight: 900 }}>Built from the equation up.</h2>
      </div>

      <div style={{ position: 'relative' }}>
        {/* Scattered doodles around the grid */}
        {SCATTER_DOODLES.map((d, i) => {
          const DC = doodleMap[d.type];
          if (!DC) return null;
          return (
            <div key={i} aria-hidden style={{ position: 'absolute', pointerEvents: 'none', zIndex: 1, ...Object.fromEntries(['top','bottom','left','right'].filter(k => d[k]).map(k => [k, d[k]])) }}>
              <DC color={d.color} size={d.size} delay={d.delay} />
            </div>
          );
        })}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 'clamp(20px, 3vw, 40px)', position: 'relative', zIndex: 2 }}>
          {PROJECTS.map((p) => {
            const color = `var(--${p.c})`;
            const ghostColor = `var(--${p.c})`;
            const inner = (
              <React.Fragment>
                {/* ghosted number in card background */}
                <div aria-hidden style={{
                  position: 'absolute', right: '16px', bottom: '12px',
                  fontFamily: 'var(--font-display)', fontWeight: 900,
                  fontSize: '5rem', lineHeight: 1, letterSpacing: '-0.04em',
                  color: ghostColor, opacity: 0.06, userSelect: 'none', pointerEvents: 'none',
                }}>{p.n}</div>

                {/* star doodle on linked cards */}
                {p.link && (
                  <div aria-hidden style={{ position: 'absolute', top: '12px', right: '14px' }}>
                    <DoodleSparkle color={color} size={22} delay={parseFloat(p.n) * 0.3} />
                  </div>
                )}

                <Eyebrow index={p.n} tick={false} color={p.c === 'yellow' ? 'var(--yellow-ink)' : color}>fig. {p.n}</Eyebrow>
                <div style={{ margin: 'var(--space-3) 0 var(--space-4)' }}>
                  <h3 style={{ fontSize: 'var(--text-heading)', fontWeight: 700, margin: 0 }}>{p.title}</h3>
                  <SquiggleUnderline color={p.c === 'yellow' ? 'var(--yellow-ink)' : color} />
                </div>
                <p style={{ color: 'var(--text-secondary)', margin: '0 0 var(--space-5)', fontSize: 'var(--text-small)', lineHeight: 'var(--leading-normal)' }}>{p.body}</p>
                <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap', marginBottom: p.link ? 'var(--space-4)' : 0 }}>
                  {p.tags.map((t) => <Tag key={t} tone={p.c}>{t}</Tag>)}
                </div>
                {p.link && <Button variant="link">View project ↗</Button>}
              </React.Fragment>
            );
            const cardStyle = { padding: 'var(--space-6) var(--space-6) var(--space-7)', position: 'relative', overflow: 'hidden' };
            return p.link
              ? <Card key={p.n} interactive accent={color} accentBar href={p.link} target="_blank" rel="noopener" style={cardStyle}>{inner}</Card>
              : <Card key={p.n} accent={color} accentBar style={cardStyle}>{inner}</Card>;
          })}
        </div>
      </div>

      <div style={{ marginTop: 'var(--space-7)' }}>
        <Button variant="link" href="https://danielafajardol.github.io/cs180/" target="_blank" rel="noopener">See full CS 180 portfolio ↗</Button>
      </div>
    </section>
  );
}

Object.assign(window, { DFProjects: Projects });
