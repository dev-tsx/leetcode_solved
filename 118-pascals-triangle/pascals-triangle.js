const generate = (L) => {

    const res = Array.from({ length: L }, (_, i) => Array.from({ length: i + 1 }, () => 1));

    for (let r = 2; r < L; r++) {
        for (let c = 1; c < res[r].length - 1; c++) {
            res[r][c] = res[r - 1][c - 1] + res[r - 1][c];
        }
    }
    return res;
};