const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, box1, box2, ground;

function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;

  box1 = new Box(200,300,50,50);
  box2 = new Box(240,100,50,100);
  ground1 = new Ground(200,390,400,20);
  console.log(ground1);
}

function draw() {
  background(0); 
  Engine.update(engine) 

  box1.display();
  box2.display();
  ground1.display();
  
  //drawSprites();
}