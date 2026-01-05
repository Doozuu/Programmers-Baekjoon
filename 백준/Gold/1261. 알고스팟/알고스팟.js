const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
const [M, N] = input.shift().split(' ').map(Number);
const board = input.map(i => i.split('').map(Number));
const dist = Array.from({ length: N }, () => Array(M).fill(Infinity));
const move = [[0,1], [0,-1], [-1,0], [1,0]];
const deque = [];
deque.push([0,0]);
dist[0][0] = 0;

while(deque.length){
  const [x,y] = deque.shift();

  for(let [dx, dy] of move){
    const nx = x+dx;
    const ny = y+dy;

    if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;

    const cost = dist[x][y] + board[nx][ny];

    if(cost < dist[nx][ny]){
      dist[nx][ny] = cost;

      if(board[nx][ny] === 0){
        deque.unshift([nx,ny])
      }else{
        deque.push([nx,ny])
      }
    }
  }
}

console.log(dist[N-1][M-1]);