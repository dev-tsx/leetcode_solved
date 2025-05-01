function distinctAverages(nums: number[]): number {
    nums.sort((a,b) => a - b);
    let distinct = new Set();

    while(nums.length){
        distinct.add((nums.pop() + nums.shift())/2);
    }    
    return distinct.size
};