const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt')
  .toString()
  .trim()
  .split('\n');
const str = input[0].toUpperCase()

function solution(){
  const obj = {};

  for(let s of str){
    obj[s] = (obj[s] || 0) + 1;
  }

  const sorted = Object.entries(obj).sort((a,b) => b[1] - a[1]);
  const answer = sorted.length > 1 && sorted[0][1] === sorted[1][1] ? '?' : sorted[0][0]

  console.log(answer);
}

solution();