const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const board = input.slice(1).map(line => line.split(' ').map(Number));
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
const directions = [
  [],
  [[0], [1], [2], [3]],
  [[0, 2], [1, 3]],
  [[0, 1], [1, 2], [2, 3], [3, 0]],
  [[0, 1, 2], [1, 2, 3], [2, 3, 0], [3, 0, 1]],
  [[0, 1, 2, 3]]
];

const cctvs = [];
let answer = Infinity;

// CCTV 위치 저장
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (board[i][j] >= 1 && board[i][j] <= 5) {
      cctvs.push([i, j, board[i][j]]);
    }
  }
}

// 맵 복사
function copyMap(map) {
  return map.map(row => [...row]);
}

// 감시
function watch(x, y, dir, map) {
  let nx = x;
  let ny = y;

  while (true) {
    nx += dx[dir];
    ny += dy[dir];

    if (nx < 0 || nx >= N || ny < 0 || ny >= M) break;
    if (map[nx][ny] === 6) break;

    if (map[nx][ny] === 0) {
      map[nx][ny] = -1;
    }
  }
}

function dfs(idx, map) {
  if (idx === cctvs.length) {
    let count = 0;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (map[i][j] === 0) count++;
      }
    }
    answer = Math.min(answer, count);
    return;
  }

  const [x, y, type] = cctvs[idx];

  for (const dirSet of directions[type]) {
    const copied = copyMap(map);

    for (const dir of dirSet) {
      watch(x, y, dir, copied);
    }

    dfs(idx + 1, copied);
  }
}

dfs(0, board);

console.log(answer);
