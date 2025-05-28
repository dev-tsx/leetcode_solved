function longestOnes(nums: number[], k: number): number {
    const zeroIndices = [];
    let left = 0,
        max = 0;

    for (let i = 0; i < nums.length; i++) {
        if (!nums[i]) zeroIndices.push(i);

        if (zeroIndices.length > k) {
            left = zeroIndices.shift() + 1;
        }
        max = Math.max(max, i - left + 1);
    }
    return max;
}
