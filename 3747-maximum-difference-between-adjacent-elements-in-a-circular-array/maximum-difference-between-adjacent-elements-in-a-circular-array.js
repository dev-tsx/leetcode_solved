/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function (nums) {
    let max = 0;
    for (let i = 1; i < nums.length; i++) {
        max = Math.max(max, Math.abs(nums[i] - nums[i - 1]));
    }
    return Math.max(max, Math.abs(nums[0] - nums[nums.length - 1]));
};