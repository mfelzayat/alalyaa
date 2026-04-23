/* ───────────────────────────────────────────────────────────────
   Al Alyaa · Brand Book v2 · Tweaks Panel
   A small floating control — shown when the host toggles Tweaks on.
   Currently exposes: which motif P18 uses.
   ─────────────────────────────────────────────────────────────── */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "motif": "arch"
}/*EDITMODE-END*/;

window.__AL_TWEAKS__ = { ...TWEAK_DEFAULTS };

const TweaksPanel = () => {
  const [open, setOpen] = React.useState(false);
  const [motif, setMotif] = React.useState(TWEAK_DEFAULTS.motif);

  React.useEffect(() => {
    const onMsg = (e) => {
      if (!e.data || typeof e.data !== "object") return;
      if (e.data.type === "__activate_edit_mode") setOpen(true);
      if (e.data.type === "__deactivate_edit_mode") setOpen(false);
    };
    window.addEventListener("message", onMsg);
    // Announce availability AFTER listener is attached
    try {
      window.parent.postMessage({ type: "__edit_mode_available" }, "*");
    } catch (_) {}
    return () => window.removeEventListener("message", onMsg);
  }, []);

  const setMotifKey = (k) => {
    const apply = () => {
      setMotif(k);
      window.__AL_TWEAKS__.motif = k;
      window.dispatchEvent(new CustomEvent("al-tweaks-change",
                                             { detail: { motif: k }}));
      try {
        window.parent.postMessage({
          type: "__edit_mode_set_keys",
          edits: { motif: k }
        }, "*");
      } catch (_) {}
    };
    if (document.startViewTransition) {
      try { document.startViewTransition(apply); }
      catch (_) { apply(); }
    } else {
      apply();
    }
  };

  if (!open) return null;

  const options = [
    ["muqarnas", "Muqarnas Node",   "Honeycomb vault cell"],
    ["arch",     "Arch Set",        "Pointed colonnade"],
    ["alif",     "Alif Stroke",     "The letter ا"],
    ["lattice",  "Mashrabiya",      "Turned-wood screen"],
    ["horizon",  "Horizon Rule",    "Datum + aspiration"],
    ["minaret",  "Minaret (orig.)", "First draft"],
  ];

  return (
    <div style={{
      position: "fixed", bottom: 24, right: 24, zIndex: 9999,
      background: "#FBF6EE",
      color: "#2A2621",
      border: "1px solid rgba(42,38,33,0.15)",
      boxShadow: "0 12px 40px rgba(42,38,33,0.25)",
      padding: "22px 24px 20px",
      width: 320,
      fontFamily: "Alexandria, Helvetica, sans-serif",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between",
                     alignItems: "baseline", marginBottom: 16 }}>
        <div style={{ fontSize: 10, fontWeight: 500,
                       letterSpacing: "0.42em", textIndent: "0.42em",
                       textTransform: "uppercase",
                       color: "#9D6A4C" }}>Tweaks</div>
        <div style={{ fontSize: 10, opacity: 0.5, letterSpacing: "0.18em",
                       textTransform: "uppercase" }}>P18 · Motif</div>
      </div>

      <div style={{ fontSize: 13, fontWeight: 300, lineHeight: 1.45,
                     color: "#5F574C", marginBottom: 14 }}>
        Cycle through motif options. Each applies system-wide on
        Slide 18 (The Motif). Changes persist.
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {options.map(([k, name, sub]) => {
          const active = motif === k;
          return (
            <button key={k} onClick={() => setMotifKey(k)}
              style={{
                textAlign: "left",
                background: active ? "#F1E7D5" : "transparent",
                border: "none",
                borderLeft: active ? "2px solid #9D6A4C" : "2px solid transparent",
                padding: "10px 14px 10px 12px",
                cursor: "pointer",
                display: "flex", justifyContent: "space-between",
                alignItems: "baseline",
                fontFamily: "inherit",
                color: "inherit",
              }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: active ? 500 : 400 }}>
                  {name}
                </div>
                <div style={{ fontSize: 10, opacity: 0.6, marginTop: 2,
                               fontStyle: "italic",
                               fontFamily: "'Cormorant Garamond', serif" }}>
                  {sub}
                </div>
              </div>
              {active && <div style={{ fontSize: 10, color: "#9D6A4C",
                                         letterSpacing: "0.18em" }}>ACTIVE</div>}
            </button>
          );
        })}
      </div>
    </div>
  );
};

Object.assign(window, { TweaksPanel, TWEAK_DEFAULTS });
