/**
 * @param {string} s
 * @return {number}
 */
const minimumLength = s => {
    const hash = Array.from(s).reduce((acc, char) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    }, {})

    return Object.keys(hash).reduce((acc, key) => {
        return (acc += hash[key] % 2 === 0 ? 2 : 1);
    }, 0);
};