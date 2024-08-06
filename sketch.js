let bricks = [];
let cols = 15; let rows = 4; let size = 50;
let ball;
let paddle;

function setup() {
    createCanvas(1510, 670);


    for (let i=0; i<cols; i++){
        bricks[i] = [];
        for(let j=0; j<rows;j++){
            bricks[i][j] = new Brick(i*size*2+5, j*size,size*2, size);
        }
    }
    ball = new Ball(width/2, 250, 15);
    paddle = new Paddle(mouseX);
}

function draw(){
    background(180, 202, 237);
    paddle.x = mouseX;

    for(let i=0; i<cols; i++){
        for(let j=0; j<rows; j++){
            if(bricks[i][j].val ==0){
                bricks[i][j].drawBrick();
                bricks[i][j].collided(ball);
            }
        }
    }
    ball.moveBall();
    ball.checkBoundaries();
    ball.drawBall();
    
    paddle.hitPaddle(ball);
    paddle.drawPaddle();
}