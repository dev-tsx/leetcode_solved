/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function (n, k) {
    const result = [];
    const generate = (current) => {
        if (current.length === n) {
            result.push(current);
            return;
        }
        for (const char of ['a', 'b', 'c']) {
            if (current.length === 0 || current[current.length - 1] !== char) {
                generate(current + char);
            }
        }
    };

    generate('');
    return result[k - 1] || '';
};