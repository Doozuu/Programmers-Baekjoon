const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt')
  .toString()
  .trim()
  .split('\n');
const N = +input.shift();

function solution(){
  const arr = input[0].split(' ').map(Number);
  const sorted = Array.from(new Set([...arr])).sort((a, b) => a - b);
  const rank = {};

  sorted.forEach((val,idx) => rank[val] = idx);

  console.log(arr.map(a => rank[a]).join(' '));
}

solution();