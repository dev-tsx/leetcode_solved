/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function (nums, k) {
    const n = nums.length;
    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if ((i * j) % k == 0 && 0 <= 0 && i < j && j < n && nums[i] === nums[j]) count++;
        }
    }
    return count
};