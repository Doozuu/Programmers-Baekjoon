const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");
const N = 12;
const M = 6;
const board = input.map((i) => i.split(""));
let answer = 0;
const move = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

function connected(x, y, visited) {
  const queue = [[x, y]];
  const candidate = [[x, y]];
  visited[x][y] = true;

  while (queue.length) {
    const [cx, cy] = queue.shift();

    for (let [mx, my] of move) {
      const nx = cx + mx;
      const ny = cy + my;

      if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
      if (board[nx][ny] === ".") continue;
      if (visited[nx][ny]) continue;
      if (board[cx][cy] === board[nx][ny]) {
        visited[nx][ny] = true;
        queue.push([nx, ny]);
        candidate.push([nx, ny]);
      }
    }
  }

  if (candidate.length >= 4) return candidate;

  return [];
}

function deleteAll(list) {
  for (let i = 0; i < list.length; i++) {
    const [x, y] = list[i];
    board[x][y] = ".";
  }
}

function drop() {
  for (let i = 0; i < M; i++) {
    for (let j = N - 1; j > 0; j--) {
      if (board[j][i] === ".") {
        let idx = 0;
        while (board[j][i] === "." && j - idx > 0) {
          board[j][i] = board[j - ++idx][i];
          board[j - idx][i] = ".";
        }
      }
    }
  }
}

while (true) {
  const visited = Array.from({ length: N }, () => Array(M).fill(false));
  let popList = []; // 삭제 될 리스트

  // 연결된 좌표 저장
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] !== "." && !visited[i][j]) {
        const popCandidate = connected(i, j, visited);
        if (popCandidate.length > 0) {
          popList = [...popList, ...popCandidate];
        }
      }
    }
  }

  // 더이상 삭제할 거 없으면 종료
  if (popList.length === 0) break;

  // 연결된 좌표 삭제
  deleteAll(popList);

  // 빈 곳 떨어지기
  drop();

  // 연쇄 횟수 증가
  answer++;
}

console.log(answer);