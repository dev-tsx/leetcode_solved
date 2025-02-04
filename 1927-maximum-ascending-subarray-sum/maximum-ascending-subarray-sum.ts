function maxAscendingSum(nums: number[]): number {
    let sum = nums[0];
    let result = sum;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] < nums[i]){
            sum+=nums[i];
        } else {
            result = Math.max(sum,result);
            sum = nums[i]
        }
    }
    return Math.max(sum,result)
};