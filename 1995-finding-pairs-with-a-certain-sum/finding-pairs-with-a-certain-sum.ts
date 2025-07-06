class FindSumPairs {
    private nums1: number[];
    private nums2: number[];
    private freq1: Map<number, number>;
    private freq2: Map<number, number>;

    constructor(nums1: number[], nums2: number[]) {
        this.nums1 = nums1;
        this.nums2 = nums2;

        this.freq1 = new Map();
        this.freq2 = new Map();

        for (const num of nums1) {
            this.freq1.set(num, (this.freq1.get(num) || 0) + 1);
        }

        for (const num of nums2) {
            this.freq2.set(num, (this.freq2.get(num) || 0) + 1);
        }
    }

    add(index: number, val: number): void {
        const oldVal = this.nums2[index];
        const newVal = oldVal + val;

        this.nums2[index] = newVal;

        this.freq2.set(oldVal, this.freq2.get(oldVal)! - 1);
        if (this.freq2.get(oldVal) === 0) {
            this.freq2.delete(oldVal);
        }

        this.freq2.set(newVal, (this.freq2.get(newVal) || 0) + 1);
    }

    count(tot: number): number {
        let count = 0;
        for (const [num1, freq1Count] of this.freq1.entries()) {
            const complement = tot - num1;
            const freq2Count = this.freq2.get(complement) || 0;
            count += freq1Count * freq2Count;
        }
        return count;
    }
}