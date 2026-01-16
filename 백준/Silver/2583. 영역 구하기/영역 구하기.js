const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");
const [M, N, K] = input[0].split(" ").map(Number);
const board = Array.from({ length: N }, () => Array(M).fill(0));
const move = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];
const visited = Array.from({ length: N }, () => Array(M).fill(false));
const answer = [];
let sum = 1;

for (let i = 1; i <= K; i++) {
  const [x1, y1, x2, y2] = input[i].split(" ").map(Number);
  const sx = x1 > x2 ? x2 : x1;
  const bx = x1 > x2 ? x1 : x2;
  const sy = y1 > y2 ? y2 : y1;
  const by = y1 > y2 ? y1 : y2;

  for (let i = sx; i < bx; i++) {
    for (let j = sy; j < by; j++) {
      board[i][j] = 1;
    }
  }
}

function DFS(x, y) {
  for (let [dx, dy] of move) {
    const nx = x + dx;
    const ny = y + dy;

    if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
    if (visited[nx][ny]) continue;
    if (board[nx][ny] === 1) continue;

    visited[nx][ny] = true;
    DFS(nx, ny, sum++);
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (!visited[i][j] && board[i][j] === 0) {
      visited[i][j] = true;
      DFS(i, j);
      answer.push(sum);
      sum = 1;
    }
  }
}

console.log(answer.length);
console.log(answer.sort((a, b) => a - b).join(" "));
