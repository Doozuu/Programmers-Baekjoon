const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
const K = +input[0]
const arr = input[1].split(' ').map(Number);
const S = arr.reduce((acc,cur) => acc+cur,0);

let dp = new Set([0]);

for (const w of arr) {
  const next = new Set(dp);

  for (const diff of dp) {
    next.add(diff + w);
    next.add(diff - w);
  }

  dp = next;
}

const possible = Array(S + 1).fill(false);

for (const diff of dp) {
  const d = Math.abs(diff);
  if (d <= S) possible[d] = true;
}

let count = 0;
for (let i = 1; i <= S; i++) {
  if (!possible[i]) count++;
}

console.log(count);