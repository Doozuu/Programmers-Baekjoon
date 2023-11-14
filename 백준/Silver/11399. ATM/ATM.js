const input = require('fs').readFileSync('dev/stdin').toString().split('\n');
const [N, P] = input;
const list = P.split(' ')
  .map(Number)
  .sort((a, b) => a - b);
let answer = list.reduce((acc, cur, i) => acc + cur * (N - i), 0);

console.log(answer);
