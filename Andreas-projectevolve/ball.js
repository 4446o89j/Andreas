var img;
var userURL="https://randomuser.me/api";
var x = 250;
var y = 250;
var xspeed = 0.5;
var yspeed = 0.7;
var b = 0;
var score = 0;

$.ajax({
   url:userURL,
   success:function(data){
        var Name=data.results[0]
        var namevar = Name.name.first;
        console.log(namevar);
        var userIntial=namevar;
        $("body").append("<h1>Opponent Name: " + userIntial + "</h1>");
   }
});

function setup(){
    createCanvas(750,750);
    img=loadImage("basketball-hoop-and-net-stencil.gif");
    ellipse(x,y,50,50);
    
 
}

function draw(){
    background(255);
    fill("black")
    text("Score: " + score, 200,100);

    // print(mouseX,mouseY);
    // print("");

    fill("orange");
    image(img, 2, 1, width/4, height/4);
    img=loadImage("basketball-hoop-and-net-stencil.gif");
    ellipse(mouseX,mouseY,50,50);
   
    
    x = x - xspeed;
    y= y - yspeed;
    
    if(mouseX >= 101 && mouseX <= 155){
        if(mouseY >= 83.5 && mouseY <= 134.5){
            score = score + 1;
        }  
    }
}

$(document).ready(function () {
   getRandomColor();
   RandomMouseMoveColor();
});

function getRandomColor() {
 document.body.style.background = "#"+((1<<24)*Math.random()|0).toString(16);
}

function RandomMouseMoveColor() {
var $win = $(window),
    w = 0,h = 0,
    rgb = [],
    getWidth = function() {
        w = $win.width();
        h = $win.height();
    };

$win.resize(getWidth).mousemove(function(e) {

    rgb = [
        Math.round(e.pageX/w * 255),
        Math.round(e.pageY/h * 255),
        150
    ];

    $(document.body).css('background','rgb('+rgb.join(',')+')');

}).resize();
}



// var location = createVector(450, 52);
// var velocity = createVector(1, 3.3);
// var hoop;
// var x = float(300);
// var y = float(300);
// var diam = float(50);
// var dx = float(0);
// var dy = float(0);
// var X = float(92);
// var Y = float(92);
// int(score);
// var left = float((red(get(e-50, f)))); 
// var right = float((red(get(e+50, f)))); 
// var top = float((red(get(e, f-50))));
// var bottom = float((red(get(e, f+50))));
// int(e); 
// int(f);
// int(g); 
// int(h);


// function setup() {
//   createCanvas(600, 600);
//   location = new PVector(301, 300);
//   velocity = new PVector(2.5, 5);
//   hoop = loadImage("basketball-hoop-coloring-page-9.gif");
//   x = 300;
//   y = 300;
//   diam = 50;
//   dx = 0;
//   dy = 0;
//   X = 92;
//   Y = 89;
//   score = 0;
//   e = 300;
//   f = 300;
//   g=450;
//   h=52;
// }

// function draw() {
//   background(255);
//   location.add(velocity);
//   image(hoop, 0, 10, 670/4.466, 867/5.78);
//     left = (red(get(e-50, f)));
//     right = (red(get(e+50, f)));
//     top = (red(get(e, f-50)));
//     bottom = (red(get(e, f+50)));
//   if (right <= 123 && f<=78 && f>=114 && e>=81) {
//    text(score, 450, 52);
//    score=score+1;
//   }
//   if (top >= 78 && e>=81 && e<=121 && f>=114) {
//    text(score, 450, 52);
//    score=score+1;
//   }
//   if (bottom >= 114 && e>=81 && e<=121 && f>=78) {
//    text(score, 450, 52);
//    score=score+1;
//   }
//   if (left >= 81 && f<=78 && f>=114 && e<=123) {
//    text(score, 450, 52);
//    score=score+1;
//   }
//   //noStroke();
//   fill("orange");
//   ellipse(e, f, 50, 50);
//   e += dx;
//   f += dy;
//  // fill(0);
  
//   if(MouseX == 50){
//       if(MouseY == 50){
//           line(540,50,540,90);
//           stroke(4);
//       }
//   }
// }

// function printscore(){
//   text(score,450,52);
// }

// function score(){

//   if (e <= 63 && e >= 121 && f <= 73 && f >= 121){
//     score=score+1;
//   }
// }

// function mouseDragged(){
//   if (Center(mouseX, mouseY, x, y, diam/2)) {
//     dx = 0;
//     dy = 0;
//     e += mouseX - pmouseX;
//     f += mouseY - pmouseY;
//   }
// }

// function mouseReleased(){
//   dx = mouseX - pmouseX;
//   dy = mouseY - pmouseY;
// }

// // boolean (Center( x,  y,  a,  b,  r){
// //   if (dist(e, f, a, b) <=r) {
// //     return true;
// //   } else {
// //     return false;
// //   }
// // })   