export function merge(nums1: number[], m: number, nums2: number[], n: number): number[] {
    
    for(let i=m; i<n+m; i++){
        nums1[i] = nums2[i-m];
    }

    nums1.sort((a,b) => a-b)
    
    return nums1;
};