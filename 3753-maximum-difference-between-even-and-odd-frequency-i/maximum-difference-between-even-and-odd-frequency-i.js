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

    const diffs = count.reduce((obj, val) => {
        if (!val) return obj;
        if (val % 2 == 0) {
            obj.even = obj.even ? Math.min(obj.even, val) : val;
        } else {
            obj.odd = obj.odd ? Math.max(obj.odd, val) : val;
        }
        return obj;
    }, { odd: null, even: null })
    return diffs.odd - diffs.even;
};