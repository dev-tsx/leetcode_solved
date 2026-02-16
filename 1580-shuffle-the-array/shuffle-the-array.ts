function shuffle(nums: number[], n: number): number[] {
const result:number[] = Array.from({length:n * 2}).map(j => 0);
let i = 0;
let j = 0;
while(nums[i + n] !== undefined){
    result[j] = nums[i];
    result[j + 1] = nums[i + n];
    i++;
    j = j + 2;
}
return result;
};