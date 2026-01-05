const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
const [N,M] = input[0].split(' ').map(Number);
const [X1,Y1,X2,Y2] = input[1].split(' ').map(Number);
const move = [[0,1], [0,-1], [-1,0], [1,0]];
const dist = Array.from({length: N}, () => Array(M).fill(Infinity));
const board = [];

for(let i=2;i<2+N;i++){
  const row = [];
  for(let j=0;j<M;j++){
    if(input[i][j] === "#" || input[i][j] === "1"){
      row.push(1)
    }else{
      row.push(0)
    }
  }
  board.push(row)
}

const deque = [];
deque.push([X1-1,Y1-1]);
dist[X1-1][Y1-1] = 0;

while(deque.length){
  const [x,y] = deque.shift();

  for(let [dx,dy] of move){
    const nx = x+dx;
    const ny = y+dy;

    if(nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
   
    const cost = dist[x][y] + board[nx][ny];

    if(cost < dist[nx][ny]){
      dist[nx][ny] = cost

      if(board[nx][ny] === 0){
        deque.unshift([nx,ny])
      }else{
        deque.push([nx,ny])
      }
    }
  }
}

console.log(dist[X2-1][Y2-1])