const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let [T, ...arr] = input;
let dp = [0, 1, 2, 4]; // 메모이제이션

function solution(n, data) {
  for (let i = 4; i < 11; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }
  for (let i = 0; i < n; i++) {
    console.log(dp[data[i]]);
  }
}

solution(T, arr);