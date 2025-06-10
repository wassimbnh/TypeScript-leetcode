export function removeElement(nums: number[], val: number): number[]{


    const n = nums.length;
    let k = 0;

    for(let i=0; i<n; i++){
        if(nums[i] != val){
            nums[k] = nums[i];
            k++;
        }
    }
    
    nums.splice(k);
    return nums;
}

/**
 * VERSION 1 
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

/**
 * VERSION 2 
 * 
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
 */