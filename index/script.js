document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email');
  const password = document.getElementById('password');
  let valid = true;

  document.querySelectorAll('.error').forEach(el => el.style.display = 'none');

  if (!email.value.trim()) {
    showError(email, "Email is required");
    valid = false;
  } else if (!validateEmail(email.value)) {
    showError(email, "Invalid email format");
    valid = false;
  }

  if (!password.value.trim()) {
    showError(password, "Password is required");
    valid = false;
  } else if (password.value.length < 6) {
    showError(password, "Minimum 6 characters");
    valid = false;
  }

  if (valid) {
    alert("Welcome to the system, Agent.");
  }
});

function showError(input, message) {
  const group = input.parentElement;
  const error = group.querySelector('.error');
  error.textContent = message;
  error.style.display = 'block';
}

function validateEmail(email) {
  return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
}
