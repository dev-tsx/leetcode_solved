/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (nums) {
    let min = nums[0];
    let diff = -1;
    for (let i = 1; i < nums.length; i++) {
        const test = nums[i] - min;
        if (test > diff && nums[i] !== min) {
            diff = test;
        }
        min = Math.min(min, nums[i]);
    }
    return diff
};