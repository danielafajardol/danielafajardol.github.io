const PROJECTS = [
  {
    n: '01', title: 'Diffusion models from scratch', c: 'purple',
    body: 'Built the full pipeline from the mathematics: forward noising, a UNet, classifier-free guidance, iterative denoising. Then went further — inpainting, SDEdit-style translation, visual anagrams that flip at 180°, and frequency-separated hybrids. You understand something differently when you build the equation, not the import statement.',
    tags: ['PyTorch', 'UNet', 'Generative AI', 'Diffusion'],
    link: 'https://danielafajardol.github.io/cs180/project5.html',
    f: { w: 240, h: 150, r: -4 },
  },
  {
    n: '02', title: 'Neural radiance fields from scratch', c: 'blue',
    body: '3D scene reconstruction from 2D images. Ray casting, sinusoidal positional encoding, volume rendering, novel view synthesis. Started with a 2D coordinate-to-RGB task, then built the full 3D system and ran ablations on depth, width, and encoding frequency. PSNR 23+ at 5,000 iterations.',
    tags: ['PyTorch', 'NeRF', '3D reconstruction', 'Positional encoding'],
    link: 'https://danielafajardol.github.io/cs180/finalprojects.html',
    f: { w: 210, h: 170, r: 5 },
  },
  {
    n: '03', title: 'Image geolocation: CLIP + KNN', c: 'green',
    body: 'Predicted latitude and longitude from images using K-nearest-neighbors over OpenAI CLIP embeddings. Pretrained foundation-model features as the representation space instead of training from scratch. A study in knowing when not to reinvent the wheel.',
    tags: ['CLIP', 'KNN', 'Foundation models', 'Computer vision'],
    link: null,
    f: { w: 200, h: 140, r: -3 },
  },
  {
    n: '04', title: 'DonorLoop: PM and AI lead', c: 'orange',
    body: 'Built an AI pipeline that parses unstructured IRS 990 filings into structured financial datasets, normalizing noisy inputs to surface comparable nonprofit metrics. Validated through 10+ structured interviews with NGO stakeholders. Led the product from research question to shipped application.',
    tags: ['Vue.js', 'AI pipelines', 'Product', '0-to-1'],
    link: 'https://github.com/maria-romano/CS160-Group-V-Project',
    f: { w: 230, h: 160, r: 3 },
  },
  {
    n: '05', title: 'Facial keypoints: CNN to U-Net', c: 'pink',
    body: 'Trained CNNs from scratch and fine-tuned ResNet18 for facial-landmark regression, from single-point nose detection to 68 keypoints. Converted coordinates to Gaussian heatmaps for pixelwise supervision. Validated on in-the-wild faces.',
    tags: ['CNN', 'ResNet18', 'U-Net', 'Regression'],
    link: null,
    f: { w: 190, h: 175, r: -5 },
  },
  {
    n: '06', title: 'Image mosaicing and auto-stitching', c: 'yellow',
    body: 'Built panoramic stitching from scratch: Harris corner detection, Adaptive Non-Maximal Suppression, Lowe’s-ratio feature matching, and RANSAC-based homography estimation. No library wrappers. Every step written from the algorithm.',
    tags: ['Harris corners', 'RANSAC', 'Homography', 'Computer vision'],
    link: null,
    f: { w: 215, h: 145, r: 4 },
  },
];

function Projects() {
  const DS = window.DanielaFajardoDesignSystem_305341;
  const { Eyebrow, Card, Tag, Button, SectionDivider } = DS;
  return (
    <section id="work" style={{ maxWidth: 'var(--content-max)', margin: '0 auto', padding: 'var(--space-section) var(--page-gutter) 0' }}>
      <SectionDivider label="Selected work" index="§03" />
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-5)', flexWrap: 'wrap', margin: 'var(--space-6) 0 var(--space-8)' }}>
        <Eyebrow index="03">Projects</Eyebrow>
        <h2 style={{ fontSize: 'var(--text-display)', fontWeight: 900 }}>Built from the equation up.</h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 'clamp(20px, 3vw, 40px)' }}>
        {PROJECTS.map((p) => {
          const color = `var(--${p.c})`;
          const inner = (
            <React.Fragment>
              <Eyebrow index={p.n} tick={false} color={p.c === 'yellow' ? 'var(--yellow-ink)' : color}>fig. {p.n}</Eyebrow>
              <h3 style={{ fontSize: 'var(--text-heading)', fontWeight: 700, margin: 'var(--space-3) 0 var(--space-4)' }}>{p.title}</h3>
              <p style={{ color: 'var(--text-secondary)', margin: '0 0 var(--space-5)', fontSize: 'var(--text-small)', lineHeight: 'var(--leading-normal)' }}>{p.body}</p>
              <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap', marginBottom: p.link ? 'var(--space-4)' : 0 }}>
                {p.tags.map((t) => <Tag key={t} tone={p.c}>{t}</Tag>)}
              </div>
              {p.link && <Button variant="link">View project ↗</Button>}
            </React.Fragment>
          );
          return p.link ? (
            <Card key={p.n} interactive accent={color} accentBar href={p.link} target="_blank" rel="noopener"
              style={{ padding: 'var(--space-6) var(--space-6) var(--space-7)' }}>{inner}</Card>
          ) : (
            <Card key={p.n} accent={color} accentBar style={{ padding: 'var(--space-6) var(--space-6) var(--space-7)' }}>{inner}</Card>
          );
        })}
      </div>

      <div style={{ marginTop: 'var(--space-7)' }}>
        <Button variant="link" href="https://danielafajardol.github.io/cs180/" target="_blank" rel="noopener">See full CS 180 portfolio ↗</Button>
      </div>
    </section>
  );
}

Object.assign(window, { DFProjects: Projects });
