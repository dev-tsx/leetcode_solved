/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function(n) {
    const powersMap = {};
    for(let i = 0; i < 30; i++){
        powersMap[i] = 2**i;
    }
    const sorted = Object.values(powersMap).map(v => 
      [...String(v)].sort((a,b) => b - a).join('')).sort((a,b) => a - b);

  const value = [...String(n)].sort((a,b) => b - a).join('');
  return sorted.includes(value);
};