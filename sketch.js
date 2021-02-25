
var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  
  fixedRect1 = createSprite(200, 100, 50, 50);
  fixedRect1.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  
  else if (isTouching(movingRect,fixedRect1)) {
    movingRect.shapeColor = "pink";
  
    fixedRect1.shapeColor = "green"
  } else {
    movingRect.shapeColor = "blue";
  
    fixedRect.shapeColor = "blue";
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}








