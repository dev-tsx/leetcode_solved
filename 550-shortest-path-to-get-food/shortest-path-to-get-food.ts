function getFood(grid: string[][]): number {
    const directions = [1, 0, -1, 0, 0, 1, 0, -1];
    const N = grid.length;
    const M = grid[0].length;
    const isValid = (x: number, y: number): boolean => {
        const isXvalid = x >= 0 && x < N;
        const isYvalid = y >= 0 && y < M;
        return isXvalid && isYvalid && grid[x][y] !== 'X'
    }

    const bfs = (row: number, col: number) => {
        const queue = [[row, col, 0]];
        while (queue.length !== 0) {
            const [x, y, d] = queue.shift();
            if (!isValid(x, y)) continue;
            else if (grid[x][y] === '#') return d;

            grid[x][y] = 'X';

            for (let i = 0; i < directions.length; i += 2) {
                const nX = x + directions[i];
                const nY = y + directions[i + 1];
                queue.push([nX, nY, d + 1]);
            }
        }
        return -1;
    }

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (grid[i][j] === '*') return bfs(i, j);
        }
    }
    return -1;
};