const canBeTypedWords =
    (text: string, b: string, l = new Set(b)): number =>
        text.split(' ').reduce((c, w) => ![...w].some(i => l.has(i)) ? ++c : c, 0)