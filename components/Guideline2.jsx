/* ── Guideline slides 07-13 ────────────────────────────────────── */

const GClearZone = () => (
  <section className="g g--sand">
    <RunningHeader n={7} section="CLEAR ZONE"/>
    <RunningFooter n={7} section="Clear Zone"/>
    <div style={{ position: "absolute", top: 180, left: 64, right: 64, bottom: 120,
                   display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 72 }}>
      <div>
        <PageHeader number="2.1" section="CORE ELEMENTS"/>
        <PageTitle italic="Clear Zone" roman="S P A C E &nbsp;·&nbsp; P R O P O R T I O N"/>
        <div className="body-copy" style={{ marginTop: 48, maxWidth: 440 }}>
          The clear zone is the space around the wordmark which should
          always remain clear. It is defined by the height of the
          letter <em>Aleph</em> (ا) &mdash; the first vertical stroke of the
          Arabic wordmark.
        </div>
        <div className="body-copy" style={{ marginTop: 20, maxWidth: 440 }}>
          No other graphic element or typography should sit within this
          area. Where possible, increase it to let the wordmark stand
          alone.
        </div>
      </div>

      <div style={{ position: "relative", background: "var(--paper)",
                     border: "1px solid var(--rule-2)", padding: 64,
                     display: "flex", alignItems: "center", justifyContent: "center" }}>
        {/* X markers representing the clear-zone unit */}
        {[
          { t: 22, l: "50%" }, { b: 22, l: "50%" },
          { l: 22, t: "50%" }, { r: 22, t: "50%" }
        ].map((pos, i) => (
          <div key={i} className="spaced-2" style={{
            position: "absolute",
            top: pos.t, bottom: pos.b, left: pos.l, right: pos.r,
            transform: pos.l === "50%" || pos.t === "50%" ? "translate(-50%, -50%)" : "none",
            fontSize: 11, opacity: 0.6
          }}>× X</div>
        ))}

        <div style={{ position: "relative", border: "1px dashed var(--rule-2)",
                       padding: "60px 80px" }}>
          <AliaaArabic size={180} color="var(--ink)"/>
          <div style={{ position: "absolute", top: -24, left: 0, right: 0,
                         textAlign: "center", fontFamily: "var(--f-sans)",
                         fontSize: 10, letterSpacing: "0.3em",
                         color: "var(--foil)" }}>X &nbsp;·&nbsp; CLEAR</div>
        </div>
        <div className="spaced-3" style={{ position: "absolute", bottom: 20, left: 24,
                                              fontSize: 10, opacity: 0.55 }}>
          2.1 &nbsp;·&nbsp; C L E A R &nbsp; Z O N E &nbsp;·&nbsp; X = H E I G H T &nbsp; O F &nbsp; ا
        </div>
      </div>
    </div>
  </section>
);

const GLogoSystem = () => (
  <section className="g">
    <RunningHeader n={11} section="LOGO SYSTEM"/>
    <RunningFooter n={11} section="Logo System"/>
    <div style={{ position: "absolute", top: 180, left: 64, right: 64, bottom: 120 }}>
      <PageHeader number="2.2" section="LOGO SYSTEM"/>
      <PageTitle italic="Four Lockups" roman="O N E &nbsp; S I G N A T U R E"/>

      <div className="rule" style={{ marginTop: 56, marginBottom: 32 }}/>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr",
                     gap: 20, minHeight: 340 }}>
        <FoilFrame label="2.2.1 · PRIMARY · ARABIC">
          <AliaaArabic size={90} color="var(--ink)"/>
        </FoilFrame>
        <FoilFrame label="2.2.2 · LOCKUP · STACKED">
          <AliaaLockup size={54} color="var(--ink)"/>
        </FoilFrame>
        <FoilFrame dark label="2.2.3 · REVERSED">
          <AliaaLockupHz size={40} color="var(--paper)"/>
        </FoilFrame>
        <FoilFrame label="2.2.4 · LATIN">
          <AliaaWordmark size={38} color="var(--ink)"/>
        </FoilFrame>
      </div>

      <div className="rule" style={{ marginTop: 40, marginBottom: 24 }}/>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56 }}>
        <div>
          <div className="section-number" style={{ color: "var(--foil)" }}>DO</div>
          <ul className="body-copy" style={{ marginTop: 14, paddingLeft: 18,
                                               fontSize: 17, lineHeight: 1.7 }}>
            <li>Scale the wordmark proportionally.</li>
            <li>Use ink on paper, or paper on ink.</li>
            <li>Respect the clear zone at all sizes.</li>
          </ul>
        </div>
        <div>
          <div className="section-number" style={{ color: "var(--foil)" }}>DO NOT</div>
          <ul className="body-copy" style={{ marginTop: 14, paddingLeft: 18,
                                               fontSize: 17, lineHeight: 1.7 }}>
            <li>Stretch, slant, outline or apply a drop shadow.</li>
            <li>Re-colour the wordmark in anything but ink, paper or sand-foil.</li>
            <li>Place the wordmark in a box or over a busy image.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const GColour = () => {
  const c = [
    { n: "MIDNIGHT",  role: "Primary",  hex: "#141028", cmyk: "88 / 90 / 45 / 60", pantone: "2767 C", dark: true },
    { n: "DUSK",      role: "Secondary",hex: "#4C4866", cmyk: "72 / 70 / 40 / 30", pantone: "668 C",  dark: true },
    { n: "PAPYRUS",   role: "Ground",   hex: "#F3ECDC", cmyk: "3 / 6 / 15 / 0",    pantone: "7527 C", dark: false },
    { n: "LIMESTONE", role: "Support",  hex: "#D9D3C4", cmyk: "10 / 12 / 22 / 4",  pantone: "7527 C", dark: false },
    { n: "BRASS",     role: "Accent",   hex: "#B8823A", cmyk: "18 / 48 / 88 / 22", pantone: "872 C",  dark: true },
    { n: "CLAY",      role: "Highlight",hex: "#B24A2C", cmyk: "22 / 78 / 90 / 12", pantone: "7586 C", dark: true },
  ];
  return (
    <section className="g">
      <RunningHeader n={12} section="COLOUR PALETTE"/>
      <RunningFooter n={12} section="Colour Palette"/>
      <div style={{ position: "absolute", top: 180, left: 64, right: 64, bottom: 120 }}>
        <PageHeader number="3.0" section="COLOUR PALETTE"/>
        <PageTitle italic="Six Tones," roman="P R I N T &nbsp;·&nbsp; D I G I T A L"/>

        <div className="rule" style={{ marginTop: 56, marginBottom: 28 }}/>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 14,
                       height: 500 }}>
          {c.map((k, i) => (
            <div key={i} style={{
              background: k.hex,
              color: k.dark ? "var(--paper)" : "var(--ink)",
              padding: 22, display: "flex", flexDirection: "column",
              justifyContent: "space-between",
              border: "1px solid var(--rule)"
            }}>
              <div>
                <div className="section-number" style={{ opacity: 0.65, fontSize: 10 }}>3.0.{i+1}</div>
                <div className="title-sans spaced-3" style={{ fontSize: 22, marginTop: 8 }}>{k.n}</div>
                <div className="section-number" style={{ marginTop: 6, fontSize: 10, opacity: 0.7 }}>
                  {k.role.toUpperCase()}
                </div>
              </div>
              <div style={{ fontFamily: "var(--f-sans)", fontSize: 10,
                             letterSpacing: "0.14em", lineHeight: 1.8,
                             opacity: 0.78 }}>
                HEX &nbsp;{k.hex}<br/>
                CMYK &nbsp;{k.cmyk}<br/>
                {k.pantone}
              </div>
            </div>
          ))}
        </div>

        <div className="body-copy" style={{ marginTop: 28, maxWidth: 1100, fontSize: 17 }}>
          A warm, Egyptian-modernist palette drawn from the character of Cairo Play —
          <em> midnight</em> anchors the system, <em>papyrus</em> is its ground, and
          <em> brass</em> with <em>clay</em> carry the voice.
        </div>
      </div>
    </section>
  );
};

const GType = () => (
  <section className="g g--sand">
    <RunningHeader n={13} section="TYPOGRAPHY"/>
    <RunningFooter n={13} section="Typography"/>
    <div style={{ position: "absolute", top: 170, left: 64, right: 64, bottom: 110 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr auto",
                     alignItems: "start", gap: 40, marginBottom: 28 }}>
        <div>
          <PageHeader number="3.1" section="TYPOGRAPHY"/>
          <PageTitle italic="The Type System" roman="F O U R &nbsp; F A M I L I E S &nbsp;·&nbsp; O N E &nbsp; V O I C E"/>
        </div>
        <div style={{ textAlign: "right", fontFamily: "var(--f-sans)",
                       fontSize: 10, letterSpacing: "0.28em",
                       textTransform: "uppercase", color: "var(--foil)",
                       lineHeight: 1.9, paddingTop: 24 }}>
          Latin &nbsp;+&nbsp; Arabic<br/>
          Display &nbsp;·&nbsp; Text
        </div>
      </div>

      <div className="rule" style={{ marginBottom: 28 }}/>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr",
                     gridTemplateRows: "auto auto", columnGap: 56, rowGap: 40 }}>

        {/* ── Latin Display ── */}
        <div style={{ borderTop: "2px solid var(--ink)", paddingTop: 18 }}>
          <div style={{ display: "flex", justifyContent: "space-between",
                         alignItems: "baseline" }}>
            <div className="section-number" style={{ color: "var(--foil)" }}>
              LATIN · DISPLAY
            </div>
            <div className="spaced-3" style={{ fontSize: 9, opacity: 0.55 }}>
              G O O G L E &nbsp; F O N T S
            </div>
          </div>
          <div className="title-sans spaced-3" style={{ fontSize: 22, marginTop: 10,
                                                          fontWeight: 500 }}>PLAY</div>
          <div style={{ fontFamily: "'Play', sans-serif", fontSize: 108,
                         lineHeight: 0.95, marginTop: 14, letterSpacing: "0.02em",
                         textTransform: "uppercase", fontWeight: 700 }}>
            Alalyaa
          </div>
          <div style={{ display: "flex", gap: 14, marginTop: 14, flexWrap: "wrap",
                         fontFamily: "var(--f-sans)", fontSize: 10,
                         letterSpacing: "0.2em", opacity: 0.7 }}>
            <span>REGULAR · 400</span>
            <span>·</span>
            <span>BOLD · 700</span>
            <span>·</span>
            <span>TRACKING +20</span>
          </div>
          <div className="body-copy" style={{ fontSize: 15, marginTop: 10, lineHeight: 1.55 }}>
            A geometric sans with a technical edge. Reserved for
            display &mdash; covers, headlines and signage. Pairs in
            rhythm with Cairo&nbsp;Play across bilingual layouts.
          </div>
        </div>

        {/* ── Arabic Display ── */}
        <div style={{ borderTop: "2px solid var(--ink)", paddingTop: 18 }}>
          <div style={{ display: "flex", justifyContent: "space-between",
                         alignItems: "baseline" }}>
            <div className="section-number" style={{ color: "var(--foil)" }}>
              ARABIC · DISPLAY
            </div>
            <div className="spaced-3" style={{ fontSize: 9, opacity: 0.55 }}>
              G O O G L E &nbsp; F O N T S
            </div>
          </div>
          <div className="title-sans spaced-3" style={{ fontSize: 22, marginTop: 10,
                                                          fontWeight: 500 }}>CAIRO PLAY</div>
          <div className="ar-title" style={{ fontFamily: "'Cairo Play', sans-serif",
                                               fontSize: 110, marginTop: 14, fontWeight: 700,
                                               color: "var(--ink)", lineHeight: 1 }}>
            العُلــــى
          </div>
          <div style={{ display: "flex", gap: 14, marginTop: 14, flexWrap: "wrap",
                         fontFamily: "var(--f-sans)", fontSize: 10,
                         letterSpacing: "0.2em", opacity: 0.7 }}>
            <span>REGULAR · 400</span>
            <span>·</span>
            <span>SEMIBOLD · 600</span>
            <span>·</span>
            <span>BOLD · 700</span>
            <span>·</span>
            <span>BLACK · 800</span>
          </div>
          <div className="body-copy" style={{ fontSize: 15, marginTop: 10, lineHeight: 1.55 }}>
            A contemporary Arabic display face with geometric rhythm
            and distinctive character. Reserved for titles, headlines
            and opening statements in Arabic.
          </div>
        </div>

        {/* ── Latin Text ── */}
        <div style={{ borderTop: "1px solid var(--rule-2)", paddingTop: 18 }}>
          <div style={{ display: "flex", justifyContent: "space-between",
                         alignItems: "baseline" }}>
            <div className="section-number" style={{ color: "var(--foil)" }}>
              LATIN · TEXT
            </div>
            <div className="spaced-3" style={{ fontSize: 9, opacity: 0.55 }}>
              G O O G L E &nbsp; F O N T S
            </div>
          </div>
          <div className="title-sans spaced-3" style={{ fontSize: 20, marginTop: 10,
                                                          fontWeight: 500 }}>PLAY</div>
          <div style={{ fontFamily: "'Play', sans-serif", fontSize: 34,
                         marginTop: 12, fontWeight: 400,
                         letterSpacing: "0", lineHeight: 1.1 }}>
            Aa &nbsp;Bb &nbsp;Cc &nbsp;1234567890
          </div>
          <div style={{ display: "flex", gap: 14, marginTop: 12, flexWrap: "wrap",
                         fontFamily: "var(--f-sans)", fontSize: 10,
                         letterSpacing: "0.2em", opacity: 0.7 }}>
            <span>REGULAR · 400</span>
            <span>·</span>
            <span>BOLD · 700</span>
          </div>
          <div className="body-copy" style={{ fontSize: 15, marginTop: 10, lineHeight: 1.55 }}>
            The same family, set lowercase for running text: body
            copy, UI, labels, captions. A single typeface across
            display and text unifies the voice.
          </div>
        </div>

        {/* ── Arabic Text ── */}
        <div style={{ borderTop: "1px solid var(--rule-2)", paddingTop: 18 }}>
          <div style={{ display: "flex", justifyContent: "space-between",
                         alignItems: "baseline" }}>
            <div className="section-number" style={{ color: "var(--foil)" }}>
              ARABIC · TEXT
            </div>
            <div className="spaced-3" style={{ fontSize: 9, opacity: 0.55 }}>
              G O O G L E &nbsp; F O N T S
            </div>
          </div>
          <div className="title-sans spaced-3" style={{ fontSize: 20, marginTop: 10,
                                                          fontWeight: 500 }}>CAIRO</div>
          <div className="ar-body" style={{ fontFamily: "'Cairo', sans-serif",
                                              fontSize: 30, marginTop: 12,
                                              fontWeight: 500, lineHeight: 1.6,
                                              color: "var(--ink)" }}>
            منصّــة استثماريّــة عربيّــة
          </div>
          <div style={{ display: "flex", gap: 14, marginTop: 12, flexWrap: "wrap",
                         fontFamily: "var(--f-sans)", fontSize: 10,
                         letterSpacing: "0.2em", opacity: 0.7 }}>
            <span>LIGHT · 300</span>
            <span>·</span>
            <span>REGULAR · 400</span>
            <span>·</span>
            <span>MEDIUM · 500</span>
            <span>·</span>
            <span>BOLD · 700</span>
          </div>
          <div className="body-copy" style={{ fontSize: 15, marginTop: 10, lineHeight: 1.55 }}>
            The working horse for Arabic body, UI and long-form text.
            A modern humanist sans that pairs in rhythm with DM&nbsp;Sans
            across bilingual layouts.
          </div>
        </div>
      </div>
    </div>
  </section>
);

const GStationery = () => (
  <section className="g">
    <RunningHeader n={14} section="STATIONERY"/>
    <RunningFooter n={14} section="Stationery"/>
    <div style={{ position: "absolute", top: 180, left: 64, right: 64, bottom: 120 }}>
      <PageHeader number="4.0" section="STATIONERY"/>
      <PageTitle italic="Paper &amp; Foil" roman="L E T T E R H E A D &nbsp;·&nbsp; C A R D &nbsp;·&nbsp; E N V E L O P E"/>

      <div className="rule" style={{ marginTop: 48, marginBottom: 28 }}/>

      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1.3fr 1fr", gap: 24,
                     minHeight: 500 }}>
        {/* Letterhead */}
        <div style={{ background: "var(--paper)", border: "1px solid var(--rule-2)",
                       padding: "28px 30px", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <AliaaArabic size={36} color="var(--ink)"/>
            <div className="spaced-3" style={{ fontSize: 8, opacity: 0.65,
                                                 textAlign: "right", lineHeight: 1.8 }}>
              A L A L Y A A &nbsp; D E V E L O P M E N T S<br/>
              C B D &nbsp; T O W E R &nbsp;·&nbsp; N A C<br/>
              A L A L Y A A . C O M
            </div>
          </div>
          <div className="rule--foil" style={{ margin: "22px 0 18px" }}/>
          <div className="title-display" style={{ fontSize: 20, fontStyle: "italic" }}>
            21 April 2026
          </div>
          <div className="body-copy" style={{ fontSize: 12, lineHeight: 1.6, marginTop: 14 }}>
            Dear Sir or Madam,<br/><br/>
            It is our distinct pleasure to announce our entry into the
            Egyptian market, commencing with a Commercial Administrative
            Tower in the New Administrative Capital CBD &mdash; adjacent
            to the Iconic Tower.
          </div>
          <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-between",
                         fontFamily: "var(--f-sans)", fontSize: 8,
                         letterSpacing: "0.2em", opacity: 0.5 }}>
            <span>4.0 · LETTERHEAD A4</span><span>1 OF 1</span>
          </div>
        </div>

        {/* Business card (ink) */}
        <div style={{ background: "var(--ink)", color: "var(--paper)",
                       padding: 36, display: "flex", flexDirection: "column",
                       justifyContent: "space-between", position: "relative" }}>
          <div className="crosshair" style={{ top: 14, left: 14, color: "var(--foil)" }}/>
          <div className="crosshair" style={{ bottom: 14, right: 14, color: "var(--foil)" }}/>
          <div style={{ textAlign: "center", flex: 1,
                         display: "flex", alignItems: "center", justifyContent: "center" }}>
            <AliaaArabic size={120} color="var(--foil)"/>
          </div>
          <div className="rule--foil" style={{ opacity: 0.5, marginBottom: 18 }}/>
          <div>
            <div className="title-sans spaced-3" style={{ fontSize: 18 }}>EZZELDIN KAMAL</div>
            <div className="spaced-3" style={{ fontSize: 10, color: "var(--foil)",
                                                 marginTop: 6 }}>
              C H A I R M A N &nbsp;·&nbsp; العليـــــاء
            </div>
            <div className="spaced-3" style={{ fontSize: 9, opacity: 0.6, marginTop: 14,
                                                 lineHeight: 1.9 }}>
              + 2 0 1&nbsp;&nbsp;0 0 0 0&nbsp;&nbsp;0 0 0 0<br/>
              E Z Z E L D I N @ A L A L Y A A . C O M
            </div>
          </div>
        </div>

        {/* Envelope */}
        <div style={{ background: "var(--paper-2)", border: "1px solid var(--rule-2)",
                       padding: "28px 30px", display: "flex", flexDirection: "column",
                       justifyContent: "space-between" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <AliaaArabic size={32} color="var(--ink)"/>
            <div className="spaced-3" style={{ fontSize: 8, opacity: 0.6 }}>
              A L A L Y A A &nbsp;·&nbsp; N A C
            </div>
          </div>
          <div>
            <div className="spaced-3" style={{ fontSize: 9, color: "var(--foil)" }}>TO</div>
            <div className="title-display" style={{ fontSize: 22, fontStyle: "italic",
                                                      marginTop: 8, lineHeight: 1.2 }}>
              Architect of Record<br/>CBD · New Capital
            </div>
          </div>
          <div className="spaced-3" style={{ fontSize: 8, opacity: 0.5 }}>
            4.0.3 &nbsp;·&nbsp; E N V E L O P E &nbsp;·&nbsp; B L A C K &nbsp; F O I L
          </div>
        </div>
      </div>

      <div className="body-copy" style={{ marginTop: 22, fontSize: 13, maxWidth: 900 }}>
        <em>Paper &mdash;</em> Everprint Premium, 120 g letterhead &middot; 400 g card &middot; Sand-Foil.
      </div>
    </div>
  </section>
);

const GSignage = () => (
  <section className="g g--ink">
    <RunningHeader n={15} section="SIGNAGE" dark/>
    <RunningFooter n={15} section="Signage" dark/>
    <div style={{ position: "absolute", top: 180, left: 64, right: 64, bottom: 120 }}>
      <PageHeader number="4.1" section="SIGNAGE" color="var(--paper)"/>
      <PageTitle italic="On the Tower," roman="T H E &nbsp; W O R D M A R K &nbsp; S T A N D S" color="var(--paper)"/>

      <div className="rule" style={{ marginTop: 48, marginBottom: 28, background: "rgba(255,255,255,0.2)" }}/>

      <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 48,
                     height: 500 }}>
        {/* Tower rendering */}
        <div style={{ background: "linear-gradient(180deg, #0a0a0c 0%, #141418 100%)",
                       border: "1px solid rgba(255,255,255,0.15)",
                       position: "relative", overflow: "hidden" }}>
          {/* Tower silhouette */}
          <div style={{ position: "absolute", bottom: 0, left: "32%", right: "32%", top: "6%",
                         background: "linear-gradient(180deg, #1a1a1f, #0a0a0c)",
                         borderLeft: "1px solid #2a2a30",
                         borderRight: "1px solid #2a2a30",
                         borderTop: "1px solid #2a2a30" }}>
            {/* Wordmark foil-lit at top */}
            <div style={{ position: "absolute", top: "7%", left: 0, right: 0,
                           textAlign: "center",
                           filter: "drop-shadow(0 0 16px rgba(167,142,90,0.75))" }}>
              <AliaaArabic size={54} color="var(--foil)"/>
            </div>
            {/* Windows */}
            <div style={{ position: "absolute", inset: "22% 10% 4% 10%",
                           display: "grid", gridTemplateColumns: "repeat(6, 1fr)",
                           gridTemplateRows: "repeat(18, 1fr)", gap: 2 }}>
              {Array.from({length: 108}).map((_, i) => (
                <div key={i} style={{
                  background: `rgba(${200+Math.random()*40}, ${170+Math.random()*30}, ${110+Math.random()*40}, ${0.1 + Math.random()*0.6})`
                }}/>
              ))}
            </div>
          </div>
          <div className="spaced-3" style={{ position: "absolute", bottom: 16, left: 18,
                                                fontSize: 9, color: "var(--foil)" }}>
            4.1.1 &nbsp;·&nbsp; C B D &nbsp; T O W E R &nbsp;·&nbsp; N A C
          </div>
        </div>

        {/* Entrance plaque + wayfinding */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <FoilFrame dark label="4.1.2 · LOBBY PLAQUE · BRASS ON GRANITE">
            <AliaaLockup size={52} color="var(--foil)"/>
          </FoilFrame>
          <div style={{ background: "var(--ink-2)", border: "1px solid rgba(255,255,255,0.15)",
                         padding: "18px 22px", color: "var(--paper)" }}>
            <div className="section-number" style={{ color: "var(--foil)", fontSize: 10 }}>
              4.1.3 &nbsp;·&nbsp; W A Y F I N D I N G
            </div>
            <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 8 }}>
              {[["01","LOBBY","البهــو"],["02","INVESTOR FLOOR","طابــق المستثمريــن"],["03","GALLERY","المعــرض"]].map(([n, en, ar], i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "28px 1fr auto",
                                       gap: 14, paddingBottom: 6,
                                       borderBottom: "1px solid rgba(255,255,255,0.1)",
                                       fontSize: 13 }}>
                  <div className="spaced-3" style={{ color: "var(--foil)", fontSize: 10 }}>{n}</div>
                  <div className="title-sans spaced-3" style={{ fontSize: 13 }}>{en}</div>
                  <div className="ar-title" style={{ fontSize: 15, color: "var(--foil)" }}>{ar}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const GColophon = () => (
  <section className="g g--sand">
    <RunningHeader n={16} section="COLOPHON"/>
    <RunningFooter n={16} section="Colophon"/>

    <div style={{ position: "absolute", inset: 0, display: "flex",
                   flexDirection: "column", justifyContent: "space-between",
                   padding: "160px 96px 96px" }}>
      <PageHeader number="5.0" section="COLOPHON"/>

      <div style={{ textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <AliaaArabic size={220} color="var(--ink)"/>
        </div>
        <div className="rule--foil" style={{ maxWidth: 500, margin: "40px auto" }}/>
        <div className="title-display" style={{ fontSize: 20, fontStyle: "italic",
                                                  color: "var(--ink)", lineHeight: 1.6,
                                                  maxWidth: 640, margin: "0 auto" }}>
          Brand Guidelines, Volume I &mdash; issued in April&nbsp;2026.<br/>
          For use across all ALALYAA surfaces. Keep the wordmark sovereign.
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
                     gap: 48, fontSize: 11 }}>
        <div>
          <div className="spaced-3" style={{ color: "var(--foil)", marginBottom: 10 }}>
            T Y P E S E T
          </div>
          <div className="body-copy" style={{ fontSize: 14, lineHeight: 1.7 }}>
            Optima &middot; Cormorant Garamond<br/>
            Amiri &middot; Reem Kufi<br/>
            JetBrains Mono
          </div>
        </div>
        <div>
          <div className="spaced-3" style={{ color: "var(--foil)", marginBottom: 10 }}>
            P R I N T &nbsp; P A R T N E R
          </div>
          <div className="body-copy" style={{ fontSize: 14, lineHeight: 1.7 }}>
            Everprint Premium &middot; Orchid Paper<br/>
            Sand-Foil finishing throughout<br/>
            Saddle-stitched hardcover
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div className="spaced-3" style={{ color: "var(--foil)", marginBottom: 10 }}>
            I S S U E D &nbsp; B Y
          </div>
          <div className="body-copy" style={{ fontSize: 14, lineHeight: 1.7 }}>
            ALALYAA DEVELOPMENTS<br/>
            CBD Tower &middot; NAC &middot; Cairo<br/>
            <em>alalyaa.com</em>
          </div>
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, { GClearZone, GLogoSystem, GColour, GType, GStationery, GSignage, GColophon });
