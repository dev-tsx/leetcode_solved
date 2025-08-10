/**
 * @param {number} n
 * @return {boolean}
 */

const numToSortedString = (n) => [...String(n)].sort((a, b) => b - a).join('');

const reorderedPowerOf2 = (n) => {
    const value = numToSortedString(n);
    for (let i = 0; i < 30; i++) {
        const sortedPow = numToSortedString(2 ** i);
        if (sortedPow == value) {
            return true;
        }
    }
    return false
};