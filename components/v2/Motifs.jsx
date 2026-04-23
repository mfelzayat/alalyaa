/* ───────────────────────────────────────────────────────────────
   Al Alyaa · Brand Book v2 · Motif Options
   5 abstract graphic systems for the brand's visual fingerprint.
   Each is a 120×120 unit tile, drawn at 1.5u stroke. The current
   option is selectable via Tweaks; Motifs[key].tile renders it.
   ─────────────────────────────────────────────────────────────── */

/* ── A · Muqarnas Node ────────────────────────────────────────
   A single geometric cell from Islamic stalactite vaulting,
   abstracted to line. Repeating creates a continuous honeycomb
   lattice — the architecture of memory, tiled.
*/
const MotifA_Muqarnas = ({ size = 120, stroke = "var(--bronze-600)",
                            bg = "transparent" }) => (
  <svg viewBox="0 0 120 120" width={size} height={size} style={{ display: "block" }}>
    <rect x="0" y="0" width="120" height="120" fill={bg}/>
    <g stroke={stroke} strokeWidth="1.5" fill="none" strokeLinecap="square">
      {/* Outer hex */}
      <polygon points="60,14 102,38 102,82 60,106 18,82 18,38"/>
      {/* Inner star (6-pointed, stalactite cell) */}
      <polygon points="60,32 76,46 94,46 82,62 94,78 76,78 60,92 44,78 26,78 38,62 26,46 44,46"/>
      {/* Spokes */}
      <line x1="60" y1="14" x2="60" y2="32"/>
      <line x1="60" y1="106" x2="60" y2="92"/>
      <line x1="102" y1="38" x2="82" y2="62"/>
      <line x1="18" y1="38" x2="38" y2="62"/>
      <line x1="102" y1="82" x2="82" y2="62"/>
      <line x1="18" y1="82" x2="38" y2="62"/>
    </g>
  </svg>
);

/* ── B · Arch Set ─────────────────────────────────────────────
   Three concentric arches — a distilled colonnade. When tiled,
   reads as an endless loggia. References the pointed arch of
   Mamluk / Ayyubid architecture without depicting any specific
   building.
*/
const MotifB_ArchSet = ({ size = 120, stroke = "var(--bronze-600)",
                           bg = "transparent" }) => (
  <svg viewBox="0 0 120 120" width={size} height={size} style={{ display: "block" }}>
    <rect x="0" y="0" width="120" height="120" fill={bg}/>
    <g stroke={stroke} strokeWidth="1.5" fill="none">
      {/* Baseline */}
      <line x1="12" y1="102" x2="108" y2="102"/>
      {/* Outer pointed arch */}
      <path d="M 24 102 L 24 70 Q 24 30 60 20 Q 96 30 96 70 L 96 102"/>
      {/* Middle arch */}
      <path d="M 40 102 L 40 72 Q 40 44 60 36 Q 80 44 80 72 L 80 102"/>
      {/* Inner */}
      <path d="M 54 102 L 54 78 Q 54 64 60 60 Q 66 64 66 78 L 66 102"/>
      {/* Centerline */}
      <line x1="60" y1="20" x2="60" y2="102" strokeDasharray="1.5 3"/>
    </g>
  </svg>
);

/* ── C · Alif Stroke ──────────────────────────────────────────
   The Arabic letter Alif (ا) — the first letter of العَليـاء,
   and of the alphabet itself. Reduced to a single vertical
   stroke with a diacritic tick. Tiled, it reads as a field of
   verticals — typographic architecture.
*/
const MotifC_Alif = ({ size = 120, stroke = "var(--bronze-600)",
                        bg = "transparent" }) => (
  <svg viewBox="0 0 120 120" width={size} height={size} style={{ display: "block" }}>
    <rect x="0" y="0" width="120" height="120" fill={bg}/>
    <g stroke={stroke} strokeWidth="2" fill="none" strokeLinecap="square">
      {/* Alif shaft */}
      <line x1="60" y1="22" x2="60" y2="96"/>
      {/* Serif / foot */}
      <line x1="52" y1="96" x2="68" y2="96"/>
      {/* Fatha diacritic above */}
      <line x1="52" y1="12" x2="66" y2="16" strokeWidth="1.5"/>
      {/* Baseline guide */}
      <line x1="12" y1="106" x2="108" y2="106" strokeWidth="1" strokeDasharray="1 2" opacity="0.6"/>
    </g>
  </svg>
);

/* ── D · Lattice ──────────────────────────────────────────────
   Mashrabiya — the turned-wood screen that filters light.
   Diamond lattice on a square, shot through with a central axis.
   Tiled, it produces the filigree of a true screen: privacy,
   light, pattern.
*/
const MotifD_Lattice = ({ size = 120, stroke = "var(--bronze-600)",
                           bg = "transparent" }) => (
  <svg viewBox="0 0 120 120" width={size} height={size} style={{ display: "block" }}>
    <rect x="0" y="0" width="120" height="120" fill={bg}/>
    <g stroke={stroke} strokeWidth="1.25" fill="none">
      {/* Frame */}
      <rect x="18" y="18" width="84" height="84"/>
      {/* Diamond */}
      <polygon points="60,18 102,60 60,102 18,60"/>
      {/* Inner diamond */}
      <polygon points="60,38 82,60 60,82 38,60"/>
      {/* Axes */}
      <line x1="18" y1="18" x2="102" y2="102"/>
      <line x1="102" y1="18" x2="18" y2="102"/>
    </g>
  </svg>
);

/* ── E · Horizon Rule ────────────────────────────────────────
   The most reductive: one long horizontal rule with a short
   vertical tick rising from its center — a datum and an
   aspiration. "A higher standard, precisely applied" as pure
   geometry. Tiled, it becomes a topography.
*/
const MotifE_Horizon = ({ size = 120, stroke = "var(--bronze-600)",
                           bg = "transparent" }) => (
  <svg viewBox="0 0 120 120" width={size} height={size} style={{ display: "block" }}>
    <rect x="0" y="0" width="120" height="120" fill={bg}/>
    <g stroke={stroke} strokeWidth="1.5" fill="none" strokeLinecap="square">
      {/* Horizon */}
      <line x1="8" y1="84" x2="112" y2="84"/>
      {/* Vertical stroke rising from center */}
      <line x1="60" y1="84" x2="60" y2="24"/>
      {/* Cap serif */}
      <line x1="54" y1="24" x2="66" y2="24" strokeWidth="2"/>
      {/* Ground ticks */}
      <line x1="20" y1="84" x2="20" y2="90"/>
      <line x1="40" y1="84" x2="40" y2="88"/>
      <line x1="80" y1="84" x2="80" y2="88"/>
      <line x1="100" y1="84" x2="100" y2="90"/>
    </g>
  </svg>
);

/* ── Original · Minaret (kept for comparison) ─────────────── */
const MotifZ_Minaret = ({ size = 120, stroke = "var(--bronze-600)",
                           bg = "transparent" }) => (
  <svg viewBox="0 0 120 120" width={size} height={size} style={{ display: "block" }}>
    <rect x="0" y="0" width="120" height="120" fill={bg}/>
    <g stroke={stroke} strokeWidth="1.5" fill="none">
      <line x1="60" y1="12" x2="60" y2="108"/>
      <path d="M48 36 Q60 24 72 36"/>
      <rect x="48" y="36" width="24" height="48"/>
      <line x1="48" y1="60" x2="72" y2="60"/>
      <line x1="60" y1="12" x2="54" y2="24"/>
      <line x1="60" y1="12" x2="66" y2="24"/>
      <line x1="30" y1="84" x2="90" y2="84"/>
      <line x1="30" y1="84" x2="30" y2="108"/>
      <line x1="90" y1="84" x2="90" y2="108"/>
    </g>
  </svg>
);

/* ── Motif registry ──────────────────────────────────────── */
const Motifs = {
  muqarnas: {
    tile: MotifA_Muqarnas,
    name: "Muqarnas Node",
    nameAr: "عَقدة المُقَرنَص",
    principle: "Geometric cell · 6-point star in hexagon",
    rationale: "The honeycomb vaulting of Islamic architecture, reduced to one cell. Tiles seamlessly — the lattice of memory."
  },
  arch: {
    tile: MotifB_ArchSet,
    name: "Arch Set",
    nameAr: "مَجمُوعَة الأَقوَاس",
    principle: "Three concentric pointed arches",
    rationale: "A distilled colonnade. Mamluk in reference, modern in execution. Repeats as an endless loggia."
  },
  alif: {
    tile: MotifC_Alif,
    name: "Alif Stroke",
    nameAr: "ضَربَة الأَلِف",
    principle: "Single vertical + diacritic",
    rationale: "The first letter of العَليـاء — the name made structural. A field of verticals; typographic architecture."
  },
  lattice: {
    tile: MotifD_Lattice,
    name: "Mashrabiya",
    nameAr: "مَشرَبيَّة",
    principle: "Diamond on square · four-fold axis",
    rationale: "The turned-wood screen that filters light. Privacy and pattern; the filigree of the Arab interior."
  },
  horizon: {
    tile: MotifE_Horizon,
    name: "Horizon Rule",
    nameAr: "قاعِدَة الأُفُق",
    principle: "One datum + one aspiration",
    rationale: "The most reductive: a baseline and a rising stroke. Ambition, engineered — as pure geometry."
  },
  minaret: {
    tile: MotifZ_Minaret,
    name: "Minaret (original)",
    nameAr: "المِئذَنَة",
    principle: "Iconographic — literal tower",
    rationale: "The first draft. Kept for comparison; too pictographic for a system."
  },
};

Object.assign(window, {
  Motifs,
  MotifA_Muqarnas, MotifB_ArchSet, MotifC_Alif,
  MotifD_Lattice, MotifE_Horizon, MotifZ_Minaret,
});
