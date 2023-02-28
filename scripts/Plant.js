class Plant{
    constructor(x,y,row){
        this.x=x;
        this.y=y;
        this.d=height/17.5;
        this.empty = true;
        this.health = 100;
        this.row = row;
    }
    show(){
        // draw plant
        push();
        // textSize(22);
        // fill(100,255,10);
        // circle(this.x,this.y,this.d)
        if(!this.empty)
        {
            image(rocky,5+this.x-this.d/2 ,this.y-this.d/2-5,this.d,this.d);
        }
        pop();
    }

}
setInterval(() => {
    for (let i = 0; i < bullets.length; i++) {
        const bullet = bullets[i];
        for (let j = 0; j < zombies.length; j++) {
            const zombie = zombies[j];

            if(zombie.x==bullet.x){
                if(zombie.y>bullet.y && zombie.y-bullet.y<zombie.d){
                    zombie.health -= 10;
                    bullets.splice(i,1);
                }
            }

        }
    }    
}, 100);

setInterval(() => {
    for(let i=0;i<bullets.length;i++){
        if(bullets[i].y>height){
            bullets.splice(i,1);
        }
    }
    for (let i = 0; i < plants.length; i++) {
        const plant = plants[i];        
        if(!plant.empty){
            if(numOfZombies[plant.row-1]==0)continue;
            bullets.push(new Bullet(plant.x,plant.y+10,plant.row));
        }

    }
}, 500);