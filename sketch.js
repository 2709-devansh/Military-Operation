var fighterPlane;
var enemy1;

function setup() {
  createCanvas(1350,670);

  fighterPlane = createSprite(60, 40, 50, 50);
  fighterPlane.shapeColor = "#267c21";
}

function draw() {
  background(61, 58, 58); 
  
  if(keyDown("DOWN_ARROW")){
    fighterPlane.y = fighterPlane.y + 15;
  }
  if(keyDown("UP_ARROW")){
    fighterPlane.y = fighterPlane.y - 10;
  }

  spawnEnemies();

  drawSprites();
}