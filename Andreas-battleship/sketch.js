var num = Math.floor(Math.random(1)*8)*50;

function setup(){
    createCanvas(800,800); //8x8 grid
    rect(0,0,800,800);
    fill(255);
    line(100,0,100,800);
    line(200,0,200,800);
    line(300,0,300,800);
    line(400,0,400,800);
    line(500,0,500,800);
    line(600,0,600,800);
    line(700,0,700,800);
    line(799,0,799,800);
    line(0,100,800,100);
    line(0,200,800,200);
    line(0,300,800,300);
    line(0,400,800,400);
    line(0,500,800,500);
    line(0,600,800,600);
    line(0,700,800,700);
    line(0,799,800,799);
    stroke(0);
}
function draw(){ 
}

function keyPressed(){
    if (keyCode == 83){
        if (num % 100 == 0){
            num + 50;  
            fill(0);
            ellipse(random(800),random(800),50,50);
        }    
    }
}