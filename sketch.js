const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engineV, worldV;
// create ground
var objectV;
var ball


function setup() {
  createCanvas(400,400);
  engineV=Engine.create();
  worldV=engineV.world;
  var objectV_options={
    isStatic:true
  }
  // create physical body
  objectV=Bodies.rectangle(200,390,200,20, objectV_options);
  World.add(worldV, objectV)

  ball_options={
restitution:1.0
  }
 
  ball=Bodies.circle(200,100,20, ball_options);
  World.add(worldV,ball)

 // createSprite(200, 200, 50, 50);
}

function draw() {
  background("blue"); 
  Engine.update(engineV) 
 // drawSprites();
 rectMode(CENTER)
 // create display body
 rect(objectV.position.x, objectV.position.y, 400,20);
ellipseMode(RADIUS)
 ellipse(ball.position.x, ball.position.y, 20,20)
}