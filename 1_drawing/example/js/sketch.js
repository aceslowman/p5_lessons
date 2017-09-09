var distance_from_center;

function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  strokeWeight(2);
  ellipseMode(RADIUS);
  rectMode(CENTER);
  colorMode(HSB);
  noFill();
}

function setupShape(size){
  ellipse(0,0,size/2);
  ellipse(0,0,(size/2+30));
  
  var xOffset = cos(PI/6)*(size/2);
  var yOffset = sin(PI/6)*(size/2);
  
  var p1 = createVector(0,-size/2,5);
  var p2 = createVector(xOffset,yOffset,5);
  var p3 = createVector(-xOffset,yOffset,5);
  
  triangle(p1.x,p1.y,p2.x,p2.y,p3.x,p3.y);
  rotate(PI);
  triangle(p1.x,p1.y,p2.x,p2.y,p3.x,p3.y);
}

function draw() {    
  var time = ((sin(millis()/2400)+1)/2);
  
  background(color(189,100,80,50));
  var size = 100;

  translate((width/2),(height/2));

  for(var i = 1; i < 20; i++){
    scale(map(distance_from_center,0,width,0,2));
    scale((time*0.2)+0.8);
    rotate(millis()/2400*0.53);
    stroke((i/10)*255,00,255,(i/10));
    setupShape(i * size);
  }
}

function mouseDragged(){
  distance_from_center = dist(width/2,height/2,mouseX,mouseY);
}

window.onresize = function(){
	setup();
}
