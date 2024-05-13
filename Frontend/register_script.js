import { postRequest } from "./utils/apiFunctions.js";

document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting via the browser

    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const gender = document.getElementById("gender").value;
    const password = document.getElementById("password").value;

    // Basic validation check
    if (firstname && lastname && email && phone && gender && password) {
      // Validate email format
      const emailPattern = /\S+@\S+\.\S+/;
      if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return;
      }
      const phonePattern = /^\d+$/;
      if (!phonePattern.test(phone)) {
        alert("Phone number should only contain numbers");
        return;
      }

      // Validate password length
      if (password.length < 8) {
        alert("Password must be at least 8 characters long");
        return;
      }

      console.log(
        "Registration details:",
        firstname,
        lastname,
        email,
        phone,
        gender
      );
      postRequest("auth/signup", {
        first_name: firstname,
        last_name: lastname,
        email: email,
        mobile: phone,
        password: password,
        gender: gender,
      })
        .then((res) => {
          // navigate to index.html
          window.location.href = "login.html";
          console.log(res);
        })
        .catch((err) => {
          alert("Failed to register");
          console.log(err);
        });
      // alert('Registration successful for ' + firstname + ' ' + lastname);
    } else {
      alert("Please fill out all fields");
    }
  });
