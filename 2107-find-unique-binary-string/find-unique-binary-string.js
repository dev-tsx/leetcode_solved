/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function (nums) {
    const set = new Set(nums);
    const n = nums.length;
    let i = 1;
    let binary = '0'.padStart(n, '0');
    while (binary.length <= n) {
        if (!set.has(binary) && binary.length === n) return binary;
        binary = i.toString(2).padStart(n, '0');
        i++;
    }
};