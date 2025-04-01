function canJump(nums: number[]): boolean {
    let jump = 0, i = 0, lastIndx = nums.length - 1;

    while (i <= jump) {
        jump = Math.max(jump, i + nums[i]);
        if (jump >= lastIndx) return true;
        i++;
    }
    return false;
};