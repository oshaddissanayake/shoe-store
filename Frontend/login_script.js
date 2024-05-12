// const { API_URL } = require("./constants");
import { postRequest } from "./utils/apiFunctions.js";
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting via the browser

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    console.log("username", username);
    // Basic validation check
    if (username && password) {
      console.log("email:", username, "Password:", password);

      const response = postRequest("auth/signin", {
        email: username,
        password: password,
      })
        .then((response) => {
          // navigate to index.html
          window.location.href = "index.html";
          console.log("response", response);
        })
        .catch((err) => {
          alert("Failed to login");
          console.log("error", err);
        });

      console.log("response", response);
      //   alert("Login successful for " + username);
    } else {
      alert("Please enter both username and password");
    }
  });
