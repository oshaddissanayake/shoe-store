// const { API_URL } = require("./constants");
// const { postRequest } = require("./utils/apiFunctions");

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
      fetch(`http://localhost:5000/api/v1/auth/signin`, {
        method: "POST",
        body: JSON.stringify({
          email: "johndoe@example.com",
          password: "password123",
        }),
        mode: "cors", // no-cors, *cors, same-origin

        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        console.log(
          "res",
          res.json().then((data) => console.log(data))
        );
      });

      //   postRequest(
      //     { email: "johndoe@example.com", password: "password123" },
      //     alert("Login successful"),
      //     alert("Login failed")
      //   );
      //   alert("Login successful for " + username);
    } else {
      alert("Please enter both username and password");
    }
  });
