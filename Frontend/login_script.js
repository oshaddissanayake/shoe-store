document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting via the browser

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Basic validation check
    if (username && password) {
        console.log('Username:', username, 'Password:', password);
        alert('Login successful for ' + username);
    } else {
        alert('Please enter both username and password');
    }
});
