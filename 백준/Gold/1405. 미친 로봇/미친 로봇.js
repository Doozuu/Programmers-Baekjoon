const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
const [n, E, W, S, N] = input[0].split(' ').map(Number);
const visited = Array.from({length: n*2+1}, () => Array(n*2+1).fill(false));
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
const percent = [N,E,S,W].map(p => p / 100);
let answer = 0;
visited[n][n] = true;

function dfs(x, y, depth, p) {
  if(depth === n){
    answer += p;
    return;
  }

  for(let i=0;i<4;i++){
    const nx = x+dx[i];
    const ny = y+dy[i];

    if(nx < 0 || nx >= 2*n+1 || ny < 0 || ny >= 2*n+1) continue;
    if(visited[nx][ny]) continue;

    visited[nx][ny] = true;
    dfs(nx, ny, depth+1, p*percent[i]);
    visited[nx][ny] = false;
  }
}

dfs(n, n, 0, 1);

console.log(answer);