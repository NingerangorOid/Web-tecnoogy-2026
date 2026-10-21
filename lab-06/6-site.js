"use strict";
// Forms are a frontend demonstration; no backend endpoint is supplied in the assignment.
document.querySelectorAll('.contact-form').forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();
    form.querySelector('[role="status"]').textContent = 'Учебная форма заполнена правильно. Данные не отправлялись.';
  });
});
document.querySelectorAll('.mobile-nav a').forEach(link => {
  link.addEventListener('click', () => link.closest('details').removeAttribute('open'));
});
