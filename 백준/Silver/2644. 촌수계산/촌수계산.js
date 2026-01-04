const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
const N = +input[0];
const [N1, N2] = input[1].split(' ').map(Number);
const M = +input[2];
const tree = Array.from({length: N+1}, () => [])
const visited = Array.from({length: N+1}, () => false)
let answer = -1;

for(let i=3;i<3+M;i++){
  const [parent, child] = input[i].split(' ').map(Number);
  tree[parent].push(child)
  tree[child].push(parent)
}

function dfs(n, depth){
  visited[n] = true;

  if(n === N2){
    answer = depth;
    return;
  }

  for(let node of tree[n]){
    if(!visited[node]){
      dfs(node, depth+1)
    }
  }
}

dfs(N1, 0);

console.log(answer);