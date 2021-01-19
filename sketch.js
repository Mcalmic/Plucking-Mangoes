
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	

}

function setup() {
	createCanvas(1000, 500);

	engine = Engine.create();
	world = engine.world;

	tree = new Tree(-100, -100, 1, 1);
	ground = new Ground(500, 500, 1000, 5);
	mango1 = new Mango(600, 50, 50);
	mango2 = new Mango(800, 100, 50);
	mango3 = new Mango(500, 200, 50)
	stone = new Stone(100, 300, 100);
	boy = new Boy(stone.body, {x:100, y:300});

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  stone.display();
  boy.display();
  ground.display();

  if(isTouchingAlgorithm(mango1, stone)){

	Matter.Body.setStatic(mango1.body, false);

  }
  
  if(isTouchingAlgorithm(mango2, stone)){

	Matter.Body.setStatic(mango2.body, false);

  }
  
  if(isTouchingAlgorithm(mango3, stone)){

	Matter.Body.setStatic(mango3.body, false);

  }

  drawSprites();
 
}

function mouseDragged(){

	stone.body.position.x = mouseX;
	stone.body.position.y = mouseY;

}

function mouseReleased(){

    boy.fly();

}
function isTouchingAlgorithm(object1, object2){

	if((Math.abs(object1.body.position.x - object2.body.position.x) - 0.5 * (object1.diameter/2 + object2.diameter/2) <= 0)
	&&(Math.abs(object1.body.position.y - object2.body.position.y) - 0.5 * (object1.diameter/2 + object2.diameter/2) <= 0)){
	
		return true;
	
	}
	
}