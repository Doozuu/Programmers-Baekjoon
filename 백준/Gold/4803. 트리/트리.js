const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
let idx = 0;
const answer = [];
let testcase = 1;

function dfs(node, parent, graph, visited){
  visited[node] = true;

  for (const next of graph[node]) {
    if (!visited[next]) {
      // 자식 쪽에서 사이클 발견되면 중단
      if (!dfs(next, node, graph, visited)) {
        return false;
      }
    }
    // 방문했는데 부모 요소가 아니면 사이클
    else if (next !== parent) {
      return false;
    }
  }

  return true;
}

while(true){
  const [N,M] = input[idx++].split(' ').map(Number);
  if(N === 0 && M === 0) break;

  const graph = Array.from({length:N+1}, () => []);
  const visited = Array(N + 1).fill(false);

  for(let i=0;i<M;i++){
    const [s, e] = input[idx++].split(' ').map(Number);
    graph[s].push(e)
    graph[e].push(s)
  }

  let treeCount = 0;

  // 모든 연결 요소 탐색
  for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
      if (dfs(i, 0, graph, visited)) treeCount++;
    }
  }
  
  if(treeCount === 0){
    answer.push(`Case ${testcase}: No trees.`)
  }else if(treeCount === 1){
    answer.push(`Case ${testcase}: There is one tree.`)
  }else{
    answer.push(`Case ${testcase}: A forest of ${treeCount} trees.`)
  }

  testcase++;
}

console.log(answer.join('\n'));