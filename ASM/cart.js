// // Danh sách sản phẩm mẫu
// //trong giỏ hàng hiện tai có 3 items.

// // B1: xử lý sự kiện khi click vào giỏ hàng của từng sản phẩm thì các thông tin của sản phẩm (img, name, price) sẽ được thêm
// // + khi click vào button giỏ hàng, lấy thông tin của img, name và price sau đó in ra phần console. 


// // B2: lưu các thông tin vừa lấy được vào đối tượng cart_item
// // B3: Push các cart_item vào mảng cartcart
// // let cart = [
// //     {img: "https://product.hstatic.net/1000075078/product/1737357012_cfsd_ab683c1d7cb6429ab3556719ce662f0c_large.png", name: "Cà phê sữa đá", price: 35000, quantity: 2},
// //     { img: "https://product.hstatic.net/1000075078/product/1737356480_hi-tea-dao_05f7e517936d4b8e902fb3cff8d16b1a_large.png", name: "Trà đào cam sả", price: 40000, quantity: 1 },
// //     { img: "https://product.hstatic.net/1000075078/product/1737355257_bmq-bo-nam_e4fd81c54acf4c34ac97481b25dd1484_large.png", name: "Bánh mì sandwich", price: 20000, quantity: 1 }
// // ];
// // Hàm hiển thị giỏ hàng

// function renderCart() {
//     let cartContainer = document.getElementById("cart-items");
//     let totalPrice = 0;
//     cartContainer.innerHTML = ""; // Xóa nội dung cũ để cập nhật mới
//     for (let index = 0; index < cart.length; index++) {
//         let item = cart[index]; // Lấy sản phẩm hiện tại
//         let itemTotal = item.price * item.quantity; // Tổng giá của 1 loại sản phẩm
//         totalPrice += itemTotal; // Tổng tiền của các sản phẩm
    
//        // Tạo HTML để hiển thị sản phẩm trong giỏ hàng
//         let productHTML = `
//             <div class="cart-item">
//                 <img src="${item.img}">
//                 <div>
//                     <p><strong>${item.name}</strong></p>
//                     <p>${item.price.toLocaleString()}đ</p>
//                 </div>
//                 <div class="quantity-controls">
//                     <button onclick="updateQuantity(${index}, -1)">-</button>
//                     <span>${item.quantity}</span>
//                     <button onclick="updateQuantity(${index}, 1)">+</button>
//                 </div>
//                 <p><strong>${itemTotal.toLocaleString()}đ</strong></p>
//             </div>
//         `;
    
//         cartContainer.innerHTML += productHTML; // Thêm sản phẩm vào giao diện
//     }    

//     document.getElementById("totalPrice").innerText = totalPrice.toLocaleString();
// }
// function updateQuantity(index, change) {
//     if (cart[index].quantity + change > 0) {
//         cart[index].quantity += change;
//     } else {
//         cart.splice(index, 1); // Xóa sản phẩm nếu số lượng == 0
//     }
//     renderCart(); // Cập nhật lại giỏ hàng
// }
// function clear_btn(){
//     document.getElementById("cart-items").innerHTML = '';
//     document.getElementById("totalPrice").innerHTML = 0;
// }

// //---------------------------------------------------------//
// let cart_stg = [];

// function saveCart(){
//     localStorage.setItem('cart', JSON.stringify(cart_stg));
// }


// function addToCart(event){
//     event.preventDefault();
//     let product = this.closest ('.product-item');
//     let productname = product.querySelector('h2').innerText;
//     let productPriceText = product.querySelector('.price').innerText.replace(/\D/g, '');
//     let productPrice = parseInt(productPriceText);
//     let productImg = product.querySelector('img').src;

//     let existingProduct = null;

//     for(let i = 0; i < cart_stg.length; i++){
//         if(cart_stg[i].name == productname){
//             existingProduct = cart_stg[i];
//             break;
//         }
//     }
//     if(existingProduct){
//         existingProduct.quantity++;
//     }else{
//         cart_stg.push({
//             img: productImg,
//             name: productname,
//             price: productPrice,
//             quantity: 1
//     })
// }
//     saveCart();
//     alert(productname + " " + productPrice + " đã được thêm vào ");
// }
// let buttons = document.querySelectorAll('.cart-button');

// for(let i = 0; i < buttons.length; i++){
//     buttons[i].addEventListener('click', addToCart);
// }
// ///////////////////////////////
// document.addEventListener("DOMContentLoaded", function () {
//     const cartItemsContainer = document.getElementById("cart-items");
//     const totalPriceElement = document.getElementById("totalPrice");

//     function loadCart() {
//         let cart = JSON.parse(localStorage.getItem("cart")) || [];
//         cartItemsContainer.innerHTML = ""; // Xóa nội dung cũ trước khi cập nhật
//         let totalPrice = 0;

//         cart.forEach((item, index) => {
//             let cartItem = document.createElement("div");
//             cartItem.classList.add("cart-item");
//             cartItem.innerHTML = `
//                 <img src="${item.image}" alt="${item.name}" class=" product-item">
//                 <div class="cart-info">
//                     <h3>${item.name}</h3>
//                     <p>Price: ${item.price}đ</p>
//                     <p>Quantity: ${item.quantity}</p>
//                     <button class="remove-btn" data-index="${index}">Remove</button>
//                 </div>
//             `;
//             cartItemsContainer.appendChild(cartItem);
//             totalPrice += item.price * item.quantity;
//         });

//         totalPriceElement.textContent = totalPrice.toLocaleString();
//         addRemoveEvent();
//     }

//     function addRemoveEvent() {
//         document.querySelectorAll(".remove-btn").forEach(button => {
//             button.addEventListener("click", function () {
//                 let cart = JSON.parse(localStorage.getItem("cart")) || [];
//                 cart.splice(this.dataset.index, 1);
//                 localStorage.setItem("cart", JSON.stringify(cart));
//                 loadCart();
//             });
//         });
//     }

//     document.getElementById("clear_btn").addEventListener("click", function () {
//         localStorage.removeItem("cart");
//         loadCart();
//     });

//     loadCart();
// });
// window.onload = renderCart;
document.addEventListener("DOMContentLoaded", function () {
    const cartItemsContainer = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("totalPrice");
    function loadCart() {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cartItemsContainer.innerHTML = ""; // Delete old content before updating
        let totalPrice = 0;
        cart.forEach((item, index) => {
            let itemTotal = item.price * item.quantity; // Total price of the product
            totalPrice += itemTotal;
            let cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
            cartItem.innerHTML = `
                <img src="${item.img}" alt="${item.name}" class="cart-img">
                <div class="cart-info">
                    <h3>${item.name}</h3>
                    <p>Price: ${item.price.toLocaleString()}đ</p>
                </div>
                <div class="quantity-controls">
                    <button onclick="updateQuantity(${index}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity(${index}, 1)">+</button>
                </div>
                <p><strong>${itemTotal.toLocaleString()}đ</strong></p>
                <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
            `;
            cartItemsContainer.appendChild(cartItem);
        });
        totalPriceElement.textContent = totalPrice.toLocaleString();
    }
    window.updateQuantity = function (index, change) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        if (cart[index].quantity + change > 0) {
            cart[index].quantity += change; // Increase or decrease quantity
        } else {
            cart.splice(index, 1); // Delete product if quantity reaches 0
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        loadCart();
    };
    window.removeFromCart = function (index) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        loadCart();
    };
    document.getElementById("clear_btn").addEventListener("click", function () {
        localStorage.removeItem("cart");
        loadCart();
    });

    loadCart();
});
// **Add product to cart**
function addToCart(event) {
    event.preventDefault();
    let product = event.target.closest(".product-item");
    let productName = product.querySelector("h2").innerText;
    let productPrice = parseInt(product.querySelector(".price").innerText.replace(/\D/g, ""));
    let productImg = product.querySelector("img").src;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let existingProduct = cart.find(item => item.name === productName);

    if (existingProduct) {
        existingProduct.quantity++; // If the product is already in the cart, increase the quantity
    } else {
        cart.push({ img: productImg, name: productName, price: productPrice, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${productName} has been added to cart!`);
}
// **Attach event to "Add to cart" button"**
document.querySelectorAll(".cart-button").forEach(button => {
    button.addEventListener("click", addToCart);
});
    document.addEventListener("DOMContentLoaded", function () {
        const buyButtons = document.querySelectorAll(".buy-button");
        buyButtons.forEach(button => {
            button.addEventListener("click", function (event) {
                event.preventDefault(); // Prevent default link behavior
                // Find the product name
                const productName = this.closest(".product-item").querySelector("h2").textContent;
                // Show the alert with product name
                alert(`You have purchased: ${productName}`);
            });
        });
    });
    function goBack() {
        window.location.href = "index.html"; // Điều hướng về trang chính
    }
    
window.onload = loadCart;


