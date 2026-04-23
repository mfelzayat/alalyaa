/* ───────────────────────────────────────────────────────────────
   Al Alyaa · Brand Book v2 · Part I — Brand Foundation
   01 Cover · 02 Imprint · 03 Contents · 04 Divider I
   05 The Name · 06 Manifesto · 07 Vision · 08 Mission · 09 Values
   ─────────────────────────────────────────────────────────────── */

/* ── 01 · Cover ────────────────────────────────────────────────
   Dark obsidian. Tiny meta. Huge foil wordmark. One rule.
*/
const P01_Cover = () => (
  <section className="pl pl--obsidian-deep" data-screen-label="01 Cover">
    {/* Top meta */}
    <div style={{ position: "absolute", top: 56, left: 64, right: 64,
                  display: "flex", justifyContent: "space-between",
                  color: "var(--obsidian-800)" }}>
      <div className="mark" style={{ opacity: 0.75 }}>Al Alyaa · Developments</div>
      <div className="mark" style={{ opacity: 0.75 }}>MMXXVI</div>
    </div>

    {/* Centered foil wordmark */}
    <div style={{ position: "absolute", inset: 0,
                  display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center" }}>
      <div className="ar-display foil" style={{ fontSize: 172,
                                                 letterSpacing: "-0.01em" }}>
        العَليـــــــــــــاء
      </div>
      <div style={{ height: 1, width: 180, background: "var(--bronze-500)",
                    opacity: 0.75, margin: "52px 0 44px" }}/>
      <div className="foil" style={{ fontFamily: "var(--f-sans)",
                                      fontWeight: 800, fontSize: 59,
                                      letterSpacing: "0.36em",
                                      textIndent: "0.36em",
                                      textTransform: "uppercase" }}>
        Al Alyaa
      </div>
      <div style={{ fontFamily: "var(--f-sans)", fontWeight: 400,
                    fontSize: 13, letterSpacing: "0.48em",
                    textIndent: "0.48em", textTransform: "uppercase",
                    color: "var(--obsidian-700)", marginTop: 22 }}>
        Developments
      </div>
    </div>

    {/* Bottom meta */}
    <div style={{ position: "absolute", bottom: 56, left: 64, right: 64,
                  display: "flex", justifyContent: "space-between",
                  color: "var(--obsidian-800)" }}>
      <div className="mark" style={{ opacity: 0.7 }}>Brand Book</div>
      <div className="mark" style={{ opacity: 0.7 }}>Volume II &nbsp;·&nbsp; First Edition</div>
    </div>
  </section>
);

/* ── 02 · Imprint ──────────────────────────────────────────────
   The "who made this" plate. EMAAR always has one.
*/
const P02_Imprint = () => (
  <section className="pl pl--sand" data-screen-label="02 Imprint">
    <RunHead part="—" section="Imprint"/>
    <RunFoot page={2} total={25} chapter="Imprint" outer="right"/>

    <div style={{ position: "absolute", top: 160, left: 64, right: 64,
                  bottom: 120, display: "grid",
                  gridTemplateColumns: "1fr 1fr", gap: 80 }}>
      <div>
        <div className="mark" style={{ color: "var(--bronze-600)",
                                         marginBottom: 40 }}>Imprint</div>
        <div className="body-copy" style={{ maxWidth: 480, fontSize: 15 }}>
          This volume is the foundational document of the Al&nbsp;Alyaa
          corporate identity. It defines the name, the wordmark, the
          palette, the typography, and the voice of the brand as it
          operates in Egypt and the wider Arab region.
          <br/><br/>
          Nothing in this book is decorative. Every element is a rule
          for the work that follows.
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
        {[
          ["Publisher",   "Al Alyaa Developments"],
          ["Prepared by", "Brand Council, Volume II"],
          ["First Edition", "MMXXVI · Cairo"],
          ["Typeset in", "Alexandria · Cormorant Garamond"],
          ["Printed on", "Mohawk Superfine · Soft-touch laminate"],
          ["Format",     "240 × 336 mm · Swiss binding"],
          ["Copyright",  "© MMXXVI Al Alyaa. All rights reserved."],
        ].map(([k, v], i) => (
          <div key={i} style={{ display: "grid",
                                 gridTemplateColumns: "160px 1fr",
                                 gap: 32, alignItems: "baseline",
                                 paddingBottom: 18,
                                 borderBottom: "1px solid var(--line-soft)" }}>
            <div className="mark" style={{ fontSize: 10, opacity: 0.65 }}>{k}</div>
            <div className="body-copy" style={{ fontSize: 15, fontWeight: 400 }}>{v}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ── 03 · Contents ─────────────────────────────────────────────
   Four parts, each with its plates listed. EMAAR-classic.
*/
const P03_Contents = () => {
  const parts = [
    ["01", "Brand Foundation", [
      ["1.1", "The Name",      "04"],
      ["1.2", "Manifesto",     "05"],
      ["1.3", "Vision",        "06"],
      ["1.4", "Mission",       "07"],
      ["1.5", "Values",        "08"],
    ]],
    ["02", "Logo System", [
      ["2.1", "The Wordmark",  "10"],
      ["2.2", "Construction",  "11"],
      ["2.3", "Clear Zone",    "12"],
      ["2.4", "Do's & Don'ts", "13"],
      ["2.5", "Colour",        "14"],
      ["2.6", "Typography",    "15"],
    ]],
    ["03", "Visual Language", [
      ["3.1", "The Motif",        "17"],
      ["3.2", "Voice",            "18"],
      ["3.3", "Bilingual Lockup", "19"],
    ]],
    ["04", "Applications", [
      ["4.1", "Stationery",   "21"],
      ["4.2", "Digital",      "22"],
      ["4.3", "Signage",      "23"],
      ["4.4", "The Horizon",  "24"],
      ["4.5", "Colophon",     "25"],
    ]],
  ];

  return (
    <section className="pl pl--sand" data-screen-label="02 Contents">
      <RunHead part="—" section="Contents"/>
      <RunFoot page={2} total={25} chapter="Contents" outer="right"/>

      <div style={{ position: "absolute", top: 140, left: 64, right: 64 }}>
        <div className="mark" style={{ color: "var(--bronze-600)" }}>Table of Contents</div>
        <div style={{ fontFamily: "var(--f-sans)", fontWeight: 300,
                      fontSize: 56, marginTop: 8, letterSpacing: "-0.015em" }}>
          Contents
        </div>
      </div>

      <div style={{ position: "absolute", top: 300, left: 64, right: 64,
                    bottom: 120,
                    display: "grid", gridTemplateColumns: "1fr 1fr",
                    gridTemplateRows: "auto auto",
                    columnGap: 80, rowGap: 28, alignContent: "start" }}>
        {parts.map(([num, title, rows], idx) => (
          <div key={idx}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 18,
                          marginBottom: 12,
                          paddingBottom: 12,
                          borderBottom: "1px solid var(--ink)" }}>
              <div style={{ fontFamily: "var(--f-sans)", fontWeight: 200,
                            fontSize: 40, lineHeight: 1,
                            color: "var(--bronze-600)" }}>
                {num}
              </div>
              <div className="mark" style={{ fontSize: 12, letterSpacing: "0.32em" }}>
                {title}
              </div>
            </div>
            {rows.map(([n, t, p], i) => (
              <div key={i} style={{ display: "grid",
                                     gridTemplateColumns: "44px 1fr 36px",
                                     alignItems: "baseline",
                                     padding: "7px 0",
                                     borderBottom: "1px solid var(--line-soft)" }}>
                <div className="mark-num" style={{ opacity: 0.6, fontSize: 10 }}>{n}</div>
                <div className="body-copy" style={{ fontSize: 14, fontWeight: 400 }}>{t}</div>
                <div className="mark-num" style={{ textAlign: "right", opacity: 0.55 }}>{p}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

/* ── 04 · Part I · Divider ─────────────────────────────────────
   Full-bleed obsidian. Huge bronze numeral. Part title below.
*/
const P04_DividerI = () => (
  <section className="pl pl--obsidian" data-screen-label="03 Part I Divider">
    {/* Tiny running header still present */}
    <div style={{ position: "absolute", top: 56, left: 64, right: 64,
                  display: "flex", justifyContent: "space-between",
                  color: "var(--obsidian-800)" }}>
      <div className="mark" style={{ opacity: 0.7 }}>Al Alyaa · Developments</div>
      <div className="mark" style={{ opacity: 0.7 }}>Part I</div>
    </div>

    {/* Huge numeral + title */}
    <div style={{ position: "absolute", inset: 0,
                  display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center" }}>
      <div className="divider-num" style={{ fontSize: 720 }}>01</div>
      <div style={{ height: 1, width: 220, background: "var(--bronze-500)",
                    opacity: 0.7, margin: "48px 0 36px" }}/>
      <div style={{ fontFamily: "var(--f-sans)", fontWeight: 300,
                    fontSize: 48, letterSpacing: "0.36em",
                    textIndent: "0.36em", textTransform: "uppercase",
                    color: "var(--obsidian-900)" }}>
        Brand Foundation
      </div>
      <div className="ar" style={{ fontSize: 22, marginTop: 20,
                                    letterSpacing: "0.05em",
                                    color: "var(--bronze-600)", opacity: 0.9 }}>
        أساس الهوية
      </div>
    </div>

    <div style={{ position: "absolute", bottom: 56, left: 64, right: 64,
                  display: "flex", justifyContent: "space-between",
                  color: "var(--obsidian-800)" }}>
      <div className="mark" style={{ opacity: 0.7 }}>
        Name · Manifesto · Vision · Mission · Values
      </div>
      <div className="pgn" style={{ opacity: 0.55 }}>03 / 25</div>
    </div>
  </section>
);

/* ── 05 · The Name ─────────────────────────────────────────────
   One word, huge. Etymology. A single thought.
*/
const P05_Name = () => (
  <section className="pl pl--sand" data-screen-label="04 The Name">
    <RunHead part="I" section="Brand Foundation"/>
    <RunFoot page={4} total={25} chapter="The Name" outer="right"/>

    <div style={{ position: "absolute", top: 160, left: 64, right: 64 }}>
      <PageTitle number="1.1" section="Brand Foundation"
                  title="The Name" titleAr="الإسم"/>
    </div>

    {/* Huge Arabic wordmark, centered */}
    <div style={{ position: "absolute", top: 420, left: 64, right: 64 }}>
      <div className="ar-display" style={{ fontSize: 220,
                                            color: "var(--ink)",
                                            letterSpacing: "-0.005em",
                                            textAlign: "center" }}>
        العَليــــــــــاء
      </div>
    </div>

    {/* Bottom: three micro-columns of meaning */}
    <div style={{ position: "absolute", bottom: 140, left: 64, right: 64,
                  display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
                  gap: 64, paddingTop: 28,
                  borderTop: "1px solid var(--line)" }}>
      {[
        ["Transliteration", "al-ʿAlyāʾ", "The heights. The elevated place."],
        ["Root",            "ع · ل · و",  "From ʿalaw — to rise, to ascend, to be lifted."],
        ["Meaning",         "Heights",    "Not height as measure — heights as standard."],
      ].map(([k, v, note], i) => (
        <div key={i}>
          <div className="mark" style={{ color: "var(--bronze-600)",
                                          fontSize: 10, marginBottom: 14 }}>{k}</div>
          <div className="serif-italic" style={{ fontSize: 28,
                                                   color: "var(--ink)",
                                                   marginBottom: 12 }}>{v}</div>
          <div className="body-copy" style={{ fontSize: 13 }}>{note}</div>
        </div>
      ))}
    </div>
  </section>
);

/* ── 06 · Manifesto ────────────────────────────────────────────
   The single most important plate. Sparse. Serif italic.
*/
const P06_Manifesto = () => (
  <section className="pl pl--sand" data-screen-label="05 Manifesto">
    <RunHead part="I" section="Brand Foundation"/>
    <RunFoot page={5} total={25} chapter="Manifesto" outer="right"/>

    <div style={{ position: "absolute", top: 160, left: 64, right: 64 }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 20 }}>
        <div className="mark" style={{ color: "var(--bronze-600)",
                                         letterSpacing: "0.32em" }}>1.2</div>
        <div className="mark" style={{ opacity: 0.5 }}>Brand Foundation</div>
      </div>
      <div style={{ fontFamily: "var(--f-sans)", fontWeight: 300,
                    fontSize: 32, marginTop: 24,
                    color: "var(--obsidian-700)", maxWidth: 720 }}>
        The Manifesto — two words for the work ahead.
      </div>
    </div>

    {/* Centered manifesto */}
    <div style={{ position: "absolute", top: 380, left: 64, right: 64,
                  bottom: 200,
                  display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center",
                  textAlign: "center" }}>
      <div className="serif-italic" style={{ fontSize: 168,
                                              lineHeight: 1.0,
                                              color: "var(--ink)",
                                              letterSpacing: "-0.02em" }}>
        Ambition,<br/>
        <span style={{ color: "var(--bronze-600)" }}>engineered.</span>
      </div>
      <div style={{ height: 1, width: 120, background: "var(--bronze-500)",
                    margin: "56px 0 40px" }}/>
      <div className="ar-display" style={{ fontSize: 64,
                                            color: "var(--bronze-600)",
                                            fontWeight: 400 }}>
        نَعلو بما يَبقى
      </div>
    </div>
  </section>
);

/* ── 07 · Vision ─────────────────────────────────────────────── */
const P07_Vision = () => (
  <section className="pl pl--sand" data-screen-label="06 Vision">
    <RunHead part="I" section="Brand Foundation"/>
    <RunFoot page={6} total={25} chapter="Vision" outer="right"/>

    <div style={{ position: "absolute", top: 160, left: 64, right: 580 }}>
      <PageTitle number="1.3" section="Brand Foundation"
                  title="Vision" titleAr="الرؤية"/>
    </div>

    {/* Right column: number 01, huge, as visual weight */}
    <div style={{ position: "absolute", top: 160, right: 64,
                  fontFamily: "var(--f-sans)", fontWeight: 200,
                  fontSize: 340, lineHeight: 0.8,
                  color: "var(--bronze-500)", opacity: 0.18 }}>
      01
    </div>

    <div style={{ position: "absolute", top: 440, left: 64, right: 420,
                  bottom: 140 }}>
      <div className="lead" style={{ fontSize: 40, fontWeight: 300,
                                      lineHeight: 1.3, maxWidth: 900,
                                      color: "var(--ink)" }}>
        To raise a standard of development in
        Egypt that the <em style={{ fontFamily: "var(--f-serif)",
                                     fontStyle: "italic",
                                     color: "var(--bronze-600)" }}>next generation</em> will
        inherit with pride.
      </div>
      <div className="ar" style={{ fontSize: 24, marginTop: 32,
                                    maxWidth: 720,
                                    color: "var(--obsidian-700)" }}>
        أن نرفع معياراً للتطوير في مصر يرثه الجيل القادم بفخر.
      </div>
    </div>
  </section>
);

/* ── 08 · Mission ────────────────────────────────────────────── */
const P08_Mission = () => (
  <section className="pl pl--sand" data-screen-label="07 Mission">
    <RunHead part="I" section="Brand Foundation"/>
    <RunFoot page={7} total={25} chapter="Mission" outer="right"/>

    <div style={{ position: "absolute", top: 160, left: 64, right: 580 }}>
      <PageTitle number="1.4" section="Brand Foundation"
                  title="Mission" titleAr="الرسالة"/>
    </div>

    <div style={{ position: "absolute", top: 160, right: 64,
                  fontFamily: "var(--f-sans)", fontWeight: 200,
                  fontSize: 340, lineHeight: 0.8,
                  color: "var(--bronze-500)", opacity: 0.18 }}>
      02
    </div>

    <div style={{ position: "absolute", top: 440, left: 64, right: 420,
                  bottom: 140 }}>
      <div className="lead" style={{ fontSize: 40, fontWeight: 300,
                                      lineHeight: 1.3, maxWidth: 900,
                                      color: "var(--ink)" }}>
        To bring <em style={{ fontFamily: "var(--f-serif)",
                               fontStyle: "italic",
                               color: "var(--bronze-600)" }}>Arab capital,
        institutional discipline, and long experience</em> to
        the building of a city worth inheriting.
      </div>
      <div className="ar" style={{ fontSize: 24, marginTop: 32,
                                    maxWidth: 720,
                                    color: "var(--obsidian-700)" }}>
        أن نأتي برأس المال العربي والانضباط المؤسسي والخبرة الطويلة،
        لبناء علامات تستحق أن تُورَث.
      </div>
    </div>
  </section>
);

/* ── 09 · Values ───────────────────────────────────────────────
   Five values. One line each. Huge whitespace.
*/
const P09_Values = () => {
  const values = [
    ["I",   "Rigour",     "نَزاهة",    " A higher standard, precisely applied."],
    ["II",  "Horizon",    "أفق",       " We build for the generation that follows."],
    ["III", "Partnership","شراكة",    " We arrive with memory, not just capital."],
    ["IV",  "Craft",      "إتقان",     " The building is the argument."],
    ["V",   "Quiet",      "هدوء",      " Confidence does not raise its voice."],
  ];
  return (
    <section className="pl pl--sand" data-screen-label="08 Values">
      <RunHead part="I" section="Brand Foundation"/>
      <RunFoot page={8} total={25} chapter="Values" outer="right"/>

      <div style={{ position: "absolute", top: 160, left: 64, right: 64 }}>
        <PageTitle number="1.5" section="Brand Foundation"
                    title="Five Values" titleAr="قيَمٌ خمس"/>
      </div>

      <div style={{ position: "absolute", top: 400, left: 64, right: 64,
                    bottom: 140 }}>
        {values.map(([n, en, ar, line], i) => (
          <div key={i} style={{ display: "grid",
                                 gridTemplateColumns: "80px 240px 180px 1fr",
                                 alignItems: "baseline",
                                 padding: "26px 0",
                                 borderTop: i === 0 ? "1px solid var(--ink)" : "none",
                                 borderBottom: "1px solid var(--line)" }}>
            <div className="mark-num" style={{ fontSize: 11,
                                                color: "var(--bronze-600)",
                                                letterSpacing: "0.24em" }}>{n}</div>
            <div style={{ fontFamily: "var(--f-sans)", fontWeight: 400,
                          fontSize: 34, letterSpacing: "-0.005em" }}>
              {en}
            </div>
            <div className="ar" style={{ fontSize: 26,
                                          color: "var(--obsidian-700)",
                                          fontWeight: 400 }}>
              {ar}
            </div>
            <div className="serif-italic" style={{ fontSize: 18,
                                                    color: "var(--obsidian-700)" }}>
              {line}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

Object.assign(window, {
  P01_Cover, P02_Imprint, P03_Contents, P04_DividerI,
  P05_Name, P06_Manifesto, P07_Vision, P08_Mission, P09_Values,
});
