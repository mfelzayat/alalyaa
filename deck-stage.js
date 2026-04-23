/* ============================================================
   ALALYAA · DECK STAGE CONTROLLER
   deck-stage.js
   ============================================================ */

(function () {
  'use strict';

  /**
   * DeckStage — manages slide transitions, navigation chrome,
   * keyboard controls, and touch swipe for a .deck element.
   */
  function DeckStage(deckEl) {
    if (!deckEl) return;

    this.deck       = deckEl;
    this.slides     = Array.from(deckEl.querySelectorAll('.slide'));
    this.total      = this.slides.length;
    this.current    = 0;
    this.animating  = false;

    this._init();
  }

  /* --------------------------------------------------------
     INITIALISATION
  -------------------------------------------------------- */

  DeckStage.prototype._init = function () {
    if (this.total === 0) return;

    // Activate first slide immediately (no animation on load)
    this.slides[0].classList.add('slide--active');

    this.buildProgress();
    this.buildNav();
    this.buildCounter();
    this.buildArrows();

    this.updateProgress();
    this.updateNav();
    this.updateCounter();

    this.bindKeys();
    this.bindTouch();
  };

  /* --------------------------------------------------------
     NAVIGATION
  -------------------------------------------------------- */

  DeckStage.prototype.goTo = function (index, animate) {
    animate = animate !== false;

    if (index < 0 || index >= this.total) return;
    if (index === this.current) return;
    if (this.animating) return;

    this.animating = true;

    var prev    = this.current;
    var next    = index;
    var prevEl  = this.slides[prev];
    var nextEl  = this.slides[next];
    var self    = this;

    if (!animate) {
      prevEl.classList.remove('slide--active');
      nextEl.classList.add('slide--active');
      this.current = next;
      this.animating = false;
      this.updateProgress();
      this.updateNav();
      this.updateCounter();
      return;
    }

    // Mark current slide as exiting
    prevEl.classList.add('slide--exit');
    prevEl.classList.remove('slide--active');

    // Double rAF trick: ensure the exit class is painted before we
    // apply the enter state, preventing a single-frame glitch.
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        nextEl.classList.add('slide--active');
        self.current = next;
        self.updateProgress();
        self.updateNav();
        self.updateCounter();

        // Clean up exit class after transition completes
        var TRANSITION_DURATION = 700; // ms — slightly longer than CSS
        setTimeout(function () {
          prevEl.classList.remove('slide--exit');
          self.animating = false;
        }, TRANSITION_DURATION);
      });
    });
  };

  DeckStage.prototype.next = function () {
    this.goTo(this.current + 1);
  };

  DeckStage.prototype.prev = function () {
    this.goTo(this.current - 1);
  };

  /* --------------------------------------------------------
     BUILD NAV ELEMENTS
  -------------------------------------------------------- */

  DeckStage.prototype.buildNav = function () {
    var nav  = document.createElement('nav');
    nav.className = 'deck-nav';
    nav.setAttribute('aria-label', 'Slide navigation');

    var self = this;

    for (var i = 0; i < this.total; i++) {
      var dot = document.createElement('button');
      dot.className = 'deck-nav__dot';
      dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
      dot.setAttribute('data-index', String(i));

      (function (idx) {
        dot.addEventListener('click', function () {
          self.goTo(idx);
        });
      }(i));

      nav.appendChild(dot);
    }

    document.body.appendChild(nav);
    this._navEl = nav;
  };

  DeckStage.prototype.buildProgress = function () {
    var bar = document.createElement('div');
    bar.className = 'deck-progress';
    bar.setAttribute('role', 'progressbar');
    bar.setAttribute('aria-valuemin', '0');
    bar.setAttribute('aria-valuemax', '100');
    document.body.appendChild(bar);
    this._progressEl = bar;
  };

  DeckStage.prototype.buildCounter = function () {
    var counter = document.createElement('div');
    counter.className = 'deck-counter';
    counter.setAttribute('aria-live', 'polite');
    document.body.appendChild(counter);
    this._counterEl = counter;
  };

  DeckStage.prototype.buildArrows = function () {
    var self = this;

    var prev = document.createElement('button');
    prev.className = 'deck-nav__arrow deck-nav__arrow--prev';
    prev.setAttribute('aria-label', 'Previous slide');
    prev.innerHTML = '&#8592;';
    prev.addEventListener('click', function () { self.prev(); });

    var next = document.createElement('button');
    next.className = 'deck-nav__arrow deck-nav__arrow--next';
    next.setAttribute('aria-label', 'Next slide');
    next.innerHTML = '&#8594;';
    next.addEventListener('click', function () { self.next(); });

    document.body.appendChild(prev);
    document.body.appendChild(next);

    this._arrowPrev = prev;
    this._arrowNext = next;
  };

  /* --------------------------------------------------------
     UPDATE CHROME
  -------------------------------------------------------- */

  DeckStage.prototype.updateNav = function () {
    if (!this._navEl) return;
    var dots = this._navEl.querySelectorAll('.deck-nav__dot');
    dots.forEach(function (dot, i) {
      if (i === this.current) {
        dot.classList.add('deck-nav__dot--active');
        dot.setAttribute('aria-current', 'true');
      } else {
        dot.classList.remove('deck-nav__dot--active');
        dot.removeAttribute('aria-current');
      }
    }.bind(this));
  };

  DeckStage.prototype.updateProgress = function () {
    if (!this._progressEl) return;
    var pct = this.total > 1
      ? ((this.current / (this.total - 1)) * 100).toFixed(2)
      : 100;
    this._progressEl.style.width = pct + '%';
    this._progressEl.setAttribute('aria-valuenow', String(pct));
  };

  DeckStage.prototype.updateCounter = function () {
    if (!this._counterEl) return;
    var cur  = String(this.current + 1).padStart(2, '0');
    var tot  = String(this.total).padStart(2, '0');
    this._counterEl.textContent = cur + ' / ' + tot;

    // Update arrow disabled states
    if (this._arrowPrev) {
      this._arrowPrev.disabled = this.current === 0;
    }
    if (this._arrowNext) {
      this._arrowNext.disabled = this.current === this.total - 1;
    }
  };

  /* --------------------------------------------------------
     KEYBOARD BINDINGS
  -------------------------------------------------------- */

  DeckStage.prototype.bindKeys = function () {
    var self = this;

    document.addEventListener('keydown', function (e) {
      // Ignore events inside inputs / textareas
      if (/^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)) return;

      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
          e.preventDefault();
          self.next();
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
          e.preventDefault();
          self.prev();
          break;
        case 'Home':
          e.preventDefault();
          self.goTo(0);
          break;
        case 'End':
          e.preventDefault();
          self.goTo(self.total - 1);
          break;
        default:
          break;
      }
    });
  };

  /* --------------------------------------------------------
     TOUCH / SWIPE BINDINGS
  -------------------------------------------------------- */

  DeckStage.prototype.bindTouch = function () {
    var self       = this;
    var startX     = 0;
    var startY     = 0;
    var THRESHOLD  = 40; // px

    this.deck.addEventListener('touchstart', function (e) {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }, { passive: true });

    this.deck.addEventListener('touchend', function (e) {
      var dx = e.changedTouches[0].clientX - startX;
      var dy = e.changedTouches[0].clientY - startY;

      // Only trigger if horizontal swipe dominates
      if (Math.abs(dx) < THRESHOLD) return;
      if (Math.abs(dy) > Math.abs(dx)) return;

      if (dx < 0) {
        self.next();
      } else {
        self.prev();
      }
    }, { passive: true });
  };

  /* --------------------------------------------------------
     AUTO-INSTANTIATE ON DOM READY
  -------------------------------------------------------- */

  document.addEventListener('DOMContentLoaded', function () {
    var deckEl = document.querySelector('.deck');
    if (deckEl) {
      window._deckStage = new DeckStage(deckEl);
    }
  });

}());
