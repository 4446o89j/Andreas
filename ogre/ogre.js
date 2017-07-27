var HP = 100;
var gold = 0;
var numberDefeated = 0;

function updateStats(){
    $("#stats").text("HP: " + HP + "// Gold: " + gold + "//Ogres Slain" + numberDefeated);
}

function spawnOgre(){
    $("#ogres").prepend(
        "<img src='http://raw.githubsercontent.com/mahdiASC/allProject/master/assets/ogre.3.png>"
    );
}

function attack(){
    if(HP>0){
        if(Math.random()*100>gold){
            gold = gold + 10;
            numberDefeated++;

            $("#orges").prepend(
                "<p style='color:blue'> You won! + 10 gold. </p>"
            );
        }
        else{
            gold--;
            HP--;
            $("#ogres").prepend(
                "<p style='color:red'> You lost! - 1 gold </p>"
            );
        }
        updateStats();
        spawnOgre();
    }
    else{
        //game over
        $("#ogres").prepend(
            "<h1> GAME OVER </h1>"
        );
    }
}

function setup(){
    $("body").append(
    "<h1> Welcome to Ogre Fighter v.1.0 </h1>"
    );
    $("body").append(
        "<div> <h3> STATS </h3> <p id='stats'> </p> </div>"
    );
    $("body").append(
        "<button onclick='attack()'> Attack the Ogre! </button>"
    );
    $("body").append(
        "<div id='ogres'> </div>"
    );
    updateStats();
}

//Setup HTML ELMEnt

//Addd TItle to HRML - requires some setup

//Show user stats (HP,gold,numberDefeated) - requires setup
//Add a random ogre imagge to start of body tag, requires setup
//When player clicks an 'attack' button requires setup

//if player has HP
    //if plaayer defeats ogre
        //add paragraph tag saying "you win"
        //+gold to player
        //numb of defeated ogres
    //else
    //add paragraph tag saying "you lost"
    //- gold
    //- HP
    //updateStats
    //Add random ogre image
//else
//add paragraph tag saying "Game Over"

$(document).ready(setup);