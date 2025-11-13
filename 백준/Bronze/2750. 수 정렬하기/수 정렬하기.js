const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt')
  .toString()
  .trim()
  .split('\n');
const N = +input.shift();

function solution(){
 const answer = input.map(Number).sort((a,b) => a-b)
 console.log(answer.join('\n'))
}

solution();
