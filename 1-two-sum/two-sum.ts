function twoSum(nums: number[], target: number): number[] {
    const hashNums = {};

    for (let i = 0; i < nums.length; i++) {

        if (hashNums[target - nums[i]] !== undefined) {
            return [hashNums[target - nums[i]], i]
        }
        hashNums[nums[i]] = i;
    }
};