class ProductOfNumbers {
    nums: number[];

    constructor() {
        this.nums = [];
    }

    add(num: number): void {
        this.nums.push(num);
    }

    getProduct(k: number): number {
        let product = 1;
        let n = this.nums.length;

        for (let i = n - 1; i >= n - k && i >= 0; i--) {
            product *= this.nums[i];
        }
        return product;
    }
}