const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt").toString().trim().split('\n');
const [N, M, R] = input.shift().split(' ').map(Number);
const E = input.map(e => e.split(' ').map(Number))
const graph = Array.from({length: N + 1}, () => []);
const visited = Array.from({length: N}, () => 0);
const queue = [];
let cnt = 1;

function bfs(R){
  visited[R - 1] = cnt++;
  queue.push(R);

  while(queue.length){
    const q = queue.shift();
    for(let edge of graph[q]){
      if(!visited[edge - 1]){
        visited[edge - 1] = cnt++;
        queue.push(edge);
      }
    }
  }
}

function solution(){
  for(let [from, to] of E){
    graph[from].push(to);
    graph[to].push(from);
  }

  graph.map((g) => g.sort((a,b) => b-a));

  bfs(R);

  console.log(visited.join('\n'));
}

solution();