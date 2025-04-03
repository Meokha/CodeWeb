<?php
       // sử dụng include/require để những connect vào file register.
       // Include database connection
       require 'connect.php';
        // Check if form is submittedsubmitted
       if ($_SERVER["REQUEST_METHOD"]== "POST"){
        $full_name = trim($_POST["full_name"]);
        $password = trim($_POST["password"]);
        $phone = trim($_POST["phone"]);
        $address = trim($_POST["address"]);
        // Hash password (bật lại dòng này để tránh lỗi)
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);
        //Insert data into user table
        // câu lệnh Insert into để ghi dữ liệu vào db_thecoffee
        $sql = "INSERT INTO users (user_name, password, phone, address) VALUE (?, ?, ?, ?)";
        // truyền dữ liệu vào db
        $stmt = mysqli_prepare($conn, $sql);
        if ($stmt){
            mysqli_stmt_bind_param($stmt, "ssss", $full_name, $hashed_password, $phone, $address);
            if (mysqli_stmt_execute($stmt)){
                header("refresh:2; http://localhost/SE07103/ASM/login.html");
                exit();
            }else{
                echo "Error: " . mysqli_error($conn);
            }
            mysqli_stmt_close($stmt);
        }else{
            echo "Error preparing statement: " . mysqli_error($conn);
        }
       }
       mysqli_close($conn);
    ?>