const password = {};
let email = {};
let hart = {};

function handlePasswordSwitcher() {
  password.input = document.querySelector('.js-password-input');
  password.toggle = document.querySelector('.js-password-toggle');
  password.hide = document.querySelector('.c-toggle-password__icon--hide');
  password.show = document.querySelector('.c-toggle-password__icon--show');

  password.toggle.addEventListener('change', function () {
    if (password.toggle.checked) {
      password.input.type = 'input';
      password.hide.classList.add('o-hide-accessible');
      password.show.classList.remove('o-hide-accessible');
    } else {
      password.input.type = 'password';
      password.hide.classList.remove('o-hide-accessible');
      password.show.classList.add('o-hide-accessible');
    }
  });
}

function hartswitcher() {
  // Hart check
  hart.toggle = document.querySelector('.js-hart-toggle');
  hart.like = document.querySelector('.js-like-butn');
   hart.toggle.addEventListener('change', function () {
     if (hart.toggle.checked) {
       console.log("druk1")
       hart.like.classList.add('c-toggle-hart__icon-like');
       
      } else {
        console.log("druk2")
        hart.like.classList.remove('c-toggle-hart__icon-like');
     }
   });
}

document.addEventListener('DOMContentLoaded', function () {
  console.log('Je Moeder!');
  password.input = document.querySelector('.js-password-input');
  password.field = document.querySelector('.js-password-field');
  password.message = document.querySelector('.js-password-error');
  email.input = document.querySelector('.js-email-input');
  email.field = document.querySelector('.js-email-field');
  email.message = document.querySelector('.js-email-error');
  handleFloatingLabel();
  handlePasswordSwitcher();
  hartswitcher();
});
