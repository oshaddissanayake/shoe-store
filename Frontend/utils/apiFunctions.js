import { BASE_URL } from "../constants.js";

export const postRequest = (endpoint, body) => {
  return new Promise((resolve, reject) => {
    fetch(`http://localhost:5000/${BASE_URL}/${endpoint}`, {
      method: "POST",
      body: JSON.stringify(body),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        response
          .json()
          .then((data) => {
            console.log("data", data);
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      })
      .catch((err) => {
        reject(err);
        alert("Failed to login");
      });
  });
};

export const getRequest = () => {
  fetch(`${API_URL}/items`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        alert("Items fetched successfully");
      } else {
        alert("Failed to fetch items");
      }
    })
    .catch((err) => {
      alert("Failed to fetch items");
    });
};
