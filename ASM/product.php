<?php
require 'connect.php'; // Kết nối database
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Lấy dữ liệu từ form
    $product_name = isset($_POST["product_name"]) ? trim($_POST["product_name"]) : "";
    $price = isset($_POST["price"]) ? floatval($_POST["price"]) : 0;
    $image_url = isset($_POST["image_url"]) ? trim($_POST["image_url"]) : "";
    // Kiểm tra dữ liệu đầu vào
    if (empty($product_name) || $price <= 0 || empty($image_url)) {
        die("Lỗi: Dữ liệu nhập vào không hợp lệ!");
    }
    $category_id = 1;
    // Thêm sản phẩm vào bảng products
    $sql_insert_product = "INSERT INTO products (category_id, product_name, description, price, image_url, stock_quantity) 
                           VALUES (?, ?, '', ?, ?, 0)";
    $stmt = $conn->prepare($sql_insert_product);
    $stmt->bind_param("isds", $category_id, $product_name, $price, $image_url);
    if ($stmt->execute()) {
        echo "Thêm sản phẩm thành công!";
    } else {
        echo "Lỗi khi thêm sản phẩm: " . $stmt->error;
    }
    $conn->close();
}
?>
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Thêm sản phẩm</title>
    <link rel="stylesheet" href="product.css">
</head>
<body>
    <h2>Thêm sản phẩm mới</h2>
    <form action="product.php" method="post">
        <label for="product_name">Tên sản phẩm:</label>
        <input type="text" name="product_name" required><br><br>
        <label for="price">Giá:</label>
        <input type="number" step="0.01" name="price" required><br><br>
        <label for="image_url">URL hình ảnh:</label>
        <input type="text" name="image_url" required><br><br>
        <button type="submit">Thêm sản phẩm</button>
        <div class="buttons">
        <a href="index.php">⬅ Quay lại</a>
    </div>
    </form>
</body>
</html>