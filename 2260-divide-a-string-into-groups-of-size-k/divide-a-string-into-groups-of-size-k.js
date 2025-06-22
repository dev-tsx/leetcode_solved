/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function (s, k, fill) {
    const r = [];
    let i = 0;
    while (item = s.slice(i, k + i)) {
        r.push(item.length === k ? item : item + fill.repeat(k - item.length))
        i += k;
    }
    return r
};