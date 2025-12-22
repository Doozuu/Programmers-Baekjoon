const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
const [N, L, R] = input.shift().split(' ').map(Number);
const board = input.map(i => i.split(' ').map(Number));
const move = [[0,1], [0,-1], [1,0], [-1,0]];
let answer = 0;
let sum = 0;
let cnt = 1;

function DFS(x,y,visited,connected){
  connected.push([x,y]);
  visited[x][y] = true;

  for(let [mx,my] of move){
    const nx = x+mx;
    const ny = y+my;

    if(nx < 0 || nx >= N || ny < 0 || ny >= N) continue;
    if(visited[nx][ny]) continue;
    if(Math.abs(board[nx][ny] - board[x][y]) < L || Math.abs(board[nx][ny] - board[x][y]) > R) continue;
    sum += board[nx][ny]
    cnt++

    DFS(nx,ny,visited,connected);
  }
}

while(true){
  const visited = Array.from({length: N}, () => Array(N).fill(false));
  let connected = [];
  let isContinue = false;

  for(let i=0;i<N;i++){
    for(let j=0;j<N;j++){
      if(!visited[i][j]){
        DFS(i,j,visited,connected);
      
        if(connected.length > 1){
          const avg = Math.floor((sum+board[i][j]) / cnt);
          connected.forEach(([x,y]) => board[x][y] = avg);
          isContinue = true;
        }
        sum = 0;
        cnt = 1;
        connected = [];
      }
    }
  }

  if(!isContinue) break;

  answer++;
}

console.log(answer);