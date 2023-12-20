const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let T = Number(input.shift());
const testCase = [];
const dir = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];
const answer = [];

while (T > 0) {
  const [, , K] = input[0].split(" ").map(Number);
  testCase.push(input.splice(0, K + 1));
  T--;
}

testCase.forEach((test) => {
  const [M, N, K] = test.shift().split(" ").map(Number);
  const cabbage = test.map((el) => el.split(" ").map(Number));
  const board = Array.from({ length: M }, () => Array(N).fill(0));
  const visited = Array.from({ length: M }, () => Array(N).fill(false));
  let sum = 0;

  cabbage.forEach(([x, y]) => (board[x][y] = 1));

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (board[i][j] && !visited[i][j]) {
        sum += dfs(i, j, M, N, 0, board, visited) || 0;
      }
    }
  }
  answer.push(sum);
});

function dfs(x, y, w, h, count, board, visited) {
  if (
    x < 0 ||
    y < 0 ||
    x >= w ||
    y >= h ||
    board[x][y] === 0 ||
    visited[x][y]
  ) {
    return;
  }
  visited[x][y] = true;
  count++;

  for (const [dx, dy] of dir) {
    const newX = dx + x;
    const newY = dy + y;
    dfs(newX, newY, w, h, count, board, visited);
  }

  return count;
}

console.log(answer.join("\n"));
