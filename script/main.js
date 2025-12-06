// Простая проверка наличия @ в email и имитация отправки формы
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  const emailInput = document.getElementById('email');
  const error = document.getElementById('email-error');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!emailInput.value.includes('@')) {
      error.style.display = 'block';
      return;
    }
    error.style.display = 'none';
    alert('Сообщение отправлено (демо).');
  });
});
