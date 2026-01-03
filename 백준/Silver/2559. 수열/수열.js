const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
const [N,K] = input[0].split(' ').map(Number);
const temperatures = input[1].split(' ').map(Number);
let answer = temperatures.slice(0,K).reduce((acc,cur) => acc+cur,0);
let right = K;
let sum = answer;

for(let i=0;i<N-K;i++){
  sum += temperatures[right] - temperatures[i];
  if(sum > answer) answer = sum
  right++
}

console.log(answer)