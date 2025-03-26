/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
    let stack = [];
    let arr = s.split('');

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '(') {
            stack.push(i);
        } else if (arr[i] === ')') {
            if (stack.length > 0) {
                stack.pop();
            } else {
                arr[i] = '';
            }
        }
    }

    while (stack.length > 0) {
        arr[stack.pop()] = '';
    }

    return arr.join('');
};