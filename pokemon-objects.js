var pokemon = [pokemon1,pokemon2,pokemon3,pokemon4,pokemon5,
pokemon6];
var pokemon1 = {
    "Name": "Heatran",
    "Type" : "Fire and Steel", 
    "HP" : 91, 
    "DEF" : 106, 
    "ATK" : 90, 
    "Legendary" : true
}
var pokemon2 = {    
    "Name" : "charzard",
    "Type" : "Fire and Flying", 
    "HP" : 78,
    "Defense" : 78,
    "Attack" : 84, 
    "Legendary" : true
}
var pokemon3 = {
    "Name" : "pikachu",
    "Type" : "Electric", 
    "HP" : 35,
    "Defense" : 40,
    "Attack" : 55, 
    "Legendary" : false
}
var pokemon4 = {
    "Name" : "palkia",
    "Type" : "Water and Dragon", 
    "HP" : 90,
    "Defense" : 100,
    "Attack" : 120, 
    "Legendary" : true
}
var pokemon5 = {
    "Name" : "squirtal",
    "Type" : "Water",
    "HP" : 44,
    "Defense" : 65,
    "Attack" : 48, 
    "Legendary" : false
}
var pokemon6 = {
    "Name" : "pidgeout",
    "Type" : "Flying and Normal",
    "HP" : 83,
    "Defense" : 75, 
    "Attack" : 80,
    "Legendary" : false
}




// console.log(Heatran.Type);
// console.log(Heatran.HP);
// console.log(Heatran.DEF);
// console.log(Heatran.ATK);
// console.log(Heatran.Legendary);

// console.log(charzard.Type);
// console.log(charzard.HP);
// console.log(charzard.DEF);
// console.log(charzard.ATK);
// console.log(charzard.Legendary);

// console.log(pikachu.Type);
// console.log(pikachu.HP);
// console.log(pikachu.DEF);
// console.log(pikachu.ATK);
// console.log(pikachu.Legendary);

// console.log(palkia.Type);
// console.log(palkia.HP);
// console.log(palkia.DEF);
// console.log(palkia.ATK);
// console.log(palkia.Legendary);

// console.log(squirtal.Type);
// console.log(squirtal.HP);
// console.log(squirtal.DEF);
// console.log(squirtal.ATK);
// console.log(squirtal.Legendary);

// console.log(pidgeout.Type);
// console.log(pidgeout.HP);
// console.log(pidgeout.DEF);
// console.log(pidgeout.ATK);
// console.log(pidgeout.Legendary);


function printRoster(){
    for  (i=0; i<7; i++){
        var pokemon = [pokemon1,pokemon2,pokemon3,pokemon4,
        pokemon5,pokemon6];
    }
}
console.log(printRoster);

//name,type,hp,def,atk,legend(true/false)