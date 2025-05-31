export function removeElement(nums: number[], val: number): number{

    var k: number = 0;
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
}
