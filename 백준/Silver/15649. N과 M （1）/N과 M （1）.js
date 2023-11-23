const input = require("fs").readFileSync("dev/stdin").toString();

const [N, M] = input.split(" ").map(Number);

const arr = Array.from({ length: N }, (_, i) => i + 1);
const visited = Array.from({ length: N }, () => false);
const selected = [];
let answer = "";

function dfs(arr, depth) {
  if (depth === M) {
    let result = [];
    for (let s of selected) result.push(s);
    answer += result.join(" ") + "\n";
    return;
  }

  for (let i = 0; i < N; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    selected.push(arr[i]);
    dfs(arr, depth + 1);
    visited[i] = false;
    selected.pop();
  }
}

dfs(arr, 0);

console.log(answer);
