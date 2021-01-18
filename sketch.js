
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var treeImg, boyImg;
var stone1,string1;
var mango1,mango2,mango3,mango4;

function preload()
{
	treeImg = loadImage("Sprites/tree.png")
	boyImg = loadImage("Sprites/boy.png")
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,40);
	stone1 = new Stone(90,25,40)
	mango1 = new Mango(900,200,40)
	mango2 = new Mango(800,90,40)
	mango3 = new Mango(1000,120,40)
	mango4 = new Mango(700,200,40)
	
	string1 = new String(stone1.body,{x:80, y:320});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  image(treeImg,500,60,700,450);
  image(boyImg,40,300,300,250);

  ground.display()
  stone1.display()
  string1.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()

  dectectCollision(stone1,mango1);
  dectectCollision(stone1,mango2);
  dectectCollision(stone1,mango3);
  dectectCollision(stone1,mango4);

  
}

function mouseDragged() {
    Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
}

function mouseReleased() {
    string1.fly();
}

function dectectCollision(lstone,lmango) {
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<-lmango.r+lstone.r)
	{
		Matter.Body.setStatic(lmango.body,false)
	}
}