export function isSubsequence(s: string, t: string): boolean {
    
    let i = 0;
    let j = 0;
    const ns = s.length;
    const nt = t.length;

    while(i<ns && j<nt){
        if(s[i] != t[j]){
            j++;
        }
        else if( s[i] === t[j] ) {
            i++;
            j=0
        }
        
    }
    console.log(i, ns)
    return i === ns;

};

/*
const sarr = s.split("");
    const tarr = t.split("");

    let i = 0, j = 0;

    while (i < sarr.length && j < tarr.length) {
        if (sarr[i] === tarr[j]) {
            i++;
        }
        j++;
    }

    return i === sarr.length;

*******************************************************************

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
*/