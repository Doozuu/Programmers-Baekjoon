const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt").toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(Number);
const board = input.map(b => b.split('').map(Number));
const visited = Array.from({ length: N }, () =>
  Array.from({ length: M }, () => Array(2).fill(false))
);
const moves = [[1,0], [-1,0], [0,1], [0,-1]];

function solution(){
  const queue = [[0,0,1,0]];
  visited[0][0][0] = true;
  let head = 0;

  while(head < queue.length){
    const [x,y,distance,broken] = queue[head++];

    if(x === N-1 && y === M-1){
      console.log(distance);
      return;
    }

    for(let [dx, dy] of moves){
      const newX = x+dx;
      const newY = y+dy;

      if(newX >= 0 && newY >=0 && newX < N && newY < M){
        if(board[newX][newY] === 1 && !broken && !visited[newX][newY][1]){
          visited[newX][newY][1] = true;
          queue.push([newX, newY, distance+1, 1]);
        }
        if(board[newX][newY] === 0 && !visited[newX][newY][broken]){
          visited[newX][newY][broken] = true;
          queue.push([newX, newY, distance+1, broken]);
        }
      }
    }
  }

  console.log(-1);
}

solution();