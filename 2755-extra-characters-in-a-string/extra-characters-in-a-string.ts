function minExtraChar(s: string, dictionary: string[]): number {
    const wordSet = new Set(dictionary);
    const memo = new Map();

    function dp(i) {
        if (i === s.length) return 0;
        if (memo.has(i)) return memo.get(i);

        let minExtra = 1 + dp(i + 1);

        for (let j = i + 1; j <= s.length; j++) {
            const word = s.slice(i, j);
            if (wordSet.has(word)) {
                minExtra = Math.min(minExtra, dp(j));
            }
        }

        memo.set(i, minExtra);
        return minExtra;
    }

    return dp(0);
};