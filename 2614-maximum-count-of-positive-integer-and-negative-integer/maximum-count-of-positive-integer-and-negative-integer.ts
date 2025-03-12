function maximumCount(nums: number[]): number {
    const withoutZero = nums.filter(a => a !== 0);
    const positive = withoutZero.filter(a => a > 0).length;
    const negative = withoutZero.length - positive;
    return Math.max(positive, negative);
};