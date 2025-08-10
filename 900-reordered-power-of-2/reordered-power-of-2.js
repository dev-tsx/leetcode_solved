/**
 * @param {number} n
 * @return {boolean}
 */

const numToSortedString = (n) => [...String(n)].sort((a, b) => b - a).join('');

const reorderedPowerOf2 = (n) => {
    const powersMap = Array.from({ length: 30 }, (_, i) => 2 ** i);
    const sortedMap = powersMap.map(v =>
        numToSortedString(v)).sort((a, b) => a - b);

    const value = numToSortedString(n);

    return sortedMap.includes(value);
};