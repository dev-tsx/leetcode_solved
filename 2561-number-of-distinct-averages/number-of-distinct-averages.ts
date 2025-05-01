function distinctAverages(nums: number[]): number {
    nums.sort((a, b) => a - b);
    let distinct = new Set();
    let min = 0; let max = nums.length - 1;
    while (min < max) {
        distinct.add((nums[min] + nums[max]) / 2);
        min++;
        max--;
    }
    return distinct.size
};