/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return "";
    
    let minPattern = strs[0];
    
    for (let i = 1; i < strs.length; i++) {
        let currentStr = strs[i];
        

        while (!currentStr.startsWith(minPattern)) {
            minPattern = minPattern.slice(0, -1);
            
            if (minPattern === "") return "";
        }
    }
    
    return minPattern;
};