/* ==========================================================================
   TLC STUDIO LTD - MAIN JAVASCRIPT LOGIC
   Header, Ecosystem Switcher, Modals, Steppers, Filters & Validation
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileNav();
  initBrandSwitcher();
  initAccordions();
  initTabs();
  initModals();
  initFilters();
  initSteppers();
  initConsultationForm();
});

/* --------------------------------------------------------------------------
   1. Header Blur & Scroll States
   -------------------------------------------------------------------------- */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* --------------------------------------------------------------------------
   2. Mobile Drawer Navigation
   -------------------------------------------------------------------------- */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const mobileDrawer = document.querySelector('.mobile-drawer');

  if (!toggleBtn || !mobileDrawer) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = toggleBtn.classList.toggle('is-active');
    mobileDrawer.classList.toggle('is-open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  const drawerLinks = mobileDrawer.querySelectorAll('a');
  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleBtn.classList.remove('is-active');
      mobileDrawer.classList.remove('is-open');
      document.body.style.overflow = '';
    });
  });
}

/* --------------------------------------------------------------------------
   3. Brand Switcher Highlight
   -------------------------------------------------------------------------- */
function initBrandSwitcher() {
  const currentPath = window.location.pathname;
  const studioPill = document.querySelector('.brand-pill[data-brand="studio"]');
  const academyPill = document.querySelector('.brand-pill[data-brand="academy"]');

  if (!studioPill || !academyPill) return;

  if (currentPath.includes('academy') || currentPath.includes('course') || currentPath.includes('student') || currentPath.includes('funding')) {
    academyPill.classList.add('active-academy');
    studioPill.classList.remove('active-studio');
  } else {
    studioPill.classList.add('active-studio');
    academyPill.classList.remove('active-academy');
  }
}

/* --------------------------------------------------------------------------
   4. Accordions Component
   -------------------------------------------------------------------------- */
function initAccordions() {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    if (!header) return;

    header.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');
      
      // Close siblings if inside single-expand group
      const parentGroup = item.closest('.accordion-group');
      if (parentGroup) {
        parentGroup.querySelectorAll('.accordion-item').forEach(sibling => {
          sibling.classList.remove('active');
          const body = sibling.querySelector('.accordion-body');
          if (body) body.style.maxHeight = null;
        });
      }

      if (!isOpen) {
        item.classList.add('active');
        const body = item.querySelector('.accordion-body');
        if (body) body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });
}

/* --------------------------------------------------------------------------
   5. Tab Switcher
   -------------------------------------------------------------------------- */
function initTabs() {
  const tabGroups = document.querySelectorAll('[data-tabs]');

  tabGroups.forEach(group => {
    const tabButtons = group.querySelectorAll('[data-tab-btn]');
    const tabContents = group.querySelectorAll('[data-tab-content]');

    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-tab-btn');

        tabButtons.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));

        btn.classList.add('active');
        const targetContent = group.querySelector(`[data-tab-content="${targetId}"]`);
        if (targetContent) targetContent.classList.add('active');
      });
    });
  });
}

/* --------------------------------------------------------------------------
   6. Modals Handler
   -------------------------------------------------------------------------- */
function initModals() {
  const modalTriggers = document.querySelectorAll('[data-modal-target]');
  const modalCloses = document.querySelectorAll('.modal-close, [data-modal-close]');

  modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = trigger.getAttribute('data-modal-target');
      const targetModal = document.getElementById(targetId);
      if (targetModal) {
        targetModal.classList.add('is-open');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  modalCloses.forEach(close => {
    close.addEventListener('click', () => {
      const modal = close.closest('.modal-backdrop');
      if (modal) {
        modal.classList.remove('is-open');
        document.body.style.overflow = '';
      }
    });
  });

  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('is-open');
        document.body.style.overflow = '';
      }
    });
  });
}

/* --------------------------------------------------------------------------
   7. Gallery & Course Filter Cards
   -------------------------------------------------------------------------- */
function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const filterItems = document.querySelectorAll('[data-category]');

  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-filter');

      filterBtns.forEach(b => b.classList.remove('active', 'active-pink', 'active-green'));
      btn.classList.add('active');

      filterItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (category === 'all' || itemCategory === category) {
          item.style.display = 'block';
          item.style.opacity = '1';
        } else {
          item.style.display = 'none';
          item.style.opacity = '0';
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   8. Multi-Step Form Steppers (Booking & Apply)
   -------------------------------------------------------------------------- */
function initSteppers() {
  const stepperContainers = document.querySelectorAll('[data-stepper]');

  stepperContainers.forEach(container => {
    let currentStep = 1;
    const totalSteps = container.querySelectorAll('.step-pane').length;
    const nextBtns = container.querySelectorAll('[data-step-next]');
    const prevBtns = container.querySelectorAll('[data-step-prev]');
    const stepIndicators = container.querySelectorAll('.step-item');

    function updateStep(step) {
      container.querySelectorAll('.step-pane').forEach((pane, idx) => {
        pane.style.display = (idx + 1 === step) ? 'block' : 'none';
      });

      stepIndicators.forEach((ind, idx) => {
        const stepNum = idx + 1;
        ind.classList.remove('active', 'completed');
        if (stepNum === step) {
          ind.classList.add('active');
        } else if (stepNum < step) {
          ind.classList.add('completed');
        }
      });
    }

    nextBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        if (currentStep < totalSteps) {
          currentStep++;
          updateStep(currentStep);
          window.scrollTo({ top: container.offsetTop - 100, behavior: 'smooth' });
        }
      });
    });

    prevBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        if (currentStep > 1) {
          currentStep--;
          updateStep(currentStep);
        }
      });
    });

    updateStep(1);
  });
}

/* --------------------------------------------------------------------------
   9. Interactive Consultation Form Handler
   -------------------------------------------------------------------------- */
function initConsultationForm() {
  const form = document.getElementById('hairConsultationForm');
  const confirmationModal = document.getElementById('consultationConfirmModal');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Consultation request generated successfully!');
    if (confirmationModal) {
      confirmationModal.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }
  });
}

/* --------------------------------------------------------------------------
   10. Toast Notification System
   -------------------------------------------------------------------------- */
function showToast(message, duration = 4000) {
  let toastContainer = document.querySelector('.toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container';
    toastContainer.style.cssText = `
      position: fixed;
      bottom: 2rem;
      left: 2rem;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    `;
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = 'toast-item';
  toast.style.cssText = `
    background: #090909;
    color: #ffffff;
    padding: 1rem 1.5rem;
    border-radius: 12px;
    font-size: 0.85rem;
    font-weight: 500;
    box-shadow: 0 10px 30px rgba(0,0,0,0.25);
    border-left: 4px solid #D53A74;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    animation: fadeInUp 0.3s ease;
  `;
  toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #D53A74;"></i> <span>${message}</span>`;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}
