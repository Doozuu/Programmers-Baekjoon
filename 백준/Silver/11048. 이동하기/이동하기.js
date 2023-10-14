const input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const [[N, M], ...room] = input.map((el) => el.split(" ").map(Number));
const dp = [...room];

function solution(n, m) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i === 0 && j === 0) continue;
      if (i === 0) {
        dp[i][j] += dp[i][j - 1];
      } else if (j === 0) {
        dp[i][j] += dp[i - 1][j];
      } else {
        dp[i][j] += Math.max(dp[i][j - 1], dp[i - 1][j - 1], dp[i - 1][j]);
      }
    }
  }
  console.log(dp[n - 1][m - 1]);
}

solution(N, M);
