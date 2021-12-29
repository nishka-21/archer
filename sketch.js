const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseimage;
var deer;
var swan;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
  deerimage=loadImage("./assets/deer.png");
 swanimage=loadImage("./assets/swan.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  var options = {
    isStatic: true
  };

  playerBase = Bodies.rectangle(200, 350, 180, 150, options);
  World.add(world, playerBase);

  player = Bodies.rectangle(250, playerBase.position.y - 160, 50, 180, options);
  World.add(world,player);

  deer = Bodies.rectangle(550,250,180,150,options);
  World.add(world,deer);

  swan = Bodies.rectangle(450,400,180,150,options);
  World.add(world,swan);

 //playerArcher = new ( 340, playerBase.position.y - 112, 120, 120);
 playerArcher = new PlayerArcher( 340, playerBase.position.y - 112, 120, 120);
 //playerArcher =  PlayerArcher( 340, playerBase.position.y - 112, 120, 120);
 // playerArcher = new PlayerArcher( );

}

function draw() {
  background(backgroundImg);
  image(baseimage,playerBase.position.x,playerBase.position.y,180,150)
  image(playerimage,player.position.x,player.position.y,50,180)
  image(deerimage,deer.position.x,deer.position.y,180,150)
  image(swanimage,swan.position.x,swan.position.y,180,150)


  Engine.update(engine);


  // playerArcher.display;
  // playerArcherdisplay();
  playerArcher.display();
  //display();

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}
