var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  // fixedRect= createSprite(200, 200, 50, 80);
  // movingRect= createSprite(400, 200, 80, 30);
    fixedRect= createSprite(200, 200, 50, 80);
    movingRect= createSprite(200, 200, 50 , 80);
    movingRect.velocityY=5;
    fixedRect.velocityY=-5;
}

function draw() {
  background(255,255,255);  
 movingRect.x=World.mouseX;
 movingRect.y=World.mouseY;
if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 ) {
movingRect.velocityX=movingRect.velocityX*(-1) 
fixedRect.velocityX=fixedRect.velocityX*(-1)
} if (fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2 && movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2  ){
//   {movingRect.shapeColor="red";
//    fixedRect.shapeColor="red";
movingRect.velocityY=movingRect.velocityX*(-1) 
fixedRect.velocityY=fixedRect.velocityX*(-1)
 }
//  else{movingRect.shapeColor="green";
//  fixedRect.shapeColor="green";

// }
  drawSprites();
}
