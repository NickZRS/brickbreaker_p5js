class Ball {
    constructor(x, y, r){
        this.x = x;
        this.y = y;
        this.r = r;
        this.dx = 2;
        this.dy = 3;
    }

    drawBall(){
        ellipse(this.x, this.y, this.r*2, this.r*2);
    }

    moveBall(){
        this.x = this.x + this.dx;
        this.y = this.y + this.dy;
    }

    checkBoundaries(){
        if (this.x >= width || this.x <= 0){
            this.dx = this.dx * -1;
        }
        if (this.y >= height || this.y <=0){
            this.dy = this.dy * -1;
        }
    }
}