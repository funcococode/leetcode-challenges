let arr = [13,2,7,15];

const twoSum = function(nums, target) {
    let complement = {}
    for(let i=0; i<nums.length; i++){
        if(complement[nums[i]]>=0){
            return [ complement[nums[i] ] , i]
        }
        complement[target-nums[i]] = i
    }
};

console.log(twoSum(arr,9));