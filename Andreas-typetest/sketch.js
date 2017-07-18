function setup(){
    createCanvas(600,600);
    background(225);
    text("Please type the sentence below:",50,50);
    text("Drift Away", 50, 75);
    text("Congratulations",50,150);
    text("Summer of 69",50,225);
    text("Sound of Silence",50,300);
    text("Everybody Wants to Rule the World",50,375);
    text("Current Points: ", 50,550);
}

function draw(){
}

function keyTyped(){
    if(key == 'd'){
        text("Drift Away", 50,90 );
    }
    if (key == 'c'){
        text("Congratulations", 50, 165);
    }
    if (key == 's'){
        text("Summer of 69", 50,240);
    }
    if (key == 'S'){
        text("Sound of Silence", 50, 315);
    }if (key == 'e'){
        text("Everybody Wants to Rule the World",50, 390);
        text("10", 150,550);
    }
}
