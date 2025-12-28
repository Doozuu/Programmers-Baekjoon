const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
const N = +input[0]
const commands = input[1].split(' ').map(Number)

const size = 2 * N + 5;
const arr = new Array(size);
let head = N;
let tail = N;

let v = 1;

// 뒤에서부터 복원
for (let i = N - 1; i >= 0; i--) {
  const c = commands[i];

  if (c === 1) {
    arr[--head] = v;
  } 
  else if (c === 2) {
    const first = arr[head];
    arr[head] = v;
    arr[--head] = first;
  } 
  else { // c === 3
    arr[tail++] = v;
  }

  v++;
}

// 출력
let result = [];
for (let i = head; i < tail; i++) {
  result.push(arr[i]);
}

console.log(result.join(' '));