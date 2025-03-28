function minOperations(grid: number[][], x: number): number {
    const flattened: number[] = grid.flat();

    const base = flattened[0] % x;
    for (const num of flattened) {
        if (num % x !== base) {
            return -1;
        }
    }

    flattened.sort((a, b) => a - b);
    const median = flattened[Math.floor(flattened.length / 2)];

    let operations = 0;
    for (const num of flattened) {
        operations += Math.abs(num - median) / x;
    }

    return operations;
}