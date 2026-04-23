/* ───────────────────────────────────────────────────────────────
   Al Alyaa · Brand Book v2 · Part III — Visual Language
   17 Divider III · 18 Motif · 19 Voice · 20 Bilingual Lockup
   ─────────────────────────────────────────────────────────────── */

/* ── 17 · Part III · Divider ────────────────────────────────── */
const P17_DividerIII = () => (
  <section className="pl pl--obsidian" data-screen-label="16 Part III Divider">
    <div style={{ position: "absolute", top: 56, left: 64, right: 64,
                  display: "flex", justifyContent: "space-between",
                  color: "var(--obsidian-800)" }}>
      <div className="mark" style={{ opacity: 0.7 }}>Al Alyaa · Developments</div>
      <div className="mark" style={{ opacity: 0.7 }}>Part III</div>
    </div>
    <div style={{ position: "absolute", inset: 0, display: "flex",
                  flexDirection: "column", alignItems: "center",
                  justifyContent: "center" }}>
      <div className="divider-num" style={{ fontSize: 720 }}>03</div>
      <div style={{ height: 1, width: 220, background: "var(--bronze-500)",
                    opacity: 0.7, margin: "48px 0 36px" }}/>
      <div style={{ fontFamily: "var(--f-sans)", fontWeight: 300,
                    fontSize: 48, letterSpacing: "0.36em",
                    textIndent: "0.36em", textTransform: "uppercase",
                    color: "var(--obsidian-900)" }}>
        Visual Language
      </div>
      <div className="ar" style={{ fontSize: 22, marginTop: 20,
                                    letterSpacing: "0.05em",
                                    color: "var(--bronze-600)", opacity: 0.9 }}>
        اللغة البصرية
      </div>
    </div>
    <div style={{ position: "absolute", bottom: 56, left: 64, right: 64,
                  display: "flex", justifyContent: "space-between",
                  color: "var(--obsidian-800)" }}>
      <div className="mark" style={{ opacity: 0.7 }}>
        Motif · Voice · Bilingual Lockup
      </div>
      <div className="pgn" style={{ opacity: 0.7 }}>16 / 25</div>
    </div>
  </section>
);

/* ── 18 · The Motif ──────────────────────────────────────────── */
const MinaretTile = ({ size = 120, stroke = "var(--bronze-600)", bg = "transparent" }) => (
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

/* ── 18 · The Motif ──────────────────────────────────────────
   Motif is selectable via Tweaks. All options live in Motifs.jsx.
*/
const P18_Motif = () => {
  const [key, setKey] = React.useState(() =>
    (window.__AL_TWEAKS__ && window.__AL_TWEAKS__.motif) || "muqarnas");

  // Subscribe to tweaks updates (panel dispatches window event)
  React.useEffect(() => {
    const fn = (e) => { if (e.detail && e.detail.motif) setKey(e.detail.motif); };
    window.addEventListener("al-tweaks-change", fn);
    return () => window.removeEventListener("al-tweaks-change", fn);
  }, []);

  const M = Motifs[key] || Motifs.muqarnas;
  const Tile = M.tile;

  return (
    <section className="pl pl--sand" data-screen-label="17 Motif">
      <RunHead part="III" section="Visual Language"/>
      <RunFoot page={17} total={25} chapter="The Motif" outer="right"/>

      <div style={{ position: "absolute", top: 160, left: 64, right: 720 }}>
        <PageTitle number="3.1" section="Visual Language"
                    title="The Motif" titleAr={M.nameAr}/>
        <div className="mark" style={{ marginTop: 32, fontSize: 10,
                                        color: "var(--bronze-600)",
                                        letterSpacing: "0.32em" }}>
          {M.name}
        </div>
        <div style={{ fontFamily: "var(--f-sans)", fontWeight: 400,
                      fontSize: 22, marginTop: 14,
                      color: "var(--obsidian-900)",
                      maxWidth: 440 }}>
          {M.principle}
        </div>
        <div className="body-copy" style={{ marginTop: 28, maxWidth: 440 }}>
          {M.rationale}
        </div>

        {/* Single hero tile at scale */}
        <div style={{ marginTop: 56, display: "flex",
                       alignItems: "center", gap: 40 }}>
          <div style={{ width: 140, height: 140,
                         background: "var(--sand-50)",
                         border: "1px solid var(--line)",
                         display: "flex", alignItems: "center",
                         justifyContent: "center" }}>
            <Tile size={112} stroke="var(--bronze-600)"/>
          </div>
          <div>
            <div className="mark" style={{ fontSize: 9, opacity: 0.55 }}>Unit tile</div>
            <div className="mark-num" style={{ fontSize: 11, marginTop: 4,
                                                color: "var(--obsidian-700)" }}>
              120 × 120 · 1.5u stroke
            </div>
          </div>
        </div>
      </div>

      {/* Motif field — 5×5 repeat */}
      <div style={{ position: "absolute", top: 200, right: 64,
                    width: 640, height: 640,
                    background: "var(--sand-50)",
                    border: "1px solid var(--line)",
                    display: "grid",
                    gridTemplateColumns: "repeat(5, 1fr)",
                    gridTemplateRows: "repeat(5, 1fr)" }}>
        {Array.from({ length: 25 }).map((_, i) => {
          const row = Math.floor(i / 5);
          const col = i % 5;
          const diag = row + col;
          return (
            <div key={`${key}-${i}`}
                 data-motif-tile=""
                 data-i={diag}
                 style={{ display: "flex", alignItems: "center",
                          justifyContent: "center",
                          borderRight: (i % 5 !== 4) ? "1px solid var(--line-soft)" : "none",
                          borderBottom: (i < 20) ? "1px solid var(--line-soft)" : "none" }}>
              <Tile size={80} stroke={i === 12 ? "var(--bronze-600)" : "var(--obsidian-600)"}/>
            </div>
          );
        })}
      </div>

      <div style={{ position: "absolute", bottom: 140, right: 64,
                    width: 640, display: "flex",
                    justifyContent: "space-between" }}>
        <div className="mark" style={{ fontSize: 10, opacity: 0.6 }}>
          Repeating field · 5 × 5
        </div>
        <div className="mark" style={{ fontSize: 10, opacity: 0.6 }}>
          Motif: {M.name}
        </div>
      </div>
    </section>
  );
};

/* ── 19 · Voice ──────────────────────────────────────────────── */
const P19_Voice = () => {
  const rules = [
    ["Considered, not casual",
     "We measure our words as we measure our capital.",
     "A long horizon guided by measured decisions.",
     "We're super excited to announce our latest project!"],
    ["Certain, not loud",
     "Confidence speaks softly. We do not shout.",
     "A standard, precisely applied.",
     "Revolutionary! World-class! Best-in-class!"],
    ["Bilingual, not translated",
     "Arabic and English each carry their own weight.",
     "العَليـاء — the heights.",
     "Heights (in Arabic: al-alyaa)"],
    ["Precise, not vague",
     "We commit to specifics — numbers, dates, names.",
     "Ambition, engineered.",
     "Taking our time to find the right fit."],
  ];
  return (
    <section className="pl pl--sand" data-screen-label="18 Voice">
      <RunHead part="III" section="Visual Language"/>
      <RunFoot page={18} total={25} chapter="Voice" outer="right"/>

      <div style={{ position: "absolute", top: 160, left: 64, right: 64 }}>
        <PageTitle number="3.2" section="Visual Language"
                    title="Voice" titleAr="الصَـــوت"/>
      </div>

      <div style={{ position: "absolute", top: 400, left: 64, right: 64,
                    bottom: 140 }}>
        {rules.map(([title, sub, yes, no], i) => (
          <div key={i} style={{ display: "grid",
                                 gridTemplateColumns: "320px 1fr 1fr 1fr",
                                 gap: 36,
                                 padding: "28px 0",
                                 borderTop: i === 0 ? "1px solid var(--ink)" : "none",
                                 borderBottom: "1px solid var(--line)",
                                 alignItems: "baseline" }}>
            <div>
              <div style={{ fontFamily: "var(--f-sans)", fontWeight: 400,
                            fontSize: 22, letterSpacing: "-0.005em" }}>
                {title}
              </div>
            </div>
            <div className="body-copy" style={{ fontSize: 13 }}>{sub}</div>
            <div className="serif-italic" style={{ fontSize: 17,
                                                     color: "var(--obsidian-800)" }}>
              <span style={{ color: "var(--bronze-600)", marginRight: 10,
                              fontFamily: "var(--f-sans)", fontStyle: "normal" }}>✓</span>
              "{yes}"
            </div>
            <div className="serif-italic" style={{ fontSize: 17,
                                                     color: "var(--obsidian-600)",
                                                     opacity: 0.7 }}>
              <span style={{ color: "var(--obsidian-700)", opacity: 0.55, marginRight: 10,
                              fontFamily: "var(--f-sans)", fontStyle: "normal" }}>✗</span>
              "{no}"
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

/* ── 20 · Bilingual Lockup ──────────────────────────────────── */
const P20_Bilingual = () => (
  <section className="pl pl--sand" data-screen-label="19 Bilingual">
    <RunHead part="III" section="Visual Language"/>
    <RunFoot page={19} total={25} chapter="Bilingual Lockup" outer="right"/>

    <div style={{ position: "absolute", top: 160, left: 64, right: 64 }}>
      <PageTitle number="3.3" section="Visual Language"
                  title="Bilingual Lockup" titleAr="التَلازم الثـنائي"/>
    </div>

    <div style={{ position: "absolute", top: 400, left: 64, right: 64,
                  bottom: 140,
                  display: "grid", gridTemplateColumns: "1fr 1fr",
                  gap: 48 }}>
      {/* Horizontal lockup */}
      <div style={{ border: "1px solid var(--line)",
                     background: "var(--sand-50)",
                     padding: "60px 40px",
                     display: "flex", flexDirection: "column" }}>
        <div className="mark" style={{ fontSize: 10, opacity: 0.6,
                                         marginBottom: 40 }}>
          Horizontal · Default
        </div>
        <div style={{ flex: 1, display: "flex", alignItems: "center",
                       justifyContent: "center", gap: 40 }}>
          <div className="ar-display" style={{ fontSize: 108,
                                                color: "var(--ink)" }}>
            العَليـــاء
          </div>
          <div style={{ height: 120, width: 1, background: "var(--bronze-600)" }}/>
          <div>
            <div style={{ fontFamily: "var(--f-sans)", fontWeight: 300,
                          fontSize: 38, letterSpacing: "0.32em",
                          textIndent: "0.32em", textTransform: "uppercase" }}>
              Al Alyaa
            </div>
            <div style={{ fontFamily: "var(--f-sans)", fontWeight: 400,
                          fontSize: 10, letterSpacing: "0.48em",
                          textIndent: "0.48em", textTransform: "uppercase",
                          color: "var(--bronze-600)", marginTop: 8 }}>
              Developments
            </div>
          </div>
        </div>
        <div className="mark-2" style={{ fontSize: 10, opacity: 0.6,
                                           marginTop: 28, textAlign: "center" }}>
          Use on wide formats · letterhead · signage horizontals
        </div>
      </div>

      {/* Stacked lockup */}
      <div style={{ border: "1px solid var(--line)",
                     background: "var(--sand-50)",
                     padding: "60px 40px",
                     display: "flex", flexDirection: "column" }}>
        <div className="mark" style={{ fontSize: 10, opacity: 0.6,
                                         marginBottom: 40 }}>
          Stacked · Compact
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column",
                       alignItems: "center", justifyContent: "center" }}>
          <div className="ar-display" style={{ fontSize: 108,
                                                color: "var(--ink)" }}>
            العَليـــاء
          </div>
          <div style={{ height: 1, width: 60, background: "var(--bronze-600)",
                         margin: "20px 0 16px" }}/>
          <div style={{ fontFamily: "var(--f-sans)", fontWeight: 300,
                        fontSize: 32, letterSpacing: "0.32em",
                        textIndent: "0.32em", textTransform: "uppercase" }}>
            Al Alyaa
          </div>
          <div style={{ fontFamily: "var(--f-sans)", fontWeight: 400,
                        fontSize: 10, letterSpacing: "0.48em",
                        textIndent: "0.48em", textTransform: "uppercase",
                        color: "var(--bronze-600)", marginTop: 10 }}>
            Developments
          </div>
        </div>
        <div className="mark-2" style={{ fontSize: 10, opacity: 0.6,
                                           marginTop: 28, textAlign: "center" }}>
          Use on square formats · social · business cards · seals
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, { P17_DividerIII, P18_Motif, P19_Voice, P20_Bilingual });
