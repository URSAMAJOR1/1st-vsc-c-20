var fixedRect
var movingRect
function setup() {

  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 100, 50);

  fixedRect.shapeColor="cyan"
 movingRect=createSprite(200,100,50,50)
 movingRect.shapeColor="cyan"
}

function draw() {
  background(0);
  
  movingRect.x= World.mouseX
  
  movingRect.y=World.mouseY


  
  if(fixedRect.x-movingRect.x < fixedRect.width/2+movingRect.width/2
    && movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
    && fixedRect.y-movingRect.y < fixedRect.height/2+movingRect.height/2
    && movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2)
  {
  movingRect.shapeColor="red"
  fixedRect.shapeColor="blue"
  }
  else{ 
    movingRect.shapeColor="cyan"
  fixedRect.shapeColor="cyan"
  }
 
  
  drawSprites();
}