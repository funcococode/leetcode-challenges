var searchInsert = function (nums, target) {

    if (nums.indexOf(target) !== -1) {
        return nums.indexOf(target);
    }
    let index = 0;
    for (let i = 0; i <= nums.length - 1; i++) {
        if(nums[i] < target && nums[i+1] > target ){
            return i + 1;
        }
        if(target > nums[nums.length-1]){
            return nums.length;
        }
        if(target < nums[0]){
            return index;
        }
    }

};

console.log(searchInsert([1], 0));