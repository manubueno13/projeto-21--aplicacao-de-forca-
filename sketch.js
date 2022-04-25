
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var chao
var parede1
var parede2
var bola
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  bola=Bodies.circle(200,100,20,{isStatic:false})
World.add(world,bola)

chao=Bodies.rectangle(400,680,800,20,{isStatic:true})
World.add(world,chao)

parede1=Bodies.rectangle(700,630,20,80,{isStatic:true})
World.add(world,parede1)

parede2=Bodies.rectangle(500,630,20,80,{isStatic:true})
World.add(world,parede2)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect(chao.position.x,chao.position.y,800,20)
  drawSprites();
  rect(parede1.position.x,parede1.position.y,20,80)
  rect(parede2.position.x,parede1.position.y,20,80)
  ellipse(bola.position.x,bola.position.y,40,40)
  if (keyDown("space")){
    Matter.Body.applyForce(bola,bola.position,{x:0.005,y:-0.005})
  }
}



