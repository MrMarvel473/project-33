var background1;
var girl,girl1;
var boy,boy1;
var edges;
var bar;
function setup() {
  createCanvas(800,400);
  girl=createSprite(400, 200, 50, 50);
  boy=createSprite(650,200,50,50);
  bar=createSprite(650,410,1000,20);
  fill("white");
  boy.addImage(boy1);
  girl.addImage(girl1);
  boy.scale=0.1;
  girl.scale=0.1;
}
function preload(){
background1=loadImage("snow1.jpg");
boy1=loadImage("image5.jpg");
girl1=loadImage("image4.jpg")
}

function draw() {
  background(background1); 
  if(keyCode===32&&boy.y>=200){
    boy.velocityY=-6;
    girl.velocityY=-6;
    
  } 
  boy.velocityY=boy.velocityY+0.8;
  girl.velocityY=girl.velocityY+0.8;
  boy.bounceOff(bar);
  girl.bounceOff(bar);
  edges=createEdgeSprites();
 
 // boy.collide(edges[3]);
 // girl.collide(edges[3]);
  drawSprites();
}
