function reverseStr(s: string, k: number): string {
    const arr = s.split('');
    for (let start = 0; start < arr.length; start += 2 * k) {
        let i = start, j = Math.min(start + k - 1, arr.length - 1);
        while (i < j) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
            i++;
            j--;
        }
    }
    return arr.join('');
};