function buildArray(nums: number[]): number[] {
    return Array.from({ length: nums.length }, (_, i) => nums[nums[i]])
};