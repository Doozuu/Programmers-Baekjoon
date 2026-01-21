const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");
const [R, C] = input[0].split(" ").map(Number);
const board = input.slice(1).map((r) => r.split(""));
const move = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];
const fireTime = Array.from({ length: R }, () => Array(C).fill(Infinity));
const visited = Array.from({ length: R }, () => Array(C).fill(false));

let jq = [];
let fq = [];

// 초기 위치 수집
for (let i = 0; i < R; i++) {
  for (let j = 0; j < C; j++) {
    if (board[i][j] === "J") {
      jq.push([i, j, 0]);
      visited[i][j] = true;
    }
    if (board[i][j] === "F") {
      fq.push([i, j, 0]);
      fireTime[i][j] = 0;
    }
  }
}

/// 🔥 불 BFS (한 번만)
while (fq.length) {
  const [x, y, t] = fq.shift();

  for (const [dx, dy] of move) {
    const nx = x + dx;
    const ny = y + dy;

    if (nx < 0 || nx >= R || ny < 0 || ny >= C) continue;
    if (board[nx][ny] === "#") continue;
    if (fireTime[nx][ny] <= t + 1) continue;

    fireTime[nx][ny] = t + 1;
    fq.push([nx, ny, t + 1]);
  }
}

/// 🧑 지훈 BFS
while (jq.length) {
  const [x, y, t] = jq.shift();

  // 가장자리면 탈출
  if (x === 0 || x === R - 1 || y === 0 || y === C - 1) {
    console.log(t + 1);
    return;
  }

  for (const [dx, dy] of move) {
    const nx = x + dx;
    const ny = y + dy;

    if (nx < 0 || nx >= R || ny < 0 || ny >= C) continue;
    if (visited[nx][ny]) continue;
    if (board[nx][ny] === "#") continue;

    // 불보다 먼저 도착해야 함
    if (t + 1 >= fireTime[nx][ny]) continue;

    visited[nx][ny] = true;
    jq.push([nx, ny, t + 1]);
  }
}

console.log("IMPOSSIBLE");