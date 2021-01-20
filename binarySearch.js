let arr = [10,22,55,62,2,26,95,65,12,33];

let sArr = arr.sort((a,b)=>a-b)
console.log(sArr)
function search(arr,n){
    let lBound = 0;
    let rBound = arr.length-1;

    while(lBound <= rBound){
        let mid = Math.floor((lBound + rBound)/2);

        if(arr[mid] == n){
            return arr.indexOf(n)
        }else if(arr[mid] < n){
            lBound = mid + 1
        }else{
            rBound = mid - 1
        }
    }

    return false
}

let result = search(sArr,122)
console.log(result)