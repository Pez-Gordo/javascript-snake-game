
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
apple5 = []
apple6 = []
apple7 = []
apple8 = []
score = 0



var melodia = document.createElement("audio");
melodia.src = "./sonidos/dubmood-monkey-island-8-bit-music.mp3";

playSonido(melodia);

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
        
    if (score < 29) {
                
        if(snake[0][0] == apple[0] && snake[0][1] == apple[1]) {
            if(score / 5 == 1) {
                apple2 = [ 
                (Math.random() * 50) | 0, 
                (Math.random() * 50) | 0
                ]
            }
           
            if(score / 5 == 2) {
                apple3 = [ 
                (Math.random() * 50) | 0, 
                (Math.random() * 50) | 0
                ]
            }
    
            if(score / 20 == 1) {
                apple4 = [ 
                (Math.random() * 50) | 0, 
                (Math.random() * 50) | 0
                ]
            }
    
            apple = [ 
                (Math.random() * 50) | 0, 
                (Math.random() * 50) | 0
                ]
            score++
        } 
        else if(snake[0][0] == apple2[0] && snake[0][1] == apple2[1]) {
           
            if(score / 5 == 2) {
                apple3 = [ 
                (Math.random() * 50) | 0, 
                (Math.random() * 50) | 0
                ]
            }
    
            if(score / 20 == 1) {
                apple4 = [ 
                (Math.random() * 50) | 0, 
                (Math.random() * 50) | 0
                ]
            }
    
            apple2 = [ 
                (Math.random() * 50) | 0, 
                (Math.random() * 50) | 0
                ]
            score++
        }
        else if(snake[0][0] == apple3[0] && snake[0][1] == apple3[1]) {
            
            if(score / 20 == 1) {
                apple4 = [ 
                (Math.random() * 50) | 0, 
                (Math.random() * 50) | 0
                ]
            }
            
            apple3 = [ 
                (Math.random() * 50) | 0, 
                (Math.random() * 50) | 0
                ]
            score++
        } 
        else if(snake[0][0] == apple4[0] && snake[0][1] == apple4[1]) {
            apple4 = [ 
                (Math.random() * 50) | 0, 
                (Math.random() * 50) | 0
                ]
            score++
        }
        else {
            snake.pop()
        }
    
        for (i = 1; i < snake.length; i++) {
            if (snake[i][0] == snake[0][0] && snake[i][1] == snake[0][1]) {
                snake = ( [0, 1] )
                console.log("Game Over !")
            }
        }
        draw()

    } else if (score > 28) {
                   
        if(snake[0][0] == apple[0] && snake[0][1] == apple[1]) {
            if(score / 32 == 1) {
                apple2 = [ 
                (Math.random() * 50) | 0, 
                (Math.random() * 50) | 0
                ]
            }
           
            if(score / 34 == 1) {
                apple3 = [ 
                (Math.random() * 50) | 0, 
                (Math.random() * 50) | 0
                ]
            }
    
            if(score / 36 == 1) {
                apple4 = [ 
                (Math.random() * 50) | 0, 
                (Math.random() * 50) | 0
                ]
            }

            if(score / 38 == 1) {
                apple5 = [ 
                (Math.random() * 50) | 0, 
                (Math.random() * 50) | 0
                ]
            }
            
            if(score / 40 == 1) {
                apple6 = [ 
                (Math.random() * 50) | 0, 
                (Math.random() * 50) | 0
                ]
            }

            if(score / 42 == 1) {
                apple7 = [ 
                (Math.random() * 50) | 0, 
                (Math.random() * 50) | 0
                ]
            }
            
            if(score / 44 == 1) {
                apple8 = [ 
                (Math.random() * 50) | 0, 
                (Math.random() * 50) | 0
                ]
            }


    
            apple = [ 
                (Math.random() * 50) | 0, 
                (Math.random() * 50) | 0
                ]
            score++
        } 


        else if(snake[0][0] == apple2[0] && snake[0][1] == apple2[1]) {
           
            if(score / 34 == 1) {
                apple3 = [ 
                (Math.random() * 50) | 0, 
                (Math.random() * 50) | 0
                ]
            }
    
            if(score / 36 == 1) {
                apple4 = [ 
                (Math.random() * 50) | 0, 
                (Math.random() * 50) | 0
                ]
            }

            if(score / 38 == 1) {
                apple5 = [ 
                (Math.random() * 50) | 0, 
                (Math.random() * 50) | 0
                ]
            }
            
            if(score / 40 == 1) {
                apple6 = [ 
                (Math.random() * 50) | 0, 
                (Math.random() * 50) | 0
                ]
            }

            if(score / 42 == 1) {
                apple7 = [ 
                (Math.random() * 50) | 0, 
                (Math.random() * 50) | 0
                ]
            }
            
            if(score / 44 == 1) {
                apple8 = [ 
                (Math.random() * 50) | 0, 
                (Math.random() * 50) | 0
                ]
            }
    
            apple2 = [ 
                (Math.random() * 50) | 0, 
                (Math.random() * 50) | 0
                ]
            score++
        }
        else if(snake[0][0] == apple3[0] && snake[0][1] == apple3[1]) {
            
            if(score / 36 == 1) {
                apple4 = [ 
                (Math.random() * 50) | 0, 
                (Math.random() * 50) | 0
                ]
            }

            if(score / 38 == 1) {
                apple5 = [ 
                (Math.random() * 50) | 0, 
                (Math.random() * 50) | 0
                ]
            }
            
            if(score / 40 == 1) {
                apple6 = [ 
                (Math.random() * 50) | 0, 
                (Math.random() * 50) | 0
                ]
            }

            if(score / 42 == 1) {
                apple7 = [ 
                (Math.random() * 50) | 0, 
                (Math.random() * 50) | 0
                ]
            }
            
            if(score / 44 == 1) {
                apple8 = [ 
                (Math.random() * 50) | 0, 
                (Math.random() * 50) | 0
                ]
            }
            
            apple3 = [ 
                (Math.random() * 50) | 0, 
                (Math.random() * 50) | 0
                ]
            score++
        } 
        else if(snake[0][0] == apple4[0] && snake[0][1] == apple4[1]) {
            
            if(score / 38 == 1) {
                apple5 = [ 
                (Math.random() * 50) | 0, 
                (Math.random() * 50) | 0
                ]
            }
            
            if(score / 40 == 1) {
                apple6 = [ 
                (Math.random() * 50) | 0, 
                (Math.random() * 50) | 0
                ]
            }

            if(score / 42 == 1) {
                apple7 = [ 
                (Math.random() * 50) | 0, 
                (Math.random() * 50) | 0
                ]
            }
            
            if(score / 44 == 1) {
                apple8 = [ 
                (Math.random() * 50) | 0, 
                (Math.random() * 50) | 0
                ]
            }

            
            apple4 = [ 
                (Math.random() * 50) | 0, 
                (Math.random() * 50) | 0
                ]
            score++
        }
        else if(snake[0][0] == apple5[0] && snake[0][1] == apple5[1]) {
            
            if(score / 40 == 1) {
                apple6 = [ 
                (Math.random() * 50) | 0, 
                (Math.random() * 50) | 0
                ]
            }

            if(score / 42 == 1) {
                apple7 = [ 
                (Math.random() * 50) | 0, 
                (Math.random() * 50) | 0
                ]
            }
            
            if(score / 44 == 1) {
                apple8 = [ 
                (Math.random() * 50) | 0, 
                (Math.random() * 50) | 0
                ]
            }
            
            apple5 = [ 
                (Math.random() * 50) | 0, 
                (Math.random() * 50) | 0
                ]
            score++
        }

        else if(snake[0][0] == apple6[0] && snake[0][1] == apple6[1]) {
            
            if(score / 42 == 1) {
                apple7 = [ 
                (Math.random() * 50) | 0, 
                (Math.random() * 50) | 0
                ]
            }
            
            if(score / 44 == 1) {
                apple8 = [ 
                (Math.random() * 50) | 0, 
                (Math.random() * 50) | 0
                ]
            }
            
            apple6 = [ 
                (Math.random() * 50) | 0, 
                (Math.random() * 50) | 0
                ]
            score++
        }

        else if(snake[0][0] == apple7[0] && snake[0][1] == apple7[1]) {
            
            if(score / 44 == 1) {
                apple8 = [ 
                (Math.random() * 50) | 0, 
                (Math.random() * 50) | 0
                ]
            }
            
            apple7 = [ 
                (Math.random() * 50) | 0, 
                (Math.random() * 50) | 0
                ]
            score++
        }
        else if(snake[0][0] == apple8[0] && snake[0][1] == apple8[1]) {
            apple8 = [ 
                (Math.random() * 50) | 0, 
                (Math.random() * 50) | 0
                ]
            score++
        }

        else {
            snake.pop()
        }
    
        for (i = 1; i < snake.length; i++) {
            if (snake[i][0] == snake[0][0] && snake[i][1] == snake[0][1]) {
                snake = ( [0, 1] )
                console.log("Game Over !")
            }
        }
        
        draw()
    }

    
}

function draw() {
    context.clearRect(0, 0, 500, 500)
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

    context.fillStyle = "orange"
    context.fillRect(apple5[0], apple5[1], 1, 1)
    context.fillStyle = "pink"
    context.fillRect(apple6[0], apple6[1], 1, 1)
    context.fillStyle = "cyan"
    context.fillRect(apple7[0], apple7[1], 1, 1)
    context.fillStyle = "purple"
    context.fillRect(apple8[0], apple8[1], 1, 1)
    document.getElementById("scoreboard").innerHTML = score

}

function playSonido(s) {
    s.currentTime = 0;
    s.play();
}

setInterval(updateLoop, 75)


