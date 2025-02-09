function countBadPairs(nums: number[]): number {
    let goodPairs = 0;
    let map = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        let key = nums[i] - i;
        if (map.has(key)) {
            goodPairs += map.get(key)!;
        }
        map.set(key, (map.get(key) || 0) + 1);
    }

    let totalPairs = (nums.length * (nums.length - 1)) / 2;
    return totalPairs - goodPairs;
};