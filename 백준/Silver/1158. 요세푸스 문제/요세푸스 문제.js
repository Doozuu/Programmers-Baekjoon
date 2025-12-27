const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const answer = [];
const queue = Array.from({length:N}, (_,i) => i+1);
let idx = 0

for(let i=0;i<N;i++){
  idx = (idx - 1 + K) % queue.length
  answer.push(queue[idx])
  queue.splice(idx,1)
}
console.log('<' + answer.join(', ') + '>');