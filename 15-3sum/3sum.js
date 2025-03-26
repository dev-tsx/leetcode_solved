function threeSum(nums) {
    nums.sort((a, b) => a - b);
    let sum = [];
    const twoSum = (nums, i, sum) => {
        let prevSet = new Set();
        for (let j = i + 1; j < nums.length; ++j) {
            let remainder = -nums[i] - nums[j];
            if (prevSet.has(remainder)) {
                sum.push([nums[i], nums[j], remainder]);
                while (j + 1 < nums.length && nums[j] == nums[j + 1]) {
                    j++;
                }
            }
            prevSet.add(nums[j]);
        }
    }

    for (let i = 0; i < nums.length && nums[i] <= 0; ++i)
        if (i == 0 || nums[i - 1] != nums[i]) {
            twoSum(nums, i, sum);
        }
    return sum;
};