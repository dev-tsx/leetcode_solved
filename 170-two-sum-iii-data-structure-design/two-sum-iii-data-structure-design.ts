class TwoSum {
    array: number[];
    constructor() {
        this.array = [];
    }

    add(number: number): void {
        this.array.push(number);
        this.array.sort((a, b) => a - b);
    }

    find(value: number): boolean {
        let start = 0;
        let end = this.array.length - 1;
        while (start < end) {
            const sum = this.array[start] + this.array[end]
            if (sum == value) return true;
            if (sum > value) end--;
            else start++;
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