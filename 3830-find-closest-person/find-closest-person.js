const findClosest = (x, y, z) => {
    const d1 = Math.abs(z - x);
    const d2 = Math.abs(z - y);

    return d1 == d2 ? 0 : d1 < d2 ? 1 : 2;
};