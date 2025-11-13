const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt')
  .toString()
  .trim()
  .split('\n');
const N = +input.shift();
const M = +input.shift();
const graph = Array.from({length : N}, (_,i) => Array.from({length: N}, (_,j) => i === j ? 0 : Infinity))

function solution(){
  for(let node of input){
    const [start, end, cost] = node.split(' ').map(Number);
    graph[start-1][end-1] = Math.min(graph[start-1][end-1], cost);
  }

  // 플로이드 와샬 알고리즘
  for (let k = 0; k < N; k++) {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
      }
    }
  }

  for (let i = 0; i < N; i++) {
    console.log(graph[i].map(x => x === Infinity ? 0 : x).join(' '));
  }
}

solution();