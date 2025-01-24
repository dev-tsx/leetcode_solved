function missingNumber(nums: number[]): number {
    const uniq = new Set(nums);
    const last = Math.max(...nums);
    
    for (let i = 0; i <= last; i++) {
        if (!uniq.has(i)) return i;
    }
    return uniq.size;
};