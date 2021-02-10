<?php
include_once './assets/php/consultar.php'
?>

<!Doctype html>
<html>
    <head>
        <title>Let's SnAkE !!</title>
        <link rel="stylesheet" href="./assets/css/snake.css">
        <script src="./assets/jQuery/jquery-3.2.1.min.js"></script>

           

    </head>
<body>

    <div id="floatingDiv">
        <form method="POST" id="floatingForm">
            
		    <label>Usuario</label>
		    <p></p>
		    <input type="text" name="usuario" id="usuario" maxlenght=12>
		    <p></p>
		    <label>Say something!!</label>
		    <p></p>
		    <input type="text" name="say" id="say" maxlength=120>
            <p></p>
            <label>Score</label>
		    <p></p>
            <input type="number" name="score" id="score" disabled>
		    <p></p>
		    <button id="btnguardar">Send</button>
        </form>

    </div>

    <div id="resultDiv">
        <h2>Snake Ranking</h2>
        
       <?php
            $sql = "select * from snake order by score desc;";
            $result = mysqli_query($conn, $sql);
            $resultCheck = mysqli_num_rows($result); 

            if ($resultCheck > 0) {    
                echo "<table border='1'>";
                while ($row = mysqli_fetch_assoc($result)) {
                    echo "<tr><td>" . $row['usuario'] . "</td><td>" . $row['score'] . "</td><td>" . $row['say'] . "</td></tr>";
                }
            } 
            echo "</table>";
        ?>
        
        

    </div>

    <div id="infoContainer">
        <h1 id="normalBanner"><span id="spangreen">T&nbsp;h&nbsp;e &nbsp;</span><span id="spanyellow">R&nbsp;a&nbsp;s&nbsp;t&nbsp;a&nbsp;f&nbsp;a&nbsp;r&nbsp;i&nbsp; </span><span id="spanred">S&nbsp;n&nbsp;a&nbsp;k&nbsp;e</span> </h1>

        <p name="scoreboardPara" id="scoreboardPara">Score:</p>

        <div name="scoreboard" id="scoreboard"></div>
    </div>

    <canvas id="boardCanvas" name="canvas" width="500" height="500"></canvas>

<script src="./assets/js/snake.js"></script>

</body>
</html>