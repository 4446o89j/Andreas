var mashArray = ["Pokemon Stage", "Mario Circuit", "Final Destination", "Bridge of Eldin"];
firstQuestion = [7,17];
secondQuestion = ["Kirby", "Ike", "Snake", "Marth", "MetaKnight", "Pit"];
var prompt = require('prompt-sync')();
var n = prompt('How many times will you strike?');
var m = prompt('Who will you choose to fight?');
var firstAnswer = "17";
var secondAnswer = "Kirby";
function answer(){
    n = firstAnswer;
    m = secondAnswer;
}
answer();
function winner(){

}