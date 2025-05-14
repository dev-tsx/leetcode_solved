const sumOfDigitsPower = (num) => [..."" + num].reduce((sum, digit) => {
    sum += Number(digit) ** 2;
    return sum;
}, 0)

var isHappy = function (n) {
    let slow = n;
    let fast = sumOfDigitsPower(n);

    while (true) {
        if (fast == 1) return true;
        if (fast == slow) return false;
        fast = sumOfDigitsPower(sumOfDigitsPower(fast));
        slow = sumOfDigitsPower(slow);
    }
};