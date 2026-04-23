/* ───────────────────────────────────────────────────────────────
   Al Alyaa · Brand Book v2 · Part IV — Applications
   21 Divider IV · 22 Stationery · 23 Digital · 24 Signage
   25 The Horizon · 26 Colophon
   ─────────────────────────────────────────────────────────────── */

/* ── 21 · Part IV · Divider ─────────────────────────────────── */
const P21_DividerIV = () => (
  <section className="pl pl--obsidian" data-screen-label="20 Part IV Divider">
    <div style={{ position: "absolute", top: 56, left: 64, right: 64,
                  display: "flex", justifyContent: "space-between",
                  color: "var(--obsidian-800)" }}>
      <div className="mark" style={{ opacity: 0.7 }}>Al Alyaa · Developments</div>
      <div className="mark" style={{ opacity: 0.7 }}>Part IV</div>
    </div>
    <div style={{ position: "absolute", inset: 0, display: "flex",
                  flexDirection: "column", alignItems: "center",
                  justifyContent: "center" }}>
      <div className="divider-num" style={{ fontSize: 720 }}>04</div>
      <div style={{ height: 1, width: 220, background: "var(--bronze-500)",
                    opacity: 0.7, margin: "48px 0 36px" }}/>
      <div style={{ fontFamily: "var(--f-sans)", fontWeight: 300,
                    fontSize: 48, letterSpacing: "0.36em",
                    textIndent: "0.36em", textTransform: "uppercase",
                    color: "var(--obsidian-900)" }}>
        Applications
      </div>
      <div className="ar" style={{ fontSize: 22, marginTop: 20,
                                    letterSpacing: "0.05em",
                                    color: "var(--bronze-600)", opacity: 0.9 }}>
        التطبــيقات
      </div>
    </div>
    <div style={{ position: "absolute", bottom: 56, left: 64, right: 64,
                  display: "flex", justifyContent: "space-between",
                  color: "var(--obsidian-800)" }}>
      <div className="mark" style={{ opacity: 0.7 }}>
        Stationery · Digital · Signage · Horizon · Colophon
      </div>
      <div className="pgn" style={{ opacity: 0.7 }}>20 / 25</div>
    </div>
  </section>
);

/* Mini stationery lockup used across applications */
const StationeryLockup = ({ size = 1, color = "var(--ink)", accent = "var(--bronze-600)" }) => (
  <div style={{ color, display: "flex", flexDirection: "column",
                lineHeight: 1 }}>
    <div className="ar-display" style={{ fontSize: 36 * size, letterSpacing: "-0.005em" }}>
      العَليـاء
    </div>
    <div style={{ height: 1, width: 24 * size, background: accent, margin: `${8*size}px 0 ${6*size}px` }}/>
    <div style={{ fontFamily: "var(--f-sans)", fontWeight: 300,
                  fontSize: 11 * size, letterSpacing: "0.36em",
                  textIndent: "0.36em", textTransform: "uppercase" }}>
      Al Alyaa
    </div>
    <div style={{ fontFamily: "var(--f-sans)", fontWeight: 400,
                  fontSize: 7 * size, letterSpacing: "0.48em",
                  textIndent: "0.48em", textTransform: "uppercase",
                  color: accent, marginTop: 4 * size }}>
      Developments
    </div>
  </div>
);

/* ── 22 · Stationery ────────────────────────────────────────── */
const P22_Stationery = () => (
  <section className="pl pl--sand-2" data-screen-label="21 Stationery">
    <RunHead part="IV" section="Applications"/>
    <RunFoot page={21} total={25} chapter="Stationery" outer="right"/>

    <div style={{ position: "absolute", top: 160, left: 64, right: 64 }}>
      <PageTitle number="4.1" section="Applications"
                  title="Stationery" titleAr="المطبــوعات"/>
    </div>

    <div style={{ position: "absolute", top: 340, left: 64, right: 64,
                  bottom: 110,
                  display: "grid",
                  gridTemplateColumns: "1.6fr 1fr",
                  gap: 32 }}>
      {/* Letterhead */}
      <div style={{ background: "var(--sand-100)",
                     boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                     padding: "48px 52px",
                     display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "space-between",
                       alignItems: "flex-start" }}>
          <StationeryLockup size={1.3}/>
          <div style={{ textAlign: "right" }}>
            <div className="mark" style={{ fontSize: 8, opacity: 0.6 }}>Al Alyaa Developments</div>
            <div className="body-copy" style={{ fontSize: 10, marginTop: 6 }}>
              New Administrative Capital<br/>
              CBD Tower · Cairo, Egypt<br/>
              hello@alalyaa.com
            </div>
          </div>
        </div>
        <div style={{ height: 1, background: "var(--bronze-600)",
                       margin: "28px 0 22px" }}/>
        <div className="serif-italic" style={{ fontSize: 16,
                                                 color: "var(--obsidian-800)" }}>
          Ambition, engineered.
        </div>
        <div className="body-copy" style={{ fontSize: 10, opacity: 0.5,
                                              lineHeight: 1.55, marginTop: 16,
                                              maxWidth: 340 }}>
          <span style={{ display: "inline-block", width: 340, height: 1,
                          background: "var(--line)" }}/>
          <span style={{ display: "inline-block", width: 300, height: 1,
                          background: "var(--line)", marginTop: 6 }}/>
          <span style={{ display: "inline-block", width: 320, height: 1,
                          background: "var(--line)", marginTop: 6 }}/>
          <span style={{ display: "inline-block", width: 240, height: 1,
                          background: "var(--line)", marginTop: 6 }}/>
        </div>
        <div style={{ marginTop: "auto", paddingTop: 20,
                       display: "flex", justifyContent: "space-between",
                       borderTop: "1px solid var(--line-soft)" }}>
          <div className="mark" style={{ fontSize: 8, opacity: 0.55 }}>
            I / VIII · CONFIDENTIAL
          </div>
          <div className="mark" style={{ fontSize: 8, opacity: 0.55 }}>alalyaa.com</div>
        </div>
        <div className="mark-2" style={{ fontSize: 9, opacity: 0.55,
                                            marginTop: 22, textAlign: "center" }}>
          01 · Letterhead · A4 · Offset lithography
        </div>
      </div>

      {/* Business card stack */}
      <div style={{ display: "flex", flexDirection: "column", gap: 18,
                     minHeight: 0 }}>
        <div style={{ background: "var(--sand-100)",
                       boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                       padding: "24px 28px",
                       flex: 1,
                       display: "flex", flexDirection: "column",
                       justifyContent: "space-between" }}>
          <StationeryLockup size={0.8}/>
          <div>
            <div style={{ fontFamily: "var(--f-sans)", fontWeight: 500,
                          fontSize: 13 }}>Ezzeldin Kamal</div>
            <div className="mark" style={{ fontSize: 7, opacity: 0.65, marginTop: 4 }}>
              Chairman
            </div>
          </div>
        </div>
        <div style={{ background: "var(--obsidian-900)",
                       boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                       padding: "24px 28px",
                       flex: 1,
                       color: "var(--sand-100)",
                       display: "flex", flexDirection: "column",
                       justifyContent: "space-between" }}>
          <StationeryLockup size={0.8} color="var(--sand-100)" accent="var(--bronze-500)"/>
          <div>
            <div className="mark" style={{ fontSize: 7, opacity: 0.65 }}>CBD Tower</div>
            <div className="body-copy" style={{ fontSize: 9, color: "var(--sand-100)",
                                                  opacity: 0.75, marginTop: 3 }}>
              hello@alalyaa.com
            </div>
          </div>
        </div>
        <div className="mark-2" style={{ fontSize: 9, opacity: 0.55,
                                            marginTop: 4, textAlign: "center" }}>
          02 · Business Card · 85 × 55 mm · Duplex
        </div>
      </div>
    </div>
  </section>
);

/* ── 23 · Digital ───────────────────────────────────────────── */
const P23_Digital = () => (
  <section className="pl pl--sand" data-screen-label="22 Digital">
    <RunHead part="IV" section="Applications"/>
    <RunFoot page={22} total={25} chapter="Digital" outer="right"/>

    <div style={{ position: "absolute", top: 160, left: 64, right: 64 }}>
      <PageTitle number="4.2" section="Applications"
                  title="Digital" titleAr="الرَقـــمي"/>
    </div>

    <div style={{ position: "absolute", top: 400, left: 64, right: 64,
                  bottom: 140,
                  display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
                  gap: 24 }}>
      {/* Social tile 1 — name */}
      <div style={{ aspectRatio: "1",
                     background: "var(--obsidian-900)",
                     color: "var(--sand-100)",
                     padding: 28,
                     display: "flex", flexDirection: "column",
                     justifyContent: "space-between" }}>
        <div className="mark" style={{ fontSize: 9, opacity: 0.6 }}>01 · Profile</div>
        <div style={{ display: "flex", flexDirection: "column",
                       alignItems: "center" }}>
          <div className="ar-display foil" style={{ fontSize: 100 }}>العَليـــــــاء</div>
          <div style={{ height: 1, width: 40, background: "var(--bronze-500)",
                         margin: "43px 0px 10px" }}/>
          <div style={{ fontFamily: "var(--f-sans)", fontWeight: 300,
                        fontSize: 20, letterSpacing: "0.36em",
                        textIndent: "0.36em", textTransform: "uppercase" }}>
            Al Alyaa
          </div>
        </div>
        <div className="mark" style={{ fontSize: 8, opacity: 0.55,
                                         color: "var(--bronze-300)" }}>
          Developments · Cairo
        </div>
      </div>

      {/* Social tile 2 — manifesto */}
      <div style={{ aspectRatio: "1",
                     background: "var(--sand-100)",
                     border: "1px solid var(--line)",
                     padding: 28,
                     display: "flex", flexDirection: "column",
                     justifyContent: "space-between" }}>
        <div className="mark" style={{ fontSize: 9, opacity: 0.6 }}>02 · Manifesto</div>
        <div>
          <div className="serif-italic" style={{ fontSize: 52,
                                                   lineHeight: 1.02,
                                                   color: "var(--ink)" }}>
            Ambition,<br/>
            <span style={{ color: "var(--bronze-600)" }}>engineered.</span>
          </div>
          <div className="ar-display" style={{ fontSize: 24,
                                                 color: "var(--bronze-600)",
                                                 marginTop: 18, fontWeight: 400 }}>
            نَعلو بما يَبقى
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between",
                       alignItems: "flex-end" }}>
          <StationeryLockup size={0.55}/>
        </div>
      </div>

      {/* Social tile 3 — horizon */}
      <div style={{ aspectRatio: "1",
                     background: "var(--sand-200)",
                     padding: 28,
                     display: "flex", flexDirection: "column",
                     justifyContent: "space-between",
                     position: "relative", overflow: "hidden" }}>
        {/* Huge numeral bg — truly background, behind everything */}
        <div aria-hidden="true"
              style={{ position: "absolute", right: -40, bottom: -60,
                       fontFamily: "var(--f-sans)", fontWeight: 200,
                       fontSize: 360, lineHeight: 0.8,
                       color: "var(--bronze-500)", opacity: 0.14,
                       pointerEvents: "none", zIndex: 0 }}>
          02
        </div>
        <div className="mark" style={{ fontSize: 9, opacity: 0.6,
                                         position: "relative", zIndex: 1 }}>
          03 · Value
        </div>
        <div style={{ position: "relative", zIndex: 1 }}>
          <div className="mark" style={{ fontSize: 9, opacity: 0.55,
                                           color: "var(--bronze-600)" }}>
            Value II · Horizon
          </div>
          <div style={{ fontFamily: "var(--f-sans)", fontWeight: 300,
                        fontSize: 44, lineHeight: 1.1, marginTop: 16 }}>
            We build for the generation that follows.
          </div>
        </div>
        <div style={{ position: "relative", zIndex: 1 }}>
          <StationeryLockup size={0.55}/>
        </div>
      </div>
    </div>

    <div style={{ position: "absolute", bottom: 104, left: 64, right: 64,
                  textAlign: "center" }}>
      <div className="mark-2" style={{ fontSize: 10, opacity: 0.55 }}>
        Instagram / LinkedIn · 1080 × 1080
      </div>
    </div>
  </section>
);

/* ── 24 · Signage ───────────────────────────────────────────── */
const P24_Signage = () => (
  <section className="pl pl--obsidian" data-screen-label="23 Signage">
    {/* Linen plate — running chrome in ink */}
    <div style={{ position: "absolute", top: 44, left: 64, right: 64,
                  display: "flex", justifyContent: "space-between",
                  color: "var(--obsidian-800)" }}>
      <div className="mark" style={{ opacity: 0.75 }}>Al Alyaa · Developments</div>
      <div className="mark-2" style={{ opacity: 0.75 }}>Part IV · Applications</div>
    </div>
    <div style={{ position: "absolute", top: 80, left: 64, right: 64,
                  height: 1, background: "var(--obsidian-900)", opacity: 0.22 }}/>

    <div style={{ position: "absolute", top: 160, left: 64, right: 720,
                  color: "var(--obsidian-900)" }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 20,
                    marginBottom: 32 }}>
        <div className="mark" style={{ color: "var(--bronze-600)",
                                         letterSpacing: "0.32em" }}>4.3</div>
        <div className="mark" style={{ opacity: 0.55 }}>Applications</div>
      </div>
      <div style={{ fontFamily: "var(--f-sans)", fontWeight: 300,
                    fontSize: 72, lineHeight: 1.0,
                    letterSpacing: "-0.015em" }}>
        Signage
      </div>
      <div className="ar-display" style={{ fontSize: 40, marginTop: 16,
                                            color: "var(--obsidian-700)",
                                            fontWeight: 400 }}>
        اللافــتات
      </div>
      <div className="body-copy" style={{ marginTop: 48, maxWidth: 420,
                                           color: "var(--obsidian-700)" }}>
        At architectural scale, the wordmark is cut from clay
        or painted in deep terracotta. Never backlit, never metallic.
        The Arabic leads — the Latin follows as counterpoint.
      </div>
    </div>

    {/* Architectural signage mock */}
    <div style={{ position: "absolute", top: 200, right: 64,
                  width: 640, height: 640,
                  background: "linear-gradient(180deg, #2A2621 0%, #3A3630 100%)",
                  border: "1px solid rgba(251,246,238,0.08)",
                  boxShadow: "0 24px 60px rgba(42,38,33,0.18)",
                  display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center",
                  overflow: "hidden" }}>
      {/* subtle vertical line suggesting a building edge */}
      <div style={{ position: "absolute", left: 80, top: 40, bottom: 40,
                     width: 1, background: "var(--sand-100)", opacity: 0.08 }}/>
      <div style={{ position: "absolute", right: 80, top: 40, bottom: 40,
                     width: 1, background: "var(--sand-100)", opacity: 0.08 }}/>
      <div className="ar-display foil" style={{ fontSize: 132 }}>
        العَليـــاء
      </div>
      <div style={{ height: 1, width: 100, background: "var(--bronze-500)",
                     opacity: 0.85, margin: "32px 0 24px" }}/>
      <div className="foil" style={{ fontFamily: "var(--f-sans)",
                                      fontWeight: 300, fontSize: 38,
                                      letterSpacing: "0.36em",
                                      textIndent: "0.36em",
                                      textTransform: "uppercase" }}>
        Al Alyaa
      </div>
      <div style={{ fontFamily: "var(--f-sans)", fontWeight: 400,
                    fontSize: 10, letterSpacing: "0.48em",
                    textIndent: "0.48em", textTransform: "uppercase",
                    color: "var(--bronze-300)", marginTop: 16 }}>
        Developments
      </div>
    </div>

    <div style={{ position: "absolute", bottom: 44, left: 64, right: 64,
                  display: "flex", justifyContent: "space-between",
                  color: "var(--obsidian-800)" }}>
      <div className="mark-2" style={{ opacity: 0.7 }}>Signage</div>
      <div className="pgn" style={{ opacity: 0.75 }}>23 / 25</div>
    </div>
    <div style={{ position: "absolute", bottom: 80, left: 64, right: 64,
                  height: 1, background: "var(--obsidian-900)", opacity: 0.22 }}/>
  </section>
);

/* ── 25 · The Horizon ───────────────────────────────────────── */
const P25_Horizon = () => (
  <section className="pl pl--obsidian-deep" data-screen-label="24 Horizon">
    <div style={{ position: "absolute", top: 44, left: 64, right: 64,
                  display: "flex", justifyContent: "space-between",
                  color: "var(--obsidian-800)" }}>
      <div className="mark" style={{ opacity: 0.7 }}>Al Alyaa · Developments</div>
      <div className="mark-2" style={{ opacity: 0.5 }}>Part IV · Closing</div>
    </div>

    <div style={{ position: "absolute", inset: 0,
                  display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center",
                  color: "var(--obsidian-900)", textAlign: "center" }}>
      <div className="mark" style={{ color: "var(--bronze-600)",
                                       marginBottom: 36 }}>
        The Horizon
      </div>
      <div className="serif-italic" style={{ fontSize: 120,
                                               lineHeight: 1.02,
                                               color: "var(--obsidian-950)",
                                               letterSpacing: "-0.02em",
                                               maxWidth: 1400 }}>
        The icons we build<br/>
        is the <span style={{ color: "var(--bronze-600)" }}>argument</span> we make.
      </div>
      <div style={{ height: 1, width: 120, background: "var(--bronze-600)",
                     margin: "52px 0 32px", opacity: 0.9 }}/>
      <div className="ar-display" style={{ fontSize: 52,
                                             color: "var(--bronze-600)",
                                             fontWeight: 400 }}>
        العلامات التي نَبنِيها هي قِصَتنا
      </div>

      <div className="mark" style={{ marginTop: 84,
                                       color: "var(--obsidian-700)",
                                       opacity: 0.7 }}>
        العَليـاء &nbsp;·&nbsp; Al Alyaa
      </div>
    </div>

    <div style={{ position: "absolute", bottom: 44, left: 64, right: 64,
                  display: "flex", justifyContent: "space-between",
                  color: "var(--obsidian-800)" }}>
      <div className="mark-2" style={{ opacity: 0.5 }}>The Horizon</div>
      <div className="pgn" style={{ opacity: 0.7 }}>24 / 25</div>
    </div>
  </section>
);

/* ── 26 · Colophon ──────────────────────────────────────────── */
const P26_Colophon = () => (
  <section className="pl pl--sand" data-screen-label="25 Colophon">
    <RunHead part="IV" section="Applications"/>
    <RunFoot page={25} total={25} chapter="Colophon" outer="right"/>

    <div style={{ position: "absolute", top: 160, left: 64, right: 64 }}>
      <PageTitle number="4.5" section="Applications"
                  title="Colophon" titleAr="تَوقــيع"/>
    </div>

    <div style={{ position: "absolute", top: 400, left: 64, right: 64,
                  bottom: 140,
                  display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 80 }}>
      <div>
        <div className="body-copy" style={{ fontSize: 16, maxWidth: 560 }}>
          Al Alyaa Developments is a regional investment platform operating
          under the Arab Investment Alliance. This volume is the foundational
          document of its corporate identity — prepared in Cairo, in MMXXVI,
          for the generation that will inherit it.
          <br/><br/>
          Nothing in this book is decorative. Every element is a rule for
          the work that follows.
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {[
          ["Typeset in",   "Alexandria · Cormorant Garamond"],
          ["Palette",      "Anchor · Paper · Clay — Dunes at Dawn"],
          ["Motif",        "Arch Set · 12 × 12 grid · 1.5u stroke"],
          ["Printed on",   "Mohawk Superfine 148 gsm · Soft-touch laminate"],
          ["Format",       "240 × 336 mm · Swiss binding"],
          ["Edition",      "Volume II · First Printing · MMXXVI"],
          ["Issued by",    "Al Alyaa Developments · Cairo"],
          ["Chairman",     "Ezzeldin Kamal"],
        ].map(([k, v], i) => (
          <div key={i} style={{ display: "grid",
                                 gridTemplateColumns: "160px 1fr",
                                 gap: 24, padding: "14px 0",
                                 borderBottom: "1px solid var(--line-soft)" }}>
            <div className="mark" style={{ fontSize: 10, opacity: 0.6 }}>{k}</div>
            <div className="body-copy" style={{ fontSize: 14, fontWeight: 400 }}>{v}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

Object.assign(window, { P21_DividerIV, P22_Stationery, P23_Digital,
                         P24_Signage, P25_Horizon, P26_Colophon });
