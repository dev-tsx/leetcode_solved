/**
 * @param {number[]} nums
 * @return {number}
 */
var countSubarrays = function (nums) {
    let res = 0;
    for (let i = 0; i < nums.length - 2; i++) {
        const first = nums[i];
        const second = nums[i + 1];
        const third = nums[i + 2];
        if (((first + third) * 2) === second) res++;
    }
    return res
};