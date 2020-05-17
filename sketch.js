const Engine = Matter.Engine ;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var pillar1, pillar2, pillar3, pillar4;

function setup() {
  createCanvas(1000,800);

  engine= Engine.create();
  world = engine.world;
  

  pillar1 = new Pillar(550,300,50,250);
  pillar2 = new Pillar(450,300,50,250);
  pillar3 = new Pillar(350,300,50,250);
  pillar4 = new Pillar(600,300,50,250);

}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  pillar1.display();   
  pillar2.display(); 
  pillar3.display(); 
  pillar4.display(); 
}