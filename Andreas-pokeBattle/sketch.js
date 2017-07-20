var Ivysaur;
var Suicune;

function setup(){
    createCanvas(1000,1000);
    background(225);
    Ivysaur = loadImage("http://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png");
    Suicune = loadImage("https://pro-rankedboost.netdna-ssl.com/wp-content/uploads/2016/08/Suicune-Pokemon-Go.png");

    // input = createInput();
    // input.postion(75,825);

    // button = createButton("Gyarados");
    // button.
     //My Pokemon
    rect(50,550,250,25);
    textSize(12);
    text("HP: 90/90", 51,570);
     //Opponent Pokemon
    rect(600,50,250,25);
    textSize(12);
    text("HP: 500/500", 601, 65);
    

    line(0,800,1000,800);
    textSize(25);
    rect(153,803, 80,25);
    rect(247,803,63,25);
    rect(322,803,81,25);
    text("ABILITIES: Swarm  Blaze  Torrent",25,825);
    line(0,900,1000,900);
    text("SWITCH: Guarados  Mewtwo  Raichu  Salamence  Arcues  Metagross  Vaporeon",25,925);
    textSize(25);
}

function draw(){
    image(Ivysaur,70,600,Ivysaur.width/3.166,Ivysaur.height/3.166);
    image(Suicune,630,100,Suicune.width/1.66,Suicune.height/1.66);
   // print(mouseX,mouseY);

}

function mouseClicked(){
    if (mouseX >= 153 && mouseX <= 233){
        if (mouseY >= 803 && mouseY <= 827){
            rect(600,50,250,25);  
            textSize(12);
            text("HP: 450/500", 601,65);
        }
    }
    if (mouseX >= 247 && mouseX <= 310){
        if (mouseY >= 803 && mouseY <= 827){
            rect(600,50,250,25);  
            textSize(12);
            text("HP: 380/500", 601,65);
        }
    }              
    if (mouseX >= 322 && mouseX <= 403){
        if (mouseY >= 803 && mouseY <= 827){
            rect(600,50,250,25);  
            textSize(12);
            text("HP: 300/500", 601,65);
        }
    }
    if (mouseX >= 614 && mouseX <= 803){
        if (mouseY >= 93 && mouseY <= 260){
            rect(50,550,250,25);  
            textSize(12);
            text("HP: 0/90", 51,570);
            rect(68,605,162,137);
            fill(225);
            noStroke();
            text("Ivysaur has died. Choose another Pokemon",70,675);
            
        }
    }
}