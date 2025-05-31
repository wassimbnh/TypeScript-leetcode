export function canJump(nums: number[]): boolean {
    
    let currentindx = 0;
    const n = nums.length;

    while(currentindx<n){
        currentindx += nums[currentindx];
        if(currentindx>n){
            return true;
        }
    }

    return false;
};