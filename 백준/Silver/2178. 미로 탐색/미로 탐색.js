const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt").toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(Number);
const graph = input.map(n => n.split('').map(Number));
const visited = Array.from({ length: N }, () => Array(M).fill(false));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

function BFS() {
  const queue = [[0, 0, 1]]; // [x, y, distance]
  visited[0][0] = true;

  while (queue.length) {
    const [x, y, dist] = queue.shift();

    if (x === N - 1 && y === M - 1) {
      console.log(dist);
      return;
    }

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && ny >= 0 && nx < N && ny < M && graph[nx][ny] === 1 && !visited[nx][ny]) {
        visited[nx][ny] = true;
        queue.push([nx, ny, dist + 1]);
      }
    }
  }
}

BFS();