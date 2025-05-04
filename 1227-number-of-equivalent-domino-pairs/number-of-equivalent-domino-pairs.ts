function numEquivDominoPairs(dominoes: number[][]): number {
    const map = {};
    let pairs = 0;

    for (const [a, b] of dominoes) {
        const key = a <= b ? `${a},${b}` : `${b},${a}`;
        const count = map[key] || 0;
        pairs += count;
        map[key] = count + 1;
    }

    return pairs;
}