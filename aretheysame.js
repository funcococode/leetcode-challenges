
function comp(array1, array2){
    if(array1 == null || array2 == null){
        return false
    } 
    array1.sort((a, b) => a - b); 
    array2.sort((a, b) => a - b);
    let areSame = array1.map(num => num * num).every((num, i) => num == array2[i]);
    
    return areSame
}


a1 = [];
a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
console.log(comp(a1, a2));