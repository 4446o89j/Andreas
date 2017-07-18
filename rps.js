var playerchoice = "p";
var cpuchoice = "p";

if (playerchoice == "r" && cpuchoice == "p"){
    console.log("CPU won because it choose paper");
}
if (playerchoice == "r" && cpuchoice == "s"){
    console.log("You won because you choose rock");
}
if (playerchoice == cpuchoice){
    console.log("It's a draw");
}
if (playerchoice == "s" && cpuchoice == "p"){
    console.log("You won because you choose paper");
}
if (playerchoice == "s" && cpuchoice == "r"){
    console.log("CPU won because it choose rock");
}
if (playerchoice == "p" && cpuchoice == "r"){
    console.log("You won because you choose paper");
}
if (playerchoice == "p" && cpuchoice == "s"){
    console.log("CPU won because you choose scisssors");
}