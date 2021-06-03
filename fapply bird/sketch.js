

var pipeGroup;
var bgImage, bg;
var bird, birdImage;
var pipe, pipeImage;

function preload() {
   bgImage = loadImage("images/bg.png")
   birdImage = loadImage("images/bird.png")
   pipeImage = loadImage("images/Pipe.png")
}




function setup() {
   createCanvas(500, 700);

   bg = createSprite(250, 350);
   bg.addImage(bgImage);
   bg.scale = 2.2;
   bg.velocityX = 3;

   bird = createSprite(100, 350);
   bird.addImage(birdImage);
   // bird.scale =
   //bird.velocitX
   pipeGroup = new Group();
   // pipe = createSprite()
}



function draw() {
   background(0);
   if (bg.x > 300) {
      bg.x = 250;
   }  
   if (keyDown("SPACE") && bird.y >= height - 180) {
      bird.velocityY = -10;
      
     
        
        }
        bird.velocityY = bird.velocityY + 0.5;
        Pipe()
        drawSprites()

}

function Pipe() {

   if (frameCount % 60 === 0) {
      var pipe = createSprite(600, 350, 10, 40);
      pipe.velocityX = -6
      pipe.y = Math.round(random(200, 400))
      pipe.addImage(pipeImage);

      pipe.lifetime = 200;

      bird.depth = pipe.depth + 1;
      pipeGroup.add(pipe);



   }
   


}
