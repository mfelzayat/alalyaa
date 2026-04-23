/* ───────────────────────────────────────────────────────────────
   Al Alyaa · Brand Book · Motion Controller
   Orchestrates slide-entry animations and cross-slide transitions.
   ─────────────────────────────────────────────────────────────── */

(() => {
  // Wait for deck-stage + slides to be present
  const init = () => {
    const deck = document.querySelector("deck-stage");
    if (!deck) { requestAnimationFrame(init); return; }

    // Replay entry animations on activation
    const armEntry = (slide) => {
      if (!slide) return;
      slide.removeAttribute("data-entering");
      // force reflow to restart CSS animations
      void slide.offsetWidth;
      slide.setAttribute("data-entering", "true");
      // remove the attribute once animations settle (clean DOM)
      clearTimeout(slide._alTimer);
      slide._alTimer = setTimeout(() => {
        slide.removeAttribute("data-entering");
      }, 1600);
    };

    // First slide — arm on next frame once scaled
    setTimeout(() => {
      const first = deck.querySelector("section.pl");
      if (first) armEntry(first);
    }, 80);

    // Subsequent navigation
    deck.addEventListener("slidechange", (e) => {
      const { slide, previousSlide, reason } = e.detail;
      if (!slide) return;

      const doIt = () => armEntry(slide);

      // Use View Transitions API for cross-slide morph if available
      if (document.startViewTransition && reason !== "init") {
        try {
          document.startViewTransition(() => { doIt(); });
        } catch (_) {
          doIt();
        }
      } else {
        doIt();
      }
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
