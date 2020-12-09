
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running)
  monkey.scale=0.1
 
  
  ground=createSprite(80,315,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)
  

  obstacleGroup = createGroup();
  FoodGroup = createGroup();
}


function draw() {
  background(180);
  
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground)
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
                
  spawnObstacles();
  
  spawnFood();

  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime, 100,50);
}


function spawnFood() {
  if(frameCount % 80 === 0){
    var banana=createSprite(555,315,20,20);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX=-4;
    banana.lifetime = 170;
    
    FoodGroup.add(banana);
  }
}

function spawnObstacles(){
   if(frameCount % 300 === 0){
     var obstacle=createSprite(555,315,20,20);
     obstacle.addImage(obstacleImage);
     obstacle.velocityX=-4;
     
     obstacleGroup.add(obstacle);
   }
}


