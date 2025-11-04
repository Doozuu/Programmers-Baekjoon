const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt").toString().trim().split('\n');
const [M, N] = input.shift().split(' ').map(Number);
const box = input.map(b => b.split(' ').map(Number));
const moves = [[1,0], [-1,0], [0,1], [0,-1]];

function solution(){
  const queue = [];
  let head = 0;
  
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (box[i][j] === 1) queue.push([i, j, 0]);
    }
  }

  let maxDay = 0;

  while (head < queue.length) {
    const [x, y, d] = queue[head++];
    for (const [dx, dy] of moves) {
      const nx = x + dx;
      const ny = y + dy;
      if (nx >= 0 && ny >= 0 && nx < N && ny < M && box[nx][ny] === 0) {
        box[nx][ny] = 1;           
        queue.push([nx, ny, d + 1]);
        if (d + 1 > maxDay) maxDay = d + 1;
      }
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (box[i][j] === 0) {
        console.log(-1);
        return;
      }
    }
  }

  console.log(maxDay);
}

solution();