const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt").toString().trim().split('\n');
const [M, N, H] = input.shift().split(' ').map(Number);
const box = Array.from({length: H}, () => []);
const moves = [[0,0,1], [0,0,-1], [0,1,0], [0,-1,0], [1,0,0], [-1,0,0]];

function solution(){
  const queue = [];
  let head = 0;

  for(let i=0;i<H;i++){
    for(let j=0;j<N;j++){
      box[i][j] = input[i * N + j].split(' ').map(Number);
    }
  }

  for(let i = 0; i < H; i++){
    for (let j = 0; j < N; j++) {
      for (let k = 0; k < M; k++) {
        if (box[i][j][k] === 1) queue.push([i, j, k, 0]);
      }
    }
  }

  let maxDay = 0;

  while (head < queue.length) {
    const [x, y, z, d] = queue[head++];
    for (const [dx, dy, dz] of moves) {
      const nx = x + dx;
      const ny = y + dy;
      const nz = z + dz;
      if (nx >= 0 && ny >= 0 && nz >= 0 && nx < H && ny < N && nz < M && box[nx][ny][nz] === 0) {
        box[nx][ny][nz] = 1;           
        queue.push([nx, ny, nz, d + 1]);
        if (d + 1 > maxDay) maxDay = d + 1;
      }
    }
  }

  for(let i = 0; i < H; i++){
    for (let j = 0; j < N; j++) {
      for (let k = 0; k < M; k++) {
        if (box[i][j][k] === 0){
          console.log(-1);
          return;
        }
      }
    }
  }

  console.log(maxDay);
}

solution();