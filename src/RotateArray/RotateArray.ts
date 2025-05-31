export function rotate(nums: number[], k: number): void {
    
    const n = nums.length;
    const mod = k%n;

    
        let subRot = nums.slice(n-mod,n);
        nums.splice(n- mod,mod);
        nums.splice(0, 0, ...subRot);
    

};