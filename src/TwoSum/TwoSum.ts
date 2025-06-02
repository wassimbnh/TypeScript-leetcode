function twoSum(numbers: number[], target: number): number[] {
    
    const n = numbers.length;

    for(let i=1; i<=n; i++){
        for(let j=i+1; j<=n; j++){
            if(numbers[i]+numbers[j] === target){
                return [i,j];
            }
        }
    }

    return []
};