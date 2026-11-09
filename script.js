/* ==========================================================================
   Interactive Behaviors for Subrata Pramanik Portfolio
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Current Year in Footer
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // 2. Mobile Menu Drawer
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
      }
    });

    // Auto-close menu on item click
    navMenu.querySelectorAll('.nav-item').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-xmark');
        }
      });
    });
  }

  // 3. Navbar scroll effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 4. Active nav link highlight on scroll
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-item');

  function updateActiveNav() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 140;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navItems.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  window.addEventListener('scroll', updateActiveNav);

  // 5. One-Click Copy to Clipboard with Toast Notification
  const copyButtons = document.querySelectorAll('.copy-btn');
  const toast = document.getElementById('toast');

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`Copied "${textToCopy}" to clipboard!`);
        }).catch(() => {
          showToast('Failed to copy');
        });
      }
    });
  });

  // 6. Real EmailJS Form Handler
  if (window.emailjs && window.__ENV__ && window.__ENV__.EMAILJS_PUBLIC_KEY) {
    try {
      emailjs.init(window.__ENV__.EMAILJS_PUBLIC_KEY);
    } catch (e) {
      console.warn('EmailJS initialization warning:', e);
    }
  }

  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');
  const submitBtn = document.getElementById('submitBtn');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('userName')?.value.trim();
      const email = document.getElementById('userEmail')?.value.trim();
      const message = document.getElementById('userMessage')?.value.trim();

      if (!name || !email || !message) {
        if (formFeedback) {
          formFeedback.textContent = 'Please fill in all fields.';
          formFeedback.className = 'form-feedback error';
        }
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
      }

      if (window.emailjs && window.__ENV__ && window.__ENV__.EMAILJS_SERVICE_ID) {
        const userMail = emailjs.send(
          window.__ENV__.EMAILJS_SERVICE_ID,
          window.__ENV__.EMAILJS_TEMPLATE_ID,
          {
            to_name: name,
            from_name: 'Subrata Pramanik',
            reply_to: email,
            message: `Hi ${name},\n\nThanks for reaching out! I will get back to you shortly.\n\nBest regards,\nSubrata Pramanik`,
          }
        );

        const ownerMail = emailjs.send(
          window.__ENV__.EMAILJS_SERVICE_ID,
          window.__ENV__.EMAILJS_TEMPLATE_ID,
          {
            to_name: 'Subrata Pramanik',
            from_name: 'Portfolio Contact Form',
            reply_to: 'myprotfolio357@gmail.com',
            message: `New message from portfolio visitor:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
          }
        );

        Promise.all([userMail, ownerMail])
          .then(() => {
            if (formFeedback) {
              formFeedback.textContent = 'Thank you! Your message has been sent successfully. 🚀';
              formFeedback.className = 'form-feedback success';
            }
            contactForm.reset();
          })
          .catch((err) => {
            console.error('EmailJS error:', err);
            if (formFeedback) {
              formFeedback.textContent = 'Failed to send message. Please contact me directly via email.';
              formFeedback.className = 'form-feedback error';
            }
          })
          .finally(() => {
            if (submitBtn) {
              submitBtn.disabled = false;
              submitBtn.innerHTML = '<span>Send Message</span> <i class="fa-solid fa-arrow-right"></i>';
            }
          });
      } else {
        setTimeout(() => {
          if (formFeedback) {
            formFeedback.textContent = 'Thank you! Your message has been received.';
            formFeedback.className = 'form-feedback success';
          }
          contactForm.reset();
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<span>Send Message</span> <i class="fa-solid fa-arrow-right"></i>';
          }
        }, 1000);
      }
    });
  }
});
