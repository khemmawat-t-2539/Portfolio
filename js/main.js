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

document.querySelectorAll('.js-open-video').forEach((button) => {
  button.addEventListener('click', () => {
    const videoId = button.dataset.videoId;
    const videoTitle = button.dataset.videoTitle || 'Project Video';
    modalTitle.textContent = videoTitle;
    modalVideo.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
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

    const mailto = `mailto:khemmawat2539@hotmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  });
}
