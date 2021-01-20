var isPalindrome = function (x) {
    if (x < 0 || (x % 10 == 0 && x != 0)) return false;
    
    let reversedNumber = 0;
    let temp = x;
    while (temp > 0) {
        reversedNumber = reversedNumber * 10 + (temp % 10);
        temp = Math.floor(temp / 10);
    }
    return reversedNumber == x;
};

console.log(isPalindrome(12));