var bullet,speed,weight,thickness,wall


function preload(){


  
}














function setup() {
  createCanvas(1600,400);
  wall = createSprite(1200, 200, thickness, height/2);
  bullet = createSprite(200, 80, 20, 20);
  
  





thickness=random(22,83)
speed=random(55,90)
weight=random(400,1500)

bullet.velocityX=speed


}

function draw() {
  background("skyblue"); 

wall.shapeColor=("white")


if(wall.x-bullet.x<(bullet.width+wall.width)/2)
{
  bullet.velocityX=0
damage=0.5 * weight * speed* speed/(thickness * thickness * thickness)
if(damage>10)
{
bullet.shapeColor=color(255,0,0)
}

if(damage<10)
{
  bullet.shapeColor=color(0,255,0)
  
}




}



  drawSprites() 
 

}

function hasCollided(bullet,wall)
{
bulletRightEdge=bullet.x+bullet.width
wallLeftEdge=wall.x
if(bulletRightEdge>=wallLeftEdge)
{
return true

}
return false
}