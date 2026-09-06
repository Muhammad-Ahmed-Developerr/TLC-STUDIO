/* ==========================================================================
   TLC STUDIO LTD - ANIMATIONS JAVASCRIPT
   IntersectionObserver Scroll Reveals, Before/After Slider & Custom Cursor
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveals();
  initCustomCursor();
  initBeforeAfterSliders();
  initAnimatedCounters();
});

/* --------------------------------------------------------------------------
   1. IntersectionObserver Scroll Reveals
   -------------------------------------------------------------------------- */
function initScrollReveals() {
  const revealElements = document.querySelectorAll('[data-reveal]');
  if (!revealElements.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.15
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => revealObserver.observe(el));
}

/* --------------------------------------------------------------------------
   2. Custom Cursor Movement
   -------------------------------------------------------------------------- */
function initCustomCursor() {
  if (window.innerWidth < 1025) return;

  const dot = document.createElement('div');
  const outline = document.createElement('div');
  dot.className = 'cursor-dot';
  outline.className = 'cursor-outline';

  document.body.appendChild(dot);
  document.body.appendChild(outline);
  document.body.classList.add('has-custom-cursor');

  let mouseX = 0, mouseY = 0;
  let outlineX = 0, outlineY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
  });

  function animateOutline() {
    outlineX += (mouseX - outlineX) * 0.15;
    outlineY += (mouseY - outlineY) * 0.15;

    outline.style.left = `${outlineX}px`;
    outline.style.top = `${outlineY}px`;

    requestAnimationFrame(animateOutline);
  }
  animateOutline();

  // Hover triggers
  const interactiveEls = document.querySelectorAll('a, button, input, select, textarea, .luxury-card, .filter-btn');
  interactiveEls.forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });

  const academyEls = document.querySelectorAll('.academy-section, .btn-green, .badge-academy');
  academyEls.forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-academy'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-academy'));
  });
}

/* --------------------------------------------------------------------------
   3. Interactive Before / After Image Slider
   -------------------------------------------------------------------------- */
function initBeforeAfterSliders() {
  const sliders = document.querySelectorAll('.ba-slider-container');

  sliders.forEach(slider => {
    const afterImg = slider.querySelector('.ba-after-img');
    const handle = slider.querySelector('.ba-handle');
    let isDragging = false;

    if (!afterImg || !handle) return;

    function moveSlider(clientX) {
      const rect = slider.getBoundingClientRect();
      let position = clientX - rect.left;
      if (position < 0) position = 0;
      if (position > rect.width) position = rect.width;

      const percentage = (position / rect.width) * 100;
      afterImg.style.width = `${percentage}%`;
      handle.style.left = `${percentage}%`;
    }

    slider.addEventListener('mousedown', (e) => {
      isDragging = true;
      moveSlider(e.clientX);
    });

    window.addEventListener('mousemove', (e) => {
      if (isDragging) moveSlider(e.clientX);
    });

    window.addEventListener('mouseup', () => {
      isDragging = false;
    });

    // Touch Support
    slider.addEventListener('touchstart', (e) => {
      isDragging = true;
      moveSlider(e.touches[0].clientX);
    });

    window.addEventListener('touchmove', (e) => {
      if (isDragging) moveSlider(e.touches[0].clientX);
    });

    window.addEventListener('touchend', () => {
      isDragging = false;
    });
  });
}

/* --------------------------------------------------------------------------
   4. Animated Metric Counters
   -------------------------------------------------------------------------- */
function initAnimatedCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const targetNum = parseInt(target.getAttribute('data-counter'), 10);
        let currentNum = 0;
        const increment = Math.ceil(targetNum / 40);
        const timer = setInterval(() => {
          currentNum += increment;
          if (currentNum >= targetNum) {
            target.textContent = targetNum;
            clearInterval(timer);
          } else {
            target.textContent = currentNum;
          }
        }, 30);
        obs.unobserve(target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}
