/**
 * @param {number[]} nums
 * @return {number}
 */
var countSubarrays = function (nums) {
    let counter = 0;
    for (let i = 0; i < nums.length - 2; i++) {
        counter += nums[i] + nums[i + 2] === nums[i + 1] / 2 ? 1 : 0;
    }
    return counter
};