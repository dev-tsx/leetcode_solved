function minimumRecolors(blocks: string, k: number): number {
    const subBlocks = [];
    for (let i = 0; i < blocks.length - k + 1; i++) {
        subBlocks.push(blocks.slice(i, i + k));
    }
    const maxBlack = Math.max(...subBlocks.map(sub => sub.replaceAll('W', "").length));

    return Math.max(0, k - maxBlack)
};