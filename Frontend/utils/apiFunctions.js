export const postRequest = (body, afterSuccess, afterError) => {
  fetch(`http://localhost:5000/api/v1/auth/signin`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      console.log("response", response.body.data);
    })
    .catch((err) => {
      //   alert("Login failed");
      console.log("err", err);
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
