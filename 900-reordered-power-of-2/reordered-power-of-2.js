/**
 * @param {number} n
 * @return {boolean}
 */

const n2s = (n) => [...String(n)].sort((a, b) => b - a).join('');

const reorderedPowerOf2 = (n) => {
    const powersMap = Array.from({ length: 30 }, (_, i) => 2 ** i);
    const sortedMap = powersMap.map(v => n2s(v)).sort((a, b) => a - b);

    const value = n2s(n);

    return sortedMap.includes(value);
};