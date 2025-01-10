/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const numbers = {
        'M': 1000,
        'D': 500,
        'C': 100,
        'L': 50,
        'X': 10,
        'V': 5,
        'I': 1,
    }

    const n = s.length;
    let result = 0


    for (let i = 0; i < n; i++) {
        const value = numbers[s[i]]

        if (i == n - 1 || numbers[s[i]] >= numbers[s[i + 1]])
            result += value;
        else
            result -= value;


    }
    return result
}