const [N, list] = require("fs").readFileSync("dev/stdin").toString().split("\n");

let n = +N; // 구매하려고 하는 카드의 개수
let cards = list.split(" ").map(Number); // 카드별 지불해야 하는 금액
let dp = new Array(1000).fill(0);

// 금액의 최대값
function solution(n, arr) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      dp[i] = Math.max(dp[i], dp[i - j] + arr[j - 1]);
    }
  }
  console.log(dp[n]);
}

solution(n, cards);
