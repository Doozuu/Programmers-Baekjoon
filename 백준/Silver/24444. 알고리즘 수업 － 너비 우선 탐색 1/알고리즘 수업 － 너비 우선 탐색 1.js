const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt").toString().trim().split('\n');
const [N, M, R] = input.shift().split(' ').map(Number);
const E = input.map(e => e.split(' ').map(Number))
const graph = Array.from({length: N + 1}, () => []);
const visited = Array.from({length: N}, () => 0);
const queue = [];
let cnt = 1;

function bfs(R){
  visited[R - 1] = cnt;
  cnt++;

  queue.push(R);

  while(queue.length){
    const v = queue.shift();

    for(let e of graph[v]){
      if(!visited[e - 1]){
        visited[e - 1] = cnt;
        cnt++;
        queue.push(e);
      }
    }
  }
}

function solution(){
  for(let [from, to] of E){
    graph[from].push(to);
    graph[to].push(from);
  }

  graph.map((g) => g.sort((a,b) => a-b));

  bfs(R);

  console.log(visited.join('\n'));
}

solution();