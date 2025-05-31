export function maxProfit(prices: number[]): number {
    const n = prices.length;

    let profit = [];

    if(n===1){
        return 0;
    }

    for(let i=0; i<n; i++){
        let maxLocalProfit = 0;
        for(let j=i+1; j<n; j++){
            if(prices[j]>prices[i]){
                let localProfit = prices[j] - prices[i];
                if(localProfit>maxLocalProfit)
                maxLocalProfit = localProfit
                
            }
        }
        profit.push(maxLocalProfit)
    }

    profit.sort((a,b)=>b-a)
    return profit[0];
};