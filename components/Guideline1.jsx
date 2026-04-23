/* ── Guideline slides 01-06 ────────────────────────────────────── */

/* ══════════════════════════════════════════════════════════════════
   COVER — a statement piece.
   Massive Arabic wordmark centered, hairline architecture grid,
   dramatic italic serif, editioned metadata in the corners.
   ══════════════════════════════════════════════════════════════════ */
const GCover = () => (
  <section className="g" style={{ background: "var(--paper)", overflow: "hidden" }}>
    {/* Architectural hairline grid — 12 columns of paper */}
    <div style={{ position: "absolute", inset: 0, display: "grid",
                   gridTemplateColumns: "repeat(12, 1fr)",
                   pointerEvents: "none", zIndex: 1, opacity: 0.5 }}>
      {Array.from({length: 13}).map((_, i) => (
        <div key={i} style={{ gridColumn: `${i+1} / span 1`,
                                borderLeft: i === 0 || i === 12 ? "none" : "1px solid var(--rule)",
                                height: "100%" }}/>
      ))}
    </div>

    {/* Top band — EN logo left, edition code right */}
    <div style={{ position: "absolute", top: 56, left: 64, right: 64,
                   display: "flex", justifyContent: "space-between",
                   alignItems: "center", zIndex: 4 }}>
      <img src="assets/logo-en.png" alt="ALALYAA DEVELOPMENTS"
           style={{ height: 26, opacity: 0.85 }}/>
      <div className="spaced-3" style={{ fontSize: 10, opacity: 0.55,
                                           fontFamily: "var(--f-sans)" }}>
        E D I T I O N &nbsp; N° &nbsp; 0 0 3 &nbsp;·&nbsp; M M X X V I
      </div>
    </div>

    {/* Top hairline */}
    <div style={{ position: "absolute", top: 102, left: 64, right: 64,
                   height: 1, background: "var(--rule-2)", zIndex: 3 }}/>

    {/* Main body — centered composition */}
    <div style={{ position: "absolute", inset: 0, display: "flex",
                   flexDirection: "column", justifyContent: "center",
                   alignItems: "center", padding: "140px 64px 140px",
                   zIndex: 2 }}>

      {/* Section label */}
      <div className="spaced" style={{ fontSize: 12, color: "var(--foil)",
                                          marginBottom: 48 }}>
        V O L U M E &nbsp; I &nbsp;·&nbsp; T H E &nbsp; G U I D E L I N E &nbsp; E D I T I O N
      </div>

      {/* Arabic wordmark — hero, centered, sand-foil tinted */}
      <div style={{ position: "relative", marginBottom: 40 }}>
        {/* Faint echo behind */}
        <img src="assets/logo-ar.png" alt=""
             aria-hidden="true"
             style={{ position: "absolute", top: "50%", left: "50%",
                       transform: "translate(-50%, -50%) scale(1.18)",
                       width: 1280, height: "auto", opacity: 0.07,
                       filter: "blur(1px)" }}/>
        {/* Main Arabic logo */}
        <img src="assets/logo-ar.png" alt="العلياء"
             style={{ width: 1080, height: "auto", display: "block",
                       position: "relative", zIndex: 2,
                       filter: "brightness(0) saturate(100%) invert(55%) sepia(18%) saturate(720%) hue-rotate(4deg) brightness(92%) contrast(88%)" }}/>
      </div>

      {/* Tiny crosshair ornament */}
      <div style={{ display: "flex", alignItems: "center", gap: 16,
                     marginTop: 24, marginBottom: 32 }}>
        <div style={{ width: 48, height: 1, background: "var(--foil)" }}/>
        <div className="ar-title" style={{ fontSize: 18, color: "var(--foil)",
                                              opacity: 0.85, fontWeight: 500 }}>
          العُلــــى
        </div>
        <div style={{ width: 48, height: 1, background: "var(--foil)" }}/>
      </div>

      {/* The enormous italic serif headline */}
      <div className="title-display" style={{ fontSize: 148,
                                                 fontStyle: "italic",
                                                 lineHeight: 0.96,
                                                 letterSpacing: "-0.012em",
                                                 color: "var(--ink)",
                                                 textAlign: "center",
                                                 maxWidth: 1500 }}>
        Brand Guidelines
      </div>

      {/* Roman subhead */}
      <div className="spaced-3" style={{ fontSize: 14, marginTop: 28,
                                            opacity: 0.7 }}>
        T H E &nbsp; S O V E R E I G N &nbsp; W O R D M A R K &nbsp;·&nbsp; P A P E R &nbsp; A N D &nbsp; F O I L
      </div>
    </div>

    {/* Bottom band — three-column meta */}
    <div style={{ position: "absolute", bottom: 56, left: 64, right: 64,
                   display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
                   alignItems: "end", zIndex: 4 }}>
      <div>
        <div className="spaced-3" style={{ fontSize: 9, color: "var(--foil)",
                                              marginBottom: 8 }}>
          I S S U E D &nbsp; B Y
        </div>
        <div className="body-copy" style={{ fontSize: 13, lineHeight: 1.55,
                                              color: "var(--ink)" }}>
          <em>Alalyaa Developments</em><br/>
          <span style={{ opacity: 0.6 }}>Brand &amp; Identity Office</span>
        </div>
      </div>

      <div style={{ textAlign: "center" }}>
        <div style={{ fontFamily: "var(--f-display)", fontStyle: "italic",
                        fontSize: 28, lineHeight: 1 }}>
          I
        </div>
        <div className="spaced-3" style={{ fontSize: 9, opacity: 0.55,
                                              marginTop: 6 }}>
          V O L U M E
        </div>
      </div>

      <div style={{ textAlign: "right" }}>
        <div className="spaced-3" style={{ fontSize: 9, color: "var(--foil)",
                                              marginBottom: 8 }}>
          APRIL
        </div>
        <div className="body-copy" style={{ fontSize: 13, lineHeight: 1.55,
                                              color: "var(--ink)" }}>
          <em>2026</em><br/>
          <span style={{ opacity: 0.6 }}>Powered By Strike Media</span>
        </div>
      </div>
    </div>

    {/* Bottom hairline */}
    <div style={{ position: "absolute", bottom: 140, left: 64, right: 64,
                   height: 1, background: "var(--rule-2)", zIndex: 3 }}/>

    {/* Foil corner crosshairs */}
    <div className="crosshair" style={{ top: 32, left: 32, color: "var(--foil)" }}/>
    <div className="crosshair" style={{ top: 32, right: 32, color: "var(--foil)" }}/>
    <div className="crosshair" style={{ bottom: 32, left: 32, color: "var(--foil)" }}/>
    <div className="crosshair" style={{ bottom: 32, right: 32, color: "var(--foil)" }}/>
  </section>
);

const GContents = () => (
  <section className="g">
    <RunningHeader n={2} section="CONTENTS"/>
    <RunningFooter n={2} section="Contents"/>

    <div style={{ position: "absolute", top: 180, left: 64, right: 64, bottom: 120 }}>
      <PageHeader number="0.0" section="INDEX"/>
      <PageTitle italic="Contents" roman="C O N T E N T S"/>

      <div className="rule" style={{ marginTop: 64, marginBottom: 40 }}/>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: 96, rowGap: 22 }}>
        {[
          ["1.0", "INTRODUCTION", "03"],
          ["1.1", "BRAND MISSION · VISION", "04"],
          ["1.2", "BRAND VALUES", "05"],
          ["2.0", "THE WORDMARK", "06"],
          ["2.1", "CLEAR ZONE", "07"],
          ["2.2", "LOGO SYSTEM", "08"],
          ["3.0", "COLOUR PALETTE", "09"],
          ["3.1", "TYPOGRAPHY", "10"],
          ["4.0", "STATIONERY", "11"],
          ["4.1", "SIGNAGE", "12"],
          ["5.0", "COLOPHON", "13"],
        ].map(([n, t, p], i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "56px 1fr auto",
                                 gap: 20, alignItems: "baseline",
                                 paddingBottom: 14,
                                 borderBottom: "1px solid var(--rule)" }}>
            <div className="section-number" style={{ opacity: 0.55 }}>{n}</div>
            <div className="title-sans spaced-3" style={{ fontSize: 18, fontWeight: 400 }}>{t}</div>
            <div className="section-number" style={{ opacity: 0.55 }}>{p}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const GIntro = () => (
  <section className="g">
    <RunningHeader n={3} section="INTRODUCTION"/>
    <RunningFooter n={3} section="Introduction"/>
    <div style={{ position: "absolute", top: 180, left: 64, right: 64, bottom: 120,
                   display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 80 }}>
      <div>
        <PageHeader number="1.0" section="INTRODUCTION"/>
        <PageTitle italic="A Regional" roman="I N V E S T M E N T&nbsp;&nbsp;P L A T F O R M"/>
        <div className="title-display" style={{ fontSize: 120, fontStyle: "italic",
                                                 marginTop: 18 }}>Platform.</div>
      </div>
      <div style={{ paddingTop: 40 }}>
        <div className="spaced-2" style={{ fontSize: 11, color: "var(--foil)" }}>
          1.1 &nbsp; I N T R O D U C T I O N
        </div>
        <div className="title-sans spaced-3" style={{ fontSize: 22, marginTop: 12,
                                                       fontWeight: 400 }}>
          Who We Are
        </div>

        <div className="body-copy" style={{ marginTop: 40, maxWidth: 640 }}>
          <p style={{ margin: 0 }}>
            <em>Alalyaa Developments</em> is
            a regional investment platform operating as the umbrella for
            a unified Arab economic vision &mdash; structured, patient,
            long in the horizon.
          </p>
          <p style={{ marginTop: 22 }}>
            Experience accumulated across Libya, the UAE, Rwanda, Yemen,
            Syria and Europe now enters Egypt &mdash; beginning with a
            Commercial Administrative Tower in the New Capital CBD,
            beside the Iconic Tower.
          </p>
        </div>

        <div className="rule" style={{ margin: "48px 0 32px" }}/>

        <div className="ar-body" style={{ color: "var(--graphite)", maxWidth: 640 }}>
          مجموعـــة العليـــــاء الدوليـــة منصّــة استثماريّــة عربيّــة موحّــدة،
          تدخــل مصــر بأفــقٍ طويــل وانضبــاطٍ مؤسّســي، بــدءاً ببــرجٍ إداريٍّ
          تجــاريٍّ في العاصمــة الإداريّــة الجديــدة.
        </div>
      </div>
    </div>
  </section>
);

const GMission = () => (
  <section className="g g--sand">
    <RunningHeader n={4} section="MISSION · VISION"/>
    <RunningFooter n={4} section="Mission · Vision"/>
    <div style={{ position: "absolute", top: 170, left: 64, right: 64, bottom: 110 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr auto",
                     alignItems: "start", gap: 40, marginBottom: 40 }}>
        <PageHeader number="1.2" section="MISSION · VISION"/>
        <div className="ar-title" style={{ fontSize: 52, color: "var(--foil)",
                                             fontWeight: 700, lineHeight: 1 }}>
          رؤيـــة · رســالة
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr",
                     gap: 80, marginTop: 20 }}>
        <div>
          <div className="spaced-2" style={{ fontSize: 12, color: "var(--foil)" }}>
            1.2 &nbsp; B R A N D &nbsp; M I S S I O N
          </div>
          <div className="title-display" style={{ fontSize: 38, fontStyle: "italic",
                                                    marginTop: 20, lineHeight: 1.25 }}>
            To deploy disciplined capital into strategic sectors
            through structured partnerships &mdash; delivering
            projects that meet international standards while
            aligning with national priorities.
          </div>
        </div>

        <div>
          <div className="spaced-2" style={{ fontSize: 12, color: "var(--foil)" }}>
            1.3 &nbsp; B R A N D &nbsp; V I S I O N
          </div>
          <div className="title-display" style={{ fontSize: 38, fontStyle: "italic",
                                                    marginTop: 20, lineHeight: 1.25 }}>
            To be a leading Arab investment platform that drives
            sustainable growth, creates lasting value, and
            contributes to the prosperity of the markets we enter.
          </div>
        </div>
      </div>
    </div>
  </section>
);

const GValues = () => {
  const vals = [
    ["01", "INSTITUTIONAL",   "DISCIPLINE",       "Structured approach to every investment decision.", "الانضبــاط المؤسّســي"],
    ["02", "VALUE BEFORE",    "SCALE",            "Quality and sustainability over rapid expansion.",   "القيمــة قبــل الحجــم"],
    ["03", "PARTNERSHIP",     "& COOPERATION",    "Building lasting relationships across markets.",     "الشراكــة والتعــاون"],
    ["04", "EXECUTION",       "ACCOUNTABILITY",   "Clear responsibility and measurable outcomes.",      "المساءلــة في التنفيــذ"],
    ["05", "NATIONAL",        "ALIGNMENT",        "Supporting growth aligned with national priorities.","المواءمــة الوطنيّــة"],
  ];
  return (
    <section className="g">
      <RunningHeader n={5} section="BRAND VALUES"/>
    <RunningFooter n={5} section="Brand Values"/>
      <div style={{ position: "absolute", top: 180, left: 64, right: 64, bottom: 120 }}>
        <PageHeader number="1.4" section="BRAND VALUES"/>
        <PageTitle italic="Five Principles" roman="G U I D I N G &nbsp; P R I N C I P L E S"/>

        <div className="rule" style={{ marginTop: 56, marginBottom: 40 }}/>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 28 }}>
          {vals.map(([n, l1, l2, desc, ar], i) => (
            <div key={i} style={{ borderTop: "2px solid var(--ink)", paddingTop: 20,
                                   display: "flex", flexDirection: "column", gap: 18 }}>
              <div className="section-number" style={{ color: "var(--foil)" }}>{n}</div>
              <div className="title-sans spaced-3" style={{ fontSize: 18, lineHeight: 1.25,
                                                              fontWeight: 400 }}>
                {l1}<br/>{l2}
              </div>
              <div className="body-copy" style={{ fontSize: 15, lineHeight: 1.5 }}>{desc}</div>
              <div className="ar-title" style={{ fontSize: 22, color: "var(--foil)",
                                                  fontWeight: 700, marginTop: "auto" }}>{ar}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const GWordmark = () => (
  <section className="g">
    <RunningHeader n={6} section="THE WORDMARK"/>
    <RunningFooter n={6} section="The Wordmark"/>
    <div style={{ position: "absolute", top: 180, left: 64, right: 64, bottom: 120,
                   display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 72 }}>
      <div>
        <PageHeader number="2.0" section="CORE ELEMENTS"/>
        <PageTitle italic="The Logo" roman="T H E &nbsp; W O R D M A R K"/>

        <div className="body-copy" style={{ marginTop: 48, maxWidth: 440 }}>
          The wordmark is the most visible element of the ALALYAA brand identity.
          A recognisable signature across all communications &mdash; a
          guarantee of quality that unites every surface, from print to
          property signage.
        </div>

        <div className="body-copy" style={{ marginTop: 20, maxWidth: 440 }}>
          The Arabic wordmark is a bespoke draw based on classical naskh,
          extended with a deliberate <em>kashida</em> &mdash; <em>a reach
          upward, a lifting.</em> It is modern, yet rooted in tradition.
        </div>

        <div className="body-copy" style={{ marginTop: 20, maxWidth: 440 }}>
          The ALALYAA corporate logo is our most important asset and should
          always be applied correctly. Do not alter or modify the
          wordmark in any way.
        </div>

        <div style={{ marginTop: 40, display: "flex", gap: 16 }}>
          <div className="foil-chip">◆ BLACK FOIL</div>
          <div className="foil-chip">◆ BESPOKE DRAW</div>
        </div>
      </div>

      <FoilFrame label="2.0 · PRIMARY WORDMARK · BLACK ON PAPER">
        <AliaaArabic size={170} color="var(--ink)"/>
      </FoilFrame>
    </div>
  </section>
);

Object.assign(window, { GCover, GContents, GIntro, GMission, GValues, GWordmark });
