class Bucket<K, V> {
    items: [K, V][]
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
    data: Bucket<number, number>;
    constructor() {
        this.data = new Bucket();
    }

    put(key: number, value: number): void {
        this.data.update(key, value);
    }

    get(key: number): number {
        return this.data.get(key)
    }

    remove(key: number): void {
        this.data.remove(key)
    }
}
