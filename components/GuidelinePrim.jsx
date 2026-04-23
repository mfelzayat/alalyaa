/* ── ALIAA Guideline · Primitives ──────────────────────────────── */

/* The Alalyaa English wordmark — uses the actual supplied PNG.
   Aspect ratio 1916:382 ≈ 5.02:1. size = display height in px. */
const AliaaWordmark = ({ size = 80, color = "var(--ink)" }) => {
  // If rendered on dark bg, invert with a filter.
  const invert = color === "var(--paper)" || color === "#fff" || color === "white";
  return (
    <img src="assets/logo-en.png" alt="ALALYAA DEVELOPMENTS"
         style={{ height: size, width: "auto", display: "block",
                   filter: invert ? "invert(1)" : "none" }}/>
  );
};

/* The Arabic wordmark — uses the actual supplied PNG.
   Aspect ratio 2156:756 ≈ 2.85:1. size = display height in px. */
const AliaaArabic = ({ size = 160, color = "var(--ink)" }) => {
  const invert = color === "var(--paper)" || color === "#fff" || color === "white" ||
                 color === "var(--foil)" || color === "var(--platinum)";
  return (
    <img src="assets/logo-ar.png" alt="العلياء"
         style={{ height: size, width: "auto", display: "block",
                   filter: invert ? "invert(1)" : "none" }}/>
  );
};

/* Stacked lockup (vertical) — Arabic above, English below. */
const AliaaLockup = ({ size = 80, color = "var(--ink)" }) => (
  <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center",
                 gap: size * 0.45, lineHeight: 1 }}>
    <AliaaArabic size={size * 1.9} color={color}/>
    <div style={{ width: size * 3.2, height: 1, background: color, opacity: 0.3 }}/>
    <AliaaWordmark size={size * 0.42} color={color}/>
  </div>
);

/* Horizontal lockup (Arabic · divider · English) */
const AliaaLockupHz = ({ size = 80, color = "var(--ink)" }) => (
  <div style={{ display: "inline-flex", alignItems: "center", gap: size * 0.5,
                 lineHeight: 1 }}>
    <AliaaArabic size={size * 1.4} color={color}/>
    <div style={{ width: 1, height: size * 0.9, background: color, opacity: 0.35 }}/>
    <AliaaWordmark size={size * 0.36} color={color}/>
  </div>
);

/* Running header: EN logo left, metadata center, AR logo right.
   Used on every non-cover slide. */
const RunningHeader = ({ n, total = 16, section, dark = false }) => {
  const color = dark ? "var(--paper)" : "var(--ink)";
  const rule  = dark ? "rgba(255,255,255,0.18)" : "rgba(14,14,16,0.14)";
  const inv   = dark ? "invert(1)" : "none";
  return (
    <div style={{ position: "absolute", top: 36, left: 56, right: 56,
                   display: "grid", gridTemplateColumns: "1fr auto 1fr",
                   alignItems: "center", gap: 32, color,
                   paddingBottom: 18, borderBottom: `1px solid ${rule}`,
                   zIndex: 5 }}>
      {/* EN logo — left */}
      <img src="assets/logo-en.png" alt="ALALYAA DEVELOPMENTS"
           style={{ height: 28, width: "auto", justifySelf: "start",
                     filter: inv, opacity: 0.92 }}/>

      {/* Center meta */}
      <div style={{ display: "flex", alignItems: "center", gap: 20,
                     fontFamily: "var(--f-sans)", fontSize: 10,
                     letterSpacing: "0.32em", textTransform: "uppercase",
                     opacity: 0.72, whiteSpace: "nowrap" }}>
        <span>{section}</span>
        <span style={{ opacity: 0.45 }}>◆</span>
        <span>{String(n).padStart(2,"0")}&nbsp;/&nbsp;{String(total).padStart(2,"0")}</span>
      </div>

      {/* AR logo — right */}
      <img src="assets/logo-ar.png" alt="العلياء"
           style={{ height: 44, width: "auto", justifySelf: "end",
                     filter: inv, opacity: 0.92 }}/>
    </div>
  );
};

/* Running footer (optional small — edition + page) */
const RunningFooter = ({ n, total = 16, section, dark = false }) => {
  const color = dark ? "var(--paper)" : "var(--ink)";
  const rule  = dark ? "rgba(255,255,255,0.18)" : "rgba(14,14,16,0.14)";
  return (
    <div style={{ position: "absolute", bottom: 36, left: 56, right: 56,
                   display: "flex", justifyContent: "space-between",
                   alignItems: "center", color, paddingTop: 14,
                   borderTop: `1px solid ${rule}`,
                   fontFamily: "var(--f-sans)", fontSize: 9,
                   letterSpacing: "0.3em", textTransform: "uppercase",
                   opacity: 0.58, zIndex: 5 }}>
      <span>Brand Guidelines &middot; Vol III</span>
      <span style={{ fontStyle: "italic", textTransform: "none",
                      letterSpacing: "0.05em", opacity: 0.9 }}>
        {section}
      </span>
      <span>MMXXVI &middot; Alalyaa Developments</span>
    </div>
  );
};

/* Page header — section number + label (used inside slide body) */
const PageHeader = ({ number, section, color = "var(--ink)" }) => (
  <div style={{ display: "flex", alignItems: "baseline", gap: 28,
                 color, opacity: 1, marginBottom: 56 }}>
    <div className="section-number">{number}</div>
    <div className="section-number" style={{ opacity: 0.5 }}>·</div>
    <div className="section-number">{section}</div>
  </div>
);

/* Page title — serif italic + sans combo */
const PageTitle = ({ italic, roman, color = "var(--ink)" }) => (
  <div style={{ color, lineHeight: 0.92 }}>
    {italic && (
      <div className="title-display" style={{ fontSize: 120, fontStyle: "italic" }}>
        {italic}
      </div>
    )}
    {roman && (
      <div className="title-sans spaced-3" style={{ fontSize: 28, marginTop: 18,
                                                      fontWeight: 400, opacity: 0.78 }}>
        {roman}
      </div>
    )}
  </div>
);

/* Foil crosshair frame (for wordmark display) */
const FoilFrame = ({ children, dark = false, label }) => (
  <div style={{ position: "relative", padding: "80px 60px",
                 background: dark ? "var(--ink)" : "var(--paper-2)",
                 color: dark ? "var(--paper)" : "var(--ink)",
                 display: "flex", alignItems: "center", justifyContent: "center",
                 minHeight: 0 }}>
    <div className="crosshair" style={{ top: 16, left: 16 }}/>
    <div className="crosshair" style={{ top: 16, right: 16 }}/>
    <div className="crosshair" style={{ bottom: 16, left: 16 }}/>
    <div className="crosshair" style={{ bottom: 16, right: 16 }}/>
    {label && (
      <div className="spaced-3" style={{ position: "absolute", bottom: 18, left: 24,
                                           fontSize: 10, opacity: 0.5,
                                           fontFamily: "var(--f-sans)" }}>
        {label}
      </div>
    )}
    {children}
  </div>
);

Object.assign(window, { AliaaWordmark, AliaaArabic, AliaaLockup,
                          AliaaLockupHz, PageHeader, PageTitle, FoilFrame,
                          RunningHeader, RunningFooter });
