const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');

const N = Number(input[0]);
const arr = [0, ...input.slice(1, 1 + N).map(Number)];

let answer = [];
let stack = [];
let visited = new Array(N + 1).fill(false);

for(let i = 1 ; i <= N; i++) {
  if(visited[i]) continue;
  stack = [];
  dfs(i);
}

function dfs(curIdx) {
  if(stack.indexOf(curIdx) >= 0) {
    while(true) {
      const popedIdx = stack.pop();
      answer.push(popedIdx);
      visited[popedIdx] = true;
      if(popedIdx === curIdx) {
        while(stack.length !== 0) {
          const popedIdxInside = stack.pop();
          visited[popedIdxInside] = true;
        }
        return;
      }
    }
  }
  stack.push(curIdx);
  const nextIdx = arr[curIdx];
  if(visited[nextIdx]) return;
  dfs(nextIdx);
}

console.log(answer.length + "\n" + answer.sort((a,b) => a-b).join('\n'));