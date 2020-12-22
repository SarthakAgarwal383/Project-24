
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;


var paper,ground,dbw1,dbw2,dbw3;

//function preload()
//{
	
//}

 function setup() {

	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	paper= new Paper(100,530,40);
	ground=new Ground(800,600,1600,20);
	dbw1= new Dustbin(1300,590,200,20);
	dbw2= new Dustbin(1200,525,20,150);
	dbw3= new Dustbin(1400,525,20,150);
	

	Engine.run(engine);
  
}


function draw() {
	
	Engine.update(engine);

  rectMode(CENTER);
  background("blue");
  



	



  drawSprites();

  paper.display();
  ground.display();
  dbw1.display();
  dbw2.display();
  dbw3.display();
}
function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:95,y:-95});
		
	}
	
}



