function isPerfectSquare(num: number): boolean {
    if (num < 2) return true;

    let low = 2, high = num / 2;

    while (low <= high) {
        const x = Math.floor(low + (high - low) / 2);
        const sqrt = x ** 2;
        if (sqrt == num) {
            return true;
        }
        if (sqrt > num) {
            high = x - 1;
        } else {
            low = x + 1;
        }
    }
    return high ** 2 == num;
};