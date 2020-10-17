
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
var chain1;
var roof;
var bobDiameter = 100;

function setup() {
	createCanvas(1000, 600);

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

	bob1 = new Bob(200,200,100,100);
	bob2 = new Bob(400,200,100,100);
	bob3 = new Bob(600,200,100,100);
	bob4 = new Bob(800,200,100,100);
	bob5 = new Bob(1000,200,100,100);

	roof = new Roof(500,200,600,20)
	chain1 = new Chain(bob1.body, roof.body,-bobDiameter*2,0);
	chain2 = new Chain(bob2.body, roof.body,0,20);
	chain3 = new Chain(bob3.body, roof.body,320,40);
	chain4 = new Chain(bob4.body, roof.body,320,60);
	chain5 = new Chain(bob5.body, roof.body,320,80);
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);

  background("blue");
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  roof.display();

}