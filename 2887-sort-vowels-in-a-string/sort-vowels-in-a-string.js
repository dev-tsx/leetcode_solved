/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function (s) {
    const vowels = {};
    const vowelsSet = new Set('aeiouAEIOU'.split(''));

    for (const char of s) {
        if (vowelsSet.has(char)) {
            const code = char.charCodeAt(0);
            vowels[code] = (vowels[code] || 0) + 1;
        }

    }
    const sorted = Object.entries(vowels).sort((a, b) => a[0] > b[0] ? a : b)
    const result = [];
    for (const char of s) {
        if (vowelsSet.has(char)) {
            sorted[0][1]--;
            result.push(String.fromCharCode(sorted[0][0]));
            if (sorted[0][1] == 0) {
                sorted.shift();
            }
        } else {
            result.push(char);
        }

    }
return result.join('')
};