let elem = []
function solve(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<i;j++){
            if(arr[i] + arr[j] == 0){
                elem.push(arr[i]);
                break
            }
        }
    }
    console.log(elem)
};


// console.log(solve([1,-1,2,-2,3]));
console.log(solve([-3,1,2,3,-1,-4,-2]));
// console.log(solve([1,-1,2,-2,3,3]));
// console.log(solve([-110,110,-38,-38,-62,62,-38,-38,-38]));
// console.log(solve([ -9,-105,-9,-9,-9,-9,105]));