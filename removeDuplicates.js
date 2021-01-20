var removeDuplicates = function (nums) {
    if (nums.length == 0) return 0;

    let i = 0;
    let j = 1;

    while (j < nums.length) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
            j++;
        } else j++;
    }

    return i + 1;
};



console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));