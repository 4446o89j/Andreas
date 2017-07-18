function  randLetter(){
    var randomLetter = ["a","b","c","d","e","f","g","h","i",
    "j","k","l","m","n","o","p","q","r","s","t","u","v","w",
    "x","y","z"];
    console.log(randomLetter[Math.round(Math.random()*randomLetter.length-1)]);
}
randLetter(26);

function randWord(){
    var randomLetter = ["a","b","c","d","e","f","g","h","i",
    "j","k","l","m","n","o","p","q","r","s","t","u","v","w",
    "x","y","z"];
    console.log(randomLetter.concat[Math.round(Math.random()*randomLetter.length-1)]);

    
}
randWord(26);