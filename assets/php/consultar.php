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


       
        
$sql="SELECT * FROM snake ORDER BY score DESC;";

$result=mysqli_query($conn, $sql);

$resultCheck=mysqli_num_rows($result);

echo "Result ----> " . $result;

if ($resultCheck > 0) {    
    echo "<table border='1'>";
    while ($row = mysqli_fetch_assoc($result)) {
        echo "<tr><td>" . $row['usuario'] . "</td><td>" . $row['score'] . "</td><td>" . $row['say'] . "</td></tr>";
    }
    echo "</table>";
} 

mysqli_close($conn);

?>

<!Doctype html>
<html>
    <body>
<br><br>


<a href="../../index.html">Play again</a> 
</body>
</html>