export function lengthOfLastWord(s: string): number {
    
    const n = s.length;
    let count = 0;

    for(let i=n-1; i>=0; i--){
        if(s[i] !=" "){
            count++
        }
        if(count>0 && s[i] === " "){
            break;
        }
    }

    return count;
};