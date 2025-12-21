const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
const N = +input.shift();
const move = [[-1,0], [0,-1], [1,0], [0,1]];
const board = input.map(i => i.split(' ').map(Number));
let shark = [0,0];
let shark_size = 2;
let eatCnt = 0;
let answer = 0;

for(let i=0;i<N;i++){
  for(let j=0;j<N;j++){
    if(board[i][j] === 9){
      shark = [i,j]
      board[i][j] = 0;
    }
  }
}

function bfs(x, y){
  const visited = Array.from({length : N}, () => Array.from({length: N}, () => false));
  const queue = [[x, y, 0]];
  visited[x][y] = true;
  const fishes = [];

  while(queue.length){
    const [x,y,d] = queue.shift();

    for(let [mx, my] of move){
      const nx = mx+x;
      const ny = my+y;

      if(nx < 0 || nx >= N || ny < 0 || ny >= N || visited[nx][ny] || board[nx][ny] > shark_size) continue;
     
      visited[nx][ny] = true;

      if(board[nx][ny] < shark_size && board[nx][ny] > 0){
        fishes.push([d+1,nx,ny])
      }

      queue.push([nx, ny, d+1])
    }
  }

  return fishes;
}

while(true){
  const fishes = bfs(shark[0], shark[1]);
  if(fishes.length === 0) break;

  fishes.sort((a,b) => {
    if(a[0] !== b[0]){
      return a[0] - b[0]
    }else if(a[1] !== b[1]){
      return a[1] - b[1]
    }else{
      return a[2] - b[2]
    }
  })

  const [d, x, y] = fishes[0];
  answer += d;
  shark[0] = x;
  shark[1] = y;
  board[x][y] = 0;

  eatCnt++;
  
  if(eatCnt === shark_size){
    shark_size++;
    eatCnt = 0;
  }
}

console.log(answer);
