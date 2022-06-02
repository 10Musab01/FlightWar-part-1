
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var backgroundImage
var playButton
var redLaser

function preload(){
  backgroundImage = loadImage("Spacebackground.png")
  playButton = loadImage("blueplaybutton.png")
  redLaser = loadImage("red_laser.png")
  spaceshipImg = loadImage("spaceship.png")
}

function setup() {
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
  
  spaceship = new Spaceship(180, 110, 130, 100)
}


function draw() 
{
  background(backgroundImage);
  image(backgroundImage, 0, 0, width, height)
  
  
  Engine.update(engine);

  spaceship.display()
  
}

