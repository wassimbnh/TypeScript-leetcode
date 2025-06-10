

export function solution(A: number[]): number {
    
    const N = A.length
    A.sort((a, b) => a - b);

    if(A[N-1] <=-1 || N===0) return 1;
    if(N===1) return A[0]+1;

    for(let i=0; i<=N-2; i++){
        let diff= A[i+1] - A[i];
        if(diff>1){
            
        }
    }
    return A[N-1]+1;
}
