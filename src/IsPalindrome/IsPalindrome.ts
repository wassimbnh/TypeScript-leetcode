export function isPalindrome(s: string): boolean {
    
    let str = s.replace(/[^a-z0-9]/gmi, "").toLowerCase();
    const sArr = str.split('');
    
    let n= sArr.length;
    let rightArr: string[] = [];
    let leftArr: string[] = [];

    if(n ===2 && sArr[0] === sArr[1]) return true;
    
    leftArr = sArr.slice(0,n/2);
    if(n%2 ===0){
        rightArr = sArr.slice((n/2), n).reverse();
    }
    else if(n%2 >0){
        rightArr = sArr.slice((n/2)+1, n).reverse();
    }

    console.log(rightArr)
    for(let i=0; i<n/2; i++){
        if(leftArr[i] != rightArr[i]){
            return false
        }
    }
    return true;
};