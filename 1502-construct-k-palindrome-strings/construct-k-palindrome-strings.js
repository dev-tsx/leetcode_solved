var canConstruct = function(s, k) {
    if (s.length < k) return false;

    let symbols = [...s].sort();
    let odd = 0;

    for (let i = 0; i < symbols.length; ) {
        let n = symbols[i];
        let count = 0;
        while (i < symbols.length && symbols[i] === n) {
            count++;
            i++;
        }
        count % 2 !== 0 && odd++;
    }

    return odd <= k;
};