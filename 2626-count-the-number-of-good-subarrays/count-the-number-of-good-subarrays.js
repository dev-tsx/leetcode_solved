/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countGood = function (nums, k) {
    const n = nums.length;
    let start = 0;
    let right = -1;
    const counterHash = new Map();
    let subarraysCount = 0;
    for (let left = 0; left < n; ++left) {
        while (start < k && right + 1 < n) {
            ++right;
            start += counterHash.get(nums[right]) || 0;
            counterHash.set(nums[right], (counterHash.get(nums[right]) || 0) + 1);
        }
        if (start >= k) {
            subarraysCount += n - right;
        }
        counterHash.set(nums[left], counterHash.get(nums[left]) - 1);
        start -= counterHash.get(nums[left]);
    }
    return subarraysCount;
};