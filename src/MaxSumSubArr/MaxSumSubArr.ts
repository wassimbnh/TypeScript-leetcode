export function maxSumSubArray(nums: number[], k: number): number{

    const n= nums.length;

    if(n===0 || k>n) return 0;
    
    let maxSum = 0;
    let sum = 0;

    for(let i=0; i<k; i++){
        sum+= nums[i];
    }

    for(let i=k; i<n; i++){

        sum = sum - nums[i-k] + nums[i];
        maxSum = Math.max(maxSum, sum);

    }

    return maxSum;
   
}

/**
 * edge cases:
 * empty array -> return 0
 * one element array with k bigger than it's length -> return 0
 * smallest valid array
 * valid array equal to length of nums
 * nums iclude negative numbers
 * all array elements ara the same 
 */

/**
 *****************VERSION 1************
 * const n= nums.length;
    let sum = Number.NEGATIVE_INFINITY;

    for(let i=0; i<=n-k; i++){
        
        let subArr = nums.slice(i, i+k);
        let subArrSum = 0;
        
        for(let j=0; j< k; j++){
            subArrSum += subArr[j]
        };

        sum = Math.max(sum, subArrSum)

    }
    return sum;
 */