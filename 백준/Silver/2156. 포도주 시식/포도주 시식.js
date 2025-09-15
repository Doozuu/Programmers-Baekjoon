const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt").toString().trim().split('\n');
const N = +input.shift();
const score = input.map(Number);

function solution(){
  const dp = [];
  dp[0] = score[0];
  dp[1] = score[0] + score[1];
  dp[2] = Math.max(dp[1], score[0] + score[2], score[1] + score[2]);

  for(let i=3;i<N;i++){
    const val1 = dp[i-2] + score[i];
    const val2 = dp[i-3] + score[i-1] + score[i];
    const val3 = dp[i-1];
    dp[i] = Math.max(val1, val2, val3);
  }

  console.log(dp[N-1]);
}

solution();