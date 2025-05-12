function threeConsecutiveOdds(arr: number[]): boolean {
    for (let i = 1; i < arr.length; i++) {
        const cur = arr[i];
        const prev = arr[i - 1];
        const next = arr[i + 1];
        if (cur % 2 == 1 && prev % 2 == 1 && next % 2 == 1) return true;
    }
    return false;
};