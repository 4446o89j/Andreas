function Superhero(realName, ability, gender, archEnemy, age,
weakness){
    this.realName = realName;
    this.ability = ability;
    this.gender = gender;
    this.archEnemy = archEnemy;
    this.age = age;
    this.weakness = weakness;
    this.talk = function(){
        console.log("Yo! My name is " + realName);
    }
    this.callForHelp = function(call){
        console.log(call);
    }
}
var superMan = new Superhero("Clark Kent", "DAT MONEY", "Male",
"Lex Luthor", 40, "Kryptonite");
var wonderWoman = new Superhero("Dianna Prince", "Super Strength",
"Female", "Donald Trump", 20, "Guns");
superMan.ability = "Lazer Fision";
//console.log(superMan);
wonderWoman.archEnemy = superMan;
//console.log(wonderWoman);
wonderWoman.callForHelp("I'm booling out!");
superMan.callForHelp("It's not looking good right now!");
