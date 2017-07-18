function setup(){
    createCanvas(600,600);
    background(0);
}

var x = 50;
var y = 50;
var xspeed = 5;
var yspeed = 6;
var b = 0;
var cpuRect;

function draw() {

	var d = dist(100/2, 100/2, 25, 25);

  	fill(255);
    background(0);
  	ellipse (x, y, d, d);
    ellipse(y,x,d,d);
 	x = x + xspeed;
  	
  	if (x > 550 || x < 50)  {
     	xspeed = -xspeed;
  	}

  	y = y + yspeed;

  	if (y > 600 || y < 0) {
	 	  yspeed = -yspeed;
  	}

    rect(mouseX,mouseY,50,100);
    
   cpuRect =  rect(0,y,50,100);

}
function keyIsPressed(){
    console.log(cpuRect);

    if (key == 87){
        console.log(1);
        b++;
    }
    if (key == 83){
        b--;
    }
}