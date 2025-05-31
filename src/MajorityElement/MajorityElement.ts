export function majorityElement(nums: number[]): number {

    let majEl = nums[0];
    let occMaj = 0;
    nums.sort();

   for(let i=0; i<nums.length; i++){
        for(let j=i; j<nums.length; j++){
            if(nums[j] === majEl){
                occMaj+=1;
                console.log(majEl, occMaj)
                if( occMaj > Math.floor(nums.length/2)){
                    console.log(occMaj, Math.floor(nums.length/2))
                    return majEl;
                }
            }
            if(occMaj < Math.floor(nums.length/2)){
            majEl = nums[i];
            occMaj = 0; 
        }
        }
        
    }

    return majEl;
    
}