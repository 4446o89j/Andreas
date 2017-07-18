var charizard = {
    "attack" : "Blaze", 
    "HP" : 266,
    "legendary":false,
    "types":["Fire", "Flying"]
};
console.log(charizard.attack);
console.log(charizard.HP=100);
console.log(charizard.legendary);
console.log(charizard.types);

function Superhero(realName){
    this.realName = realName;
}
var superman = new Superhero("Clark Kent");
console.log(superman.realName);