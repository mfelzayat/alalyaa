/* ── ALIAA Guideline · English wordmark + Dual lockup ─────────── */

/* Slide 8 — English Wordmark (mirrors GWordmark) */
const GWordmarkEN = () => (
  <section className="g">
    <RunningHeader n={8} section="THE WORDMARK · EN"/>
    <RunningFooter n={8} section="The Wordmark · EN"/>
    <div style={{ position: "absolute", top: 180, left: 64, right: 64, bottom: 120,
                   display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 72 }}>
      <div>
        <PageHeader number="2.2" section="CORE ELEMENTS"/>
        <PageTitle italic="English Wordmark" roman="T H E &nbsp; L A T I N &nbsp; L O C K U P"/>

        <div className="body-copy" style={{ marginTop: 48, maxWidth: 440 }}>
          The Latin wordmark is the international voice of ALALYAA &mdash;
          used across English-speaking markets, digital surfaces and
          co-branded applications. It extends the identity outward
          while the Arabic mark holds the centre.
        </div>

        <div className="body-copy" style={{ marginTop: 20, maxWidth: 440 }}>
          Set in a single weight with even, generous letter-spacing,
          the wordmark reads as a quiet signature &mdash; never shouted,
          always set with confidence and with ample breathing space.
        </div>

        <div className="body-copy" style={{ marginTop: 20, maxWidth: 440 }}>
          Never stretch, re-space, or re-colour the Latin wordmark.
          Tracking, weight and baseline are fixed. Treat it as a
          single bespoke asset &mdash; not typography.
        </div>

        <div style={{ marginTop: 40, display: "flex", gap: 16, flexWrap: "wrap" }}>
          <div className="foil-chip">◆ BLACK FOIL</div>
          <div className="foil-chip">◆ FIXED TRACKING</div>
        </div>
      </div>

      <FoilFrame label="2.2 · LATIN WORDMARK · BLACK ON PAPER">
        <AliaaWordmark size={88} color="var(--ink)"/>
      </FoilFrame>
    </div>
  </section>
);

/* Slide 9 — English Clear Zone (mirrors GClearZone) */
const GClearZoneEN = () => (
  <section className="g g--sand">
    <RunningHeader n={9} section="CLEAR ZONE · EN"/>
    <RunningFooter n={9} section="Clear Zone · EN"/>
    <div style={{ position: "absolute", top: 180, left: 64, right: 64, bottom: 120,
                   display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 72 }}>
      <div>
        <PageHeader number="2.3" section="CORE ELEMENTS"/>
        <PageTitle italic="Clear Zone" roman="L A T I N &nbsp;·&nbsp; P R O P O R T I O N"/>

        <div className="body-copy" style={{ marginTop: 48, maxWidth: 440 }}>
          The Latin clear zone is defined by the cap-height of the
          letter <em>A</em> &mdash; the first vertical in the wordmark.
          No typographic or graphic element should intrude within
          this space.
        </div>

        <div className="body-copy" style={{ marginTop: 20, maxWidth: 440 }}>
          Apply the same rule in all contexts, print and screen.
          The clear zone scales with the wordmark. Where possible,
          extend it &mdash; let the mark breathe.
        </div>
      </div>

      <div style={{ position: "relative", background: "var(--paper)",
                     border: "1px solid var(--rule-2)", padding: 64,
                     display: "flex", alignItems: "center", justifyContent: "center" }}>
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
                       padding: "70px 60px" }}>
          <AliaaWordmark size={72} color="var(--ink)"/>
          <div style={{ position: "absolute", top: -24, left: 0, right: 0,
                         textAlign: "center", fontFamily: "var(--f-sans)",
                         fontSize: 10, letterSpacing: "0.3em",
                         color: "var(--foil)" }}>X &nbsp;·&nbsp; CLEAR</div>
        </div>

        <div className="spaced-3" style={{ position: "absolute", bottom: 20, left: 24,
                                              fontSize: 10, opacity: 0.55 }}>
          2.3 &nbsp;·&nbsp; C L E A R &nbsp; Z O N E &nbsp;·&nbsp; X = C A P &nbsp; H E I G H T
        </div>
      </div>
    </div>
  </section>
);

/* Slide 10 — Dual Lockup / Co-brand (Arabic + English together) */
const GDualLockup = () => (
  <section className="g">
    <RunningHeader n={10} section="DUAL LOCKUP"/>
    <RunningFooter n={10} section="Dual Lockup"/>
    <div style={{ position: "absolute", top: 180, left: 64, right: 64, bottom: 120 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr",
                     gap: 72, alignItems: "start" }}>
        <div>
          <PageHeader number="2.4" section="CORE ELEMENTS"/>
          <PageTitle italic="Dual Lockup" roman="A R A B I C &nbsp;·&nbsp; L A T I N"/>

          <div className="body-copy" style={{ marginTop: 48, maxWidth: 440 }}>
            Where both scripts must be shown, the co-brand lockup places
            the Arabic wordmark at origin, a thin foil rule between, and
            the Latin wordmark in echo. The Arabic always leads &mdash; in
            reading order, and in visual weight.
          </div>

          <div className="body-copy" style={{ marginTop: 20, maxWidth: 440 }}>
            Use the vertical stack for formal, centred applications
            (covers, titles, signage). Use the horizontal variant for
            headers, letterheads and runs of text where height is
            constrained.
          </div>

          <div className="body-copy" style={{ marginTop: 20, maxWidth: 440 }}>
            The proportion between the two marks is fixed. Never
            isolate one script inside the lockup, re-weight the rule,
            or swap the order.
          </div>

          <div style={{ marginTop: 40, display: "flex", gap: 16, flexWrap: "wrap" }}>
            <div className="foil-chip">◆ ARABIC LEADS</div>
            <div className="foil-chip">◆ FIXED RATIO</div>
          </div>
        </div>

        {/* Two lockup panels stacked — vertical + horizontal */}
        <div style={{ display: "grid", gridTemplateRows: "1.3fr 1fr", gap: 20 }}>
          {/* Vertical stack */}
          <div style={{ position: "relative", background: "var(--paper-2)",
                         border: "1px solid var(--rule-2)",
                         display: "flex", alignItems: "center", justifyContent: "center",
                         padding: "40px 60px" }}>
            <div className="crosshair" style={{ top: 12, left: 12 }}/>
            <div className="crosshair" style={{ top: 12, right: 12 }}/>
            <div className="crosshair" style={{ bottom: 12, left: 12 }}/>
            <div className="crosshair" style={{ bottom: 12, right: 12 }}/>

            <AliaaLockup size={64} color="var(--ink)"/>

            <div className="spaced-3" style={{ position: "absolute", bottom: 14, left: 20,
                                                  fontSize: 9, opacity: 0.5 }}>
              2.4.a &nbsp;·&nbsp; V E R T I C A L &nbsp; S T A C K
            </div>
          </div>

          {/* Horizontal (dark) */}
          <div style={{ position: "relative", background: "var(--ink)",
                         color: "var(--paper)",
                         display: "flex", alignItems: "center", justifyContent: "center",
                         padding: "30px 50px" }}>
            <div className="crosshair" style={{ top: 12, left: 12, color: "var(--foil)" }}/>
            <div className="crosshair" style={{ top: 12, right: 12, color: "var(--foil)" }}/>
            <div className="crosshair" style={{ bottom: 12, left: 12, color: "var(--foil)" }}/>
            <div className="crosshair" style={{ bottom: 12, right: 12, color: "var(--foil)" }}/>

            <AliaaLockupHz size={64} color="var(--paper)"/>

            <div className="spaced-3" style={{ position: "absolute", bottom: 14, left: 20,
                                                  fontSize: 9, opacity: 0.55,
                                                  color: "var(--foil)" }}>
              2.4.b &nbsp;·&nbsp; H O R I Z O N T A L &nbsp; &middot; &nbsp; P A P E R &nbsp; O N &nbsp; I N K
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, { GWordmarkEN, GClearZoneEN, GDualLockup });
