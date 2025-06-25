var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;

    let i = 0; // slow pointer

    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;             // move slow pointer
            nums[i] = nums[j]; // overwrite with next unique value
        }
    }

    return i + 1; // count of unique elements
};
