const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
const move = [[-1,0], [0,-1], [1,0], [0,1], [1,1], [1,-1], [-1,1], [-1,-1]]; // 가로,세로,대각선
const answer = [];
let idx = 0;

function dfs(x,y,w,h,board,visited){
  visited[x][y] = true;

  for(let [mx,my] of move){
    const nx = x+mx;
    const ny = y+my;
   
    if(nx > -1 && nx < h && ny > -1 && ny < w && !visited[nx][ny] && board[nx][ny]){
      dfs(nx,ny,w,h,board,visited)
    }
  }
}

while(true){
  const [w,h] = input[idx].split(' ').map(Number);
  if(w === 0 && h === 0) break;

  const board = [];
  const visited = Array.from({length: h}, () => Array(w).fill(false));
  let cnt = 0;

  for(let i=idx+1;i<=idx+h;i++){
    board.push(input[i].split(' ').map(Number))
  }

  for(let i=0;i<h;i++){
    for(let j=0;j<w;j++){
      if(!visited[i][j] && board[i][j]){
        dfs(i,j,w,h,board,visited)
        cnt++
      }
    }
  }

  answer.push(cnt);

  idx += h+1;
}

console.log(answer.join('\n'));