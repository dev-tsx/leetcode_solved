/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {

    let profit = 0;
    let minPrice = prices[0];

    for (let i = 1; i < prices.length; i++) {

        let diff = prices[i] - minPrice;

        if (diff > 0) {
            profit += diff;
            minPrice = prices[i];
        }

        if (prices[i] < minPrice) {
            minPrice = prices[i];
        }
    }

    return profit;
};  