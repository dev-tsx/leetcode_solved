/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function (n) {
    let power = 0;

    while (Math.pow(3, power) <= n) power++;
    while (n > 0) {
        if (n >= Math.pow(3, power)) n -= Math.pow(3, power);
        if (n >= Math.pow(3, power)) return false;
        power--;
    }
    return true;
};