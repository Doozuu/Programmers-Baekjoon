const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");
const [N, M] = input[0].split(" ").map(Number);
const board = input.slice(1);
const visited = Array.from({ length: N }, () => Array(M).fill(false));
const possible = Array.from({ length: N }, () => Array(M).fill(false));
let answer = 0;

function DFS(x, y, path) {
  visited[x][y] = true;
  path.push([x, y]);

  let [mx, my] = [x, y];

  if (board[x][y] === "D") {
    mx += 1;
  } else if (board[x][y] === "U") {
    mx -= 1;
  } else if (board[x][y] === "L") {
    my -= 1;
  } else if (board[x][y] === "R") {
    my += 1;
  }

  if (mx < 0 || my < 0 || mx >= N || my >= M || possible[mx][my]) {
    for (let i = 0; i < path.length; i++) {
      const [px, py] = path[i];
      possible[px][py] = true;
    }
    return;
  }
  if (visited[mx][my]) return;

  DFS(mx, my, path);
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (!visited[i][j]) DFS(i, j, []);
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (possible[i][j]) answer++;
  }
}

console.log(answer);