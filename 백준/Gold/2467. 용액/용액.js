const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt')
  .toString().trim().split('\n');
const N = +input[0]
const list = input[1].split(' ').map(Number)
let left_idx = 0
let right_idx = N-1;
let answer = [left_idx, right_idx];

while(left_idx < right_idx){
  let sum = list[left_idx] + list[right_idx];
  let absSum = Math.abs(sum)
  let curSum = Math.abs(list[answer[0]] + list[answer[1]]);

  if(absSum < curSum) answer = [left_idx, right_idx]
  if(sum === 0) break;
  if(sum > 0) right_idx--;
  if(sum < 0) left_idx++;
}

console.log(list[answer[0]], list[answer[1]]);