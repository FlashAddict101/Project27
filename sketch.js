
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roofObject;
var constrainedLog;
var rope1, rope2, rope3, rope4, rope5;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

    //constrainedLog=new Log(230,180,80,PI/2)
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bobObject1= new bob(400,300,20,20);
	bobObject2= new bob(380,300,20,20);
	bobObject3= new bob(360,300,20,20);
	bobObject4= new bob(420,300,20,20);
	bobObject5= new bob(440,300,20,20);
	rope1=new rope(bobObject1.body,constrainedLog.body)
	rope2=new rope(bobObject2.body,constrainedLog.body)
	rope3=new rope(bobObject3.body,constrainedLog.body)
	rope4=new rope(bobObject4.body,constrainedLog.body)
	rope5=new rope(bobObject5.body,constrainedLog.body)
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope.display();
  drawSprites();
 
}



