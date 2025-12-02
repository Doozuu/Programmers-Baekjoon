const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
const list = input[0].split("");
const aCount = list.filter(l => l === "a").length;
const circular = [...list, ...list.slice(0, aCount-1)]
let answer = Infinity;
let bLen = 0;

for(let i=0;i<aCount;i++){
  if(list[i] === 'b') bLen++
}

answer = bLen;

for(let i=aCount;i<aCount+list.length-1;i++){
  if(circular[i - aCount] === 'b') bLen--
  if(circular[i] === 'b') bLen++
  answer = Math.min(answer, bLen)
}

console.log(answer);