export function minSubArrayLen(target: number, nums: number[]): number {
  
    const n = nums.length;
    let slideLen = 1;

    while(slideLen<=n){
        for(let i=0; i<n; i++){
            let arr = nums.slice(i, i+slideLen)
            
            const sum = arr.reduce((acc, n) => acc + n, 0);
            if(sum===target) return slideLen;
        }
        slideLen++;
    }    
    return 0;
};