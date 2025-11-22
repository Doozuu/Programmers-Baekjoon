const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
const N = +input.shift();
const M = +input.shift();
const list = input[0].split(' ').map(Number);
const distance = [];

for(let i=0;i<M-1;i++){
  distance.push(list[i+1] - list[i]);
}

const middle = Math.ceil(Math.max(...distance)/2);

console.log(Math.max(middle, list[0], N-list[M-1]));