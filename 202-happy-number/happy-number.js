const sumOfDigitsPower = (num) => [..."" + num].reduce((sum, digit) => {
    sum += Number(digit) ** 2;
    return sum;
}, 0)

var isHappy = function (n) {
    let slow = n;
    let fast = sumOfDigitsPower(n);

    while (true) {
        if (fast == 1) return true;
        slow = sumOfDigitsPower(slow);
        fast = sumOfDigitsPower(sumOfDigitsPower(fast));
        if (fast == slow) return false;
    }
};