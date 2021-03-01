var bgImg,bgSprites;
var boy,boyImg;
var batman,batmanImg;

function preload(){
    bgImg = loadImage("images/c8a1b2793cb2b0f4e5a120cbe22024eb.png");
    boyImg = loadAnimation("project Code/images/boy/0.png","project Code/images/boy/1.png","project Code/images/boy/2.png","project Code/images/boy/3.png","project Code/images/boy/4.png","project Code/images/boy/5.png","project Code/images/boy/6.png","project Code/images/boy/7.png");

}

function setup() {
  createCanvas(displayWidth - 10,displayHeight - 100);
  bgSprites = createSprite(displayWidth / 2,displayHeight / 2);
  bgSprites.addImage(bgImg);
  bgSprites.scale = 2.2;

  boy = createSprite(displayWidth/4,displayHeight - 200);
  boy.addAnimation("boy",boyImg);
}

function draw() {
  background("black");
  bgSprites.velocityX = -2;  

  if (bgSprites.x < 0){
    bgSprites.x = bgSprites.width/2;
  }
  drawSprites();
}