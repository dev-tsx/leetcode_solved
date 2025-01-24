function missingNumber(nums: number[]): number {
    const uniq = new Set(nums);
    const last = Math.max(...nums);
    for (let i = 0; i < last + 1; i++) {
        if (!uniq.has(i)) return i;
    }
    return uniq.size;
};