function canJump(nums: number[]): boolean {
    let maxJump = 0, len = nums.length;

    for (let i = 0; i < len; i++) {
        if (maxJump < i) return false;
        maxJump = Math.max(maxJump, nums[i] + i);
        if (maxJump >= len - 1) return true;
    }
    return false;
};