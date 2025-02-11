function removeOccurrences(s: string, part: string): string {
    while (s.includes(part)) {
        const idx = s.indexOf(part);
        s = s.slice(0, idx) + s.slice(idx + part.length);
    }
    return s;
}