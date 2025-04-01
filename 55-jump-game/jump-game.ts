function canJump(nums: number[]): boolean {
    let maxJump = 0, lastIndx = nums.length - 1;

    for (let i = 0; i <= maxJump; i++) {
        if (maxJump < nums[i] + i) maxJump = nums[i] + i;
        if (maxJump >= lastIndx) return true;
    }
    return false;
};