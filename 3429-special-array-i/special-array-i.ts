function isArraySpecial(nums: number[]): boolean {
    if (nums.length < 2) return true;
    if (nums.length == 2 && nums[0] % 2 == nums[1] % 2) return false;

    for (let i = 1; i < nums.length - 1; i++) {
        const prev = nums[i - 1] % 2;
        const cur = nums[i] % 2;
        const next = nums[i + 1] % 2;

        if (!(prev == next && prev != cur)) return false;
    }
    return true
};