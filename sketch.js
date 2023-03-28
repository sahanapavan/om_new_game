var screen=0;
var PLAY = 1, END = 0,START=2;
var gameState = START;
var score = 2;

/*var hero,obstacleImg;
var groundImage, ground,ma,bg;
var obstacleGroup;
var brickImg, animal1Img;*/
var monsta_1 , monsta_2 , monsta_3 , monst_4;
var monsta_5 ;
var monsters_running
var monstersImg;
var spooky_forest, spooky_Img
var cactus, invisibleGround , ground,gamestate,groundImg
var obstacleGroup




function preload(){
  monsta_1=loadImage("Images/monsta 1.png")
  monsta_2=loadImage("Images/monsta 2.png")
  monsta_3=loadImage("Images/monsta 3.png")
  monsta_4=loadImage("Images/monsta 4.png")
  monsta_5=loadImage("Images/monsta 5.png")
  monsters_running= loadAnimation("Images/monsta 1.png","Images/monsta 2.png", "Images/monsta 3.png", "Images/monsta 4.png", "Images/monsta 5.png")
  spooky_Img=loadImage("Images/spooky forest.png")
  cactus=loadImage("Images/Cactus.jpg")
  ground=loadImage("Images/ground1.png")

  
  /*bg = loadImage("background.JPG");
  ma = loadAnimation("boy1.png","boy2.png","boy3.png","boy4.png");
  groundImage = loadImage("ground1.png");
  obstacleImg = loadAnimation("obstacle1.png","obstacle2.png","obstacle3.png","obstacle4.png");
  brickImg = loadImage("brick.png");
  animal1Img = loadImage("animal.png");*/
}



function setup() {
 // createCanvas(600,350);
var can= createCanvas(600,350);

   can.mousePressed(mp);

  monstersImg= createSprite(50,340,20,50);
  monstersImg.addAnimation("running",monsters_running);

  groundImg = createSprite(200,400,400,20);
  groundImg.addImage("ground",ground);
  groundImg.x = groundImg.width/2;
  groundImg.velocityX = (-2);
  
  //has to be done today
  invisibleGround=createSprite(100,340,400,10);
  invisibleGround.visible=false;

obstacleGroup = new Group();
/*animalsGroup = new Group();
bricksGroup = new Group();
invisibleBlockGroup = new Group();*/
  
}

  function draw() {
  
	if(screen == 0){
    gameOn()
    
    drawSprites()
    //startScreen()
       
  }else if(screen == 1){
  	gameOn()
    
    drawSprites()
  }else if(screen==2){
  	endScreen()
  }
    if(gameState === PLAY){
     
    groundImg.velocityX = -2;
    //keyPressed();
    if(keyDown("space") && monstersImg.y>=150){
      monstersImg.velocityY = -5;
    }
    monstersImg.velocityY = monstersImg.velocityY + 0.8;
    
    if(monstersImg.isTouching(cactus)){
      console.log("touch")
      gameState =  END;
    }
  }
     monstersImg.collide(invisibleGround);
    
    
  }

function startScreen(){
		background(96, 157, 255)
		fill(255)
		textAlign(CENTER);
		text('WELCOME TO MY MONSTER GAME', width / 2, height / 2)
		text('click to start', width / 2, height / 2 + 20);
  gameState=PLAY;
		reset();
        
}

function gameOn(){
  background(spooky_Img);
  textSize(20);
  fill(0);
  text("Score:"+score, 480, 30);
  /*if(gameState === PLAY){
    ground.velocityX = (-2);
    //keyPressed();
    if(keyDown("space")){
ma.velocityY =-12;

    }
    ma.velocityY = ma.velocityY+0.5;
    if(obstacleGroup.isTouching(ma)){
      gameState =  END;
    }
  }*/
  
   if(groundImg.x<0){
    groundImg.x = groundImg.width/2;
  }
  spawnObstacles();
 // spawnBrick();

}


function endScreen(){
		background(150)
		textAlign(CENTER);
		text('GAME OVER', width / 2, height / 2)
  	text("SCORE = " + score, width / 2, height / 2 + 20)
		text('click to play again', width / 2, height / 2 + 40);
}

function mp(){
	if(screen==0){
  	screen=1
  }else if(screen==2){
  	screen=0
  }
}

function reset(){
	  score=0;
  	
}
  

function spawnObstacles(){
  if(frameCount%200 === 0){
  var cactusImg = createSprite(600,300,10,40);
  cactusImg.velocityX = (-5);
  cactusImg.addImage("obstacles", cactus);
  cactusImg.Lifetime = 300;
    
    obstacleGroup.add(cactusImg);
  }
}
  
  
/*function spawnBrick(){
  if(frameCount % 240 === 0){
    var brick = createSprite(250,100);
    var animal = createSprite(250,60);
    var invisibleBlock = createSprite(250,100);
    invisibleBlock.width = animal.width;
    invisibleBlock.height = 2;
    
   brick.x = Math.round(random(120,400));
   animal.x =brick.x;
    invisibleBlock.x = brick.x;
    
    animal.addImage(animal1Img);
    animal.scale = 0.5;
  brick.addImage(brickImg);
  brick.scale = 1.5;
    
    animal.velocityX = -1;
    brick.velocityX= -1;
    invisibleBlock.velocityX = -1;
    
    
    
    //assign lifetime to the variable
    animal.lifetime = 450;
    brick.lifetime = 450;
    invisibleBlock.lifetime = 450;

    
    //add each door to the group
    animalsGroup.add(animal);
    invisibleBlock.debug = false;
    bricksGroup.add(brick);
    invisibleBlockGroup.add(invisibleBlock);

  }
}*/
/*function keyPressed(){
    if(keyCode === 32){
      ma.velocityY = (-12);
    }
}*/