/**
 * IGNITION 1.0 - Main Script
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle (now removed from HTML, but keeping logic safe)
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-active');
    });
  }

  // Close mobile menu when clicking a link
  const navItems = document.querySelectorAll('.nav-item, .btn-register');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      if (navLinks && navLinks.classList.contains('mobile-active')) {
        navLinks.classList.remove('mobile-active');
      }
    });
  });

  // Split Screen Animation Trigger
  const splitContainer = document.querySelector('.split-container');
  const uiLayer = document.querySelector('.ui-layer');
  const eventChoices = document.querySelectorAll('.event-choice');

  eventChoices.forEach(choice => {
    choice.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent instant jump
      
      const targetId = choice.getAttribute('href'); 
      
      // Fade out the UI layer (text, nav, etc.)
      if (uiLayer) {
        uiLayer.classList.add('fade-out');
      }

      // Add a slight delay before doors open for dramatic effect
      setTimeout(() => {
        if (splitContainer) {
          splitContainer.classList.add('doors-open');
        }
      }, 500);

      // Navigate to the next page after animation finishes
      setTimeout(() => {
        window.location.href = targetId; 
      }, 1500);
    });
  });

  // Fix for Mobile/Safari Back Button (BFCache)
  // When hitting 'Back', browsers restore the exact HTML state. We need to reset the animations.
  window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
      if (uiLayer) {
        uiLayer.classList.remove('fade-out');
      }
      if (splitContainer) {
        splitContainer.classList.remove('doors-open');
      }
    }
  });
});
