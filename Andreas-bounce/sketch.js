var CenterColor = (red(get(x,y)));

function setup(){
    createCanvas(600,600);
    background(225);
}
//ellipseMode(CENTER);

var x = 10;
var y = 10;
var rightColor = (red(get(x+10,y)));
var leftColor = (red(get(x-10,y)));
var topColor = (red(get(x,y-10)));
var bottomColor = (red(get(x, y+10)));

function draw(){
    background(225);
    ellipse(x,y,50,50);
    x++;
    y++;
    if (rightColor >= 600 && leftColor <= 0){
        ellipse(x,y);
    }
    if (topColor <= 0 && bottomColor >= 600){
        ellipse(x,y);
    }
}