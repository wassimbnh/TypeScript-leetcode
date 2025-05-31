import { removeElement } from "./RemoveElement";

describe('removeElement', () => {
  
    test('should remove all occurrences of target value', () => {
        const nums = [3, 2, 2, 3];
        const result = removeElement(nums, 3);
        
        expect(result).toBe(2);
        expect(nums.slice(0, result)).toEqual(expect.arrayContaining([2, 2]));
        expect(nums).toEqual([2,2])
        expect(nums.slice(0, result)).not.toContain(3);
    });

})
