const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt')
  .toString()
  .trim()
  .split('\n');

const K = +input[0];
let line = 1;
const result = [];

for (let t = 0; t < K; t++) {
  const [V, E] = input[line++].split(' ').map(Number);
  const graph = Array.from({ length: V + 1 }, () => []);

  for (let i = 0; i < E; i++) {
    const [u, v] = input[line++].split(' ').map(Number);
    graph[u].push(v);
    graph[v].push(u);
  }

  const color = Array(V + 1).fill(0); 
  let isBipartite = true;

  const bfs = start => {
    const queue = [start];
    color[start] = 1;

    while (queue.length && isBipartite) {
      const cur = queue.shift();
      for (const next of graph[cur]) {
        if (color[next] === 0) {
          color[next] = -color[cur];
          queue.push(next);
        } else if (color[next] === color[cur]) {
          isBipartite = false;
          return;
        }
      }
    }
  };

  for (let i = 1; i <= V && isBipartite; i++) {
    if (color[i] === 0) bfs(i);
  }

  result.push(isBipartite ? 'YES' : 'NO');
}

console.log(result.join('\n'));