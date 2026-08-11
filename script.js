document.addEventListener('DOMContentLoaded', function () {
  var nav = document.querySelector('.site-nav');
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  var navLinks = document.querySelectorAll('.nav-links a');
  var sections = document.querySelectorAll('main section[id], header#home');

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
});
