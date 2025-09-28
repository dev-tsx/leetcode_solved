function largestPerimeter(nums: number[]): number {

    nums.sort((a, b) => a - b);
    for (let i = nums.length - 3; i >= 0; --i) {
        const side1 = nums[i];
        const side2 = nums[i + 1];
        const side3 = nums[i + 2];

        if (side1 + side2 > side3) {
            return side1 + side2 + side3
        }

    }
    return 0;
};