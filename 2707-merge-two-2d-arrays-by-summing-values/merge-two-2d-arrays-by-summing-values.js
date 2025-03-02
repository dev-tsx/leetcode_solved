/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function (nums1, nums2) {
    const hash = nums1.reduce((acc, [id, val]) => {
        acc[id] ||= 0;
        acc[id] += val;
        return acc;
    }, {});
    for (const [id, val] of nums2) {
        hash[id] ||= 0;
        hash[id] += val;
    }

    const result = Object.keys(hash).map(id => [+id, hash[id]]);
    return result
};