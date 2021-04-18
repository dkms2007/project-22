
var tom, jerry;
var tomImage1, jerryImage1;
var tomImage2, jerryImage2;
var tomImage3, jerryImage3;
var tomImage4, jerryImage4;


function preload() {
    //load the images here
    tomImage = loadImage("cat1.png");
    jerryImage = loadImage("mouse1.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   tom=createSprite(950,750,20,20);
   tomImage.addImage(tomImage);
   tom.scale=0.7

   jerry=createSprite(350,750,20,20);
   jerryImage.addImage(jerryImage);
   jerry.scale=0.7;

}

function draw() {
 background("black");
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.wdth - mouse.width)/2){
        cat.addAnimation("catrunning", catImg4);
        cat.changeAnimation("catrunning");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyDown === RIGHT_ARROW){
     jerry.addAnimation("jerry teasing", mouse2.png);
     jerry.changeAnimation("jerry teasing");
     jerry.frameDelay = 25;
  }
  if(keyDown === LEFT_ARROW){
  jerry.addAnimation("jerrying", mouse3.png);
  jerry.changeAnimation("jerrying");
  jerry.frameDelay = 25;
}
}