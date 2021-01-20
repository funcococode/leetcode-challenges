function likes(names) {
    let namesLen = names.length;
    // let lastName = names.pop();
    // let message = "";
    // if(!namesLen){
    //     message = "no one likes this"
    // }
    // if(namesLen < 4){
    //     if(namesLen == 1){
    //         message = lastName + " likes this"
    //     }else{
    //         let nameString = names.join(", ");
    //         message = nameString + " and " + lastName + " like this"
    //     }
        
    // }else{
    //     message = `${names[0]}, ${names[1]} and ${namesLen-2} others like this`
    // }
    return namesLen;
}



console.log(likes([]))
