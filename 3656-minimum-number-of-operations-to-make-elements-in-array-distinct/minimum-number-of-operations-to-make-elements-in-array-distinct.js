/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    const seen = new Set();
    let i = nums.length - 1;

    for (; i >= 0; i--) {
        if (seen.has(nums[i])) break;
        seen.add(nums[i]);
    }

    return Math.ceil((i + 1) / 3);
};