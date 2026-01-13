const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");
const N = +input[0];
const dp = [0];
dp[1] = 1;
dp[2] = 2;

for (let i = 3; i <= N; i++) {
  dp[i] = (dp[i - 2] + dp[i - 1]) % 10007;
}

console.log(dp[N]);
