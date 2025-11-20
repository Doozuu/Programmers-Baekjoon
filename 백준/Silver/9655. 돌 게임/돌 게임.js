const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt')
  .toString()
  .trim()
  .split('\n');
const N = +input[0];

function solution(){
  console.log(N % 2 === 0 ? 'CY' : 'SK');
}

solution();