function rand(number){
    var randomDecimalNumber = Math.random()*number;
    console.log(randomDecimalNumber);
    var wholeIntegerNumber = Math.round(randomDecimalNumber);
    return wholeIntegerNumber;
}
console.log(rand(6));