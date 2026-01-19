const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");
const [N, M] = input[0].split(" ").map(Number);
const MAP = input.slice(1).map((r) => r.split(" ").map(Number));
const move = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];
let answer = 0;

// 초기 빙산 위치
let iceList = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (MAP[i][j] > 0) iceList.push([i, j]);
  }
}

function BFS(i, j, visited) {
  const queue = [];
  let idx = 0;
  queue.push([i, j]);
  visited[i][j] = true;

  while (idx < queue.length) {
    const [x, y] = queue[idx++];

    for (let [dx, dy] of move) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
      if (MAP[nx][ny] === 0) continue;
      if (visited[nx][ny]) continue;

      visited[nx][ny] = true;
      queue.push([nx, ny]);
    }
  }
}

while (true) {
  const meltInfo = [];

  // 녹는 양 계산
  for (const [x, y] of iceList) {
    let sea = 0;
    for (const [dx, dy] of move) {
      const nx = x + dx;
      const ny = y + dy;
      if (MAP[nx][ny] === 0) sea++;
    }
    meltInfo.push([x, y, sea]);
  }

  // 빙산 녹이기 (높이가 0보다 작아지지 않도록 설정)
  for (let [x, y, c] of meltInfo) {
    const height = MAP[x][y] - c;
    MAP[x][y] = height < 0 ? 0 : height;
  }

  // 시간 증가
  answer++;

  // 모두 녹은 것 제거
  iceList = iceList.filter(([x, y]) => MAP[x][y] > 0);

  if (iceList.length === 0) break;

  const visited = Array.from({ length: N }, () => Array(M).fill(false));
  let cnt = 0;

  // 빙산 덩어리 개수 세기
  for (const [x, y] of iceList) {
    if (!visited[x][y]) {
      BFS(x, y, visited);
      cnt++;
      if (cnt >= 2) {
        console.log(answer);
        return;
      }
    }
  }
}

console.log(0);