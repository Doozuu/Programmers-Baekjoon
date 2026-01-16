const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");
const [M, N] = input[0].split(" ").map(Number);
const board = input.slice(1).map((r) => r.split(" ").map(Number));
const move = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

function BFS(sx, sy) {
  const queue = [];
  const visited = Array.from({ length: M }, () => Array(N).fill(false));

  queue.push([sx, sy]);
  board[sx][sy] = 2;
  visited[sx][sy] = true;

  while (queue.length) {
    const [x, y] = queue.shift();

    for (let [dx, dy] of move) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx < 0 || nx >= M || ny < 0 || ny >= N) continue;
      if (visited[nx][ny]) continue;
      if (board[nx][ny] === 1) continue;

      visited[nx][ny] = true;
      board[nx][ny] = 2;
      queue.push([nx, ny]);
    }
  }
}

let lastCheese = 0;
let time = 0;

while (true) {
  // 치즈 개수 세기
  let currentCheese = 0;
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (board[i][j] === 1) currentCheese++;
    }
  }

  // 더 이상 치즈 없으면 종료
  if (currentCheese === 0) break;

  lastCheese = currentCheese;

  BFS(0, 0); // 바깥 공기 표시

  const toMelt = []; // 공기와 맞닿은 치즈들

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (board[i][j] === 1) {
        for (let [dx, dy] of move) {
          const nx = i + dx;
          const ny = j + dy;

          if (nx < 0 || nx >= M || ny < 0 || ny >= N) continue;
          if (board[nx][ny] === 2) {
            toMelt.push([i, j]);
            break;
          }
        }
      }
    }
  }

  // 공기와 맞닿은 치즈들 한 번에 제거
  for (const [x, y] of toMelt) {
    board[x][y] = 2;
  }

  time++;
}

console.log(time);
console.log(lastCheese);