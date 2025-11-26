const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');

const N = Number(input.shift());
const base = input.shift();

function countChars(word) {
  const arr = new Array(26).fill(0);
  for (let ch of word) {
    arr[ch.charCodeAt(0) - 65]++;
  }
  return arr;
}

const baseCount = countChars(base);
let answer = 0;

for (let word of input) {
  const wordCount = countChars(word);
  let diff = 0;

  for (let i = 0; i < 26; i++) {
    diff += Math.abs(baseCount[i] - wordCount[i]);
  }

  if (base.length === word.length) {
    if (diff === 0 || diff === 2) answer++;
  } else {
    if (diff === 1) answer++;
  }
}

console.log(answer);
