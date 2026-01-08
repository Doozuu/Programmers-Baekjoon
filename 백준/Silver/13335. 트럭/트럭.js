const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
const [N, W, L] = input[0].split(' ').map(Number); // 트럭 수, 다리 길이, 최대하중
const truck = input[1].split(' ').map(Number); // 트럭 무게
const bridge = Array(W).fill(0);
let curWeight = 0;
let time = 0;
let idx = 0;

while (idx < N || curWeight > 0){
  time++

  const out = bridge.shift();
  curWeight -= out;

  if(idx < N && curWeight + truck[idx] <= L){
    bridge.push(truck[idx]) 
    curWeight += truck[idx]; 
    idx++;
  }else{
    bridge.push(0)
  }
}

console.log(time);