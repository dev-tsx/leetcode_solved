
function reverseBits(n) {
    return parseInt([...n.toString(2).padStart(32,0)].reverse().join(''),2)
};