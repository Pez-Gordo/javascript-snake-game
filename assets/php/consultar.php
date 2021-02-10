<?php

$dbServername = "localhost";
$dbUsername = "root";
$dbPassword = "my*8-9+6POiusql";
$dbName = "ranking";

$conn = mysqli_connect($dbServername, $dbUsername, $dbPassword, $dbName);


if (!$conn) {
    echo "Error: No se pudo conectar a MySQL." . PHP_EOL;
    echo "errno de depuración: " . mysqli_connect_errno() . PHP_EOL;
    echo "error de depuración: " . mysqli_connect_error() . PHP_EOL;
    exit;
}

echo "Connection successful! " . PHP_EOL;
echo "Info host: " . mysqli_get_host_info($conn) . PHP_EOL;



	mysqli_close($conn);
?>