document.addEventListener('DOMContentLoaded', function () {
  var nav = document.querySelector('.site-nav');
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  var navLinks = document.querySelectorAll('.nav-links a');
  var sections = document.querySelectorAll('main section[id], header#home');
  var galleryButtons = document.querySelectorAll('.thumb-button');
  var lightbox = document.getElementById('gallery-lightbox');
  var lightboxImage = document.getElementById('lightbox-image');
  var lightboxTitle = document.getElementById('lightbox-title');
  var lightboxClose = document.querySelector('.lightbox-close');
  var lightboxCloseLink = document.querySelector('.lightbox-close-link');

  function onScroll() {
    if (window.scrollY > 20) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }

    var scrollPos = window.scrollY + 120;
    sections.forEach(function (sec) {
      if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
        navLinks.forEach(function (a) {
          a.classList.toggle('active', a.getAttribute('href') === '#' + sec.id);
        });
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (toggle) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('mobile-open');
    });
  }

  navLinks.forEach(function (a) {
    a.addEventListener('click', function () {
      links.classList.remove('mobile-open');
    });
  });

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.hidden = true;
    document.body.style.overflow = '';
  }

  function openLightbox(button) {
    if (!lightbox || !lightboxImage || !lightboxTitle) return;

    lightboxImage.src = button.getAttribute('data-full') || '';
    lightboxImage.alt = button.getAttribute('data-title') || '';
    lightboxTitle.textContent = button.getAttribute('data-title') || '';
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    lightboxImage.focus && lightboxImage.focus();
  }

  galleryButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      openLightbox(button);
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  if (lightboxCloseLink) {
    lightboxCloseLink.addEventListener('click', closeLightbox);
  }

  if (lightbox) {
    lightbox.addEventListener('click', function (event) {
      if (event.target === lightbox) {
        closeLightbox();
      }
    });
  }

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeLightbox();
    }
  });
});
