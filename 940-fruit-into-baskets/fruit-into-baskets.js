/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
    let max = 0;
    let nowMax = 0;
    let last = 0;
    let lastItem = -1;
    let nextLastItem = -1;

    for (let fruit of fruits) {
        if (fruit == lastItem || fruit == nextLastItem)
            nowMax += 1;
        else
            nowMax = last += 1;


        last = fruit == lastItem ? last + 1 : 1;


        if (fruit !== lastItem) {
            nextLastItem = lastItem;
            lastItem = fruit;
        }

        max = Math.max(nowMax, max)
    }
    return max;
};