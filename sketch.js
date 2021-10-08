const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball;
var ball1;
var ball2;
var ball3;
var ball4;

var bob1;




var roof;

//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);

	var ball_options={
		isStatic:true
	}
	
	
	ball = Bodies.circle(300,500,20,ball_options);
	World.add(world,ball);

	ball1 = Bodies.circle(350,500,20,ball_options);
	World.add(world,ball);

	ball2 = Bodies.circle(400,500,20,ball_options);
	World.add(world,ball);

	ball3 = Bodies.circle(450,500,20,ball_options);
	World.add(world,ball);

	ball4 = Bodies.circle(500,500,20,ball_options);
	World.add(world,ball);

	rope1=new rope(bob1,roof,-80,0);
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here
  ellipse(ball.position.x,ball.position.y,50);

  ellipse(ball1.position.x,ball1.position.y,50);

  ellipse(ball2.position.x,ball2.position.y,50);

  ellipse(ball3.position.x,ball3.position.y,50);

  ellipse(ball4.position.x,ball4.position.y,50);

}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
