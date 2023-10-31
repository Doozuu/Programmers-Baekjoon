let N = require('fs').readFileSync('dev/stdin').toString();
N = +N;

if (N % 2) return console.log(0); // 홀수면 불가능

const dp = new Array(N + 1).fill(0);
dp[0] = 1;
dp[2] = 3;

for (let i = 4; i <= +N; i += 2) {
  dp[i] = dp[i - 2] * 3;

  for (let j = 4; j <= i; j += 2) {
    dp[i] += dp[i - j] * 2; // 예외 케이스
  }
}

console.log(dp[N]);
