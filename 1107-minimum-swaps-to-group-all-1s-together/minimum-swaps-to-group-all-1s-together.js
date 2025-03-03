/**
 * @param {number[]} data
 * @return {number}
 */
var minSwaps = function (data) {
    const sum = data.filter(Boolean).length;
    let count = 0, max = 0, left = 0, right = 0;

    while (right < data.length) {

        count += data[right++];
        if (right - left > sum) {
            count -= data[left++];
        }
        max = Math.max(max, count);
    }
    return sum - max;
};