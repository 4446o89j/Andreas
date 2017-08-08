function updateDB(){
    var playerchoice = "paper"||"rock"||"scissors";
    var cpuchoice = "rock"||"scissors"||"paper";
    var rock = $("#rock").val();
    var scissors = $("#scissors").val();
    var paper = $("#paper").val();
    var userInitials = $('#name').val();
    console.log(name + ":" + text);

    if (playerchoice == "r" && cpuchoice == "p"){
        $("body").append("<h1> CPU Won </h1>");
        console.log("CPU won because it choose paper");
    }
    if (playerchoice == "r" && cpuchoice == "s"){
        $("body").append("<h1> You Won </h1>");
        console.log("You won because you choose rock");
    }
    if (playerchoice == cpuchoice){
        $("body").append("<h1> Its a draw </h1>");
        console.log("It's a draw");
    }
    if (playerchoice == "s" && cpuchoice == "p"){
        $("body").append("<h1> You Won </h1>");
        console.log("You won because you choose paper");
    }
    if (playerchoice == "s" && cpuchoice == "r"){
        $("body").append("<h1> CPU Won </h1>");
        console.log("CPU won because it choose rock");
    }
    if (playerchoice == "p" && cpuchoice == "r"){
        $("body").append("<h1> You Won </h1>");
        console.log("You won because you choose paper");
    }
    if (playerchoice == "p" && cpuchoice == "s"){
        $("body").append("<h1> CPU Won </h1>");
        console.log("CPU won because you choose scisssors");
    }
    // console.log(userInitials + ":" + );

    var text = {
        USERINITIALS : userInitials,
        ROCK : rock,
        PAPER : paper,
        SCISSORS : scissors
    }
    database.push(text);
}

// var score = 0;
// var games = 0;
// var userChoice = "";
// var computerChoice = 0;

// function printer(msg) {
//  document.getElementById('result').innerHTML = msg;
//  document.getElementById('score').innerHTML = score + "/" + games;
// }

// document.getElementById('reset').onclick = function() {
//  score = 0;
//  games = 0;
//  printer("&nbsp;");
// }


// function userChose(choice){
//     userChoice = choice;
//     compare(userChoice, compChoose());
// }


// function compChoose() {
//  computerChoice = Math.random();
//  if (computerChoice < 0.34) {
//    computerChoice = "rock";
//  } else if (computerChoice < 0.67) {
//    computerChoice = "paper";
//  } else {
//    computerChoice = "scissor";
//  }
//  return computerChoice;
// }


// function compare(user, comp) {
//  var result = "";
//  if (user === comp) {

//    result = "tie";
//  } else if (user === "rock") {
//    games++;
//    if (comp === "paper") {
//      result = "CPU chose paper. You lose."
//    } else {
//      result = "I chose scissor. YYou win."
//      score++;
//    }
//  } else if (user === "paper") {
//    games++;
//    if (comp === "scissor") {
//      result = "CPU chose scissor. You lose."
//    } else {
//      result = "I chose rock. You win."
//      score++;
//    }
//  } else {
//    games++;
//    if (comp === "rock") {
//      result = "CPU chose rock. You lose."
//    } else {
//      result = "I chose paper. You win."
//      score++;
//    }
//  }
//  printer(result);
// }
