function candy(ratings: number[]): number {
    let sum = 0, 
    len = ratings.length, 
    ltr = Array.from({ length: len }, () => 1), 
    rtl = [...ltr];

    for (let i = 1; i < len; i++) {
        if (ratings[i] > ratings[i - 1]) {
            ltr[i] = ltr[i - 1] + 1;
        }
    }
    for (let i = len - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            rtl[i] = rtl[i + 1] + 1;
        }
    }
    for (let i = 0; i < len; i++) {
        sum += Math.max(ltr[i], rtl[i]);
    }
    return sum;
};