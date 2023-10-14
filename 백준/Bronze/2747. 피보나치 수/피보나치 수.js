const input = require("fs").readFileSync("dev/stdin").toString();

const n = +input;
const dp = [];

dp[0] = 0;
dp[1] = 1;

function fib(n) {
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  console.log(dp[n]);
}

fib(n);
