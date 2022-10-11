let password  = {};
let email = {};
let hart = {};


function checkInput(){
    console.log("error")
}

// controle voor input van email en password
function enableListerners(){
  // Email check
  email.input.addEventListener('blur', function () {
    // Kijkt of er iets ingevuld is
    if (this.value.length < 1) {
      console.log('vul tekstvak in');
      email.field.classList.add('has-error');
      email.message.classList.remove('no-value-error-gone');
    }
    // Kijkt of er een @ in zit
    else if (!this.value.includes('@')) {
      console.log('Er staat geen @');
      email.field.classList.add('has-error');
      email.message.classList.add('no-value-error-gone');
      
    }
    // correct
    else {
      console.log('correct');
      email.field.classList.remove('has-error');
      email.message.classList.add('no-value-error-gone');
      
    }
  });

  // Password check
  password.input.addEventListener('blur', function () {
    // Kijkt of er iets ingevuld is
    if (this.value.length < 1) {
      console.log('vul tekstvak in');
      password.field.classList.add('has-error');
      password.message.classList.remove('no-value-error-gone');

    }
    // correct
    else {
      console.log('correct');
      password.field.classList.remove('has-error');
      document.getElementById('password-error').innerHTML = 'Password';
      password.message.classList.add('no-value-error-gone');

    }
  });
}

// label op border (zorgt ervoor dat als er tekst in input zit, de label bovenaan blijft)
function handleFloatingLabel() {
  email.input.addEventListener('blur', function () {
    if (this.value.length < 1) {
      console.log('leeg');
      email.label.classList.remove('c-label-with-error-no-text');
    } else {
      email.label.classList.add('c-label-with-error-no-text');
    }
  });
  
  // Password check
  password.input.addEventListener('blur', function () {
    if (this.value.length < 1) {
      password.label.classList.remove('c-label-with-error-no-text');
    }
    // correct
    else {
      password.label.classList.add('c-label-with-error-no-text');
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('Je Moeder!');
    password.input = document.querySelector('.js-password-input');
    password.field = document.querySelector('.js-password-field');
    password.message = document.querySelector('.js-password-error');
    password.label = document.querySelector('.js-password-label');
    email.input = document.querySelector('.js-email-input');
    email.field = document.querySelector('.js-email-field');
    email.message = document.querySelector('.js-email-error');
    email.label = document.querySelector('.js-email-label');
    enableListerners();
    handleFloatingLabel();
});
