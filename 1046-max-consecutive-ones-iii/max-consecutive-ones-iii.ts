function longestOnes(nums: number[], k: number): number {
    let left = 0,
        max = 0,
        count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (!nums[i]) count++;

        while (count > k) {
            if (!nums[left]) {
                count--;
            }
            left++;
        }
        max = Math.max(max, i - left + 1);
    }
    return max;
}
