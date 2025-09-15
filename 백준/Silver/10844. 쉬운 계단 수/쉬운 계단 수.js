const num = parseInt(require('fs')
      .readFileSync('/dev/stdin', 'utf-8')
      .trim())

let dp = [[0,1,1,1,1,1,1,1,1,1]]
for(let i = 0;i<num-1;i++){
  dp.push(new Array(9).fill(0))
}
let ans = 0
const mod = 1000000000
for(let i = 1;i<num;i++){
  for(let j = 0;j<10;j++){
    if(j == 0){
      dp[i][j] = (dp[i-1][j+1])%mod
    } else if(j == 9){
      dp[i][j] = (dp[i-1][j-1])%mod
    }else {
      dp[i][j] = (dp[i-1][j-1] + dp[i-1][j+1])%mod
    }

  }
}

for(let i = 0;i<10;i++){
  ans = (ans + dp[num-1][i])%mod
}
console.log(ans%mod)