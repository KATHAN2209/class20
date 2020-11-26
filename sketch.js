
var ball1,ball2;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
ball1=createSprite(200,300,50,80)
ball2=createSprite(100,200,60,20)
ball1.shapeColor="red";
ball2.shapeColor="blue";


}

function draw() {
  background("skyblue");  
ball2.y=World.mouseY
ball2.x=World.mouseX

if(ball2.x-ball1.x<ball1.width/2+ball2.width/2
  &&ball1.x-ball2.x<ball1.width/2+ball2.width/2
  && ball2.y-ball1.y<ball1.height/2+ball2.height/2
  && ball1.y-ball2.y<ball1.height/2+ball2.height/2 )
{

  ball2.shapeColor="green";
  ball1.shapeColor="green";
}else{

  ball1.shapeColor="yellow";
ball2.shapeColor="yellow";
}






  drawSprites();


}