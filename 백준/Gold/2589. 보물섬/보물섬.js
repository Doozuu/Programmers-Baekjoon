const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");
const [N, M] = input[0].split(" ").map(Number);
const MAP = input.slice(1).map((r) => r.split(""));
const move = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];
let answer = -1;

function BFS(i, j) {
  const visited = Array.from({ length: N }, () => Array(M).fill(false));
  const queue = [];
  queue.push([i, j, 0]);
  visited[i][j] = true;

  while (queue.length) {
    const [x, y, d] = queue.shift();

    if (answer < d) answer = d;

    for (let [dx, dy] of move) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
      if (visited[nx][ny]) continue;
      if (MAP[nx][ny] === "W") continue;
      visited[nx][ny] = true;
      queue.push([nx, ny, d + 1]);
    }
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (MAP[i][j] === "L") {
      BFS(i, j);
    }
  }
}

console.log(answer);