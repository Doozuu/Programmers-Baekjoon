const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
const [M, N] = input.shift().split(' ').map(Number);
const board = input.map(i => i.split(' ').map(Number));
const move = [[0,1], [0,-1], [1,0], [-1,0]];
const dp = Array.from({length: M}, () => Array(N).fill(-1));

function DFS(x,y){
  if(x === M-1 && y === N-1) return 1;
  if(dp[x][y] !== -1) return dp[x][y];

  dp[x][y] = 0;

  for(let [mx,my] of move){
    const nx = x+mx;
    const ny = y+my;

    if(nx < 0 || nx >= M || ny < 0 || ny >= N) continue;
    if(board[nx][ny] >= board[x][y]) continue;
   
    dp[x][y] += DFS(nx,ny);
  }

  return dp[x][y]
}

console.log(DFS(0,0));