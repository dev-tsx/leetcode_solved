/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function (s) {
    const count = Array.from({ length: 26 }, () => 0);

    const lastCharCode = 'z'.charCodeAt(0);
    for (let i = 0; i < s.length; i++) {
        count[lastCharCode - s[i].charCodeAt(0)]++;
    }
    const values = count.filter(Boolean);
    const odd = Math.max(...values.filter(a => a % 2))
    const even = Math.min(...values.filter(a => a % 2 == 0))

    return odd - even
};