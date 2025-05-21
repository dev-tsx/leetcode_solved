function setZeroes(matrix: number[][]): void {
    const rows = new Set();
    const cols = new Set();

    for (let i = 0; i < matrix.length; i++) {
        const row = matrix[i];
        for (let j = 0; j < row.length; j++) {
            if (matrix[i][j] === 0) {
                rows.add(i);
                cols.add(j);
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        const row = matrix[i];
        for (let j = 0; j < row.length; j++) {
            if (rows.has(i) || cols.has(j)) {
                matrix[i][j] = 0
            }
        }
    }
};