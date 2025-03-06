/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
    const flat = grid.flat();
    const seen = new Set();
    let repeated;

    for (const num of flat) {
        if (seen.has(num)) repeated = num;
        seen.add(num);
    }

    for (let i = 1; i <= Math.pow(grid.length, 2); i++) {
        if (!seen.has(i)) return [repeated, i];
    }

};