/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function (s, k, fill) {
    const r = [];
    let i = 0;
    let item = s.slice(i, k);
    while (item.length) {
        r.push(item.length === k ? item : item + fill.repeat(k - item.length))
        i += k;
        item = s.slice(i, k + i);
    }
    return r
};