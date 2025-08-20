/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function (matrix) {

    let row = matrix.length;
    let col = matrix[0].length;
    let hash = new Array(row + 1).fill(0).map(() => new Array(col + 1).fill(0));
    let result = 0;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (matrix[i][j] == 1) {
                hash[i + 1][j + 1] = Math.min(Math.min(hash[i][j + 1], hash[i + 1][j]), hash[i][j]) + 1;
                result += hash[i + 1][j + 1];
            }
        }
    }
    return result;
};