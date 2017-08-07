function updateDB(){
    var playerchoice = "p"||"s"||"r";
    var cpuchoice = "p"||"s"||"r";
    var rock = $("#rock").val();
    var scissors = $("#scissors").val();
    var paper = $("#paper").val();
    var userInitials = $('#userInitials').val();
    //if()
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

    var text = {
        USERINITIALS : userInitials,
        ROCK : rock,
        PAPER : paper,
        SCISSORS : scissors
    }
    database.push(text);
}