/* ───────────────────────────────────────────────────────────────
   Al Alyaa · Brand Book v2 · Part II — Logo System
   10 Divider II · 11 Wordmark · 12 Construction · 13 Clear Zone
   14 Do/Don't · 15 Colour · 16 Typography
   ─────────────────────────────────────────────────────────────── */

/* ── 10 · Part II · Divider ──────────────────────────────────── */
const P10_DividerII = () => (
  <section className="pl pl--obsidian" data-screen-label="09 Part II Divider">
    <div style={{ position: "absolute", top: 56, left: 64, right: 64,
                  display: "flex", justifyContent: "space-between",
                  color: "var(--obsidian-800)" }}>
      <div className="mark" style={{ opacity: 0.7 }}>Al Alyaa · Developments</div>
      <div className="mark" style={{ opacity: 0.7 }}>Part II</div>
    </div>

    <div style={{ position: "absolute", inset: 0,
                  display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center" }}>
      <div className="divider-num" style={{ fontSize: 720 }}>02</div>
      <div style={{ height: 1, width: 220, background: "var(--bronze-500)",
                    opacity: 0.7, margin: "48px 0 36px" }}/>
      <div style={{ fontFamily: "var(--f-sans)", fontWeight: 300,
                    fontSize: 48, letterSpacing: "0.36em",
                    textIndent: "0.36em", textTransform: "uppercase",
                    color: "var(--obsidian-900)" }}>
        Logo System
      </div>
      <div className="ar" style={{ fontSize: 22, marginTop: 20,
                                    letterSpacing: "0.05em",
                                    color: "var(--bronze-600)", opacity: 0.9 }}>
        نظام الشعار
      </div>
    </div>

    <div style={{ position: "absolute", bottom: 56, left: 64, right: 64,
                  display: "flex", justifyContent: "space-between",
                  color: "var(--obsidian-800)" }}>
      <div className="mark" style={{ opacity: 0.7 }}>
        Wordmark · Construction · Clear Zone · Do's & Don'ts · Colour · Typography
      </div>
      <div className="pgn" style={{ opacity: 0.7 }}>09 / 25</div>
    </div>
  </section>
);

/* ── 11 · The Wordmark ─────────────────────────────────────────
   One mark, rendered at brand scale. The definitive specimen.
*/
const P11_Wordmark = () => (
  <section className="pl pl--sand" data-screen-label="10 The Wordmark">
    <RunHead part="II" section="Logo System"/>
    <RunFoot page={10} total={25} chapter="The Wordmark" outer="right"/>

    <div style={{ position: "absolute", top: 160, left: 64, right: 64 }}>
      <PageTitle number="2.1" section="Logo System"
                  title="The Wordmark" titleAr="الشـــعار"/>
    </div>

    {/* Centered Arabic + Latin lock-up */}
    <div style={{ position: "absolute", top: 440, left: 64, right: 64,
                  display: "flex", flexDirection: "column",
                  alignItems: "center" }}>
      <div className="ar-display" style={{ fontSize: 180,
                                            color: "var(--ink)",
                                            letterSpacing: "-0.005em" }}>
        العَليــــــــــاء
      </div>
      <div style={{ height: 1, width: 140, background: "var(--bronze-600)",
                    margin: "40px 0 36px" }}/>
      <div style={{ fontFamily: "var(--f-sans)", fontWeight: 300,
                    fontSize: 64, letterSpacing: "0.36em",
                    textIndent: "0.36em", textTransform: "uppercase",
                    color: "var(--ink)" }}>
        Al Alyaa
      </div>
      <div style={{ fontFamily: "var(--f-sans)", fontWeight: 400,
                    fontSize: 14, letterSpacing: "0.48em",
                    textIndent: "0.48em", textTransform: "uppercase",
                    color: "var(--bronze-600)", marginTop: 18 }}>
        Developments
      </div>
    </div>

    {/* Bottom specs strip */}
    <div style={{ position: "absolute", bottom: 140, left: 64, right: 64,
                  display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr",
                  gap: 48, paddingTop: 24,
                  borderTop: "1px solid var(--line)" }}>
      {[
        ["Script",      "Arabic · Latin"],
        ["Typeface",    "Alexandria"],
        ["Weight",      "300 · Light"],
        ["Colour",      "Obsidian on Sand"],
      ].map(([k, v], i) => (
        <div key={i}>
          <div className="mark" style={{ fontSize: 10, opacity: 0.6,
                                          marginBottom: 8 }}>{k}</div>
          <div className="body-copy" style={{ fontSize: 15,
                                                fontWeight: 400,
                                                color: "var(--ink)" }}>{v}</div>
        </div>
      ))}
    </div>
  </section>
);

/* ── 12 · Construction ─────────────────────────────────────────
   Grid overlay. Show how the mark sits in a 12×12 matrix.
*/
const P12_Construction = () => (
  <section className="pl pl--sand" data-screen-label="11 Construction">
    <RunHead part="II" section="Logo System"/>
    <RunFoot page={11} total={25} chapter="Construction" outer="right"/>

    <div style={{ position: "absolute", top: 160, left: 64, right: 720 }}>
      <PageTitle number="2.2" section="Logo System"
                  title="Construction" titleAr="البــناء"/>
      <div className="body-copy" style={{ marginTop: 48, maxWidth: 440 }}>
        The wordmark is constructed on a 12 × 12 unit grid. The
        <em> alif</em> (ا) sets the vertical, the <em>ʿayn</em> (ع)
        sets the weight, and all proportions descend from them.
        <br/><br/>
        No element of the mark may be redrawn by hand. Always place
        the approved digital file.
      </div>
    </div>

    {/* Grid specimen */}
    <div style={{ position: "absolute", top: 200, right: 64,
                  width: 640, height: 640,
                  background: "var(--sand-50)",
                  border: "1px solid var(--line)" }}>
      {/* 12×12 grid */}
      <div style={{ position: "absolute", inset: 0,
                    backgroundImage:
                      "linear-gradient(to right, var(--line-soft) 1px, transparent 1px)," +
                      "linear-gradient(to bottom, var(--line-soft) 1px, transparent 1px)",
                    backgroundSize: "calc(100%/12) calc(100%/12)" }}/>
      {/* Outer baseline marks */}
      <div style={{ position: "absolute", top: "25%", left: 0, right: 0,
                    borderTop: "1px dashed var(--bronze-600)", opacity: 0.5 }}/>
      <div style={{ position: "absolute", top: "75%", left: 0, right: 0,
                    borderTop: "1px dashed var(--bronze-600)", opacity: 0.5 }}/>
      {/* Centered wordmark */}
      <div style={{ position: "absolute", inset: 0,
                    display: "flex", flexDirection: "column",
                    alignItems: "center", justifyContent: "center" }}>
        <div className="ar-display" style={{ fontSize: 132,
                                              color: "var(--ink)" }}>
          العَليـــاء
        </div>
        <div style={{ height: 1, width: 60, background: "var(--bronze-600)",
                      margin: "16px 0 12px" }}/>
        <div style={{ fontFamily: "var(--f-sans)", fontWeight: 300,
                      fontSize: 28, letterSpacing: "0.36em",
                      textIndent: "0.36em", textTransform: "uppercase" }}>
          Al Alyaa
        </div>
      </div>
      {/* Corner ticks */}
      {[[0,0],[0,"auto"],["auto",0],["auto","auto"]].map((pos,i) => {
        const [t, l] = pos;
        const base = { position: "absolute", width: 12, height: 12,
                        borderColor: "var(--bronze-600)" };
        return (
          <div key={i} style={{
            ...base,
            top: t === 0 ? -6 : "auto", bottom: t === "auto" ? -6 : "auto",
            left: l === 0 ? -6 : "auto", right: l === "auto" ? -6 : "auto",
            borderStyle: "solid",
            borderWidth: `${t === 0 ? 1 : 0}px ${l === "auto" ? 1 : 0}px ${t === "auto" ? 1 : 0}px ${l === 0 ? 1 : 0}px`,
          }}/>
        );
      })}
    </div>

    {/* Legend under grid */}
    <div style={{ position: "absolute", bottom: 140, right: 64,
                  width: 640, display: "flex",
                  justifyContent: "space-between" }}>
      <div className="mark" style={{ fontSize: 10, opacity: 0.6 }}>
        <span style={{ color: "var(--bronze-600)" }}>——</span>&nbsp; Cap-line · Baseline
      </div>
      <div className="mark" style={{ fontSize: 10, opacity: 0.6 }}>12 × 12 Unit Grid</div>
    </div>
  </section>
);

/* ── 13 · Clear Zone ───────────────────────────────────────────
   The space around the mark, defined by the alif (ا).
*/
const P13_ClearZone = () => (
  <section className="pl pl--sand" data-screen-label="12 Clear Zone">
    <RunHead part="II" section="Logo System"/>
    <RunFoot page={12} total={25} chapter="Clear Zone" outer="right"/>

    <div style={{ position: "absolute", top: 160, left: 64, right: 720 }}>
      <PageTitle number="2.3" section="Logo System"
                  title="Clear Zone" titleAr="المـــساحة"/>
      <div className="body-copy" style={{ marginTop: 48, maxWidth: 440 }}>
        The clear zone equals the height of the letter <em>alif</em> (ا).
        No typographic, graphic, or photographic element may intrude
        within this margin on any side of the wordmark.
        <br/><br/>
        The zone scales with the mark. Where possible, extend it —
        let the wordmark breathe.
      </div>
    </div>

    {/* Clear zone specimen */}
    <div style={{ position: "absolute", top: 200, right: 64,
                  width: 640, height: 640 }}>
      {/* Outer dashed boundary */}
      <div style={{ position: "absolute", inset: 0,
                    border: "1px dashed var(--bronze-600)",
                    opacity: 0.55 }}/>
      {/* X marker labels */}
      {[
        { top: 20, left: "50%", transform: "translateX(-50%)", label: "X" },
        { bottom: 20, left: "50%", transform: "translateX(-50%)", label: "X" },
        { top: "50%", left: 18, transform: "translateY(-50%)", label: "X" },
        { top: "50%", right: 18, transform: "translateY(-50%)", label: "X" },
      ].map((p, i) => (
        <div key={i} style={{ position: "absolute", ...p,
                               fontFamily: "var(--f-sans)", fontWeight: 500,
                               fontSize: 14, letterSpacing: "0.16em",
                               color: "var(--bronze-600)" }}>
          {p.label}
        </div>
      ))}
      {/* Inner wordmark box */}
      <div style={{ position: "absolute", top: 160, left: 120,
                    right: 120, bottom: 160,
                    border: "1px solid var(--line)",
                    background: "var(--sand-50)",
                    display: "flex", flexDirection: "column",
                    alignItems: "center", justifyContent: "center" }}>
        <div className="ar-display" style={{ fontSize: 92,
                                              color: "var(--ink)" }}>
          العَليـــاء
        </div>
        <div style={{ height: 1, width: 44, background: "var(--bronze-600)",
                      margin: "12px 0 10px" }}/>
        <div style={{ fontFamily: "var(--f-sans)", fontWeight: 300,
                      fontSize: 20, letterSpacing: "0.36em",
                      textIndent: "0.36em", textTransform: "uppercase" }}>
          Al Alyaa
        </div>
      </div>
    </div>

    <div style={{ position: "absolute", bottom: 140, right: 64,
                  width: 640, display: "flex",
                  justifyContent: "space-between" }}>
      <div className="mark" style={{ fontSize: 10, opacity: 0.6 }}>
        X = height of <em style={{ fontFamily: "var(--f-arabic)" }}>ا</em> (alif)
      </div>
      <div className="mark" style={{ fontSize: 10, opacity: 0.6 }}>Minimum clearance on all sides</div>
    </div>
  </section>
);

/* ── 14 · Do's & Don'ts ───────────────────────────────────────
   Six small specimens — 3 correct, 3 incorrect.
*/
const P14_DosDonts = () => {
  const cells = [
    { ok: true,  label: "Ink on Sand",     demo: "ok-primary" },
    { ok: true,  label: "Sand on Obsidian",demo: "ok-reversed" },
    { ok: true,  label: "Bronze accent",   demo: "ok-bronze" },
    { ok: false, label: "Do not stretch",  demo: "no-stretch" },
    { ok: false, label: "Do not rotate",   demo: "no-rotate" },
    { ok: false, label: "Do not recolour", demo: "no-recolour" },
  ];
  const Demo = ({ type }) => {
    const base = { display: "flex", flexDirection: "column",
                    alignItems: "center", justifyContent: "center",
                    height: "100%" };
    if (type === "ok-primary")   return <div style={base}><Mini/></div>;
    if (type === "ok-reversed")  return <div style={{...base, background: "var(--obsidian-900)"}}><Mini invert/></div>;
    if (type === "ok-bronze")    return <div style={base}><Mini bronze/></div>;
    if (type === "no-stretch")   return <div style={base}><div style={{transform: "scaleX(1.6)"}}><Mini/></div></div>;
    if (type === "no-rotate")    return <div style={base}><div style={{transform: "rotate(-8deg)"}}><Mini/></div></div>;
    if (type === "no-recolour")  return <div style={base}><Mini color="#8B1A1A"/></div>;
    return null;
  };
  const Mini = ({ invert = false, bronze = false, color }) => {
    const c = color || (bronze ? "var(--bronze-600)"
                                : invert ? "var(--sand-100)" : "var(--ink)");
    return (
      <div style={{ display: "flex", flexDirection: "column",
                    alignItems: "center", color: c }}>
        <div className="ar-display" style={{ fontSize: 48 }}>العَليـاء</div>
        <div style={{ height: 1, width: 28,
                       background: bronze ? "var(--bronze-300)"
                                          : (invert ? "var(--bronze-500)" : "var(--bronze-600)"),
                       margin: "6px 0 4px" }}/>
        <div style={{ fontFamily: "var(--f-sans)", fontWeight: 300,
                      fontSize: 11, letterSpacing: "0.36em",
                      textIndent: "0.36em", textTransform: "uppercase" }}>
          Al Alyaa
        </div>
      </div>
    );
  };

  return (
    <section className="pl pl--sand" data-screen-label="13 Dos Donts">
      <RunHead part="II" section="Logo System"/>
      <RunFoot page={13} total={25} chapter="Do's & Don'ts" outer="right"/>

      <div style={{ position: "absolute", top: 160, left: 64, right: 64 }}>
        <PageTitle number="2.4" section="Logo System"
                    title="Do's & Don'ts" titleAr="المســـموح والممنوع"/>
      </div>

      <div style={{ position: "absolute", top: 400, left: 64, right: 64,
                    bottom: 140,
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gridTemplateRows: "1fr 1fr",
                    gap: 28 }}>
        {cells.map((c, i) => (
          <div key={i} style={{ border: "1px solid var(--line)",
                                 background: "var(--sand-50)",
                                 position: "relative",
                                 overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 14, left: 16, right: 16,
                          display: "flex", justifyContent: "space-between",
                          alignItems: "center" }}>
              <div style={{ fontFamily: "var(--f-sans)", fontWeight: 500,
                            fontSize: 14,
                            color: c.ok ? "var(--bronze-600)" : "var(--obsidian-700)",
                            opacity: c.ok ? 1 : 0.55 }}>
                {c.ok ? "✓" : "✗"}
              </div>
              <div className="mark" style={{ fontSize: 9, opacity: 0.6 }}>
                {String(i+1).padStart(2,"0")}
              </div>
            </div>
            <div style={{ position: "absolute", top: 52, bottom: 56,
                          left: 16, right: 16 }}>
              <Demo type={c.demo}/>
            </div>
            <div className="mark-2" style={{ position: "absolute",
                                               bottom: 16, left: 16, right: 16,
                                               fontSize: 10, opacity: 0.75,
                                               textAlign: "center" }}>
              {c.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

/* ── 15 · Colour ───────────────────────────────────────────────
   Obsidian, Sand, Bronze. Specs below.
*/
const P15_Colour = () => {
  const swatches = [
    { name: "Anchor",  ar: "المِرساة", hex: "#3A3630", rgb: "58 · 54 · 48",
      cmyk: "55 · 58 · 65 · 55", pantone: "P 179-16 C", oklch: "24% 0.01 60",
      role: "Primary ink · headlines, body type, dividers", dark: true },
    { name: "Paper",   ar: "الوَرق",   hex: "#FBF6EE", rgb: "251 · 246 · 238",
      cmyk: "2 · 3 · 7 · 0",     pantone: "P 1-1 C",     oklch: "97% 0.01 85",
      role: "Primary ground · warm white, pages & surfaces", dark: false },
    { name: "Clay",    ar: "الطّــين", hex: "#C38C6A", rgb: "195 · 140 · 106",
      cmyk: "20 · 48 · 60 · 5",   pantone: "P 34-14 C",   oklch: "68% 0.08 50",
      role: "Principal accent · a single warm signature", dark: true },
  ];
  const supporting = [
    { name: "Linen",      hex: "#F1E7D5", role: "Surface" },
    { name: "Cream",      hex: "#F7EEE0", role: "Secondary ground" },
    { name: "Peach",      hex: "#E8C4A2", role: "Warm support" },
    { name: "Dusty Rose", hex: "#DBBBB3", role: "Soft support" },
    { name: "Mist",       hex: "#AFC3C9", role: "Horizon cool" },
    { name: "Pale Gold",  hex: "#D9C28A", role: "Highlight (flat)" },
  ];
  return (
    <section className="pl pl--sand" data-screen-label="14 Colour">
      <RunHead part="II" section="Logo System"/>
      <RunFoot page={14} total={25} chapter="Colour" outer="right"/>

      <div style={{ position: "absolute", top: 160, left: 64, right: 64 }}>
        <PageTitle number="2.5" section="Logo System"
                    title="Colour" titleAr="الألوان"/>
      </div>

      <div style={{ position: "absolute", top: 360, left: 64, right: 64,
                    height: 520,
                    display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
                    gap: 28 }}>
        {swatches.map((s, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ height: 230, background: s.hex,
                           position: "relative",
                           border: s.hex === "#FBF6EE" ? "1px solid var(--line)" : "none" }}>
              <div className="mark" style={{ position: "absolute",
                                               top: 20, left: 22,
                                               fontSize: 10,
                                               color: s.dark ? "var(--sand-100)" : "var(--ink)",
                                               opacity: 0.7 }}>
                {String(i+1).padStart(2,"0")}
              </div>
              <div style={{ position: "absolute", bottom: 22, left: 22,
                             color: s.dark ? "var(--sand-100)" : "var(--ink)" }}>
                <div style={{ fontFamily: "var(--f-sans)", fontWeight: 400,
                              fontSize: 28, letterSpacing: "-0.005em" }}>
                  {s.name}
                </div>
                <div className="ar" style={{ fontSize: 16, marginTop: 4,
                                               opacity: 0.82 }}>
                  {s.ar}
                </div>
              </div>
            </div>
            <div className="body-copy" style={{ fontSize: 13, marginTop: 16,
                                                  lineHeight: 1.55 }}>
              {s.role}
            </div>
            <div style={{ marginTop: 18,
                           borderTop: "1px solid var(--line-soft)" }}>
              {[
                ["HEX",    s.hex],
                ["RGB",    s.rgb],
                ["CMYK",   s.cmyk],
                ["Pantone",s.pantone],
              ].map(([k, v], j) => (
                <div key={j} style={{ display: "grid",
                                       gridTemplateColumns: "80px 1fr",
                                       padding: "8px 0",
                                       borderBottom: "1px solid var(--line-soft)" }}>
                  <div className="mark" style={{ fontSize: 9, opacity: 0.55 }}>{k}</div>
                  <div style={{ fontFamily: "var(--f-mono)", fontSize: 11,
                                 letterSpacing: "0.04em" }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Supporting hues — flat row */}
      <div style={{ position: "absolute", bottom: 104, left: 64, right: 64 }}>
        <div className="mark" style={{ fontSize: 10, color: "var(--bronze-600)",
                                         marginBottom: 12 }}>
          Supporting palette
        </div>
        <div style={{ display: "grid",
                       gridTemplateColumns: "repeat(6, 1fr)", gap: 2 }}>
          {supporting.map((s, i) => (
            <div key={i} style={{ background: s.hex, padding: "14px 14px 12px",
                                    height: 74, display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    border: s.hex === "#F7EEE0" || s.hex === "#F1E7D5"
                                             ? "1px solid var(--line-soft)" : "none" }}>
              <div className="mark" style={{ fontSize: 8, opacity: 0.65 }}>
                {s.role}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between",
                             alignItems: "baseline" }}>
                <div style={{ fontFamily: "var(--f-sans)", fontWeight: 400,
                               fontSize: 12 }}>{s.name}</div>
                <div style={{ fontFamily: "var(--f-mono)", fontSize: 9,
                               opacity: 0.7 }}>{s.hex}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── 16 · Typography ───────────────────────────────────────────
   Alexandria weights + Cormorant for italics.
*/
const P16_Typography = () => (
  <section className="pl pl--sand" data-screen-label="15 Typography">
    <RunHead part="II" section="Logo System"/>
    <RunFoot page={15} total={25} chapter="Typography" outer="right"/>

    <div style={{ position: "absolute", top: 160, left: 64, right: 64 }}>
      <PageTitle number="2.6" section="Logo System"
                  title="Typography" titleAr="الخطـــوط"/>
    </div>

    <div style={{ position: "absolute", top: 380, left: 64, right: 64,
                  bottom: 140,
                  display: "grid", gridTemplateColumns: "2fr 1fr", gap: 80 }}>
      {/* Alexandria specimen */}
      <div>
        <div className="mark" style={{ color: "var(--bronze-600)",
                                         fontSize: 10 }}>Primary · Alexandria</div>
        <div style={{ fontFamily: "Alexandria", fontWeight: 200,
                      fontSize: 160, lineHeight: 0.95,
                      marginTop: 18, color: "var(--ink)" }}>
          Aa
        </div>
        <div className="ar-display" style={{ fontSize: 88, marginTop: -8,
                                              color: "var(--ink)",
                                              fontWeight: 400 }}>
          أب ج
        </div>
        {/* Weight ladder */}
        <div style={{ marginTop: 36,
                       display: "grid",
                       gridTemplateColumns: "70px 1fr",
                       rowGap: 6 }}>
          {[
            ["300", "Light · body copy, long-form"],
            ["400", "Regular · running type, captions"],
            ["500", "Medium · labels, micro-caps"],
            ["600", "Semibold · titles, lock-ups"],
            ["700", "Bold · rarely used, emphasis only"],
          ].map(([w, use], i) => (
            <React.Fragment key={i}>
              <div style={{ fontFamily: "Alexandria", fontWeight: Number(w),
                             fontSize: 20 }}>{w}</div>
              <div className="body-copy" style={{ fontSize: 14 }}>{use}</div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Cormorant pull-quote */}
      <div style={{ borderLeft: "1px solid var(--line)", paddingLeft: 40 }}>
        <div className="mark" style={{ color: "var(--bronze-600)",
                                         fontSize: 10 }}>Accent · Cormorant</div>
        <div className="serif-italic" style={{ fontSize: 120,
                                                 marginTop: 18,
                                                 color: "var(--ink)",
                                                 lineHeight: 1 }}>
          Aa
        </div>
        <div className="body-copy" style={{ fontSize: 14, marginTop: 28,
                                              maxWidth: 320 }}>
          Cormorant Garamond italic is reserved for the manifesto,
          pull-quotes, and emphasis within body copy. Never use it
          for running text or titles.
        </div>
        <div className="serif-italic" style={{ fontSize: 24,
                                                 marginTop: 28,
                                                 color: "var(--bronze-600)",
                                                 lineHeight: 1.3 }}>
          Reserved for the manifesto and pull quotes.
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, {
  P10_DividerII, P11_Wordmark, P12_Construction, P13_ClearZone,
  P14_DosDonts, P15_Colour, P16_Typography,
});
