
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper;
var dustbin1,dustbin2,dustbin3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	dustbin1= new Dustbin(700,675,120,15)
	dustbin2= new Dustbin(670,650,15,70)    
    dustbin3= new Dustbin(720,650,15,70)    


	ground=new Ground(400,690,800,20)

    paper=new Paper(50,670,15)
	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(0);
  
  ground.display();
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:25,y:-25})
	}
}
