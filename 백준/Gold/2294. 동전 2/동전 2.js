const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");
const [N, K] = input[0].split(" ").map(Number);
const coins = input.slice(1).map(Number);
const dp = Array(K + 1).fill(Infinity);

dp[0] = 0;

for (let i = 1; i <= K; i++) {
  for (let j = 0; j < N; j++) {
    if (i >= coins[j]) {
      dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
    }
  }
}

console.log(dp[K] === Infinity ? -1 : dp[K]);
