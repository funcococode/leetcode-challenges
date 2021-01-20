function list(names){
    let joinedString = '';
    if(!names.length){
        return joinedString
    }
    if(names.length == 1){
        joinedString = names[0].name
    }else{
        let allNames = []
        for(let i=0;i<names.length-1;i++){
           allNames.push(names[i].name)
        }
        joinedString = `${allNames.join(", ")} & ${names[names.length-1].name}`
        
    }
    return joinedString
}


console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]))
console.log(list([{name: 'Bart'}]))