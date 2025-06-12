var maxAdjacentDistance = (nums) => {
    const l = nums.length;
    let max = Math.abs(nums[0] - nums[l - 1]);
    for (let i = 1; i < l; i++) {
        max = Math.max(max, Math.abs(nums[i] - nums[i - 1]));
    }
    return max;
}