export function removeElement(nums: number[], val: number): number[]{


    nums.sort((a, b)=>a-b);
    let firstOcc= 0;
    let occ =0;
    
    for(let i=0; i<nums.length; i++){
        if(nums[i] === val){
            firstOcc=i;
            break;
        }
    }

    for(let i=firstOcc; i<nums.length; i++){
        if(nums[i] === val){
            occ++;
        }
        else break;
    }
    nums.splice(firstOcc, occ);
    console.log(nums, occ)
    return nums;

   
}

/**
 *  var k: number = 0;
    const  n =nums.length;
    var valOcc: number =0.

    for(let i=0; i<n; i++){
        if(nums[i]===val){
            valOcc+=1;
            nums.splice(i,1);
            i--;
        }
    }

    k = n-valOcc;
    return k;
 */