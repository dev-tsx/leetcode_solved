/**
 * @param {number} n
 * @return {boolean}
 */

const sumOfDigitsPower = (num) => [..."" + num].reduce((sum, digit) => {
    sum += Number(digit) ** 2;
    return sum;
}, 0)

var isHappy = function (n, seen = new Set()) {
    if (n == 1) return true;
    if (seen.has(n)) return false;
    seen.add(n);
    return isHappy(sumOfDigitsPower(n), seen);
};