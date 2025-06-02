export function candy(ratings: number[]): number {
    
    
    const n = ratings.length;
    let minCand = Array(n).fill(1);
    let cand = 0;

    for(let i=1; i<n; i++){
        if(ratings[i]>ratings[i-1]){
            minCand[i] = minCand[i-1] + 1;
        }
    }

    for(let i=n-2; i>=0; i--){
        if(ratings[i]>ratings[i+1]){
            minCand[i] = Math.max(minCand[i], minCand[i + 1] + 1);
        }
    }

    console.log(minCand)
    for(let i=0; i<n; i++){
        cand+=minCand[i];
    }

    return cand
};