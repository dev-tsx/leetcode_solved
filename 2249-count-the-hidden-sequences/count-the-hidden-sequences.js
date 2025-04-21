/**
 * @param {number[]} differences
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var numberOfArrays = function (differences, lower, upper) {
    let minSum = 0, maxSum = 0, sum = 0;

    for (let diff of differences) {
        sum += diff;
        minSum = Math.min(minSum, sum);
        maxSum = Math.max(maxSum, sum);
    }

    const minX = lower - minSum;
    const maxX = upper - maxSum;

    return Math.max(0, maxX - minX + 1);
};