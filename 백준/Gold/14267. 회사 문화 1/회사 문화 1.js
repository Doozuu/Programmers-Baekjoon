const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");
let idx = 0;
const [N, M] = input[idx++].split(" ").map(Number);
const boss = input[idx++].split(" ").map(Number); // 직속 상사
const tree = Array.from({ length: N + 1 }, () => []);
const praise = Array(N + 1).fill(0);

// 트리 구성
for (let i = 2; i <= N; i++) {
  tree[boss[i - 1]].push(i);
}

// 칭찬 입력
for (let i = 0; i < M; i++) {
  const [I, W] = input[idx++].split(" ").map(Number);
  praise[I] += W;
}

// DFS로 누적 전파
function dfs(node) {
  for (const child of tree[node]) {
    praise[child] += praise[node];
    dfs(child);
  }
}

dfs(1);

console.log(praise.slice(1).join(" "));