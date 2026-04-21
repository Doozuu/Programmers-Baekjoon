const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");
const [N, K] = input[0].split(" ").map(Number);
const dp = Array(K + 1).fill(Infinity);
dp[0] = 0;

for (let i = 1; i <= N; i++) {
  const coin = +input[i];

  for (let j = coin; j <= K; j++) {
    dp[j] = Math.min(dp[j], dp[j - coin] + 1);
  }
}

console.log(dp[K] === Infinity ? -1 : dp[K]);