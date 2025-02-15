function punishmentNumber(n: number): number {

    let total = 0;

    for (let i = 1; i <= n; i++) {
        const squared = i * i;
        if (canPartition(squared, i, 0)) total += squared;
    }

    return total;
}
function canPartition(num: number, target: number, index: number): boolean {
    const str = num.toString();

    function backtrack(i: number, sum: number): boolean {
        if (i === str.length) return sum === target;
        let currentSum = 0;
        for (let j = i; j < str.length; j++) {
            currentSum = currentSum * 10 + Number(str[j]);
            if (backtrack(j + 1, sum + currentSum)) return true;
        }
        return false;
    }

    return backtrack(0, 0);
}

