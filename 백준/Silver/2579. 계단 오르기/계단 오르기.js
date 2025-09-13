const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt").toString().trim().split('\n');
const N = +input[0];
const stairs = input.map(Number);

function solution(){
  const dp = Array.from(new Array(N + 1));
  dp[1] = stairs[1];
  dp[2] = dp[1] + stairs[2];
  dp[3] = Math.max(stairs[1], stairs[2]) + stairs[3];
  for (let i = 4; i <= N; i++) {
    dp[i] = Math.max(
      dp[i - 3] + stairs[i - 1] + stairs[i],
      dp[i - 2] + stairs[i]
    );
  }
  console.log(dp[N]);
}

solution();