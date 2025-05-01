function expandFromCenter(s: string, left: number, right: number): string {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return s.slice(left + 1, right);
}

function longestPalindrome(s: string): string {
    let result = '';

    for (let i = 0; i < s.length; i++) {
        const odd = expandFromCenter(s, i, i);
        const even = expandFromCenter(s, i, i + 1);

        const longer = odd.length > even.length ? odd : even;
        if (longer.length > result.length) {
            result = longer;
        }
    }

    return result;
}