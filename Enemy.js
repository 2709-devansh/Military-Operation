class EnemyPlane{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
    }
    display(){
        var enemy = createSprite(this.x, this.y, this.width, this.height);
        enemy.shapeColor = "lightGrey";
        enemy.velocityX = -6;
        enemy.lifetime = 100;
    }
}

function spawnEnemies(){
    if(World.frameCount%60 === 0){
      enemy1 = new EnemyPlane(900, 40);
      enemy1.display();
    }
  }