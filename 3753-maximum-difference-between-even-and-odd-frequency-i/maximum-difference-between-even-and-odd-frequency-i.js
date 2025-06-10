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

    let odd = 0;
    let even = 0;
    

    for (const val of count.filter(Boolean)) {
        if (val % 2) {
            odd = odd == 0 ? val : Math.max(odd, val)
        } else {
            even = even == 0 ? val : Math.min(even, val)
        }
    }
    console.log(odd, even)
    return odd - even;
};