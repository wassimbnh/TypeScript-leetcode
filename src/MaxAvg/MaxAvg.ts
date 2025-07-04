export function maxAverageSubarray(nums: number[], k: number){

    let sum = 0;

    for(let i=0; i<k; i++){
        sum+=nums[i];
    }

    let maxSum = sum;

    for(let i=k; i<nums.length; i++){
        sum+= nums[i] - nums[i-k];
        maxSum = Math.max(sum, maxSum)
    }

    return maxSum/k;
}