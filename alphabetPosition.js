let alphabets = [];
let startingCc = 97;

for(let i=0;i<26;i++){
    alphabets.push(String.fromCharCode(startingCc));
    startingCc++;
}

let string = "The sunset 90 sets at twelve o' clock.";
let s = string.replace(/[^a-zA-Z]/g,"").toLowerCase().split("");
let newS = s.map(s =>alphabets.indexOf(s)+1)
newS = newS.join(" ");

console.log(newS);
// console.log(alphabets);