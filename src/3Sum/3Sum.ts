export function threeSum(nums: number[]): number[][] {
    
    const n = nums.length;
    let tripl=[];
    let nullTripl = [];
    let finaleNullTrpl = [];

    for(let i=0; i<n; i++){
        for(let j=i; j<n; j++){
            for(let k=0; k<n; k++){
                if(i!=j && i!=k && k != j){
                    tripl.push([nums[i], nums[j], nums[k]]);
                }
            }
        }
    }

    for(let i=0; i<tripl.length; i++){
        let sum=0;
        for(let j=0; j<3; j++){
            sum+=tripl[i][j];
        }   
        if(sum===0){
            nullTripl.push(tripl[i].sort());
        }
    }

    for(let i=0; i<tripl.length; i+=Math.floor(tripl.length/3)){
        finaleNullTrpl.push(nullTripl[i]);
    }

    return finaleNullTrpl;
};