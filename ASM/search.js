document.addEventListener("DOMContentLoaded", function () {
    // searchr 
    const searchInput = document.getElementById("search-input");
    const productContainer = document.querySelector(".product-container");
    const productItems = Array.from(document.querySelectorAll(".product-item"));
    const noResultMessage = document.createElement("p");
    noResultMessage.textContent = "No products found.";
    noResultMessage.style.textAlign = "center";
    noResultMessage.style.fontSize = "18px";
    noResultMessage.style.color = "red";
    noResultMessage.style.display = "none";
    productContainer.appendChild(noResultMessage);
    searchInput.addEventListener("input", function () {
        const searchValue = searchInput.value.trim().toLowerCase();
        let foundProducts = [];
        productItems.forEach((item) => {
            const productName = item.querySelector("h2").textContent.toLowerCase();
            if (productName.includes(searchValue)) {
                foundProducts.push(item);
            }
        });
        productContainer.innerHTML = "";
        if (foundProducts.length > 0) {
            foundProducts.forEach((product) => productContainer.appendChild(product));
            noResultMessage.style.display = "none";
        } else {
            productContainer.appendChild(noResultMessage);
            noResultMessage.style.display = "block";
        }
    });
    // Process click on logo to return to home page
    const logo = document.querySelector(".logo");
    if (logo) {
        logo.addEventListener("click", function () {
            window.location.href = "index.html";
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const userMenu = document.querySelector(".user-menu");
    const avatar = document.querySelector(".user-avatar");
    avatar.addEventListener("click", function () {
        userMenu.classList.toggle("active");
    });
    // Hide menu when clicking out
    document.addEventListener("click", function (event) {
        if (!userMenu.contains(event.target)) {
            userMenu.classList.remove("active");
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const productContainer = document.querySelector(".product-container");
    const productItems = Array.from(document.querySelectorAll(".product-item"));
    function showProducts(category) {
        productContainer.innerHTML = ""; // Delete all products before adding new ones
        let filteredProducts = productItems.filter((item) => 
            item.getAttribute("data-category") === category
        );
        if (filteredProducts.length > 0) {
            filteredProducts.forEach((product) => productContainer.appendChild(product));
        } else {
            const noResultMessage = document.createElement("p");
            noResultMessage.textContent = "Không tìm thấy sản phẩm nào.";
            noResultMessage.style.textAlign = "center";
            noResultMessage.style.fontSize = "18px";
            noResultMessage.style.color = "red";
            productContainer.appendChild(noResultMessage);
        }
    }
    // Assign click event to each list item
    document.querySelectorAll(".dropdown-menu li").forEach((item) => {
        item.addEventListener("click", function () {
            const category = this.getAttribute("data-category");
            showProducts(category);
        });
    });
});