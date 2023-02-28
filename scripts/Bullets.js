class Bullet{
    constructor(x,y,r){
        this.x=x;
        this.y=y;
        this.row;
        this.d=5;
    }
    show(){
        noStroke();
        push()
        fill(252,100,10)
        circle(this.x,this.y,this.d)
        this.y+=5;
        pop()
    }
}