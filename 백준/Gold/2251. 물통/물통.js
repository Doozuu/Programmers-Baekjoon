const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
const [A, B, C] = input[0].split(' ').map(Number);
const visited = Array.from({length: A+1}, () => Array.from({length: B+1}, () => false))
const answer = new Set();

function dfs(a,b){
  if (visited[a][b]) return;
  visited[a][b] = true;

  const c = C - a - b;

  if(a === 0){
    answer.add(c)
  }

  let move;

  // A → B
  move = Math.min(a, B - b);
  dfs(a - move, b + move);

  // A → C
  move = Math.min(a, C - c);
  dfs(a - move, b);

  // B → A
  move = Math.min(b, A - a);
  dfs(a + move, b - move);

  // B → C
  move = Math.min(b, C - c);
  dfs(a, b - move);

  // C → A
  move = Math.min(c, A - a);
  dfs(a + move, b);

  // C → B
  move = Math.min(c, B - b);
  dfs(a, b + move);
}

dfs(0,0)

console.log([...answer].sort((a,b) => a-b).join(' '));