/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function(s, k, fill) {
    const r = [];
    let i = 0;
    let item = s.slice(i,k);
    while(item.length){
        if(item.length === k){
            r.push(item);
        } else {
           const diff = k - item.length;
           r.push(item + fill.repeat(diff));
        }
        i+=k;
        item = s.slice(i,k + i);
    }
    return r
};