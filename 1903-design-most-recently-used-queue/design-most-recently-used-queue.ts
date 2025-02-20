class MRUQueue {
    q: number[];
    constructor(n: number) {
        this.q = Array.from({ length: n }, (_, i) => i + 1);
    }

    fetch(k: number): number {
        const index = k - 1;
        const el = this.q[index];

        for (let i = index; i < this.q.length - 1; i++) {
            this.q[i] = this.q[i + 1];
        }

        this.q[this.q.length - 1] = el;

        return el;
    }
}

/**
 * Your MRUQueue object will be instantiated and called as such:
 * var obj = new MRUQueue(n)
 * var param_1 = obj.fetch(k)
 */