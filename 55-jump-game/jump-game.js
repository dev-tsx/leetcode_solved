const canJump = (n, m = 0, L = n.length) =>
    n.reduce((cur, _, i) => {
        if (i > m) return false;
        m = Math.max(m, i + n[i]);
        return m >= L - 1 || cur;
    }, false);