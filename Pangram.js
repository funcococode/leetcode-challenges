function isPangram(string){
    let allChar = "abcdefghijklmnopqrstuvwxyz";
    let regex = /\s/g;
    let lowercase = string.toLowerCase().replace(regex, "");

    for(let i = 0; i < allChar.length; i++){
        if(lowercase.indexOf(allChar[i]) === -1){
            return false;
        }
    }
    return true
}


var string = "The quick brown fox jumps over the  dog."
console.log(isPangram(string))


// 65-90 97-122