function canJump(nums: number[]): boolean {
    let last = nums.length - 1;
    for (let i = last; i >= 0; i--) {
        if (i + nums[i] >= last) {
            last = i;
        }
    }
    return last === 0;
};