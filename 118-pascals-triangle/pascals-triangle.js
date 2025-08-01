/**
 * @param {number} numRows
 * @return {number[][]}
 */
function generate(numRows) {

    const triangle = Array.from({length:numRows}, (_,i) => Array.from({length:i + 1}, () => 1));

    for (let row = 2; row < numRows; row++) {
        for (let col = 1; col < triangle[row].length - 1; col++) {
            const prevRowPrevColNum = triangle[row - 1][col - 1];
            const prevRowCurrColNum = triangle[row - 1][col];

            triangle[row][col] = prevRowPrevColNum + prevRowCurrColNum;
        }
    }
    return triangle
};