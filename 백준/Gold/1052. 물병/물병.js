const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
let answer = 0;
let num = N;

if (K === 0) {
  console.log(-1);
  return;
}

function bottleCount(n) {
  let cnt = 0;

  while (n > 0) {
    if (n % 2 === 1) cnt++;
    n = Math.floor(n / 2);
  }
  return cnt;
}

while (bottleCount(num) > K) {
  const lowbit = num & -num; // 가장 낮은 1
  answer += lowbit;
  num += lowbit;
}

console.log(answer);