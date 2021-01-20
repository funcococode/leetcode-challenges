function descendingOrder(n){
    return +(n+"").split('').sort().reverse().join('')
}

console.log(descendingOrder(0))
console.log(descendingOrder(0112))
console.log(descendingOrder(123456789))