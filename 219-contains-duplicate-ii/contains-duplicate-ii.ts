function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const uniq = new Set();
    for (let i = 0; i < nums.length; ++i) {
        if (uniq.has(nums[i])) return true;
        uniq.add(nums[i]);
        if (uniq.size > k) {
            uniq.delete(nums[i - k]);
        }
    }
    return false;
};