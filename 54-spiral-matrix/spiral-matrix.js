/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = matrix => {
    if (matrix.length === 0) return [];

    let row_s = 0;
    let row_e = matrix.length - 1;
    let col_s = 0;
    let col_e = matrix[0].length - 1;

    let result = [];

    while (row_s <= row_e && col_s <= col_e) {

        for (let i = col_s; i <= col_e; i++) {
            result.push(matrix[row_s][i]);
        }
        row_s++;

        for (let i = row_s; i <= row_e; i++) {
            result.push(matrix[i][col_e]);
        }
        col_e--;

        if (row_s <= row_e) {
            for (let i = col_e; i >= col_s; i--) {
                result.push(matrix[row_e][i]);
            }
            row_e--;
        }

        if (col_s <= col_e) {
            for (let i = row_e; i >= row_s; i--) {
                result.push(matrix[i][col_s]);
            }
            col_s++;
        }
    }

    return result;
};
