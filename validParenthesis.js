var isValid = function (s) {
    // const stack = [];
    // for (let i = 0; i < s.length; i++) {
    //     const top = stack[stack.length - 1];
    //     if(s[i] == "(" || s[i] == "{" || s[i] == "["){
    //         stack.push(s[i]);
    //     }else if(s[i] == ")" && top == "(" && stack.length != 0){
    //         stack.pop();
    //     }else if(s[i] == "}" && top == "{" && stack.length != 0){
    //         stack.pop();
    //     }else if(s[i] == "]" && top == "[" && stack.length != 0){
    //         stack.pop();
    //     }else{
    //         return false;
    //     }
    // }

    // return stack.length == 0;



    const stack = [];
    const map = new Map([
        ['(', ')'],
        ['[', ']'],
        ['{', '}']
    ]);

    for (let i = 0 ; i < s.length ; i++) {
        if (map.has(s[i])) {
            stack.push(map.get(s[i]));
        } else if (s[i] !== stack.pop()) {
            return false;
        } 
    }

    return stack.length === 0;
};


console.log(isValid("([)]"))
console.log(isValid("{[]}"))
console.log(isValid("()[]{}"))