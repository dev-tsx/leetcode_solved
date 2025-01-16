function xorAllNums(nums1: number[], nums2: number[]): number {
        let x1 = 0, x2 = 0;

        if (nums2.length % 2 != 0) for (const n of nums1) x1 ^= n;
        if (nums1.length % 2 != 0) for (const n of nums2) x2 ^= n;

        return x1 ^ x2;
};