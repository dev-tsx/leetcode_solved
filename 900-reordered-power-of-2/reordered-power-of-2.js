/**
 * @param {number} n
 * @return {boolean}
 */

const numToSortedString = (n) => [...String(n)].sort((a, b) => b - a).join('');

const reorderedPowerOf2 = (n) => {
    const powersMap = {};
    for (let i = 0; i < 30; i++) {
        powersMap[i] = 2 ** i;
    }
    const sortedMap = Object.values(powersMap).map(v =>
        numToSortedString(v)).sort((a, b) => a - b);

    const value = numToSortedString(n);
    
    return sortedMap.includes(value);
};