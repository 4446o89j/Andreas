var prompt = require('prompt-sync')();
var n = prompt('How many more times? ');
var prompt = require('prompt-sync')();
var money = 1000;
var louisVuittonDuffleBag = [];

while(money>100){
    console.log("You have $"+money+"left");
    var answer = prompt("You can buys Yeezys for $400, gucci flip-flops for $200, or ray bans for $100");
    if(answer.toLowerCase() =="Yeezys" && money >= 500){
        money = money-400;
        louisVuittonDuffleBag.push("Yeezys");
        console.log("You have successfully bought these pairs of Yeezys");
    }
    else if(answer.toLowerCase() == "Gucci flip-flops" && money >= 300){
        money = money-200;
        louisVuittonDuffleBag.push("Gucci flip-flops");
        console.log("You have successfully bought this pair of Gucci flip-flops");
    }
    else if(answer.toLowerCase() === "Ray Bans" && money >= 200){
        money = money-100;
        louisVuittonDuffleBag.push("Ray Bans");
        console.log("You have succcessfully bought this pair of Ray Bans");
    }
    else{
        console.log("You can't get this item");
    }
}
console.log("Leave, you're broke");