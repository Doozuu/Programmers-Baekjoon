function solution(m, n, puddles) {
    const dp = Array.from({length: n}, () => Array(m).fill(-1));
    const MOD = 1000000007;
    
    dp[0][0] = 1;
    
    for(let [px,py] of puddles){
        dp[py-1][px-1] = 0;
    }

    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(i === 0 && j === 0) continue; // 초기 좌표 패스
            if(dp[i][j] === 0) continue; // 물이 잠긴 지역 패스
           
            const top = i > 0 ? dp[i-1][j] : 0;
            const left = j > 0 ? dp[i][j-1] : 0;
         
            dp[i][j] = (left + top) % MOD;    
        }
    }
   
    return dp[n-1][m-1]
}