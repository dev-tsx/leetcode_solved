function zeroFilledSubarray(nums: number[]): number {
 let ans = 0;
  let run = 0;
  for (const x of nums) {
    if (x === 0) {
      run += 1;
      ans += run;
    } else {
      run = 0;
    }
  }
  return ans;
};