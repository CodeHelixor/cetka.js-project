(function () {
  'use strict';

  // Mobile nav toggle
  var menuToggle = document.querySelector('.menu-toggle');
  var navMobile = document.getElementById('nav-mobile');
  if (menuToggle && navMobile) {
    var menuIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="18" x2="20" y2="18"/></svg>';
    var closeIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';
    menuToggle.addEventListener('click', function () {
      var isOpen = navMobile.classList.toggle('open');
      menuToggle.innerHTML = isOpen ? closeIcon : menuIcon;
    });
    navMobile.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        navMobile.classList.remove('open');
        menuToggle.innerHTML = menuIcon;
      });
    });
  }

  // Contact form: submit to send-mail.php; show message from redirect
  var contactForm = document.getElementById('contact-form');
  if (contactForm) {
    var params = new URLSearchParams(window.location.search);
    if (params.get('sent') === '1') {
      alert('Thank you for your message! We will get back to you soon.');
      window.history.replaceState({}, '', 'contact.html');
    } else if (params.get('sent') === '0') {
      alert('Could not send. Please try again or email us directly.');
      window.history.replaceState({}, '', 'contact.html');
    }
  }
})();
