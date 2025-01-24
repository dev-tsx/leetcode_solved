function missingNumber(nums: number[]): number {
    const uniq = new Set(nums);

    for (let i = 0; i <= uniq.size; i++) {
        if (!uniq.has(i)) return i;
    }
    return uniq.size;
};