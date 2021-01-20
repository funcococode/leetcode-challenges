var removeElement = function(nums, val) {
    if(nums.length == 0) return 0;
    let i = 0;
    let counter = 0;
    while(i < nums.length){
        if(nums[i] !== val){
            nums[counter] = nums[i];
            counter++;
        }
        i++;        
    }

    return counter; 
};

console.log(removeElement([3,2,2,3] , 3));
console.log(removeElement([0,1,2,2,3,0,4,2], 2));
