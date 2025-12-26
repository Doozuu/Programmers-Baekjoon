const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
const N = +input.shift();
const graph = Array.from({length: N+1}, () => []);

for(let i=0;i<N-1;i++){
  const [s, e, w] = input[i].split(' ').map(Number)

  graph[s].push([e,w])
  graph[e].push([s,w])
}

function solution(start){
  const visited = Array(N).fill(false);
  let maxDist = 0;
  let farNode = start;

  function DFS(node, dist){
    visited[node] = true;

    if(dist > maxDist){
      maxDist = dist;
      farNode = node;
    }

    for(let [next, cost] of graph[node]){
      if(!visited[next]) DFS(next, dist+cost)
    }
  }

  DFS(farNode, maxDist);

  return [farNode, maxDist]
}

const [n1] = solution(1)
const [, diameter] = solution(n1)

console.log(diameter);