const mi = Math.min;
const mx = Math.max;
const maxArea = h => {
    let s = 0,
        e = h.length - 1,
        c = 0;
    while (s < e) {
        c = mx(c, (e - s) * mi(h[s], h[e]));
        h[e] > h[s] ? s++ : e--;
    }
    return c;
}