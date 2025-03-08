/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {

    const subblocks = [];
    for (let i = 0; i < blocks.length - k + 1; i++) {
        subblocks.push(blocks.slice(i, i + k));
    }
    const blackCount = subblocks.map(item => item.replaceAll('W', "").length);
    return Math.max(0, k - Math.max(...blackCount))
};