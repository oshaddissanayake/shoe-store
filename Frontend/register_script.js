document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting via the browser

    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const gender = document.getElementById('gender').value;

    // Basic validation check
    if (firstname && lastname && email && phone && gender) {
        console.log('Registration details:', firstname, lastname, email, phone, gender);
        alert('Registration successful for ' + firstname + ' ' + lastname);
    } else {
        alert('Please fill out all fields');
    }
});
