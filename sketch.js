var x = 50
var speed = 5
var y = 50
var x2 = 950;
var y2 = 950


function setup() {
  createCanvas (1000,1000)
  
}

function draw() {
  background(97,243,165)
  
  fill(19,29,5)
  ellipse(x,500,50,50)
  ellipse(x2,500,50,50)
  ellipse(500,y,50,50)
  ellipse(500,y2,50,50)
  
  if (x > 975){
    speed = -5;
  }
  
  if (x < 15){
    speed = 5;
  }
  x = x + speed 
  
  if (y > 975){
    speed = -5;
  }
  
  if (y < 15){
    speed = 5
  }
  y = y + speed
}

if( x2 > 975){
  speed = -5;
}

if(x2 < 15){
  speed = 5;
}
 
 
if(y2 > 975){
  speed = -5;
}

if(y2 < 15){
  speed = 5;
}
