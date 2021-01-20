function highAndLow(numbers){
    let sortedNumbers = numbers.split(" ").map(num => parseInt(num)).sort(function(a, b){return a - b});
    return [sortedNumbers[sortedNumbers.length - 1] , sortedNumbers[0]].join(" ")

}
let hal = highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6");
console.log(hal)