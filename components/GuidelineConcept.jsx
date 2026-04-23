/* ── Guideline · Arabic Wordmark · Concept Rationale ───────────── */
/* Slide explaining the symbolism of the Arabic mark:
   (1) the tall tower = الع‍لي / height + birds of ascent
   (2) the open book in ع = knowledge, reading, culture
   (3) the sign above ي = extension, rise, elongation
*/

const GConceptAR = () => {
  // Three conceptual pillars — ordered top to bottom in reading priority.
  const pillars = [
    {
      idx: "I",
      ar: "البــرج",
      en: "The Tower",
      letter: "ا",
      letterRole: "ALIF · الألف",
      body: "A singular vertical rising from the baseline — the tallest stroke in the mark. It stands for العُلْي, the heights, and carries the brand essence: patient, disciplined ascent. A flock of birds at its summit signals a rise that is free, collective, in motion.",
    },
    {
      idx: "II",
      ar: "الكتــاب المفتــوح",
      en: "The Open Book",
      letter: "ع",
      letterRole: "AYN · العين",
      body: "The ع is drawn as an open book — two pages caught mid-turn. Knowledge enters through reading; culture through the open page. The letter names the eye that sees and the well from which understanding is drawn — a platform built on learning, not assumption.",
    },
    {
      idx: "III",
      ar: "المـــدّ والارتفــاع",
      en: "The Rise & Extension",
      letter: "ي",
      letterRole: "YA · الياء · Kashida",
      body: "Above the ي, a sweeping diacritical stroke — the sign of the kashida, the classical Arabic extension. It is the gesture of lengthening, of reaching further. Visually it mirrors the horizon; conceptually, the reach of العليـــاء into new markets, new altitudes.",
    },
  ];

  return (
    <section className="g g--sand">
      <RunningHeader n={7} section="THE CONCEPT · AR"/>
      <RunningFooter n={7} section="Concept · Arabic Mark"/>

      <div style={{ position: "absolute", top: 170, left: 64, right: 64, bottom: 110 }}>

        {/* Header row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto",
                       alignItems: "start", gap: 40, marginBottom: 24 }}>
          <div>
            <PageHeader number="2.0" section="THE CONCEPT"/>
            <PageTitle italic="Three Readings" roman="T H E &nbsp; A R A B I C &nbsp; M A R K"/>
          </div>
          <div className="ar-title" style={{ fontSize: 46, color: "var(--foil)",
                                               fontWeight: 700, lineHeight: 1, paddingTop: 14 }}>
            قــراءة · المعنــى
          </div>
        </div>

        <div className="rule" style={{ marginBottom: 16 }}/>

        {/* Main stage: centered wordmark with annotation layer on top,
            three pillar cards laid along the bottom. */}
        <div style={{ display: "grid",
                       gridTemplateRows: "auto 1fr",
                       rowGap: 22, minHeight: 620 }}>

          {/* ── Mark stage: pre-annotated artwork as-is ── */}
          <div style={{ position: "relative",
                         background: "var(--paper)",
                         border: "1px solid var(--rule)",
                         minHeight: 420,
                         display: "flex", alignItems: "center", justifyContent: "center",
                         overflow: "hidden" }}>
            <div className="crosshair" style={{ top: 14, left: 14, color: "var(--foil)" }}/>
            <div className="crosshair" style={{ top: 14, right: 14, color: "var(--foil)" }}/>
            <div className="crosshair" style={{ bottom: 14, left: 14, color: "var(--foil)" }}/>
            <div className="crosshair" style={{ bottom: 14, right: 14, color: "var(--foil)" }}/>
            <img src="assets/concept-ar-annotated.png"
                 alt="Arabic wordmark with concept annotations"
                 style={{ maxWidth: "92%", maxHeight: 420,
                          objectFit: "contain", display: "block" }}/>
          </div>

          {/* ── Three pillar descriptions ── */}
          <div className="anim-stagger"
               style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
                         gap: 40, alignItems: "start" }}>
            {pillars.map((p, i) => {
              const accent = i === 0 ? "var(--clay)"
                           : i === 1 ? "var(--nile)"
                                     : "var(--foil)";
              return (
                <div key={p.idx}
                     style={{ borderTop: `2px solid ${accent}`,
                               paddingTop: 18,
                               display: "flex", flexDirection: "column",
                               gap: 10 }}>
                  <div style={{ display: "flex", justifyContent: "space-between",
                                 alignItems: "baseline" }}>
                    <div className="section-number"
                         style={{ color: accent, fontSize: 11 }}>
                      2.0.{p.idx}
                    </div>
                    <div style={{ fontFamily: "var(--f-ar)",
                                   fontSize: 40, color: accent,
                                   fontWeight: 700, lineHeight: 1 }}>
                      {p.letter}
                    </div>
                  </div>
                  <div className="spaced-3" style={{ fontSize: 9, opacity: 0.65 }}>
                    {p.letterRole}
                  </div>
                  <div className="title-display"
                       style={{ fontSize: 22, fontStyle: "italic",
                                 marginTop: 2, lineHeight: 1.15 }}>
                    {p.en}
                  </div>
                  <div className="ar-title"
                       style={{ fontSize: 20, color: accent, fontWeight: 700,
                                 marginTop: -2 }}>
                    {p.ar}
                  </div>
                  <div className="body-copy"
                       style={{ fontSize: 12, lineHeight: 1.55, marginTop: 6 }}>
                    {p.body}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { GConceptAR });
