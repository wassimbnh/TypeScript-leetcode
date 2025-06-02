export function pivotIndex(nums: number[]): number{

    let leftSum = 0;
    const sum = nums.reduce((acc, n) => acc + n, 0);
    
    for(let i=0; i< nums.length; i++){
        const rightSum = sum - leftSum - nums[i];
        if(leftSum === rightSum) return i;
        leftSum+=nums[i]
    }

    return -1;
}

 /***VERSION ONE - O(2) -***** */
/**export function pivotIndex(nums: number[]): number{

    if(nums.length===1) return 0;

    let pivotIndex = 0;
    
    while(pivotIndex<nums.length){
        let rightSum = 0;
        let leftSum = 0;
        for(let i=0; i<pivotIndex; i++){
            leftSum+=nums[i];
        }

        for(let j=nums.length-1; j>pivotIndex; j--){
            rightSum+=nums[j];
        }

        if(Math.abs(rightSum) === Math.abs(leftSum)){
            return pivotIndex
        }

        pivotIndex++;
    }



    return -1;
} */

/*edge cases:
-Pivot at end: Input: [-1, 1, 0]
               Output: 2
-Pivot at the start: Input: [0, -1, 1]
                     Output: 0
-only one element: Input: [5]
                   Output: 0
NO pivot: Input: [1, 2, 3]
          Output: -1
-All zeors: Input: [0, 0, 0, 0]
            Output: 0
-Multi pivots: Input: [2, 0, 2]
               Output: 1
-Negative numbers: Input: [-2, 5, 0, -5, 2]
                   Output: 2
- Large input: Input: [1_000_000, 0, 1_000_000]
               Output: 1
*/
