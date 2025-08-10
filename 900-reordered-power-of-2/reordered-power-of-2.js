/**
 * @param {number} n
 * @return {boolean}
 */

const n2s = (n) => [...String(n)].sort((a, b) => b - a).join('');

const reorderedPowerOf2 = (n) => Array.from({ length: 30 }, (_, i) => n2s(n2s(2 ** i))).includes(n2s(n))