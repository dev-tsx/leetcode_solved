/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
    const hash = {}
    for (let n of arr) {
        hash[n] = (hash[n] || 0) + 1;
    }
    let lucky = -1;
    for (const key in hash) {
        if (hash[key] == +key) lucky = +key;
    }
    return lucky;
};