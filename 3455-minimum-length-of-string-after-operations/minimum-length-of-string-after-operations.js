/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function (s) {

    const hash = {};

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        hash[char] = (hash[char] || 0) + 1
    }

    return Object.keys(hash).reduce((acc, key) => {
        return (acc += hash[key] % 2 === 0 ? 2 : 1);
    }, 0);
};