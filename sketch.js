const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,ball1,ball3,ball2,ball4,ball5,ball6,ball7,chain;
var ball1Diameter=20;
var chain2,chain3,chain4,chain5,chain6;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(400,100,650,10);
	ball1=new Paper(240,400,20);
	ball2=new Paper(280,400,20);
	ball3=new Paper(320,400,20);
	ball4=new Paper(355,400,20);
	ball5=new Paper(400,400,20);
	ball6=new Paper(440,400,20);
	ball7=new Paper(480,400,20);
	chain=new Chain(ball1.body,ground.body,-ball1Diameter*2,0);
	chain1=new Chain(ball2.body,ground.body,-ball1Diameter*2,0);
	chain2=new Chain(ball3.body,ground.body,-ball1Diameter*2,0);
	chain3=new Chain(ball4.body,ground.body,-ball1Diameter*2,0);
	chain4=new Chain(ball5.body,ground.body,-ball1Diameter*2,0);
	chain5=new Chain(ball6.body,ground.body,-ball1Diameter*2,0);
	chain6=new Chain(ball7.body,ground.body,-ball1Diameter*2,0);
	Engine.run(engine);
  
}


function draw() {
	
  rectMode(CENTER);
  background(200);
  Engine.update(engine);
  ground.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball6.display();
  ball5.display();
  ball7.display();
  chain.display();  
  chain2.display(); 
  chain3.display();   
  chain4.display(); 
  chain1.display(); 
  chain5.display(); 
  chain6.display(); 
    drawSprites();

}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85,y:-85});
	}
}


