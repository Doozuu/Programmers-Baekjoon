const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt')
  .toString()
  .trim()
  .split('\n');
const [V, E] = input.shift().split(' ').map(Number);
const graph = Array.from({length : V}, (_,i) => Array.from({length: V}, (_,j) => i === j ? 0 : Infinity))
let answer = Infinity;

function solution(){
  for(let node of input){
    const [start, end, cost] = node.split(' ').map(Number);
    graph[start-1][end-1] = Math.min(graph[start-1][end-1], cost);
  }

  // 플로이드 와샬 알고리즘
  for (let k = 0; k < V; k++) {
    for (let i = 0; i < V; i++) {
      for (let j = 0; j < V; j++) {
        graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
      }
    }
  }

  for (let i = 0; i < V; i++) {
    for(let j=0;j<V;j++){
      if(i === j) continue;
      if(graph[i][j] !== Infinity && graph[j][i] !== Infinity){
        answer = Math.min(answer, graph[i][j] + graph[j][i]);
      }
    }
  }

  console.log(answer === Infinity ? -1 : answer)
}

solution();
