
function setup()
{
  createCanvas(400,400);
}
function draw()
{
  background("black")
  fill("lime");
 ellipse(200,200,40,40);
 push();
 stroke("red");
 strokeWeight(4);
 fill("yellow");
 ellipse(250,200,40,40);
 pop();
 ellipse(300,200,40,40);

  
}