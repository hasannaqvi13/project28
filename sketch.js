
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	

	mango1=new mango(1100,150,30);
	mango2=new mango(970,140,30);
	mango3=new mango(1100,40,30);
	mango4=new mango(900,200,30);
	mango5=new mango(1150,90,30);
	mango6=new mango(1200,200,30);
	mango7=new mango(1005,250,30);
	mango8=new mango(1050,115,30);
	stone1 = new stone(230,430,20)
	
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	launcher = new launch(stone1.body,{x:230,y:430});
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);

  detectColision(stone1,mango1);
  detectColision(stone1,mango2);
  detectColision(stone1,mango3);
  detectColision(stone1,mango4);
  detectColision(stone1,mango5);
  detectColision(stone1,mango6);
  detectColision(stone1,mango7);
  detectColision(stone1,mango8);
 

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  stone1.display();
  launcher.display();



  groundObject.display();
}

function mouseDragged() { 
	Matter.Body.setPosition(stone1.body, {x:mouseX, y:mouseY}) 
} 

function mouseReleased() { 
	launcher.fly(); 
	// distance=int(dist(stoneObj.x,stoneObj.y,mango1.x,mango1.y)); 
} 
function keyPressed() { 
	if (keyCode === 32) { 
		Matter.Body.setPosition(stone1.body, {x:235, y:420}) 
		launcher.attach(stone1.body); 
	} 
}
function detectColision(lstone,lmango){
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r)
	{
		Matter.Body.setStatic(lmango.body,false)
	}
}
