const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
const N = +input.shift();
const costs = input[0].split(' ').map(Number);
const M = +input[1];
const sum = costs.reduce((acc,cur) => acc+cur,0);
const max_cost = Math.floor(M / N);
let answer = max_cost;

if(sum <= M){
  console.log(Math.max(...costs));
  return;
}

while(true){
  const nsum = costs.reduce((acc,cur) => cur > answer ? acc + answer : acc + cur, 0);
  
  if(nsum === M){
    break;
  }else if(nsum < M){
    answer++;
  }else{
    answer--;
    break;
  }
}

console.log(answer);