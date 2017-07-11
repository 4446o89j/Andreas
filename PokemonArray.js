var arraymyPokemonArray = ["Heatran", "Pikachu", "Ho-oh", "Charzard", "Polkia"];
var firstToFight = arraymyPokemonArray[0];
var secondToFight = arraymyPokemonArray[1];
arraymyPokemonArray.pop(4);
arraymyPokemonArray.push("Squirtal","Pidgeout");
var RoasterSize = arraymyPokemonArray.length;
RoasterSize = 6;
for (var i=0; i<6; i++){
    console.log(arraymyPokemonArray[i]);
}
for (var n=5; n>-1;n--){
    console.log(arraymyPokemonArray[n]);
}