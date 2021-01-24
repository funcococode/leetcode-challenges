var convert = function (n) {
    let result = "";
    let count = 1;
    let currentVal = n[0];

    for (let i = 1; i < n.length; i++) {
        if(currentVal == n[i]){
            count++;
        }else{
            result += `${count}${currentVal}`;
            currentVal = n[i];
            count = 1;
        }
    }
    
    result += `${count}${currentVal}`;
    return result;
};


var countAndSay = function(n){
    if (n == 1) return "1";
    
    let count = countAndSay(n - 1);
    let finalResult = convert(count);
    
    return finalResult;
}

let cas = countAndSay(4)
console.log(cas)