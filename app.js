document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById("loginForm");
  loginForm.addEventListener("submit", function(event) {
    if (!loginForm.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    loginForm.classList.add("was-validated");
  });
});
