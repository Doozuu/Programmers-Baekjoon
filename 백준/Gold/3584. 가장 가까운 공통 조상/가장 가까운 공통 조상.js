const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");
let idx = 0;
const T = +input[idx++];
const answer = [];

function DFS(node, depth, visited, parents, graph) {
  visited[node] = true;
  parents.push(node);

  for (let next of graph[node]) {
    if (!visited[next]) {
      DFS(next, depth + 1, visited, parents, graph);
    }
  }
}

function NEXT_DFS(node, depth, visited, parents, graph) {
  visited[node] = true;

  if (parents.includes(node)) {
    return node;
  }

  for (let next of graph[node]) {
    if (!visited[next]) {
      const answer = NEXT_DFS(next, depth + 1, visited, parents, graph);
      if (answer) return answer;
    }
  }
}

for (let i = 0; i < T; i++) {
  const N = +input[idx++];
  const graph = Array.from({ length: N + 1 }, () => []);

  for (let j = 0; j < N - 1; j++) {
    const [s, e] = input[idx++].split(" ").map(Number);
    graph[e].push(s);
  }

  const [node1, node2] = input[idx++].split(" ").map(Number);
  const parents = [];

  DFS(
    node1,
    0,
    Array.from({ length: N + 1 }, () => false),
    parents,
    graph
  );

  const common_parent = NEXT_DFS(
    node2,
    0,
    Array.from({ length: N + 1 }, () => false),
    parents,
    graph
  );

  answer.push(common_parent);
}

console.log(answer.join("\n"));