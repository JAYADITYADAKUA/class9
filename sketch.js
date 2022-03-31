var box;
function setup() {
  createCanvas(400,400);
  box=createSprite(200,200,100,100);
}

function draw() 
{
  background(30);
  drawSprites()

  if (keyIsDown(RIGHT_ARROW)){
    box.x = box.x+5
  }

}




