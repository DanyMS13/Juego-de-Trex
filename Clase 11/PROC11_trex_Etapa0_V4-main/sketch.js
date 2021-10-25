
var trex ,trex_running;
var ground,invisibleGround,groundImage;
function preload(){
  
trex_running=loadAnimation ("trex1.png","trex3.png","trex4.png");
groundImage = loadImage ("ground2.png")
}

function setup(){
  createCanvas(600,200)
  //crear sprite de Trex
 trex=createSprite(50,250,20,50);
 trex.addAnimation("running",trex_running);
 trex.scale=0.5;
 //sprite de suelo
 ground=createSprite(200,180,400,20);
 ground.addImage("ground",groundImage);
 ground.x = ground.widht/2
}

function draw(){
  background("white")
  if (keyDown("space")){
  trex.velocityY = -10;}
  trex.velocityY = trex.velocityY + 0.8
  ground.velocityX = -2;
  trex.collide(ground);
  if(ground.x < 0 ){
  ground.x = ground.widht/2}
drawSprites();
}
