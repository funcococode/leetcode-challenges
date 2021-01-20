var romanToInt = function (s) {
    const DEFAULTS = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    };

    let romanNumArr = s.split("");
    let convertedNumber = 0;

    for (let i = 0; i < romanNumArr.length; i++) {
        let currentNumber = romanNumArr[i]; 
        let nextNumber = romanNumArr[i + 1]; 
        if(DEFAULTS[currentNumber] < DEFAULTS[nextNumber]){
            convertedNumber = convertedNumber + (DEFAULTS[nextNumber] - DEFAULTS[currentNumber]);
            ++i; // SKIP THE NEXT NUMBER AS IT HAS ALREADY BEEN CALCULATED 
        }else{
            convertedNumber += DEFAULTS[currentNumber];
        }
    }

    return convertedNumber;
};

console.log(romanToInt("MCMXCIV"));