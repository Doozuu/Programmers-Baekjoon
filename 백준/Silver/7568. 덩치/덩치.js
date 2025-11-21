const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input.shift();
const people = input.map(line => line.split(' ').map(Number));
const answer = [];

for (let i = 0; i < N; i++) {
  let rank = 1;
  const [w, h] = people[i];

  for (let j = 0; j < N; j++) {
    if (i === j) continue;
    const [ww, hh] = people[j];

    if (ww > w && hh > h) {
      rank++;
    }
  }
  answer.push(rank);
}

console.log(answer.join(' '));
