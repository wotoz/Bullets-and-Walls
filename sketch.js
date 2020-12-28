var bullet,wall;
var thickness
var speed,weight;
speed=random(55,90)
  weight=random(400,1500)

function setup() {
  createCanvas(1600,400);
 bullet= createSprite(50, 200, 50, 10);
  speed=random(55,90)
  weight=random(400,1500)
  thickness=random(22,83)
  bullet.velocityX=speed;
  bullet.shapecolor="blue";
wall=createSprite(1200,200,thickness,height/2);
}

function draw() {
  background(255,255,255);  
  if(hasCollided(bullet, wall)){
    
 
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/thickness*thickness*thickness;
  if(damage>10){
    wall.shapeColor=color(255,0,0);
  }
 
  if(damage<10){
    wall.shapeColor=color(0,255,0);
  }
}

  drawSprites();
}
function hasCollided(Lbullet,Lwall){
if (Lbullet.x+Lbullet.width>=Lwall.x){
  return true;
}
else {return false}
}

