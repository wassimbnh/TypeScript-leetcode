export function isSubsequence(s: string, t: string): boolean {
    
    const sn = s.length;
    const tn = t.length;
    
    if(sn>tn) return false;

    const sarr = s.split("");
    const tarr = t.split("");

    
    if( sarr === tarr) return true;

    sarr.sort();
    tarr.sort();

    console.log(tarr.slice(0,sn), sarr)
    for(let i=0; i<sn; i++){
        if(tarr[i] != sarr[i]){
            return false;
        } 
    }

    return true;
};