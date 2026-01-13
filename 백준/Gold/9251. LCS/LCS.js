const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");
const S = input[0];
const T = input[1];

const n = S.length;
const m = T.length;

// dp[i][j] = S의 앞 i글자, T의 앞 j글자의 LCS 길이
const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= m; j++) {
    if (S[i - 1] === T[j - 1]) {
      // 마지막 문자가 같으면 LCS에 포함
      dp[i][j] = dp[i - 1][j - 1] + 1;
    } else {
      // 다르면 하나 버린 경우 중 최대
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
}

console.log(dp[n][m]);
