function findNumbers(nums: number[]): number {
    return nums.reduce((count, num) => {
        if (num.toString().length % 2 == 0) count++;
        return count;
    }, 0)
};