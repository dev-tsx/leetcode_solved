/**
 * @param {number} n
 * @return {boolean}
 */

const sumOfDigitsPower = (num) => [..."" + num].reduce((sum, digit) => {
    sum += Number(digit) ** 2;
    return sum;
}, 0)

var isHappy = function (n) {
    const numbers = new Set();

    while (true) {
        numbers.add(n);
        if (n == 1) return true;
        n = sumOfDigitsPower(n);
        if (numbers.has(n)) return false;
    }
};