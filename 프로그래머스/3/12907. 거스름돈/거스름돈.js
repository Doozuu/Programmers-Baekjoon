function solution(n, money) {
    const dp = Array(n+1).fill(0);
    dp[0] = 1;
    
    for(let coin of money){
        for(let price=coin;price<=n;price++){
            dp[price] += dp[price-coin];
            dp[price] %= 1000000007;
        }
    }
    
    return dp[n];
}