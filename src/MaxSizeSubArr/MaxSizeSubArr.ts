export function maxSizeSubArray(nums: number[], k: number): number[]{

    const n = nums.length;
    let maxSum = 0;
    let maxArr: number[] = [];
    let potentialMax = 0; 

    for(let i=0; i<k; i++){
        maxSum+= nums[i];
    }
    potentialMax = maxSum;

    for(let i=k; i<n; i++){
        potentialMax =  potentialMax + nums[i] - nums[i-k];
        
        if(potentialMax>maxSum){
            maxSum = potentialMax;
            
            maxArr = nums.slice(i-k+1, i+1)
        }
    }
    return maxArr.length===0?nums.slice(0,k):maxArr;
}