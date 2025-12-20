const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
const N = +input.shift();
const board = input.map(r => r.split(' ').map(Number))
let visited = Array.from({length : N}, () => Array.from({length: N}, () => false));
const move = [[0,1],[0,-1],[1,0],[-1,0]];
let answer = 0;
let max = 0;

for(let i=0;i<N;i++){
  for(let j=0;j<N;j++){
    max = Math.max(max, board[i][j])
  }
} 

function dfs(h, x, y){
  visited[x][y] = true;

  for(let [mx,my] of move){
    if(x+mx > -1 && x+mx < N && y+my > -1 && y+my < N && board[x+mx][y+my] > h && !visited[x+mx][y+my]){
      visited[x+mx][y+my] = true;
      dfs(h, x+mx, y+my);
    }
  }
}

for(let i=0;i<=max;i++){
  let temp = 0;
  for(let j=0;j<N;j++){
    for(let k=0;k<N;k++){
      if(!visited[j][k] && board[j][k] > i){
        dfs(i, j, k);
        temp++
      }
    }
  }
  if(temp > answer) answer = temp;
  visited = Array.from({length : N}, () => Array.from({length: N}, () => false));
}

console.log(answer);