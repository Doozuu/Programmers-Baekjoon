const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");
const [N, M] = input[0].split(" ").map(Number);
const graph = Array.from({ length: N }, () => []);
const visited = Array.from({ length: N }, () => false);
let answer = 0;

for (let i = 1; i <= M; i++) {
  const [s, e] = input[i].split(" ").map(Number);
  graph[s].push(e);
  graph[e].push(s);
}

function DFS(node, depth) {
  if (depth === 4) {
    answer = 1;
    return;
  }

  visited[node] = true;

  for (let next of graph[node]) {
    if (!visited[next]) {
      DFS(next, depth + 1);
      if (answer) return;
    }
  }

  visited[node] = false;
}

for (let i = 0; i < N; i++) {
  DFS(i, 0);
  if (answer) break;
}

console.log(answer);
