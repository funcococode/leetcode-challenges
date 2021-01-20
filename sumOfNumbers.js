let sum;
function getSum( a,b ){
   //Good luck!
    let bNum = (a>b)?a:b
    let sNum = (a<b)?a:b
    if(bNum == sNum){
        sum = bNum;
    }
    else{
        for(sNum; sNum<=bNum; sNum++){
            sum += sNum
        }
    }
    return sum
}

console.log(getSum(0,-1));
console.log(getSum(0,1));