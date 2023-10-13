const input = require("fs").readFileSync("dev/stdin").toString();

let n = +input;
let dp = [0, 1, 3];

for (let i = 3; i <= n; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2] * 2) % 10007;
}
console.log(dp[n]);