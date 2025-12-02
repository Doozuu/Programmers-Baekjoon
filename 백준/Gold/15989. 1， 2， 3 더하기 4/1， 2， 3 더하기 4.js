const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
const T = +input[0];
const answer = [];

function calc(n){
  if(n === 1) return 1;

  let sum = 1 + Math.floor(n / 2) + Math.floor(n / 3);

  for(let i=2;i<=n;i+=2){
    sum += Math.floor((n - i) / 3)
  }
  return sum;
}

for(let i=1;i<=T;i++){
  answer.push(calc(+input[i]))
}

console.log(answer.join('\n'));