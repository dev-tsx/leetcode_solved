/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    const count = [0, 0, 0];

    for (const num of nums) {
        count[num]++;
    }

    for (let i = 0; i < nums.length; i++) {
        if (count[0] > 0) {
            nums[i] = 0;
            count[0]--;
        } else if (count[1] > 0) {
            nums[i] = 1;
            count[1]--;
        } else {
            nums[i] = 2;
            count[2]--;
        }
    }
};