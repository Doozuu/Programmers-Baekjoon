const fs = require("fs");
const { join } = require("path");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");
const [N, M] = input[0].split(" ").map(Number);
const board = input.slice(1).map((r) => r.split(" ").map(Number));
const move = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];
let time = 0;
let cheese = [];

// 치즈 좌표 찾기
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (board[i][j] === 1) {
      cheese.push([i, j]);
    }
  }
}

function BFS(i, j, visited) {
  const queue = [[i, j]];
  visited[i][j] = true;

  while (queue.length) {
    const [x, y] = queue.shift();

    for (let [dx, dy] of move) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
      if (board[nx][ny] === 1) continue;
      if (visited[nx][ny]) continue;
      visited[nx][ny] = true;
      queue.push([nx, ny]);
    }
  }
}

while (true) {
  const visited = Array.from({ length: N }, () => Array(M).fill(false));

  // 치즈 다 녹으면 끝
  if (cheese.length === 0) break;

  // 외부 표시
  BFS(0, 0, visited);

  // 외부와 두 면 이상 맞닿은 좌표 저장
  const melt = [];

  for (let [x, y] of cheese) {
    let cnt = 0;

    for (let [dx, dy] of move) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
      if (visited[nx][ny]) cnt++;
    }

    if (cnt > 1) melt.push([x, y]);
  }

  // 맞닿은 부분 제거
  for (let [x, y] of melt) {
    board[x][y] = 0;
  }

  cheese = cheese.filter(([x, y]) => board[x][y]);

  // 시간 증가
  time++;
}

console.log(time);