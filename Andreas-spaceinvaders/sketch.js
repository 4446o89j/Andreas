var m = 600;
var fillstyle = "green";

function setup(){
    createCanvas(1000,1000);
    background(0);
}
function draw(){
    background(0);
    rect(mouseX,900,50,50);
    fill("green");
    rect(100,800,80,50);
    rect(350,800,80,50);
    rect(600,800,80,50);
    rect(800,800,80,50);
}

function keyPressed(){
    // for (m = 600; m <= 599; m++){

    // }
    if (keyCode == 32){
        rect(500,910-10,5,5);
        fill("blue");
    }
}

