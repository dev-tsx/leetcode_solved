/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
const findWordsContaining = (w, x) => w.flatMap((e, i) => e.includes(x) ? [i] : []);