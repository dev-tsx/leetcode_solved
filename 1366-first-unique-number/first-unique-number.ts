const NIL_VALUE = -1;

class FirstUnique {
    dupes: Set<number>;
    uniqs: Set<number>;

    constructor(nums: number[]) {
        this.dupes = new Set();
        this.uniqs = new Set();
        for (const num of nums) {
            this.add(num);
        }
    }

    showFirstUnique(): number {
        return (this.uniqs.size > 0) ? 
            this.uniqs.values().next().value : 
            NIL_VALUE;
    }

    add(value: number): void {
        if (!this.dupes.has(value)) {
            if (this.uniqs.has(value)) {
                this.uniqs.delete(value);
                this.dupes.add(value);
            } else {
                this.uniqs.add(value);
            }
        }
    }
}