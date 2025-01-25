function intersection(nums1: number[], nums2: number[]): number[] {
    const result = [];
    const set1 = new Set(nums1);

    for(const n of nums2){
        if(set1.has(n)) {
            result.push(n);
            set1.delete(n);
        }
    }
    return result
};