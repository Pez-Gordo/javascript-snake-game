<?php

$host = "localhost";
$username = "root";
$password = "my*8-9+6POiusql";
$database = "ranking";
$conn = mysqli_connect($host, $username, $password, $database);

$query = "SELECT * FROM snake ORDER BY score";

$results = $conn->query($query);

// Almacena en $resultCheck el número de filas de la consulta
$resultCheck=mysqli_num_rows($results);

print($resultCheck);

if ($resultCheck > 0) {    
    echo "<table border='1'>";
    while ($row = mysqli_fetch_assoc($results)) {
        echo "<tr><td>" . $row['usuario'] . "</td><td>" . $row['score'] . "</td><td>" . $row['say'] . "</td></tr>";
    }
    echo "</table>";
} 

mysqli_close($conn);