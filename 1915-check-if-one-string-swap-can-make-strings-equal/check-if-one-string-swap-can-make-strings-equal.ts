function areAlmostEqual(s1: string, s2: string): boolean {
    if(s1 == s2) return true;

    const chars: number[] = [];

    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) chars.push(i);
        if (chars.length > 2) return false;
    }

    return chars[0] !== undefined && chars[1] !== undefined && s1[chars[0]] === s2[chars[1]] && s1[chars[1]] === s2[chars[0]];
}