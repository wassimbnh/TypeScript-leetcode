import { merge } from "./Merge"

describe("merge", ()=>{

    //test two arrays with more than one element
    test("should return merge the two arrays", ()=>{
        const nums1 = [1,2,3,0,0,0];
        const m = 3;
        const nums2 = [2,5,6];
        const n = 3;    
        merge(nums1, m, nums2,n);

        expect(nums1).toEqual([1,2,2,3,5,6]);
        expect(nums1.length).toBe(n+m);
        
    });

    //two empty arrays
    test("should have an empty array", ()=>{
        const nums1: number[] = [];
        const m = 0;
        const nums2: number[] = [];
        const n = 0;    
        merge(nums1, m, nums2,n);

        expect(nums1).toEqual([])
    })

    //one array has one element and the other is empty
    test("should have an array with one element", ()=>{
        const nums1: number[] = [1];
        const m = 1;
        const nums2: number[] = [];
        const n = 0;    
        merge(nums1, m, nums2,n);

        expect(nums1).toEqual([1])
    })

})