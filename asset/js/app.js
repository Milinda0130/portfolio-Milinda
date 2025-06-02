


  const timelineItems = document.querySelectorAll('.timeline-item');

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.9 &&
      rect.bottom >= 0
    );
  }

  function checkTimelineItems() {
    timelineItems.forEach(item => {
      if (isInViewport(item) && !item.classList.contains('animate')) {
        item.classList.add('animate');
      }
    });
  }

  window.addEventListener('scroll', checkTimelineItems);
  window.addEventListener('load', checkTimelineItems);

  // Select all animatable elements
  const animatables = document.querySelectorAll('.resume, .portfolio, .portfo-items .item');

  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.9 &&
      rect.bottom >= 0
    );
  }

  function animateOnScroll() {
    animatables.forEach(el => {
      if (isInViewport(el) && !el.classList.contains('animate')) {
        el.classList.add('animate');
      }
    });
  }

  window.addEventListener('scroll', animateOnScroll);
  window.addEventListener('load', animateOnScroll);

  const contactElements = document.querySelectorAll('.contact, .contact-form, .input-wrapper, .form-input, textarea.form-input, .form-btn');

  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.9 &&
      rect.bottom >= 0
    );
  }

  function animateContact() {
    contactElements.forEach(el => {
      if (isInViewport(el) && !el.classList.contains('animate')) {
        el.classList.add('animate');
      }
    });
  }

  window.addEventListener('scroll', animateContact);
  window.addEventListener('load', animateContact);
