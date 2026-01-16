const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");
const [R, C] = input[0].split(" ").map(Number);
const MAP = input.slice(1).map((r) => r.split(""));
const move = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];
let time = 0;
let sx = 0;
let sy = 0;

// 고슴도치 위치
for (let i = 0; i < R; i++) {
  for (let j = 0; j < C; j++) {
    if (MAP[i][j] === "S") {
      sx = i;
      sy = j;
      break;
    }
  }
}

let queue = [];
let isFinish = false;
const visited = Array.from({ length: R }, () => Array(C).fill(false));

queue.push([sx, sy, 0]);
MAP[sx][sy] = ".";
visited[sx][sy] = true;

while (queue.length && !isFinish) {
  const water = [];

  // 물 확장 위치 담아두기
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (MAP[i][j] === "*") {
        for (let [dx, dy] of move) {
          const nx = i + dx;
          const ny = j + dy;

          if (nx < 0 || nx >= R || ny < 0 || ny >= C) continue;
          if (MAP[nx][ny] === ".") water.push([nx, ny]);
        }
      }
    }
  }

  // 물 확장
  for (let [wx, wy] of water) {
    MAP[wx][wy] = "*";
  }

  const temp_queue = [];

  while (queue.length) {
    // 고슴도치 위치
    const [x, y, t] = queue.shift();

    // 고슴도치 이동
    for (let [dx, dy] of move) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx < 0 || nx >= R || ny < 0 || ny >= C) continue;
      if (visited[nx][ny]) continue;
      if (MAP[nx][ny] === "X" || MAP[nx][ny] === "*") continue;

      // 비버 굴 도착한 경우 종료
      if (MAP[nx][ny] === "D") {
        time = t + 1;
        isFinish = true;
        break;
      }

      visited[nx][ny] = true;
      temp_queue.push([nx, ny, t + 1]);
    }
  }

  queue = [...temp_queue];
}

console.log(time > 0 ? time : "KAKTUS");
