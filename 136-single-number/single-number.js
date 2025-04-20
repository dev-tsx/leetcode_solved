/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    const hash = {};

    for (const n of nums) {
        hash[n] = (hash[n] || 0) + 1;
    }

    for (const key in hash) {
        if (hash[key] === 1) return +key;
    }
};