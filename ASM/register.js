document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.querySelector("form");
    registerForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload
        let fullname = document.querySelector("input[name='full_name']").value;
        let password = document.querySelector("input[name='password']").value;
        let phone = document.querySelector("input[name='phone']").value;
        let address = document.querySelector("textarea[name='address']").value;
        if (fullname && password) {
            // Get list of accounts from localStorage (if available)
            let users = JSON.parse(localStorage.getItem("users")) || [];
            // Check if the username already exists
            let existingUser = users.find(user => user.fullname === fullname);
            if (existingUser) {
                alert("Account name already exists! Please choose another name.");
                return;
            }
            // Add new account to list
            users.push({ fullname, password, phone, address });
            // Save to localStorage
            localStorage.setItem("users", JSON.stringify(users));
            alert("Registration successful! Please log in.");
            window.location.href = "login.html"; // Redirect to login page
        } else {
            alert("Please enter complete information!");
        }
    });
});
