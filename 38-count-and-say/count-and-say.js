/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    let str = "1";
    for (let i = 2; i <= n; i++) {
        let next = "";
        for (let j = 0, k = 0; j < str.length; j = k) {
            while (k < str.length && str[k] == str[j]) k++;
            next += String(k - j) + str[j];
        }
        str = next;
    }
    return str;
};