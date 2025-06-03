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

/*
const n = numbers.length;
    let sum = 0;
    let i=0;
    let j=n-1;

    while(i<j){
        const sum= numbers[i]+ numbers[j];
        if(sum === target){
            return [i+1,j+1];
        }
        else if(sum<target){
            i++;
        }
        else j--;
    }
    
    return [];
*/