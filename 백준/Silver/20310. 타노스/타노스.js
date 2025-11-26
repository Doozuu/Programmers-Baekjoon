const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
const S = input[0];

let zero = 0, one = 0;
for (let ch of S) {
  if (ch === '0') zero++;
  else one++;
}

let remove0 = zero / 2;
let remove1 = one / 2;

const arr = S.split('');

// 앞에서부터 1 제거
for (let i = 0; i < arr.length && remove1 > 0; i++) {
  if (arr[i] === '1') {
    arr[i] = '';
    remove1--;
  }
}

// 뒤에서부터 0 제거
for (let i = arr.length - 1; i >= 0 && remove0 > 0; i--) {
  if (arr[i] === '0') {
    arr[i] = '';
    remove0--;
  }
}

console.log(arr.join(''));