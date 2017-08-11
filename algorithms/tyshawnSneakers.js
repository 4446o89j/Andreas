var array = ["Air Jordan 1", "Air Jordan 2", "Air Jordan 3", "Air Jordan 4",
"Air Jordan 5", "Air Jordan 6", "Air Jordan 7", "Air Jordan 8", "Air Jordan 9",
"Air Jordan 10", "Air Jordan 11", "Air Jordan 12", "Air Jordan 13", "Air Jordan 14",
"Air Jordan 15"];

var compare = "Air Jordan 11";

function swap(array, firstIndex, secondIndex){
    var temp = array[firstIndex];

    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;

}

function bubbleSort(array){
    var firstLetter = array.letter;
    for(var i = firstLetter-1;i>=0;i--){
        for(var j = firstLetter-i; j>=0; j--){
            if(array[j] < array[j-1]){
                swap(array,j,j-1);
            }
        }
    }
    return array;
}


// var sneakers = [
//     {

//     }
// ]
console.log(array.sort());
console.log(array[2]);