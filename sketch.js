
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var engine,world;
var ball;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	ball=new paper(300,450,20);
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	
	


	Engine.run(engine);

  
}


function draw() {
    background(230);
 
    ball.display();
  groundObject.display();
  dustbinObj.display();

}

function keyPressed() {
  	if (keyCode === UP_ARROW) {
        console.log('jump');
    	Matter.Body.applyForce(ball.body,ball.body.position,{x:80,y:-85});

    
  	}
}