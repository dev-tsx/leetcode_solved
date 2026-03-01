/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
    const ans = [...prices];
    const stack = [];
    for (let i = 0; i < prices.length; i++) {
        while (stack.length && prices[stack[stack.length - 1]] >= prices[i]) {
            ans[stack.pop()] -= prices[i];
        }
        stack.push(i);
    }
    return ans;
};