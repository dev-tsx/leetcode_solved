const numTilePossibilities = tiles => backtrack([...tiles].reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
}, {}))

function backtrack(counter) {
    let total = 0;
    for (const char in counter) {
        if (counter[char] > 0) {
            total += 1;
            counter[char] -= 1;
            total += backtrack(counter);
            counter[char] += 1;
        }
    }
    return total;
}