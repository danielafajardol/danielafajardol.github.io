/* @ds-bundle: {"format":3,"namespace":"DanielaFajardoDesignSystem_305341","components":[{"name":"DotField","sourcePath":"components/brand/DotField.jsx"},{"name":"SectionDivider","sourcePath":"components/brand/SectionDivider.jsx"},{"name":"WavyFrame","sourcePath":"components/brand/WavyFrame.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/brand/DotField.jsx":"ae2b7ce17434","components/brand/SectionDivider.jsx":"458e77436cb8","components/brand/WavyFrame.jsx":"856cd1f5d5d6","components/core/Button.jsx":"141591c09975","components/core/Card.jsx":"5860860b34ee","components/core/Eyebrow.jsx":"15d5abdf8719","components/core/Tag.jsx":"76bc84e08529","ui_kits/portfolio/CareAbout.jsx":"fad13acabc2c","ui_kits/portfolio/Contact.jsx":"f72a05139254","ui_kits/portfolio/Hero.jsx":"744359f39cca","ui_kits/portfolio/Nav.jsx":"509558b11479","ui_kits/portfolio/NowNext.jsx":"7f143dd4bfae","ui_kits/portfolio/Portfolio.jsx":"c63e6d26a322","ui_kits/portfolio/Projects.jsx":"81bd216a40b3","ui_kits/portfolio/Timeline.jsx":"1e69b77ec0fa"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DanielaFajardoDesignSystem_305341 = window.DanielaFajardoDesignSystem_305341 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/DotField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* DotField — wraps content in the brand's low-opacity dot-grid texture (graph
   paper). The grid sits behind children; size and opacity are tunable. */
function DotField({
  children,
  gap = 22,
  opacity,
  color = 'var(--ink)',
  style = {},
  ...rest
}) {
  const dotOpacity = opacity != null ? opacity : 'var(--dot-opacity)';
  const rgba = opacity != null ? `rgba(13,13,13,${opacity})` : `rgba(13,13,13,var(--dot-opacity))`;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      backgroundImage: `radial-gradient(${rgba} 1px, transparent 1px)`,
      backgroundSize: `${gap}px ${gap}px`,
      backgroundPosition: `${-gap / 2}px ${-gap / 2}px`,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { DotField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/DotField.jsx", error: String((e && e.message) || e) }); }

// components/brand/SectionDivider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* SectionDivider — a thin geometric rule used between page sections. A full
   hairline with a small plotted node, optionally annotated with a mono label
   and index on the right, like an axis marker. */
function SectionDivider({
  label,
  index,
  node = true,
  color = 'var(--hairline)',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "separator",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      width: '100%',
      ...style
    }
  }, rest), node && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      flex: '0 0 auto',
      border: '1.5px solid var(--orange)',
      borderRadius: '50%',
      background: 'transparent'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      height: 1,
      background: color,
      flex: '1 1 auto'
    }
  }), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-micro)',
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      whiteSpace: 'nowrap',
      display: 'inline-flex',
      gap: '0.7em',
      alignItems: 'center'
    }
  }, index != null && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--blue)'
    }
  }, index), label));
}
Object.assign(__ds_scope, { SectionDivider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SectionDivider.jsx", error: String((e && e.message) || e) }); }

// components/brand/WavyFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Trace a rectangle perimeter where every point is pushed out/in along its
   edge normal by A·sin(k·s + phase), s = continuous arc length. The result is
   a closed path whose four edges undulate like sine waves. */
function wavyRectPath(w, h, inset, A, wavelength, phase) {
  const x0 = inset,
    y0 = inset,
    x1 = w - inset,
    y1 = h - inset;
  const k = 2 * Math.PI / wavelength;
  const step = 4;
  const pts = [];
  let s = 0;
  const off = () => A * Math.sin(k * s + phase);
  for (let x = x0; x <= x1; x += step) {
    pts.push([x, y0 - off()]);
    s += step;
  }
  for (let y = y0; y <= y1; y += step) {
    pts.push([x1 + off(), y]);
    s += step;
  }
  for (let x = x1; x >= x0; x -= step) {
    pts.push([x, y1 + off()]);
    s += step;
  }
  for (let y = y1; y >= y0; y -= step) {
    pts.push([x0 - off(), y]);
    s += step;
  }
  let d = `M ${pts[0][0].toFixed(2)} ${pts[0][1].toFixed(2)}`;
  for (let i = 1; i < pts.length; i++) d += ` L ${pts[i][0].toFixed(2)} ${pts[i][1].toFixed(2)}`;
  return d + ' Z';
}
let __wfSeq = 0;

/* WavyFrame — the brand's signature element. An image (or toned) rectangle
   whose edges gently undulate like a sine wave and breathe over time. */
function WavyFrame({
  src,
  alt = '',
  tone = 'var(--blue-soft)',
  width = 280,
  height = 360,
  rotate = 0,
  stroke = 'var(--ink)',
  strokeWidth = 1.5,
  amplitude = 3,
  wavelength = 48,
  speed = 1,
  shadow = true,
  caption,
  style = {},
  ...rest
}) {
  const pathRef = React.useRef(null);
  const clipRef = React.useRef(null);
  const rafRef = React.useRef(0);
  const idRef = React.useRef(null);
  if (idRef.current === null) idRef.current = `wf${++__wfSeq}`;
  const clipId = `${idRef.current}-clip`;
  const inset = amplitude + strokeWidth + 1;
  React.useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const apply = phase => {
      const d = wavyRectPath(width, height, inset, amplitude, wavelength, phase);
      if (pathRef.current) pathRef.current.setAttribute('d', d);
      if (clipRef.current) clipRef.current.setAttribute('d', d);
    };
    if (reduce) {
      apply(0);
      return;
    }
    const start = performance.now();
    const loop = now => {
      const t = (now - start) / 1000;
      apply(t * speed * Math.PI / 2);
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [width, height, inset, amplitude, wavelength, speed]);
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      display: 'inline-block',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height,
    viewBox: `0 0 ${width} ${height}`,
    style: {
      display: 'block',
      overflow: 'visible',
      transform: `rotate(${rotate}deg)`,
      filter: shadow ? 'drop-shadow(0 20px 34px rgba(13,13,13,0.16))' : 'none'
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: clipId
  }, /*#__PURE__*/React.createElement("path", {
    ref: clipRef
  }))), /*#__PURE__*/React.createElement("g", {
    clipPath: `url(#${clipId})`
  }, src ? /*#__PURE__*/React.createElement("image", {
    href: src,
    x: "0",
    y: "0",
    width: width,
    height: height,
    preserveAspectRatio: "xMidYMid slice",
    "aria-label": alt
  }) : /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "0",
    width: width,
    height: height,
    fill: tone
  })), /*#__PURE__*/React.createElement("path", {
    ref: pathRef,
    fill: "none",
    stroke: stroke,
    strokeWidth: strokeWidth,
    strokeLinejoin: "round"
  })), caption && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 'var(--space-2)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-micro)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      transform: `rotate(${rotate}deg)`,
      transformOrigin: 'left top'
    }
  }, caption));
}
Object.assign(__ds_scope, { WavyFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/WavyFrame.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.df-btn{
  --_bg: var(--ink); --_fg: var(--paper); --_bd: transparent;
  display:inline-flex; align-items:center; gap:.55em;
  font-family:var(--font-body); font-weight:var(--weight-semibold);
  font-size:var(--text-small); line-height:1; letter-spacing:0;
  padding:.85em 1.5em; border-radius:var(--radius-pill);
  background:var(--_bg); color:var(--_fg);
  border:var(--line-medium) solid var(--_bd);
  cursor:pointer; text-decoration:none; white-space:nowrap;
  transition: transform var(--dur-fast) var(--ease-out),
              background var(--dur-fast) var(--ease-out),
              color var(--dur-fast) var(--ease-out),
              border-color var(--dur-fast) var(--ease-out),
              opacity var(--dur-fast) var(--ease-out);
}
.df-btn:hover{ transform: translateY(-1px); }
.df-btn:active{ transform: translateY(0) scale(.985); }
.df-btn:disabled{ opacity:.4; cursor:not-allowed; transform:none; }

.df-btn--accent{ --_bg: var(--orange); --_fg: var(--paper); }
.df-btn--accent:hover{ --_bg:#F25A18; }
.df-btn--solid:hover{ --_bg:#262626; }

.df-btn--outline{ --_bg:transparent; --_fg:var(--ink); --_bd:var(--ink); }
.df-btn--outline:hover{ --_bg:var(--ink); --_fg:var(--paper); }

.df-btn--ghost{ --_bg:transparent; --_fg:var(--ink); --_bd:transparent; padding-left:.35em; padding-right:.35em; }
.df-btn--ghost:hover{ --_fg:var(--orange); transform:none; }

.df-btn--sm{ font-size:var(--text-caption); padding:.6em 1.1em; }
.df-btn--lg{ font-size:var(--text-body); padding:1em 1.9em; }

/* text link with sine-ish underline that draws in */
.df-link{
  font-family:var(--font-body); font-weight:var(--weight-semibold);
  color:var(--ink); text-decoration:none; cursor:pointer;
  background-image: linear-gradient(var(--orange),var(--orange));
  background-size: 0% var(--line-medium); background-position:0 100%;
  background-repeat:no-repeat;
  transition: background-size var(--dur-base) var(--ease-out), color var(--dur-fast) var(--ease-out);
  padding-bottom:.12em;
}
.df-link:hover{ background-size:100% var(--line-medium); color:var(--ink); }
`;
let __injected = false;
function useInject() {
  React.useEffect(() => {
    if (__injected) return;
    const el = document.createElement('style');
    el.setAttribute('data-df', 'button');
    el.textContent = CSS;
    document.head.appendChild(el);
    __injected = true;
  }, []);
}
function Button({
  children,
  variant = 'solid',
  // solid | accent | outline | ghost | link
  size = 'md',
  // sm | md | lg
  as,
  className = '',
  ...rest
}) {
  useInject();
  const Tag = as || (rest.href ? 'a' : 'button');
  if (variant === 'link') {
    return /*#__PURE__*/React.createElement(Tag, _extends({
      className: `df-link ${className}`
    }, rest), children);
  }
  const cls = ['df-btn', `df-btn--${variant}`, size !== 'md' ? `df-btn--${size}` : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CARD_CSS = `
.df-card{
  position:relative; display:flex; flex-direction:column;
  background:var(--surface-card);
  border:var(--line-thin) solid var(--border);
  border-radius:var(--radius-0);
  padding:var(--space-6);
  transition: transform var(--dur-base) var(--ease-out),
              border-color var(--dur-base) var(--ease-out),
              box-shadow var(--dur-base) var(--ease-out);
}
.df-card::before{
  content:""; position:absolute; left:-1px; top:-1px; height:3px; width:0;
  background:var(--card-accent, var(--orange)); transition: width var(--dur-slow) var(--ease-out);
}
.df-card--accentbar{ border-top:3px solid var(--card-accent, var(--orange)); }
.df-card--interactive{ cursor:pointer; }
.df-card--interactive:hover{
  transform:translateY(-3px);
  border-color:var(--border-strong);
  box-shadow:var(--shadow-frame);
}
.df-card--interactive:hover::before{ width:48px; }
`;
let __cardInjected = false;
function useInject() {
  React.useEffect(() => {
    if (__cardInjected) return;
    const el = document.createElement('style');
    el.setAttribute('data-df', 'card');
    el.textContent = CARD_CSS;
    document.head.appendChild(el);
    __cardInjected = true;
  }, []);
}

/* Card — a minimal paper container with a hairline border. Sharp corners by
   default; on hover (when interactive) it lifts and draws an orange tick at
   the top-left, like marking a point of interest. */
function Card({
  children,
  interactive = false,
  accent,
  accentBar = false,
  as,
  className = '',
  style = {},
  ...rest
}) {
  useInject();
  const Tag = as || (rest.href ? 'a' : 'div');
  const cls = ['df-card', interactive ? 'df-card--interactive' : '', accentBar ? 'df-card--accentbar' : '', className].filter(Boolean).join(' ');
  const mergedStyle = accent ? {
    '--card-accent': accent,
    ...style
  } : style;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    style: mergedStyle
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Eyebrow — the mono uppercase kicker that labels sections and figures.
   Optional index (e.g. "01") and a short hairline tick before the text. */
function Eyebrow({
  children,
  index,
  tick = true,
  color = 'var(--text-muted)',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.7em',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-micro)',
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase',
      color,
      ...style
    }
  }, rest), index != null && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--orange)'
    }
  }, index), tick && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 1,
      background: 'currentColor',
      opacity: 0.5
    }
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  ink: {
    bg: 'transparent',
    fg: 'var(--ink)',
    bd: 'var(--ink)',
    dot: 'var(--ink)'
  },
  orange: {
    bg: 'var(--orange-soft)',
    fg: 'var(--orange-ink)',
    bd: 'transparent',
    dot: 'var(--orange)'
  },
  blue: {
    bg: 'var(--blue-soft)',
    fg: 'var(--blue-ink)',
    bd: 'transparent',
    dot: 'var(--blue)'
  },
  purple: {
    bg: 'var(--purple-soft)',
    fg: 'var(--purple-ink)',
    bd: 'transparent',
    dot: 'var(--purple)'
  },
  pink: {
    bg: 'var(--pink-soft)',
    fg: 'var(--pink-ink)',
    bd: 'transparent',
    dot: 'var(--pink)'
  },
  green: {
    bg: 'var(--green-soft)',
    fg: 'var(--green-ink)',
    bd: 'transparent',
    dot: 'var(--green)'
  },
  yellow: {
    bg: 'var(--yellow-soft)',
    fg: 'var(--yellow-ink)',
    bd: 'transparent',
    dot: 'var(--yellow)'
  },
  solid: {
    bg: 'var(--ink)',
    fg: 'var(--paper)',
    bd: 'transparent',
    dot: 'var(--orange)'
  }
};

/* Tag — a small mono pill used for skills, methods, and metadata. Optional
   leading dot in an accent color, like a plotted point on a key. */
function Tag({
  children,
  tone = 'ink',
  dot = false,
  style = {},
  ...rest
}) {
  const t = TONES[tone] || TONES.ink;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5em',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-caption)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      lineHeight: 1,
      padding: '0.5em 0.85em',
      borderRadius: 'var(--radius-pill)',
      background: t.bg,
      color: t.fg,
      border: `var(--line-thin) solid ${t.bd}`,
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: t.dot,
      flex: '0 0 auto'
    }
  }), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/CareAbout.jsx
try { (() => {
const CARE = [{
  title: 'Algorithms',
  color: 'var(--purple)',
  body: 'I am obsessed with building from first principles. Not using the library — understanding the equation. I trained diffusion models from scratch because I needed to know what a denoising step actually does. I built NeRF from scratch because I wanted to understand how a neural network reconstructs space. The algorithm is where everything starts.'
}, {
  title: 'Human systems',
  color: 'var(--green)',
  body: 'People are not static. They move in rhythms, cycles, patterns — sleep, temperature, heart rate variability, the way attention shifts across a day. But physiology is only half the picture. Behavior, context, and subjective experience are inputs too. How someone feels does not always match what their body is doing; what someone decides is shaped by things no sensor captures. I am interested in the full picture — all the inputs, objective and subjective — and what it takes to build algorithms that can actually hold that complexity. Almost no software tries. I think that is the most interesting unsolved problem in technology right now.'
}, {
  title: "Women's health",
  color: 'var(--pink)',
  body: "Women have been an afterthought in medical research, diagnostic tools, and consumer technology for a long time. The data exists. The algorithms exist. Nobody is using them together. That is the gap I am working in."
}];

/* Section 1 — What I care about. Three large statements, each in its domain
   color. The why before the what. */
function CareAbout() {
  const DS = window.DanielaFajardoDesignSystem_305341;
  const {
    Eyebrow,
    SectionDivider
  } = DS;
  return /*#__PURE__*/React.createElement("section", {
    id: "care",
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: 'var(--space-section) var(--page-gutter) 0'
    }
  }, /*#__PURE__*/React.createElement(SectionDivider, {
    label: "The why before the what",
    index: "\xA701"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: 'var(--space-6) 0 var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    index: "01"
  }, "What I care about")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-8)'
    }
  }, CARE.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: c.title,
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 0.85fr) minmax(0, 1.4fr)',
      gap: 'clamp(24px, 5vw, 80px)',
      alignItems: 'start',
      paddingTop: i === 0 ? 0 : 'var(--space-8)',
      borderTop: i === 0 ? 'none' : '1px solid var(--hairline)'
    },
    className: "df-care-row"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-display)',
      fontWeight: 900,
      color: c.color,
      lineHeight: 1.02
    }
  }, c.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-subhead)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'var(--text-secondary)',
      maxWidth: '60ch',
      margin: 0
    }
  }, c.body)))));
}
Object.assign(window, {
  DFCareAbout: CareAbout
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/CareAbout.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Contact.jsx
try { (() => {
/* Contact — a big sparse invitation, an email, and a footer. The orange
   circle motif returns, balancing the hero. */
function Contact() {
  const DS = window.DanielaFajardoDesignSystem_305341;
  const {
    Eyebrow,
    Button,
    WavyFrame,
    SectionDivider
  } = DS;
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    style: {
      marginTop: 'var(--space-section)',
      position: 'relative',
      overflow: 'clip'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      left: '-6%',
      bottom: '-30%',
      width: 'clamp(300px, 36vw, 560px)',
      aspectRatio: '1',
      border: '1.5px solid var(--orange)',
      borderRadius: '50%',
      opacity: 0.5,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: '0 var(--page-gutter)',
      position: 'relative',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.5fr) minmax(0,1fr)',
      gap: 'clamp(28px, 6vw, 90px)',
      alignItems: 'center'
    },
    className: "df-contact-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    index: "04"
  }, "Contact"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-hero)',
      fontWeight: 900,
      margin: 'var(--space-5) 0 var(--space-6)',
      maxWidth: '12ch'
    }
  }, "Give me something to ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      fontWeight: 500,
      color: 'var(--orange)'
    }
  }, "care"), " about."), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '42ch',
      fontSize: 'var(--text-subhead)',
      color: 'var(--text-secondary)',
      margin: '0 0 var(--space-6)'
    }
  }, "Collaborations, talks, or a hard problem with a human at the center of it \u2014 I'd like to hear about it."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-3)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    href: "mailto:danfajardolm@gmail.com"
  }, "danfajardolm@gmail.com"), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    href: "https://linkedin.com/in/daniela-fajardo-londono",
    target: "_blank",
    rel: "noopener"
  }, "LinkedIn \u2197"), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    href: "https://github.com/danielafajardol",
    target: "_blank",
    rel: "noopener"
  }, "GitHub \u2197"))), /*#__PURE__*/React.createElement("div", {
    style: {
      justifySelf: 'center'
    }
  }, /*#__PURE__*/React.createElement(WavyFrame, {
    tone: "var(--pink-soft)",
    stroke: "var(--pink)",
    width: 230,
    height: 290,
    rotate: 4,
    caption: "fig. 07 \u2014 studio"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-9)',
      paddingBottom: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(SectionDivider, {
    node: false
  }), /*#__PURE__*/React.createElement("footer", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 'var(--space-4)',
      paddingTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: '1.2rem',
      letterSpacing: '-0.02em'
    }
  }, "Daniela\xA0Fajardo\xA0Londo\xF1o", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--orange)'
    }
  }, ".")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-micro)',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Math, made to care \xB7 \xA9 2026")))));
}
Object.assign(window, {
  DFContact: Contact
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Hero.jsx
try { (() => {
/* Hero — the thesis line, in large Bodoni, with a plotted orange ring and a
   couple of breathing frames scattered to the side. */
function Hero() {
  const DS = window.DanielaFajardoDesignSystem_305341;
  const {
    Button,
    WavyFrame,
    Tag
  } = DS;
  const tags = [['Applied ML', 'purple'], ['Human rhythms', 'green'], ['0-to-1 products', 'orange'], ["Women's health", 'pink'], ['Research', 'yellow']];
  return /*#__PURE__*/React.createElement("header", {
    id: "top",
    style: {
      position: 'relative',
      overflow: 'clip'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      right: '5%',
      top: '14%',
      width: 'clamp(240px, 30vw, 460px)',
      aspectRatio: '1',
      border: '1.5px solid var(--orange)',
      borderRadius: '50%',
      opacity: 0.85,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      right: 'calc(5% + 36px)',
      top: 'calc(14% + 36px)',
      width: 'clamp(160px, 20vw, 320px)',
      aspectRatio: '1',
      background: 'var(--orange-soft)',
      borderRadius: '50%',
      opacity: 0.55,
      pointerEvents: 'none',
      filter: 'blur(2px)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: 'clamp(3rem, 8vw, 7rem) var(--page-gutter) clamp(2.5rem, 6vw, 5rem)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "df-eyebrow",
    style: {
      marginBottom: 'var(--space-5)'
    }
  }, "Daniela Fajardo Londo\xF1o \xB7 San Francisco, CA"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(2.7rem, 6.4vw, 6rem)',
      fontWeight: 900,
      margin: '0 0 var(--space-6)',
      maxWidth: '20ch'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 800,
      letterSpacing: 'var(--tracking-tight)'
    }
  }, "Humans are rhythmic systems."), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "I build algorithms that", ' ', /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      fontWeight: 500,
      color: 'var(--green)'
    }
  }, "listen"), ' ', "and products that", ' ', /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      fontWeight: 500,
      color: 'var(--orange)'
    }
  }, "move"), ' ', "with them."), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '52ch',
      fontSize: 'var(--text-subhead)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'var(--text-secondary)',
      margin: '0 0 var(--space-3)'
    }
  }, "What happens when you give a mathematician something to care about."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-caption)',
      letterSpacing: '0.04em',
      color: 'var(--text-muted)',
      margin: '0 0 var(--space-6)'
    }
  }, "CS + Applied Math, UC Berkeley \xB7 McKinsey AI & Automation \xB7 Founder"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-3)',
      alignItems: 'center',
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    href: "#work"
  }, "See my work"), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    href: "#care"
  }, "What I care about \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-2)'
    }
  }, tags.map(([t, tone]) => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    tone: tone,
    dot: true
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'clamp(18px, 3vw, 44px)',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      marginTop: 'clamp(-30px, -1vw, 0px)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(WavyFrame, {
    tone: "var(--purple-soft)",
    stroke: "var(--purple)",
    width: 180,
    height: 230,
    rotate: -5,
    caption: "fig. 01 \u2014 first principles"
  }), /*#__PURE__*/React.createElement(WavyFrame, {
    tone: "var(--pink-soft)",
    stroke: "var(--pink)",
    width: 140,
    height: 140,
    rotate: 4,
    caption: "fig. 02 \u2014 the body"
  }))));
}
Object.assign(window, {
  DFHero: Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Nav.jsx
try { (() => {
/* Site navigation — wordmark left, anchor links + contact button right. */
function Nav() {
  const {
    Button
  } = window.DanielaFajardoDesignSystem_305341;
  const links = [['What I care about', '#care'], ['Now', '#now'], ['Projects', '#work'], ['Experience', '#path']];
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px var(--page-gutter)',
      background: 'rgba(255,255,255,0.84)',
      backdropFilter: 'saturate(140%) blur(8px)',
      borderBottom: '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: '1.2rem',
      letterSpacing: '-0.02em',
      color: 'var(--ink)',
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: '0.12em',
      whiteSpace: 'nowrap'
    }
  }, "Daniela\xA0Fajardo\xA0Londo\xF1o", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--orange)'
    }
  }, ".")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      display: 'flex',
      gap: 'var(--space-5)',
      listStyle: 'none',
      margin: 0,
      padding: 0
    }
  }, links.map(([label, href]) => /*#__PURE__*/React.createElement("li", {
    key: href
  }, /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-caption)',
      fontWeight: 600,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)'
    }
  }, label)))), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "sm",
    href: "#contact"
  }, "Get in touch")));
}
Object.assign(window, {
  DFNav: Nav
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/NowNext.jsx
try { (() => {
/* Section 2 — What I am doing now (two cards), and Section 3 — Coming soon
   (one quiet italic line). */
function NowNext() {
  const DS = window.DanielaFajardoDesignSystem_305341;
  const {
    Eyebrow,
    Card,
    Button,
    Tag,
    SectionDivider
  } = DS;
  return /*#__PURE__*/React.createElement("section", {
    id: "now",
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: 'var(--space-section) var(--page-gutter) 0'
    }
  }, /*#__PURE__*/React.createElement(SectionDivider, {
    label: "Currently",
    index: "\xA702"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: 'var(--space-6) 0 var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    index: "02"
  }, "What I'm doing now")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: 'clamp(20px, 3vw, 40px)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    accent: "var(--pink)",
    accentBar: true,
    style: {
      padding: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "pink",
    dot: true
  }, "Women's health"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-title)',
      fontWeight: 700,
      margin: 'var(--space-4) 0 var(--space-4)'
    }
  }, "The House of Maria"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)',
      margin: '0 0 var(--space-5)',
      maxWidth: '46ch'
    }
  }, "The community I'm building around women's health done right \u2014 education, products, and a space where women's bodies are understood on their own terms, not as a deviation from a male default."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    href: "https://thehouseofmaria.com",
    target: "_blank",
    rel: "noopener"
  }, "thehouseofmaria.com \u2197"), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    href: "https://instagram.com/thehouseofmaria_",
    target: "_blank",
    rel: "noopener"
  }, "@thehouseofmaria_ \u2197"))), /*#__PURE__*/React.createElement(Card, {
    accent: "var(--yellow)",
    accentBar: true,
    style: {
      padding: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "yellow",
    dot: true
  }, "Research"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-title)',
      fontWeight: 700,
      margin: 'var(--space-4) 0 var(--space-4)'
    }
  }, "Independent research"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)',
      margin: '0 0 var(--space-4)',
      maxWidth: '46ch'
    }
  }, "I spent months mapping the gap between what wearables measure and what is actually happening in women's bodies \u2014 temperature patterns, HRV, and wearable signal behavior across the cycle, specifically in high-demand professional women. The tools say one thing. The body says another. I wanted to understand why."), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    href: "https://heelsoff.substack.com",
    target: "_blank",
    rel: "noopener"
  }, "I write about this at Heels Off \u2197"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-9)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      border: '1.5px solid var(--orange)',
      flex: '0 0 auto'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontWeight: 500,
      fontSize: 'clamp(1.6rem, 3vw, 2.6rem)',
      color: 'var(--ink)',
      margin: 0,
      maxWidth: '24ch'
    }
  }, "More research on algorithms to map human rhythms. Building from there.")));
}
Object.assign(window, {
  DFNowNext: NowNext
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/NowNext.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Portfolio.jsx
try { (() => {
/* Portfolio — composes every screen into the full editorial site. */
function Portfolio() {
  const {
    DFNav,
    DFHero,
    DFCareAbout,
    DFNowNext,
    DFProjects,
    DFTimeline,
    DFContact
  } = window;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DFNav, null), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(DFHero, null), /*#__PURE__*/React.createElement(DFCareAbout, null), /*#__PURE__*/React.createElement(DFNowNext, null), /*#__PURE__*/React.createElement(DFProjects, null), /*#__PURE__*/React.createElement(DFTimeline, null), /*#__PURE__*/React.createElement(DFContact, null)));
}
Object.assign(window, {
  DFPortfolio: Portfolio
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Portfolio.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Projects.jsx
try { (() => {
const PROJECTS = [{
  n: '01',
  title: 'Diffusion models from scratch',
  c: 'purple',
  body: 'Built the full pipeline from the mathematics — forward noising, a UNet, classifier-free guidance, iterative denoising. Then went further: inpainting, SDEdit-style translation, visual anagrams that flip at 180°, and frequency-separated hybrids. You understand something differently when you build the equation, not the import statement.',
  tags: ['PyTorch', 'UNet', 'Generative AI', 'Diffusion'],
  link: 'https://danielafajardol.github.io/project5.html',
  f: {
    w: 240,
    h: 150,
    r: -4
  }
}, {
  n: '02',
  title: 'Neural radiance fields from scratch',
  c: 'blue',
  body: '3D scene reconstruction from 2D images — ray casting, sinusoidal positional encoding, volume rendering, novel view synthesis. Started with a 2D coordinate-to-RGB task, then built the full 3D system and ran ablations on depth, width, and encoding frequency. PSNR 23+ at 5,000 iterations.',
  tags: ['PyTorch', 'NeRF', '3D reconstruction', 'Positional encoding'],
  link: 'https://danielafajardol.github.io/finalprojects.html',
  f: {
    w: 210,
    h: 170,
    r: 5
  }
}, {
  n: '03',
  title: 'Image geolocation — CLIP + KNN',
  c: 'green',
  body: 'Predicted latitude and longitude from images using K-nearest-neighbors over OpenAI CLIP embeddings — pretrained foundation-model features as the representation space instead of training from scratch. A study in knowing when not to reinvent the wheel.',
  tags: ['CLIP', 'KNN', 'Foundation models', 'Computer vision'],
  link: null,
  f: {
    w: 200,
    h: 140,
    r: -3
  }
}, {
  n: '04',
  title: 'DonorLoop — PM & AI lead',
  c: 'orange',
  body: 'Built an AI pipeline that parses unstructured IRS 990 filings into structured financial datasets, normalizing noisy inputs to surface comparable nonprofit metrics. Validated through 10+ structured interviews with NGO stakeholders. Led the product from research question to shipped application.',
  tags: ['Vue.js', 'AI pipelines', 'Product', '0-to-1'],
  link: 'https://github.com/maria-romano/CS160-Group-V-Project',
  f: {
    w: 230,
    h: 160,
    r: 3
  }
}, {
  n: '05',
  title: 'Facial keypoints — CNN to U-Net',
  c: 'pink',
  body: 'Trained CNNs from scratch and fine-tuned ResNet18 for facial-landmark regression, from single-point nose detection to 68 keypoints. Converted coordinates to Gaussian heatmaps for pixelwise supervision. Validated on in-the-wild faces.',
  tags: ['CNN', 'ResNet18', 'U-Net', 'Regression'],
  link: null,
  f: {
    w: 190,
    h: 175,
    r: -5
  }
}, {
  n: '06',
  title: 'Image mosaicing & auto-stitching',
  c: 'yellow',
  body: 'Built panoramic stitching from scratch — Harris corner detection, Adaptive Non-Maximal Suppression, Lowe\u2019s-ratio feature matching, and RANSAC-based homography estimation. No library wrappers. Every step written from the algorithm.',
  tags: ['Harris corners', 'RANSAC', 'Homography', 'Computer vision'],
  link: null,
  f: {
    w: 215,
    h: 145,
    r: 4
  }
}];

/* Section 4 — Projects. Six cards, each in its domain color, with a scattered
   breathing frame. */
function Projects() {
  const DS = window.DanielaFajardoDesignSystem_305341;
  const {
    Eyebrow,
    Card,
    Tag,
    WavyFrame,
    Button,
    SectionDivider
  } = DS;
  return /*#__PURE__*/React.createElement("section", {
    id: "work",
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: 'var(--space-section) var(--page-gutter) 0'
    }
  }, /*#__PURE__*/React.createElement(SectionDivider, {
    label: "Selected work",
    index: "\xA703"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-5)',
      flexWrap: 'wrap',
      margin: 'var(--space-6) 0 var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    index: "03"
  }, "Projects"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-display)',
      fontWeight: 900
    }
  }, "Built from the equation up.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
      gap: 'clamp(20px, 3vw, 40px)'
    }
  }, PROJECTS.map(p => {
    const color = `var(--${p.c})`;
    const inner = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        padding: 'var(--space-3) 0 var(--space-6)'
      }
    }, /*#__PURE__*/React.createElement(WavyFrame, {
      tone: `var(--${p.c}-soft)`,
      stroke: color,
      width: p.f.w,
      height: p.f.h,
      rotate: p.f.r,
      speed: 0.8
    })), /*#__PURE__*/React.createElement(Eyebrow, {
      index: p.n,
      tick: false,
      color: p.c === 'yellow' ? 'var(--yellow-ink)' : color
    }, "fig. ", p.n), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 'var(--text-heading)',
        fontWeight: 700,
        margin: 'var(--space-3) 0 var(--space-4)'
      }
    }, p.title), /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'var(--text-secondary)',
        margin: '0 0 var(--space-5)',
        fontSize: 'var(--text-small)',
        lineHeight: 'var(--leading-normal)'
      }
    }, p.body), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 'var(--space-2)',
        flexWrap: 'wrap',
        marginBottom: p.link ? 'var(--space-4)' : 0
      }
    }, p.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
      key: t,
      tone: p.c
    }, t))), p.link && /*#__PURE__*/React.createElement(Button, {
      variant: "link"
    }, "View project \u2197"));
    return p.link ? /*#__PURE__*/React.createElement(Card, {
      key: p.n,
      interactive: true,
      accent: color,
      accentBar: true,
      href: p.link,
      target: "_blank",
      rel: "noopener",
      style: {
        padding: 'var(--space-6) var(--space-6) var(--space-7)'
      }
    }, inner) : /*#__PURE__*/React.createElement(Card, {
      key: p.n,
      accent: color,
      accentBar: true,
      style: {
        padding: 'var(--space-6) var(--space-6) var(--space-7)'
      }
    }, inner);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    href: "https://danielafajardol.github.io",
    target: "_blank",
    rel: "noopener"
  }, "See full CS 180 portfolio \u2197")));
}
Object.assign(window, {
  DFProjects: Projects
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Projects.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Timeline.jsx
try { (() => {
const STOPS = [{
  range: 'Sep 2025 — Present',
  org: 'McKinsey & Company',
  place: 'San Francisco, CA',
  role: 'Business Analyst, AI & Automation',
  c: 'orange',
  body: 'Built and deployed AI agents converting manual document-processing workflows into automated decision logic, cutting processing time 70%. Evaluated 45+ automation initiatives and built a prioritization framework shaping a roadmap of $50M+ in operational value. Developed an AI benchmarking platform for strategy teams; presents technical roadmaps directly to senior executives.'
}, {
  range: 'May 2024 — Aug 2024',
  org: 'Addepar',
  place: 'New York, NY',
  role: 'Research Product Management Intern',
  c: 'orange',
  body: 'Analyzed portfolio composition across 85+ investment firms and authored a comparative study of LATAM vs. US allocation patterns. Translated research into a 0-to-1 peer-benchmarking product using nearest-neighbors over portfolio features — from requirements through user testing to a formal company initiative.'
}, {
  range: 'Jan 2023 — May 2024',
  org: 'Berkeley Blockchain Xcelerator',
  place: 'Fellow',
  role: 'Investment Fellow',
  c: 'purple',
  body: 'Evaluated 40+ Seed and Series A startup investments to select semester cohorts. Curated a portfolio of 15 startups that have collectively raised over $40M since enrollment.'
}, {
  range: 'May 2023 — Aug 2023',
  org: 'Tesla',
  place: 'Palo Alto, CA',
  role: 'Power Distribution — Global Supply Chain Data Analyst',
  c: 'green',
  body: 'Analyzed component spend across 25+ suppliers and built Tableau models supporting negotiations that reduced low-voltage component costs by 10%. Developed demand-forecasting analysis for cross-functional resource allocation.'
}, {
  range: 'Aug 2021 — May 2025',
  org: 'UC Berkeley',
  place: 'B.A. · GPA 3.73',
  role: 'Computer Science & Applied Mathematics',
  c: 'blue',
  body: 'Coursework: Machine Learning, Computer Vision, Graduate Combinatorial Algorithms, Numerical Analysis, Linear Algebra, Abstract Algebra, Complex Analysis, Probability, Efficient Algorithms. Awards: AP Scholar with Honors; Top 25%, International Pascal Mathematics Contest.'
}];

/* Section 5 — Experience. Annotated axis, newest to oldest, colored nodes. */
function Timeline() {
  const DS = window.DanielaFajardoDesignSystem_305341;
  const {
    Eyebrow,
    Button,
    SectionDivider
  } = DS;
  return /*#__PURE__*/React.createElement("section", {
    id: "path",
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: 'var(--space-section) var(--page-gutter) 0'
    }
  }, /*#__PURE__*/React.createElement(SectionDivider, {
    label: "Trajectory",
    index: "\xA704"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-5)',
      flexWrap: 'wrap',
      margin: 'var(--space-6) 0 var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    index: "04"
  }, "Experience"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-display)',
      fontWeight: 900
    }
  }, "Where I've been.")), /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      borderTop: '1px solid var(--hairline)'
    }
  }, STOPS.map(s => /*#__PURE__*/React.createElement("li", {
    key: s.org + s.range,
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(140px, 0.6fr) 28px minmax(0, 3fr)',
      gap: 'var(--space-5)',
      alignItems: 'start',
      padding: 'var(--space-6) 0',
      borderBottom: '1px solid var(--hairline)'
    },
    className: "df-stop"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-caption)',
      letterSpacing: '0.03em',
      color: 'var(--ink-soft)',
      paddingTop: '0.35em'
    }
  }, s.range), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      justifySelf: 'center',
      paddingTop: '0.45em'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: 11,
      height: 11,
      borderRadius: '50%',
      background: `var(--${s.c})`
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'baseline',
      gap: 'var(--space-3)',
      marginBottom: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-heading)',
      fontWeight: 700
    }
  }, s.org), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 'var(--text-small)'
    }
  }, s.place)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 'var(--text-small)',
      color: `var(--${s.c === 'yellow' ? 'yellow-ink' : s.c})`,
      margin: '0 0 var(--space-3)'
    }
  }, s.role), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)',
      margin: 0,
      fontSize: 'var(--text-small)',
      lineHeight: 'var(--leading-normal)',
      maxWidth: '64ch'
    }
  }, s.body))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    href: "#",
    target: "_blank",
    rel: "noopener"
  }, "Download r\xE9sum\xE9")));
}
Object.assign(window, {
  DFTimeline: Timeline
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Timeline.jsx", error: String((e && e.message) || e) }); }

__ds_ns.DotField = __ds_scope.DotField;

__ds_ns.SectionDivider = __ds_scope.SectionDivider;

__ds_ns.WavyFrame = __ds_scope.WavyFrame;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Tag = __ds_scope.Tag;

})();
