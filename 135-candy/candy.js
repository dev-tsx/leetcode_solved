function candy(ratings) {
    let sum = 0, len = ratings.length, ltr = new Array(len).fill(1), rtl = new Array(len).fill(1);
    for (var i = 1; i < len; i++) {
        if (ratings[i] > ratings[i - 1]) ltr[i] = ltr[i - 1] + 1;
    }
    for (var i = len - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) rtl[i] = rtl[i + 1] + 1;
    }
    for (var i = 0; i < len; i++) {
        sum += Math.max(ltr[i], rtl[i]);
    }
    return sum;
};