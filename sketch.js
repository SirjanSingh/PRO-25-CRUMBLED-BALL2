const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground , box,boxLeft,boxRight,boxDown;
var ball;
var boxImg,dustbinSprite;
var bg;
function preload()
{
boxImg=loadImage("sprites/dustbingreen.png");
bg=loadImage("sprites/bg.png");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

   dustbinSprite=createSprite(950,520,180,280)
   dustbinSprite.addImage(boxImg);
   dustbinSprite.scale=0.95;
	//Create a Ground
	/*ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);*/
	 
	 ground = new Ground();

	 boxDown=new Box(950, 660, 200,20);
	 boxRight= new Box(1040,520,20,300)
	 boxLeft= new Box(860,520,20,300)
	 
	// box=new Dustbin(950,520,200,300)

	 ball = new Ball(200,100,70)
 
	Engine.run(engine);
  
}


function draw() {
  background(bg);
Engine.update(engine);

  ground.display();
  ball.display();
 boxLeft.display();
  boxRight.display();
  boxDown.display();
  //box.display();
  
  drawSprites();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(ball.body,ball.body.position,{x:224,y:-210});
	}
	if(keyCode === LEFT_ARROW){
		Body.applyForce(ball.body,ball.body.position,{x:-300,y:-300});
	}
}


