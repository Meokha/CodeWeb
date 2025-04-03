// document.addEventListener("DOMContentLoaded", function () {
//     const loginForm = document.querySelector("form");
//     loginForm.addEventListener("submit", function (event) {
//         event.preventDefault(); // Ngăn chặn load lại trang
//         let username = document.querySelector("input[name='full_name']").value;
//         let password = document.querySelector("input[name='password']").value;
//         if (username && password) {
//             // Lưu vào localStorage
//             localStorage.setItem("username", username);
//             localStorage.setItem("password", password);

//             alert("Login successful! Data saved.");
//             window.location.href = "index.html"; // Chuyển hướng đến trang chính
//         } else {
//             alert("Please enter both username and password!");
//         }
//     });
// });
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector("form");
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload
        let username = document.querySelector("input[name='full_name']").value.trim();
        let password = document.querySelector("input[name='password']").value.trim();
        if (!username || !password) {
            alert("Please enter both username and password!");
            return;
        }
        if (username === "admin" && password === "123") {
            alert("Admin login successful! Redirecting...");
            window.location.href = "index.php"; // Chuyển hướng đến trang admin
            return;
        }
        // Get list of users from localStorage
        let usersData = localStorage.getItem("users");
        let users = usersData ? JSON.parse(usersData) : [];
        // Check if account exists
        let userFound = users.find(user => user.fullname === username && user.password === password);
        if (userFound) {
            alert("Login successful! Redirecting...");
            window.location.href = "index.html"; // Redirect to main page
        } else {
            alert("Incorrect username or password!");
        }
    });
});