const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt").toString().trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);

function BFS(){
  const visited = Array(100000).fill(false);
  const queue = [[N, 0]];
  const move = [-1, 1, 2];

  visited[N] = true;

  while(queue.length){
    const [location, time] = queue.shift();

    if(location === K) return time;

    for(let i=0;i<3;i++){
      const newCur = move[i] === 2 ? location * move[i] : location + move[i];
      if(newCur >= 0 && newCur <= 100000 && !visited[newCur]){
        visited[newCur] = true;
        queue.push([newCur, time + 1]);
      }
    }
  }
}

function solution(){
  console.log(BFS());
}

solution();