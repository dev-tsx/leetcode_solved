function longestMonotonicSubarray(nums: number[]): number {
    let incCount = 1, decCount = 1, incMax = 1, decMax = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] < nums[i]) {
            incCount++;
            decCount = 1;
        } else if (nums[i - 1] > nums[i]) {
            decCount++;
            incCount = 1;
        } else {
            incCount = 1;
            decCount = 1;
        }

        incMax = Math.max(incMax, incCount);
        decMax = Math.max(decMax, decCount);
    }

    return Math.max(incMax, decMax);
}