const fn = (n) => [..."" + n].reduce((s, d) => (s += Number(d) ** 2), 0)

var isHappy = function (n) {
    let s = n, f = fn(n);

    while (f !== 1) {
        s = fn(s);
        f = fn(fn(f));
        if (f == s) return false;
    }
    return true;
};