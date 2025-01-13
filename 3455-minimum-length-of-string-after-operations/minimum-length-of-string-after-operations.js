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

    let length = 0;
    for(const key in hash) {
        length += hash[key] % 2 === 0 ? 2 : 1;
    }

    return length;
};