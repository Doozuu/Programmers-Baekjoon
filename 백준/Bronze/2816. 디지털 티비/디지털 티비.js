const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
let N = +input.shift();
let idx1 = input.indexOf('KBS1');
let idx2 = input.indexOf('KBS2');
idx2 = idx1 > idx2 ? idx2 + 1 : idx2;
let answer = '';

for(let i=0;i<idx1;i++){
  answer += '1'
}

for(let i=0;i<idx1;i++){
  answer += '4'
}

for(let i=0;i<idx2;i++){
  answer += '1'
}

for(let i=0;i<idx2-1;i++){
  answer += '4'
}

console.log(answer);
