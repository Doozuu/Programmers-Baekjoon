const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt").toString().trim().split('\n');
const N = +input.shift();
const answer = [];

function BFS(I, cur, destination){
  const visited = Array.from({length: I}, () => Array(I).fill(false));
  const [cx,cy] = cur;
  const [dx,dy] = destination;
  const moves = [
    [-1, -2], [-2, -1], [-2, 1], [-1, 2],
    [1, -2], [2, -1], [2, 1], [1, 2]
  ];

  const queue = [[cx, cy, 0]];
  visited[cx][cy] = true;
  let head = 0;

  while(head < queue.length){
    const [qx, qy, cnt] = queue[head++];

    if(qx === dx && qy === dy) return cnt;

    for (const [dxi, dyi] of moves) {
      const newX = qx + dxi;
      const newY = qy + dyi;

      if(newX > -1 && newX < I && newY > -1 && newY < I && !visited[newX][newY]){
        visited[newX][newY] = true;
        queue.push([newX, newY, cnt+1]);
      }
    }
  }
}

function solution(){
  let idx = 0;

  for(let i=0;i<N;i++){
    const I = Number(input[idx++]);
    const cur = input[idx++].split(' ').map(Number);
    const destination = input[idx++].split(' ').map(Number);
    answer.push(BFS(I, cur, destination));
  }

   console.log(answer.join('\n'));
}

solution();