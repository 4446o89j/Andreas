var y = 910;
var n,z,speed,display,move;

function setup(){
    createCanvas(1000,1000);
    background(0);
}
function bullet(n,z,speed){
    this.n = n;
    this.z = z;
    this.speed = speed;
    fill("blue");
    this.move = function(){
        this.z -= (speed);
    }
    // this.display = function(){
    //     rect(n,z,10,20);
    // }
}
function draw(){
    background(0);
    fill("green");
    rect(mouseX,900,50,50);//ship
    rect(100,800,80,50);
    rect(350,800,80,50);
    rect(600,800,80,50);
    rect(800,800,80,50);

    if (keyCode == 32){
        fill("blue");
        // var bulletX = bullet;
        // var bulletY = bullet;

        var shot = new bullet(mouseX,900,5);

        rect(shot.n,y,10,20);
        y--;
        //shot.display();
        shot.move();
    } 
// var shot = new bullet(mouseX,900,5);  
//       shot.display();
//     shot.move();
}
function keyPressed(){
}

function shootBullet(){
   
}









