const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(Number);
const board = input.map(i => i.split(' ').map(Number));
const move = [[0,1], [0,-1], [1,0], [-1,0]];
const visited = Array.from({length: N}, () => Array(M).fill(false));
let cnt = 0;
let maxWidth = 0;
let tempWidth = 1;

function DFS(x,y){
  visited[x][y] = true;

  for(let [mx,my] of move){
    const nx = x+mx;
    const ny = y+my;

    if(nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
    if(board[nx][ny] === 0) continue;
    if(visited[nx][ny]) continue;

    tempWidth++
    DFS(nx,ny);
  }
}

for(let i=0;i<N;i++){
  for(let j=0;j<M;j++){
    if(board[i][j] === 1 && !visited[i][j]){
      DFS(i,j)
      if(maxWidth < tempWidth) maxWidth = tempWidth;
      cnt++
      tempWidth = 1;
    }
  }
}

console.log(cnt)
console.log(maxWidth)