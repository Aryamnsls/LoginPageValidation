function validateEmail(input, errorId) {
    const value = input.value;
    const errorElement = document.getElementById(errorId);
  
    if (value.length > 3 && value.includes("@") && value.includes(".")) {
      errorElement.textContent = "";
      checkAllValidations();
    } else {
      errorElement.textContent = "Make sure email is more than 3 characters and has @ and .";
    }
  }
  
  function validatePassword(input, errorId) {
    const value = input.value;
    const errorElement = document.getElementById(errorId);
  
    if (value.length > 8) {
      errorElement.textContent = "";
      checkAllValidations();
    } else {
      errorElement.textContent = "Make sure password is more than 8 characters.";
    }
  }
  
  function checkAllValidations() {
    const email2 = document.getElementById("email2").value;
    const password2 = document.getElementById("password2").value;
    const successMessage = document.getElementById("successMessage");
  
    if (email2.length > 3 && email2.includes("@") && email2.includes(".") && password2.length > 8) {
      successMessage.textContent = "All good to go!";
    } else {
      successMessage.textContent = "";
    }
  }
  
  function submitForm(emailId, passwordId) {
    const email = document.getElementById(emailId).value;
    const password = document.getElementById(passwordId).value;
  
    if ((email.length > 3 && email.includes("@") && email.includes(".")) && password.length > 8) {
      if (confirm("Are you sure you want to signup?")) {
        alert("Successful signup!");
      } else {
        document.getElementById(emailId).value = "";
        document.getElementById(passwordId).value = "";
        if (emailId === "email2") {
          document.getElementById("successMessage").textContent = "";
        }
      }
    } else {
      alert("Please fix the errors before submitting.");
    }
  }
  