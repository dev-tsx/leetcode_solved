function shuffle(nums: number[], n: number): number[] {
const result = [];

for(let i = 0; i < nums.length/2;i++){
    result.push(nums[i]);
    result.push(nums[i + n]);
}
return result;
};