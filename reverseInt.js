let reversed = 0;
var reverse = function (x) {
    const MAXLIMIT = 2147483648
    let sign = (x < 0) ? -1 : 1;
    let reversedNumber = Number(String(Math.abs(x)).split("").reverse().join(""))
    return (reversedNumber > MAXLIMIT) ? 0 : sign * reversedNumber ;
};

console.log(reverse(-123556));