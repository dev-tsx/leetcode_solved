function longestOnes(n: number[], k: number): number {
    const c = [],
        l = n.length;
    let s = 0,
        m = 0;

    for (let e = 0; e < l; e++) {
        if (!n[e]) c.push(e);

        if (c.length > k) {
            s = c.shift() + 1;
        }
        m = Math.max(m, e - s + 1);
    }
    return m;
}
