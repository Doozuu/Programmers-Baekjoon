const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
let [H, W] = input[0].split(' ').map(Number);
let blocks = input[1].split(" ").map(Number);
let answer = 0;

for (let i = 1; i < W - 1; i++) {
  let leftMax = Math.max(...blocks.slice(0, i));
  let rightMax = Math.max(...blocks.slice(i + 1));
  let water = Math.min(leftMax, rightMax) - blocks[i];
  if (water > 0) answer += water;
}

console.log(answer);