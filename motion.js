/* ============================================================
   ALALYAA · MOTION ENHANCEMENTS
   motion.js
   ============================================================ */

(function () {
  'use strict';

  /* ----------------------------------------------------------
     PARALLAX — mousemove-driven depth parallax
     Elements with [data-depth] move proportionally to cursor.
     data-depth="0.2" = subtle, data-depth="1" = full range
  ---------------------------------------------------------- */

  function initParallax() {
    var elements = Array.from(document.querySelectorAll('[data-depth]'));
    if (!elements.length) return;

    var mouseX = 0;
    var mouseY = 0;
    var rafId  = null;

    function applyParallax() {
      var cx = window.innerWidth  / 2;
      var cy = window.innerHeight / 2;
      var dx = mouseX - cx;
      var dy = mouseY - cy;

      elements.forEach(function (el) {
        var depth = parseFloat(el.getAttribute('data-depth')) || 0.2;
        var tx    = dx * depth * 0.04;
        var ty    = dy * depth * 0.04;
        el.style.transform = 'translate3d(' + tx + 'px, ' + ty + 'px, 0)';
      });

      rafId = null;
    }

    document.addEventListener('mousemove', function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!rafId) {
        rafId = requestAnimationFrame(applyParallax);
      }
    }, { passive: true });

    // Reset transform when pointer leaves the window
    document.addEventListener('mouseleave', function () {
      elements.forEach(function (el) {
        el.style.transform = 'translate3d(0, 0, 0)';
      });
    });
  }

  /* ----------------------------------------------------------
     GRAIN TEXTURE — canvas-based noise overlay
     Applied to all elements with class .grain
  ---------------------------------------------------------- */

  function initGrainTexture() {
    var grainEls = Array.from(document.querySelectorAll('.grain'));
    if (!grainEls.length) return;

    var SIZE   = 200; // canvas tile size
    var canvas = document.createElement('canvas');
    canvas.width  = SIZE;
    canvas.height = SIZE;

    var ctx    = canvas.getContext('2d');
    var image  = ctx.createImageData(SIZE, SIZE);
    var data   = image.data;

    for (var i = 0; i < data.length; i += 4) {
      var value = Math.floor(Math.random() * 255);
      data[i]     = value; // R
      data[i + 1] = value; // G
      data[i + 2] = value; // B
      data[i + 3] = Math.floor(Math.random() * 28) + 4; // A (very subtle)
    }

    ctx.putImageData(image, 0, 0);

    var dataUrl = canvas.toDataURL('image/png');

    grainEls.forEach(function (el) {
      var existing = window.getComputedStyle(el).backgroundImage;
      var grain    = 'url("' + dataUrl + '")';

      if (existing && existing !== 'none') {
        el.style.backgroundImage = grain + ', ' + existing;
      } else {
        el.style.backgroundImage = grain;
      }

      el.style.backgroundRepeat   = 'repeat, ' + (existing && existing !== 'none' ? 'no-repeat' : 'repeat');
      el.style.backgroundSize     = SIZE + 'px ' + SIZE + 'px, cover';
      el.style.backgroundPosition = '0 0, center';
    });
  }

  /* ----------------------------------------------------------
     INIT
  ---------------------------------------------------------- */

  document.addEventListener('DOMContentLoaded', function () {
    initParallax();
    initGrainTexture();
  });

}());
