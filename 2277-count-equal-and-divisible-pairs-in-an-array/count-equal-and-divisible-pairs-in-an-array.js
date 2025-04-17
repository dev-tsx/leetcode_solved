/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function (nums, k) {
    const hash = {};

    for (let i = 0; i < nums.length; i++) {
        hash[nums[i]] ||= []
        hash[nums[i]].push(i);
    }

    let count = 0;
    const indices = Object.values(hash);
    for (const arr of indices) {
        const n = arr.length;
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                if ((arr[i] * arr[j]) % k === 0) count++;
            }
        }
    }
    return count;
};