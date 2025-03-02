/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function (nums1, nums2) {
    const hash = {};

    for (let i = 0; i < nums1.length; i++) {
        const [id, val] = nums1[i];
        hash[id] = (hash[id] || 0) + val;
    }
    for (let i = 0; i < nums2.length; i++) {
        const [id, val] = nums2[i];
        hash[id] = (hash[id] || 0) + val;
    }

    const result = Object.keys(hash).map(id => [+id, hash[id]]);
    return result;
};