class Bucket<K, V> {
    items: [K, V][];

    constructor() {
        this.items = [];
    }

    getIndex(key: K) {
        return this.items.findIndex(([k]) => k === key);
    }

    get(key: K) {
        const idx = this.getIndex(key);
        return idx === -1 ? -1 : this.items[idx][1];
    }

    update(key: K, value: V) {
        const idx = this.getIndex(key);
        if (idx === -1) {
            this.items.push([key, value]);
        } else {
            this.items[idx][1] = value;
        }
    }

    remove(key: K) {
        const idx = this.getIndex(key);
        if (idx !== -1) {
            this.items.splice(idx, 1);
        }
    }
}

class MyHashMap {
    private buckets: Bucket<number, number>[];
    private size: number;

    constructor() {
        this.size = 1000;
        this.buckets = Array.from({ length: this.size }, () => new Bucket());
    }

    private hash(key: number): number {
        return key % this.size;
    }

    put(key: number, value: number): void {
        const index = this.hash(key);
        this.buckets[index].update(key, value);
    }

    get(key: number): number {
        const index = this.hash(key);
        return this.buckets[index].get(key);
    }

    remove(key: number): void {
        const index = this.hash(key);
        this.buckets[index].remove(key);
    }
}