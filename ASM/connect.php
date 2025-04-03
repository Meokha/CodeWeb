<?php
$severname = "localhost";
$username = "root";
$password = "";
$dbname = "phone store";
$conn = new mysqli($severname, $username, $password, $dbname);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>