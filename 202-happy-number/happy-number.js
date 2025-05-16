const sumOfDigitsPower = (num) => [..."" + num].reduce((sum, digit) => {
    sum += Number(digit) ** 2;
    return sum;
}, 0)

var isHappy = function (n) {
    let slow = n;
    let fast = sumOfDigitsPower(n);

    while (fast !== 1) {
        slow = sumOfDigitsPower(slow);
        fast = sumOfDigitsPower(sumOfDigitsPower(fast));
        if (fast == slow) return false;
    }
    return true;
};