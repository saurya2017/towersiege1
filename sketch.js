const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,ground2
var block1
var block2,block3,block4
var block5,block6,block7,block8,block9
var block10,block11,block12,block13,block14,block15,block16

var block17,block18,block19,block20
function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

ground1=new Ground(390,418,250,30)
ground2=new Ground(760,250,550,30)

  block1=new Block(390,115,30,40)

  block2=new Block(360,195,30,40)
  block3=new Block(390,195,30,40)
  block4=new Block(420,195,30,40)

  block5=new Block(330,235,30,40)
  block6=new Block(360,235,30,40)
  block7=new Block(390,235,30,40)
  block8=new Block(420,235,30,40)
  block9=new Block(450,235,30,40)
  
  block10=new Block(300,275,30,40)
  block11=new Block(330,275,30,40)
  block12=new Block(360,275,30,40)
  block13=new Block(390,275,30,40)
  block14=new Block(420,275,30,40)
  block15=new Block(450,275,30,40)
  block16=new Block(480,275,30,40)

  block17=new Block(730,60,30,40) 
  
  block18=new Block(700,30,30,40)
  block19=new Block(730,30,30,40)
  block20=new Block(760,30,30,40)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("brown");

  ground1.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  block17.display();

  block18.display();
  block19.display();
  block20.display();
  
  ground2.display();
  
  drawSprites();
  fill("white") 
  text(mouseX + ',' + mouseY,10,45)
 
}



