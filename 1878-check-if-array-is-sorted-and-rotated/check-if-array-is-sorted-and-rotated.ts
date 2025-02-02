function check(nums: number[]): boolean {
    let counter = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i + 1] < nums[i]) counter++;
    }

    if (counter === 0) return true;
    if (counter > 1) return false;

    return nums[0] >= nums[nums.length - 1];
}