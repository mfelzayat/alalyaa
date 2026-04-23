/* ───────────────────────────────────────────────────────────────
   Al Alyaa · Brand Book · EMAAR edition
   Shared chrome: running header, footer, rules, page numbers,
   section numerals, logo wordmark.
   ─────────────────────────────────────────────────────────────── */

/* Logo lock-up — set in Alexandria, the brand typeface */
const Wordmark = ({
  size = 14,
  color = "currentColor",
  accent = "var(--bronze-500)",
  tagline = true,
}) => (
  <div style={{ color, display: "inline-flex", flexDirection: "column",
                lineHeight: 1, alignItems: "flex-start" }}>
    <div style={{ fontFamily: "var(--f-sans)", fontWeight: 600,
                  fontSize: size, letterSpacing: "0.24em",
                  textIndent: "0.24em", textTransform: "uppercase" }}>
      Al Alyaa
    </div>
    {tagline && (
      <div style={{ fontFamily: "var(--f-sans)", fontWeight: 400,
                    fontSize: size * 0.58, letterSpacing: "0.42em",
                    textIndent: "0.42em", textTransform: "uppercase",
                    marginTop: size * 0.42, color: accent }}>
        Developments
      </div>
    )}
  </div>
);

/* Arabic wordmark — same typeface, RTL */
const WordmarkAr = ({ size = 28, color = "currentColor" }) => (
  <div style={{ fontFamily: "var(--f-arabic)", fontWeight: 500,
                direction: "rtl", fontSize: size, lineHeight: 1, color }}>
    العَليــــــــــاء
  </div>
);

/* Running header — worn on every interior plate */
const RunHead = ({ section, part, dark = false }) => (
  <>
    <div className="rh">
      <div className="mark">Al Alyaa · Developments</div>
      <div className="mark-2" style={{ opacity: 0.85 }}>
        Part {part} &nbsp;·&nbsp; {section}
      </div>
    </div>
    <div className="rh-rule"/>
  </>
);

/* Running footer — page number on outer corner */
const RunFoot = ({ page, total = 28, chapter, outer = "right" }) => (
  <>
    <div className="rf-rule"/>
    <div className="rf">
      {outer === "left" ? (
        <>
          <div className="pgn">{String(page).padStart(2,"0")} &nbsp;/&nbsp; {total}</div>
          <div className="mark-2" style={{ opacity: 0.7 }}>{chapter}</div>
        </>
      ) : (
        <>
          <div className="mark-2" style={{ opacity: 0.7 }}>{chapter}</div>
          <div className="pgn">{String(page).padStart(2,"0")} &nbsp;/&nbsp; {total}</div>
        </>
      )}
    </div>
  </>
);

/* Section number — giant numeral top-right of interior plates */
const SectionNumeral = ({ n, color = "var(--bronze-500)" }) => (
  <div style={{ position: "absolute", top: 120, right: 64,
                fontFamily: "var(--f-sans)", fontWeight: 200,
                fontSize: 140, lineHeight: 1, color,
                letterSpacing: "-0.02em", opacity: 0.15 }}>
    {String(n).padStart(2, "0")}
  </div>
);

/* Plate title — the one-line page header */
const PageTitle = ({ number, section, title, titleAr }) => (
  <div style={{ marginTop: 0 }}>
    <div style={{ display: "flex", alignItems: "baseline", gap: 20,
                  marginBottom: 32 }}>
      <div className="mark" style={{ color: "var(--bronze-600)",
                                      letterSpacing: "0.32em" }}>{number}</div>
      <div className="mark" style={{ opacity: 0.5 }}>{section}</div>
    </div>
    <div style={{ fontFamily: "var(--f-sans)", fontWeight: 300,
                  fontSize: 72, lineHeight: 1.0,
                  letterSpacing: "-0.015em", color: "var(--ink)" }}>
      {title}
    </div>
    {titleAr && (
      <div className="ar-display" style={{ fontSize: 40, marginTop: 16,
                                            color: "var(--obsidian-700)",
                                            fontWeight: 400 }}>
        {titleAr}
      </div>
    )}
  </div>
);

Object.assign(window, { Wordmark, WordmarkAr, RunHead, RunFoot,
                         SectionNumeral, PageTitle });
