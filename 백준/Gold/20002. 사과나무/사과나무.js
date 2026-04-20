const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");
const N = +input[0];
const prefix = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));
let answer = -Infinity;

// 누적합 구하기
for (let i = 1; i <= N; i++) {
  const row = input[i].split(" ").map(Number);
  for (let j = 1; j <= N; j++) {
    prefix[i][j] =
      prefix[i - 1][j] + prefix[i][j - 1] - prefix[i - 1][j - 1] + row[j - 1];
  }
}

for (let k = 1; k <= N; k++) {
  for (let r = 1; r <= N - k + 1; r++) {
    for (let c = 1; c <= N - k + 1; c++) {
      let sum =
        prefix[r + k - 1][c + k - 1] -
        prefix[r + k - 1][c - 1] -
        prefix[r - 1][c + k - 1] +
        prefix[r - 1][c - 1];
      if (sum > answer) answer = sum;
    }
  }
}

console.log(answer);