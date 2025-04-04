const canJump = (n) => {
    let a = 0, b = n.length;

    for (let c = 0; c < b; c++) {
        if (a < c) return false;
        a = Math.max(a, n[c] + c);
        if (a >= b - 1) return true;
    }
    return false;
};