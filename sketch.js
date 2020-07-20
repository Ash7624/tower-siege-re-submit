const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ball,block1,block2,block3;
var block4,block5,block6,block7;
var block8,block9,block10;
var slingshot,base;






function setup() {
  createCanvas(800,400);

  base = new Ground(375,215,120,20);

  var ball = createSprite(200,200,10,10);

  block1 = new Box(330,235,30,30);
  block2 = new Box(360,235,30,30);
  block3 = new Box(390,235,30,30);
  block4 = new Box(420,235,30,30);

  block5 = new Box(345,265,30,30);
  block6 = new Box(375,265,30,30);
  block7 = new Box(405,265,30,30);

  block8 = new Box(360,295,30,30);
  block9 = new Box(390,295,30,30);

  block10 = new Box(375,325,30,30);

  slingshot = new SlingShot(ball.body,{x:200, y:200});
}

function draw() {
  background(255,255,255);  

block1 = display();
block2 = display();
block3= display();
block4 = display();
block5 = display();
block6 = display();
block7 = display();
block8 = display();
block9 = display();
block10 = display();

slingshot = display();
base = display();
ball = display();


  drawSprites();
}
function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}
