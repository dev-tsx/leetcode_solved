class Solution {
    private arr: number[];
    private readonly init: number[];

    constructor(nums: number[]) {
        this.init = [...nums];
        this.arr = [...nums];
    }

    reset(): number[] {
        this.arr = [...this.init];
        return this.arr;
    }

    shuffle(): number[] {
        for (let i = this.arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.arr[i], this.arr[j]] = [this.arr[j], this.arr[i]];
        }
        return this.arr;
    }
}