function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);
    const result = [];
    const n = nums.length

    for (let i = 0; i < n - 2; i++) {
        if (nums[i] > 0) break;
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        let low = i + 1;
        let high = n - 1;
        while (low < high) {
            const sum = nums[i] + nums[low] + nums[high];
            if (sum == 0) {
                result.push([nums[i], nums[low], nums[high]]);
                low++;
                high--;
                while (low < high && nums[low] === nums[low - 1]) low++;
                while (low < high && nums[high] === nums[high + 1]) high--;
            } else if (sum < 0) low++;
            else high--;
        }
    }
    return result;
};