function intToRoman(num) {
    const mapping = [
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I'],
    ];
    let roman = [];

    for (let [value, symbol] of mapping) {
        while (value <= num) {
            num -= value;
            roman.push(symbol);
            if (num === 0) return roman.join('');
        }
    }
};