/* Doodles — hand-drawn SVG shapes that draw themselves then float forever.
   Each shape uses stroke-dashoffset to trace itself on load, then a fill
   fades in and the whole thing bobs gently. */

function useDoodleDrawIn(ref, duration, delay) {
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const paths = el.querySelectorAll('path, ellipse, circle, line');
    paths.forEach(p => {
      const len = (p.getTotalLength ? p.getTotalLength() : 60);
      p.style.strokeDasharray = len;
      p.style.strokeDashoffset = len;
      p.style.transition = `stroke-dashoffset ${duration}s ease-in-out ${delay}s`;
    });
    const fills = el.querySelectorAll('.doodle-fill');
    fills.forEach(f => {
      f.style.opacity = 0;
      f.style.transition = `opacity 0.5s ease ${delay + duration}s`;
    });
    const raf = requestAnimationFrame(() => {
      paths.forEach(p => { p.style.strokeDashoffset = 0; });
      fills.forEach(f => { f.style.opacity = f.dataset.opacity || 0.18; });
    });
    return () => cancelAnimationFrame(raf);
  }, []);
}

function DoodleStar({ color, size = 44, delay = 0, style = {} }) {
  const ref = React.useRef(null);
  useDoodleDrawIn(ref, 1.1, delay);
  const s = size;
  const cx = s / 2, cy = s / 2, r1 = s * 0.46, r2 = s * 0.19;
  const pts = Array.from({ length: 10 }, (_, i) => {
    const angle = (i * Math.PI) / 5 - Math.PI / 2;
    const r = i % 2 === 0 ? r1 : r2;
    const jitter = (i * 3.7) % 2.8 - 1.4;
    return [cx + (r + jitter) * Math.cos(angle), cy + (r + jitter) * Math.sin(angle)];
  });
  const d = pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(' ') + ' Z';
  const floatDur = 5 + (delay % 2.5);
  return (
    <svg ref={ref} width={s} height={s} viewBox={`0 0 ${s} ${s}`} style={{
      display: 'block', overflow: 'visible',
      animation: `doodle-float ${floatDur}s ease-in-out ${delay + 1.4}s infinite`,
      '--doodle-rot': `${(delay * 17) % 12 - 6}deg`,
      ...style,
    }}>
      <path className="doodle-fill" d={d} fill={color} data-opacity="0.22" style={{ opacity: 0 }} />
      <path d={d} fill="none" stroke={color} strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

function DoodleSparkle({ color, size = 28, delay = 0, style = {} }) {
  const ref = React.useRef(null);
  useDoodleDrawIn(ref, 0.9, delay);
  const s = size, cx = s / 2, cy = s / 2, arm = s * 0.46, nub = s * 0.14;
  const d = `M ${cx} ${cy - arm} C ${cx + nub} ${cy - arm * 0.3} ${cx + arm * 0.3} ${cy - nub} ${cx + arm} ${cy}
    C ${cx + arm * 0.3} ${cy + nub} ${cx + nub} ${cy + arm * 0.3} ${cx} ${cy + arm}
    C ${cx - nub} ${cy + arm * 0.3} ${cx - arm * 0.3} ${cy + nub} ${cx - arm} ${cy}
    C ${cx - arm * 0.3} ${cy - nub} ${cx - nub} ${cy - arm * 0.3} ${cx} ${cy - arm} Z`;
  const floatDur = 4.5 + (delay % 2);
  return (
    <svg ref={ref} width={s} height={s} viewBox={`0 0 ${s} ${s}`} style={{
      display: 'block', overflow: 'visible',
      animation: `doodle-float ${floatDur}s ease-in-out ${delay + 1.2}s infinite`,
      '--doodle-rot': `${(delay * 23) % 10 - 5}deg`,
      ...style,
    }}>
      <path className="doodle-fill" d={d} fill={color} data-opacity="0.25" style={{ opacity: 0 }} />
      <path d={d} fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

function DoodleFlower({ color, size = 52, delay = 0, style = {} }) {
  const ref = React.useRef(null);
  useDoodleDrawIn(ref, 1.4, delay);
  const s = size, cx = s / 2, cy = s / 2;
  const petalR = s * 0.28, petalDist = s * 0.22, cr = s * 0.1;
  const petals = Array.from({ length: 5 }, (_, i) => {
    const angle = (i * 2 * Math.PI) / 5 - Math.PI / 2;
    const px = cx + petalDist * Math.cos(angle);
    const py = cy + petalDist * Math.sin(angle);
    const jx = (i * 2.1) % 3 - 1.5;
    const jy = (i * 3.3) % 3 - 1.5;
    return `<ellipse cx="${(px + jx).toFixed(1)}" cy="${(py + jy).toFixed(1)}" rx="${(petalR * 0.55).toFixed(1)}" ry="${petalR.toFixed(1)}" transform="rotate(${((angle * 180) / Math.PI).toFixed(1)}, ${(px + jx).toFixed(1)}, ${(py + jy).toFixed(1)})" />`;
  }).join('');
  const floatDur = 6 + (delay % 3);
  return (
    <svg ref={ref} width={s} height={s} viewBox={`0 0 ${s} ${s}`} style={{
      display: 'block', overflow: 'visible',
      animation: `doodle-float ${floatDur}s ease-in-out ${delay + 1.8}s infinite`,
      '--doodle-rot': `${(delay * 11) % 14 - 7}deg`,
      ...style,
    }}
      dangerouslySetInnerHTML={{ __html: `
        <g class="doodle-fill" data-opacity="0.2" style="opacity:0;fill:${color}">
          ${petals.replace(/\/>/g, ' />')}
          <circle cx="${cx}" cy="${cy}" r="${(cr * 1.3).toFixed(1)}" fill="white" />
        </g>
        <g fill="none" stroke="${color}" stroke-width="2.1" stroke-linecap="round">
          ${petals}
          <circle cx="${cx}" cy="${cy}" r="${cr.toFixed(1)}" />
        </g>
      ` }}
    />
  );
}

function DoodleTinyFlower({ color, size = 34, delay = 0, style = {} }) {
  const ref = React.useRef(null);
  useDoodleDrawIn(ref, 1.0, delay);
  const s = size, cx = s / 2, cy = s / 2;
  const petalR = s * 0.26, petalDist = s * 0.2, cr = s * 0.1;
  const petals = Array.from({ length: 4 }, (_, i) => {
    const angle = (i * Math.PI) / 2;
    const px = cx + petalDist * Math.cos(angle);
    const py = cy + petalDist * Math.sin(angle);
    return `<ellipse cx="${px.toFixed(1)}" cy="${py.toFixed(1)}" rx="${(petalR * 0.5).toFixed(1)}" ry="${petalR.toFixed(1)}" transform="rotate(${((angle * 180) / Math.PI).toFixed(1)}, ${px.toFixed(1)}, ${py.toFixed(1)})" />`;
  }).join('');
  const floatDur = 5.5 + (delay % 2.5);
  return (
    <svg ref={ref} width={s} height={s} viewBox={`0 0 ${s} ${s}`} style={{
      display: 'block', overflow: 'visible',
      animation: `doodle-float ${floatDur}s ease-in-out ${delay + 1.5}s infinite`,
      '--doodle-rot': `${(delay * 13) % 12 - 6}deg`,
      ...style,
    }}
      dangerouslySetInnerHTML={{ __html: `
        <g class="doodle-fill" data-opacity="0.22" style="opacity:0;fill:${color}">
          ${petals}
          <circle cx="${cx}" cy="${cy}" r="${(cr * 1.2).toFixed(1)}" fill="white" />
        </g>
        <g fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round">
          ${petals}
          <circle cx="${cx}" cy="${cy}" r="${cr.toFixed(1)}" />
        </g>
      ` }}
    />
  );
}

Object.assign(window, { DoodleStar, DoodleSparkle, DoodleFlower, DoodleTinyFlower });
