
var canvas = document.body.children[0]
var context = canvas.getContext("2d")

context.scale(10, 10)

snake = [
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 3],
    [1, 4]
    ]

direction = [ 1, 0 ]
apple = [ 8, 3 ]
apple2 = []
apple3 = []
apple4 = []
score = 0
var melodia = document.createElement("audio");
melodia.src = "./sonidos/dubmood-monkey-island-8-bit-music.mp3";


document.body.onkeydown = function(e) {

    if (e.which == 38) {        //up
        if (direction[1] !== 1) {
            direction = [0, -1]
        }
    }
    else if(e.which == 40) {    //down
        if (direction[1] !== -1) {
            direction = [0, 1]
        }
    }
    else if (e.which == 39) {   //right
        if (direction[0] !== -1) {
            direction = [1, 0]
        }
    }
    else if(e.which == 37) {    //left
        if (direction[0] !== 1) {
            direction = [-1, 0]
        }
    }
    
} 




function updateLoop() {
    
    

    snake.unshift([
        snake[0][0] + direction[0],
        snake[0][1] + direction[1]
    ])

    
    if(snake[0][0] == apple[0] && snake[0][1] == apple[1]) {
        if(score / 5 == 1) {
            apple2 = [ 
            (Math.random() * 30) | 0, 
            (Math.random() * 30) | 0
            ]
        }
       
        if(score / 5 == 2) {
            apple3 = [ 
            (Math.random() * 30) | 0, 
            (Math.random() * 30) | 0
        ]
        }

        if(score / 20 == 1) {
            apple4 = [ 
            (Math.random() * 30) | 0, 
            (Math.random() * 30) | 0
        ]
        }

        apple = [ 
            (Math.random() * 30) | 0, 
            (Math.random() * 30) | 0
        ]
        score++
    } 
    else if(snake[0][0] == apple2[0] && snake[0][1] == apple2[1]) {
       
        if(score / 5 == 2) {
            apple3 = [ 
            (Math.random() * 30) | 0, 
            (Math.random() * 30) | 0
        ]
        }

        if(score / 20 == 1) {
            apple4 = [ 
            (Math.random() * 30) | 0, 
            (Math.random() * 30) | 0
        ]
        }

        apple2 = [ 
            (Math.random() * 30) | 0, 
            (Math.random() * 30) | 0
        ]
        score++
    }
    else if(snake[0][0] == apple3[0] && snake[0][1] == apple3[1]) {
        
        if(score / 20 == 1) {
            apple4 = [ 
            (Math.random() * 30) | 0, 
            (Math.random() * 30) | 0
        ]
        }
        
        apple3 = [ 
            (Math.random() * 30) | 0, 
            (Math.random() * 30) | 0
        ]
        score++
    } 
    else if(snake[0][0] == apple4[0] && snake[0][1] == apple4[1]) {
        apple4 = [ 
            (Math.random() * 30) | 0, 
            (Math.random() * 30) | 0
        ]
        score++
    }
    else {
        snake.pop()
    }

    for (i = 1; i < snake.length; i++) {
        if (snake[i][0] == snake[0][0] && snake[i][1] == snake[0][1]) {
            snake = ( [0, 1] )
        }
    }
    
    
    draw()
}

function draw() {
    context.clearRect(0, 0, 300, 300)
    context.fillStyle = "lightgreen"
    snake.forEach(function ([ x, y ]) {
        context.fillRect(x, y, 1, 1)
    })

    context.fillStyle = "red"
    context.fillRect(apple[0], apple[1], 1, 1)
    context.fillStyle = "green"
    context.fillRect(apple2[0], apple2[1], 1, 1)
    context.fillStyle = "yellow"
    context.fillRect(apple3[0], apple3[1], 1, 1)
    context.fillStyle = "blue"
    context.fillRect(apple4[0], apple4[1], 1, 1)
    document.getElementById("scoreboard").innerHTML = score

}

function playSonido(s) {
    s.currentTime = 0;
    s.play();
}
playSonido(melodia);
setInterval(updateLoop, 75)

console.log("Fin del juego");

