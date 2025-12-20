const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(Number)
const arr = Array.from({length : N+1}, () => []);
const visited = Array.from({length : N+1}, () => false);
let answer = 0;

for(let i=0;i<M;i++){
  const [s, e] = input[i].split(' ').map(Number)
  arr[s].push(e)
  arr[e].push(s)
}

function dfs(start){
  visited[start] = true;

  for(let n of arr[start]){
    if(!visited[n]) dfs(n)
  }
}

for(let i=1;i<=N;i++){
  if(!visited[i]){
    dfs(i);
    answer++;
  }
}

console.log(answer);