const form = document.querySelector('#register-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');
const nameError = document.querySelector('#name-error');
const emailError = document.querySelector('#email-error');
const passwordError = document.querySelector('#password-error');
const confirmPasswordError = document.querySelector('#confirm-password-error');

// Load the users from local storage if they exist
let users = JSON.parse(localStorage.getItem('users')) || [];

form.addEventListener('submit', function(event) {
  event.preventDefault();

  if (!nameInput.checkValidity()) {
    nameError.textContent = 'Please enter a valid name.';
    return;
  } else {
    nameError.textContent = '';
  }

  if (!emailInput.checkValidity()) {
    emailError.textContent = 'Please enter a valid email address.';
    return;
  } else {
    emailError.textContent = '';
  }

  if (!passwordInput.checkValidity()) {
    passwordError.textContent = 'Please enter a valid password.';
    return;
  } else {
    passwordError.textContent = '';
  }

  if (!confirmPasswordInput.checkValidity()) {
    confirmPasswordError.textContent = 'Please confirm your password.';
    return;
  } else {
    confirmPasswordError.textContent = '';
  }

  if (passwordInput.value !== confirmPasswordInput.value) {
    confirmPasswordError.textContent = 'Passwords do not match.';
    return;
  } else {
    confirmPasswordError.textContent = '';
  }

 
    const name = nameInput.value;
    const email = emailInput.value;
    const password =  passwordInput.value;

    users.push({ name, email ,password});

  localStorage.setItem('users', JSON.stringify(users));

  

  swal({  
    title: "Registration successful!",  
    icon: "success",  
  });  

  form.reset();

});

