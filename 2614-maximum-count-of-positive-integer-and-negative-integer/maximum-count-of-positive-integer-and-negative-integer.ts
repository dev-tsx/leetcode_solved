function maximumCount(nums: number[]): number {
    let positive = 0, negative = 0;
    for (const n of nums) {
        if (n === 0) continue;
        else if (n < 0) negative++;
        else positive++;
    }
    return Math.max(positive, negative);
};