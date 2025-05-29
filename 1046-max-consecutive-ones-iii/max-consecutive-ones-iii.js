/**
 * @param {number[]} n
 * @param {number} k
 * @return {number}
 */
const longestOnes = (n, k) => {
    const q = [],
        l = n.length;
    let s = 0,
        m = 0;

    for (let e = 0; e < l; e++) {
        if (!n[e]) q.push(e);

        if (q.length > k) {
            s = q.shift() + 1;
        }
        m = Math.max(m, e - s + 1);
    }
    return m;
};
