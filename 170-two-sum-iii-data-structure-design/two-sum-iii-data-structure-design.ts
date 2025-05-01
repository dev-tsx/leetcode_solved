class TwoSum {
    nums: Record<number, number>;
    constructor() {
        this.nums = {};
    }

    add(number: number): void {
        if (!this.nums[number]) this.nums[number] = 1;
        else this.nums[number]++;
    }

    find(value: number): boolean {
        const keys = Object.keys(this.nums);

        for (const key of keys) {
            if (this.nums[key] > 1 && +key * 2 == value || this.nums[value - +key] && (value - +key) !== +key) return true;
        }
        return false;
    }
}

/**
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */