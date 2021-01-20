let sum=[];
function tribonacci(signature,n){
    //your code here
    sum = signature
    if(n == 1){
        sum = [sum[0]]
    }else if(n == 0){
        sum = []
    }else{
        for(let i=0;i<n-3;i++){
            sum.push(sum[i]+sum[i+1]+sum[i+2])
        }
    }
    return sum
}

console.log(tribonacci([1,1,1],1))