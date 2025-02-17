function numTilePossibilities(tiles: string): number {
    const count = new Map();

    for (const char of tiles) {
        count.set(char, (count.get(char) || 0) + 1);
    }


    return backtrack(count);
};

function backtrack(counter) {
    let total = 0;
    for (const [char, freq] of counter) {
        if (freq > 0) {
            total += 1;
            counter.set(char, freq - 1);
            total += backtrack(counter);
            counter.set(char, freq); // Восстановление состояния (backtracking)
        }
    }
    return total;
}