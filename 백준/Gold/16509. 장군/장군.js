const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
const [R1, C1] = input[0].split(' ').map(Number); // 상 위치
const [R2, C2] = input[1].split(' ').map(Number); // 왕 위치
const visited = Array.from({length: 10}, () => Array(9).fill(false))
const dx = [[0,1,1],[0,-1,-1],[0,-1,-1],[0,1,1],[1,1,1],[1,1,1],[-1,-1,-1],[-1,-1,-1]]
const dy = [[1,1,1],[1,1,1],[-1,-1,-1],[-1,-1,-1],[0,1,1],[0,-1,-1],[0,1,1],[0,-1,-1]]
let answer = Infinity;

const queue = [];
queue.push([R1,C1,0])
visited[R1][C1] = true;

while(queue.length){
  const [x,y,c] = queue.shift();

  if(x === R2 && y === C2){
    answer = c < answer ? c : answer
  }

  for(let i=0;i<8;i++){
    let nx = x;
    let ny = y;

    for(let j=0;j<3;j++){
      nx += dx[i][j];
      ny += dy[i][j];

      if(nx < 0 || nx >= 10 || ny < 0 || ny >= 9) break; // 보드 벗어나면 안 됨

      if(j === 2){
        if(!visited[nx][ny]){
          queue.push([nx,ny,c+1])
          visited[nx][ny] = true;
        }
      }

      if(j < 2 && nx === R2 && ny === C2) break; // 중간 지점에서 왕 마주치면 안 됨
    }
  }
}

console.log(answer === Infinity ? -1 : answer);