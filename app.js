let plants = [];
let zombies = [];
let bullets = [];
let numOfZombies = [0,0,0,0,0]
let score = 0;
function preload(){
  img = loadImage('./assets/Background.jpg');
  walk1=loadImage("./assets/png/walk1.png")
  walk2=loadImage("./assets/png/walk2.png")
  walk3=loadImage("./assets/png/walk3.png")
  rocky = loadImage("./assets/png/rockybhai.png")
}
function setup() {
    createCanvas(windowWidth, windowHeight);
    for(let i=0;i<9;i++){
      for(let j=0;j<5;j++){
        plants.push(new Plant(width/2-(width/25)- 2*(width/6)+j*(width/6),height/2-5*height/17.5 +i*height/17.5 ,j+1))
        
      }
    }
    // zombies.push(new Zombies(width/2-(width/25)- 2*(width/6),height,1))
    // zombies.push(new Zombies(width/2-(width/25)- 2*(width/6),height,2))
    zombies.push(new Zombies(width/2-(width/25)- 2*(width/6),height,3))
    // zombies.push(new Zombies(width/2-(width/25)- 2*(width/6),height,4))
    // zombies.push(new Zombies(width/2-(width/25)- 2*(width/6),height,5))
  }
  
  function draw() {
    background(img);
    
    fill(255,200,10)
    for (let i = 0; i < plants.length; i++) {
      const plant = plants[i];
      plant.show();
      if(plant.health<=0)plants.splice(i,1);
    }   
    for (let i = 0; i < zombies.length; i++) {
      const zombie = zombies[i];
      zombie.show();
    }
    for (let i = 0; i < bullets.length; i++) {
      const bullet = bullets[i];
      bullet.show();
    }
  }
  
  function mousePressed() {
    for (let i = 0; i < plants.length; i++) {
      const plant = plants[i];
      let d = dist(plant.x,plant.y,mouseX,mouseY);
      if(d<plant.d/3){
        plant.empty=false;
        break;
      }
    }
  }
  