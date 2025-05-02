function digitsSqrtSum(n: number) {
    const array = String(n).split('');

    return array.reduce((sum, n) => {
        sum += Math.pow(+n, 2);
        return sum;
    }, 0)
}

function isHappy(n: number): boolean {
    let slow = n;
    let fast = digitsSqrtSum(n);

    while (true) {
        if (slow == 1 || fast == 1) return true;
        if (fast == slow) return false
        slow = digitsSqrtSum(slow);
        fast = digitsSqrtSum(digitsSqrtSum(fast))
    }
};