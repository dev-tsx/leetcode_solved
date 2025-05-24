/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
return words.map((word, i) => [word.includes(x), i]).filter(word => word[0]).map(word => word[1])
};