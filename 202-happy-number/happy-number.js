const isHappy = (x) => {
    const fn = (n) =>
        [..."" + n].reduce((s, d) =>
            (s += Number(d) ** 2), 0);
    let s = x, f = fn(x);


    while (f !== 1) {
        s = fn(s);
        f = fn(fn(f));
        if (f == s) return false;
    }
    return true;
};