class MovingAverage {
    constructor(size) {
        this.sum = 0;
        this.size = size;
        this.data = [];
    }

    next(val) {
        if (this.data.length >= this.size) {
            this.sum -= this.data.shift();
        }

        this.data.push(val);
        this.sum += val;

        let divider = Math.min(this.size, this.data.length);
        return this.sum / divider;
    }
}

