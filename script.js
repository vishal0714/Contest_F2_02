const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const emailSuccess = document.getElementById("emailSuccess");
const passwordSuccess = document.getElementById("passwordSuccess");

function validateEmail() {
  const email = emailInput.value;
  if (email.length > 3 && email.includes("@") && email.includes(".")) {
    emailError.style.display = "none";
    emailSuccess.style.display = "block";
  } else {
    emailError.style.display = "block";
    emailSuccess.style.display = "none";
  }
}

function validatePassword() {
  const password = passwordInput.value;
  if (password.length > 8) {
    passwordError.style.display = "none";
    passwordSuccess.style.display = "block";
  } else {
    passwordError.style.display = "block";
    passwordSuccess.style.display = "none";
  }
}

function handleSubmit() {
  if (
    emailError.style.display === "none" &&
    passwordSuccess.style.display === "block"
  ) {
    const confirmation = confirm("Do you want to proceed with the signup?");
    if (confirmation) {
      alert("Successful signup!");
      emailInput.value = "";
      passwordInput.value = "";
      passwordSuccess.style.display = "none";
    } else {
      window.location.reload();
    }
  } else {
    alert("Please fill in valid details before submitting.");
  }
}
