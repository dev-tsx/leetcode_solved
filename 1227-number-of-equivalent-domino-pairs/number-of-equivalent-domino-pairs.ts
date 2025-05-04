const numEquivDominoPairs = (dominoes: number[][]): number => dominoes.reduce((map, [a, b]) => {
    const key = a <= b ? `${a},${b}` : `${b},${a}`;
    const count = map[key] || 0;
    map.pairs += count;
    map[key] = count + 1;
    return map;
}, { pairs: 0 }).pairs