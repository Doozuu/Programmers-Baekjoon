const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');

let idx = 0;
const [N, M] = input[idx++].split(' ').map(Number);

const titles = [];
const limits = [];

for (let i = 0; i < N; i++) {
  const [name, limit] = input[idx++].split(' ');
  titles.push(name);
  limits.push(Number(limit));
}

let output = '';

for (let i = 0; i < M; i++) {
  const power = Number(input[idx++]);

  let left = 0, right = N - 1;
  let ans = N - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (limits[mid] >= power) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  output += titles[ans] + '\n';
}

console.log(output.trim());
