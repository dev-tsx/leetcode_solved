const numEquivDominoPairs = (d: number[][]): number => d.reduce((map, [a, b]) => {
    const k = a <= b ? `${a},${b}` : `${b},${a}`;
    const c = map[k] || 0;
    map.p += c;
    map[k] = c + 1;
    return map;
}, { p: 0 }).p