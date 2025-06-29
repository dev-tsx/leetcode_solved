/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function (nums, target) {
    const mod = 1e9 + 7;
    nums.sort((a, b) => a - b);
    const n = nums.length;

    const pow = Array.from({ length: n }, () => 1);
    for (let i = 1; i < n; i++) {
        pow[i] = (pow[i - 1] * 2) % mod;
    }

    let l = 0;
    let r = n - 1;
    let result = 0;

    while (l <= r) {
        if (nums[l] + nums[r] > target) {
            r--;
        } else {
            result = (result + pow[r - l]) % mod;
            l++;
        }
    }

    return result;
};