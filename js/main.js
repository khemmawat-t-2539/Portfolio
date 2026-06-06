
document.documentElement.classList.add('js-enabled');

const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const modal = document.getElementById('videoModal');
const modalVideo = document.getElementById('modalVideo');
const modalTitle = document.getElementById('modalTitle');
const watchYouTube = document.getElementById('watchYouTube');

document.querySelectorAll('.js-open-video').forEach((button) => {
  button.addEventListener('click', () => {
    const videoId = button.dataset.videoId;
    const videoTitle = button.dataset.videoTitle || 'Project Video';
    modalTitle.textContent = videoTitle;
    modalVideo.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&playsinline=1`;
    watchYouTube.href = `https://www.youtube.com/watch?v=${videoId}`;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
  });
});

function closeVideoModal() {
  if (!modal) return;
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  modalVideo.src = '';
}

document.querySelectorAll('.js-close-video').forEach((button) => {
  button.addEventListener('click', closeVideoModal);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeVideoModal();
});

const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const message = document.getElementById('contactMessage').value.trim();
    const subject = `Portfolio Inquiry from ${name || 'Website Visitor'}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      '',
      'Project Message:',
      message
    ].join('\n');

    window.location.href = `mailto:khemmawat2539@hotmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}


if ('IntersectionObserver' in window) {
  const isMobileOrTablet = window.matchMedia('(max-width: 900px)').matches;

  if (isMobileOrTablet) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.js-reveal').forEach((el) => revealObserver.observe(el));
  } else {
    document.querySelectorAll('.js-reveal').forEach((el) => el.classList.add('is-revealed'));
  }
} else {
  document.querySelectorAll('.js-reveal').forEach((el) => el.classList.add('is-revealed'));
}


const mouseDot = document.getElementById('mouseDot');
const isDesktop = window.matchMedia('(min-width: 901px)').matches;

if (mouseDot && isDesktop) {
  window.addEventListener('mousemove', (event) => {
    mouseDot.style.left = `${event.clientX}px`;
    mouseDot.style.top = `${event.clientY}px`;
  });

  document.querySelectorAll('.js-cursor-zone').forEach((zone) => {
    zone.addEventListener('mouseenter', () => mouseDot.classList.add('is-visible'));
    zone.addEventListener('mouseleave', () => mouseDot.classList.remove('is-visible'));
  });
}

const toTop = document.getElementById('toTop');
if (toTop) {
  window.addEventListener('scroll', () => {
    toTop.classList.toggle('is-visible', window.scrollY > 500);
  });

  toTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
