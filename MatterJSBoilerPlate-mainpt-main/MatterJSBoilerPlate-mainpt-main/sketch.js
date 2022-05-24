
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var plane

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);

 


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.

var plane_options={
    isStatic:true
}

var block1_options = {
restitution:0.5,
friction:0.02,
frictionAir:0,
}
var block2_options = {
	restitution:0.7,
	friction:0.01,
	frictionAir:0.1
}
var block3_options = {
	restitution:0.1,
	friction:1,
	frictionAir:0.3
}


plane = Bodies.rectangle(200, 399, 400, 15, plane_options)
World.add(world,plane)
	Engine.run(engine);
  
block1 = Bodies.circle(220,10,30,block1_options)
World.add(world,block1)
block2 = Bodies.rectangle(110,50,30,30,block2_options)
World.add(world,block2)
block3 = Bodies.rectangle(350,50,30,30,block3_options)
World.add(world,block3)

















}


function draw() {
  rectMode(CENTER);
  background("green");
  
  drawSprites();
 
Engine.update(engine)
fill("gray")
rect(plane.position.x,plane.position.y,400,15)
fill("red")
rect(block2.position.x,block2.position.y,30,30)
fill("red")
rect(block3.position.x,block3.position.y,30,30)
fill("red")
ellipse(block1.position.x,block1.position.y,30,30)






















}






























