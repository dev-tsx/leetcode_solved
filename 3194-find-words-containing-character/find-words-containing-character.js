/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
const findWordsContaining = (w, x) => w.map((e, i) => [e.includes(x), i]).filter(e => e[0]).map(e => e[1])