
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var treeObj, stoneObj,groundObject, Shot;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	stoneObj = new rocks(240,420,50,50)

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	Shot = new Slingshot(stoneObj.body,{x: 250, y:250})
	
	Engine.run(engine);

}

function draw() {
Engine.update(engine)
  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  stoneObj.display()

  groundObject.display();
  Shot.display();
}

/*function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingShot.fly()
}*/