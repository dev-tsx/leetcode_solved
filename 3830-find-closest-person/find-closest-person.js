/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function (x, y, z) {
    const diff1 = Math.abs(z - x);
    const diff2 = Math.abs(z - y);

    return diff1 == diff2 ? 0 : diff1 < diff2 ? 1 : 2;
};