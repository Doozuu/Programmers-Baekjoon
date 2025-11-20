const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt')
  .toString()
  .trim()
  .split('\n');
const [H, W, N, M] = input[0].split(' ').map(Number);

function solution(){
  console.log(Math.ceil(W / (M + 1)) * Math.ceil(H / (N + 1)));
}

solution();