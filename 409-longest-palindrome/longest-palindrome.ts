function longestPalindrome(s: string): number {
    const hash = {};

    for (const char of s) {
        hash[char] = (hash[char] || 0) + 1;
    }
    for(const key in hash){
       hash[key] = hash[key] % 2;
    }
    const ones = Object.values(hash).filter(n => n === 1).length;
    if(!ones || ones === 1) return s.length;

    return s.length - ones + 1;  
};