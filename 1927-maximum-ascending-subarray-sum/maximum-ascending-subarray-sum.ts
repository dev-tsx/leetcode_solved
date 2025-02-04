const { max } = Math;

function maxAscendingSum(nums: number[]): number {
    let sum = nums[0], result = sum;

    for (let i = 1; i < nums.length; i++) {
        nums[i] > nums[i - 1]
            ? (sum += nums[i])
            : ((result = max(result, sum)), (sum = nums[i]));
    }

    return max(result, sum);
}