function canJump(nums: number[]): boolean {
    let lastIndx = nums.length - 1;
    for (let i = lastIndx; i >= 0; i--) {
        if (lastIndx <= i + nums[i]) lastIndx = i;
    }
    return lastIndx == 0
};