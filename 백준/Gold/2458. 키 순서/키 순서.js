const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");
const [N, M] = input[0].split(" ").map(Number);
const tall_graph = Array.from({ length: N + 1 }, () => []);
const small_graph = Array.from({ length: N + 1 }, () => []);
const arr = Array(N + 1).fill(0);
let cnt = 0;

for (let i = 1; i <= M; i++) {
  const [s, e] = input[i].split(" ").map(Number);
  tall_graph[s].push(e);
  small_graph[e].push(s);
}

function DFS(node, depth, visited, graph) {
  visited[node] = true;

  for (let next of graph[node]) {
    if (!visited[next]) {
      cnt++;
      DFS(next, depth + 1, visited, graph);
    }
  }
}

for (let i = 1; i <= N; i++) {
  const tall_visited = Array.from({ length: N + 1 }, () => false);
  const small_visited = Array.from({ length: N + 1 }, () => false);

  DFS(i, 0, tall_visited, tall_graph);
  DFS(i, 0, small_visited, small_graph);

  arr[i] = cnt;
  cnt = 0;
}

console.log(arr.filter((c) => c === N - 1).length);