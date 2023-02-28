class Zombies {
    constructor(x, y, row) {
        this.row = row;
        numOfZombies[row-1]++;
        this.x = x + (width / 6) * (row - 1);
        this.y = y;
        this.d = height / 17.5;
        this.health = 100;
        this.speed = 1;
        this.eating = false;
        this.target = null;
    }
    show() {
        // draw zombie
        fill(255, 0, 0);
        // circle(this.x, this.y, this.d);
        if(this.y%15<=5)image(walk1,this.x-this.d/2,this.y-this.d/2,this.d,this.d);
        if(this.y%15<=10)image(walk3,this.x-this.d/2,this.y-this.d/2,this.d,this.d);
        else image(walk2,this.x-this.d/2,this.y-this.d/2,this.d,this.d);
        //movement 
        if (this.y > 100) {

            if (!this.eating)
                this.y -= this.speed;
            // 
            for (let i = 0; i < plants.length; i++) {
                const plant = plants[i];
                if (plant.empty) continue;
                if (plant.row == this.row) {
                    if (this.y>plant.y && this.y - plant.y < (this.d*0.75)) {
                        this.eating = true;
                        this.target = plant;
                    }
                }
            }
        }
        else
        {
            reset();
        }
    }
}
setInterval(() => {
    if(zombies.length==0){
        for (let i = 1; i <= floor(random(1,6)); i++) {            
            zombies.push(new Zombies(width/2-(width/25)- 2*(width/6),height,i))
        }

    }
    for (let i = 0; i < zombies.length; i++) {
        const zombie = zombies[i];
        if(zombie.health<=0){
            zombies.splice(i,1);
            score+=10;
            document.getElementById("score").innerText=score;
            numOfZombies[zombie.row-1]--;
        }
        if (zombie.eating) {
            zombie.target.health -= 20;
            if (zombie.target.health < 0) {
                zombie.eating = false;
                zombie.target = null;
            }
        }
    }
}, 500);