const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt").toString().trim().split('\n');
const N = +input.shift();
const E = +input.shift();
const graph = Array.from({length: N+1}, () => []);
const visited = Array.from({length: N+1}, () => false);
const queue = [];
let cnt = 0;

function bfs(start){
  queue.push(start);

  while(queue.length > 0){
    const n = queue.shift();

    if(!visited[n]){
      visited[n] = true;
      queue.push(...graph[n]);
      cnt++;
    }
  }
}

function solution(){
  const G = input.map(n => n.split(' ').map(Number));

  for(let [from, to] of G){
    graph[from] = [...graph[from], to];
    graph[to] = [...graph[to], from];
  }

  bfs(1);

  console.log(cnt - 1);
}

solution();