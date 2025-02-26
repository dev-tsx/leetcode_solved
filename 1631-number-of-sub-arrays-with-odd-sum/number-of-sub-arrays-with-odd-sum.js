var numOfSubarrays = function (arr) {
    const MOD = 1e9 + 7;
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        arr[i] %= 2;
    }

    let dpEven = new Array(n).fill(0);
    let dpOdd = new Array(n).fill(0);

    if (arr[n - 1] === 0) {
        dpEven[n - 1] = 1;
    } else {
        dpOdd[n - 1] = 1;
    }

    for (let num = n - 2; num >= 0; num--) {
        if (arr[num] === 1) {
            dpOdd[num] = (1 + dpEven[num + 1]) % MOD;
            dpEven[num] = dpOdd[num + 1];
        } else {
            dpEven[num] = (1 + dpEven[num + 1]) % MOD;
            dpOdd[num] = dpOdd[num + 1];
        }
    }

    let count = 0;
    for (let oddCount of dpOdd) {
        count = (count + oddCount) % MOD;
    }

    return count;
};
