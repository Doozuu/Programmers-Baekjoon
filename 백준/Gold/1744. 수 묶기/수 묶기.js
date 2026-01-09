const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
const N = +input[0]
const arr = input.slice(1).map(Number);

let pos = [];
let neg = [];
let ones = [];
let zeros = [];

for(const x of arr){
  if(x > 1) pos.push(x);
  else if(x === 1) ones.push(x);
  else if(x === 0) zeros.push(x);
  else neg.push(x);
}

// 양수 큰 순서
pos.sort((a,b)=>b-a);
// 음수 작은 순서
neg.sort((a,b)=>a-b);

let sum = 0;

// 양수 묶기
for(let i=0;i<pos.length;i+=2){
  if(i+1 < pos.length) sum += pos[i]*pos[i+1];
  else sum += pos[i];
}

// 음수 묶기
for(let i=0;i<neg.length;i+=2){
  if(i+1 < neg.length) sum += neg[i]*neg[i+1];
  else if(zeros.length === 0) sum += neg[i]; // 0이 있으면 남은 음수는 0으로 처리 가능
}

// 1 더하기
sum += ones.length;

console.log(sum);