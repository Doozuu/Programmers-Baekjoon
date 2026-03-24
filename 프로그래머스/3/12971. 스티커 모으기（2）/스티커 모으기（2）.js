function solution(sticker) {
    if(sticker.length === 1) return sticker[0];
    
    function solve(arr){
        const dp = Array(arr.length).fill(0);
    
        dp[0] = arr[0];
        dp[1] = Math.max(arr[0], arr[1]);
        
        for(let i=2;i<arr.length;i++){
            dp[i] = dp[i-1] > dp[i-2] + arr[i] ? dp[i-1] : dp[i-2] + arr[i];
        }
        
        return dp[arr.length-1]
    }
    
    const sum1 = solve(sticker.slice(1))
    const sum2 = solve(sticker.slice(0, sticker.length-1))   
    
    return sum1 > sum2 ? sum1 : sum2;
}