const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
const [N,S] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
let answer = Infinity;
let right = 0;
let sum = 0;

for(let left=0;left<N;left++){
  while(sum < S && right < N){
    sum += arr[right];
    right++;
  }

  if(sum < S) break;

  answer = Math.min(answer, right-left);
  sum -= arr[left];
}

console.log(answer === Infinity ? 0 : answer);