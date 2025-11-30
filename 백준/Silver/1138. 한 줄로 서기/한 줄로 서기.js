const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
let N = Number(input.shift());
const order = input[0].split(' ').map(Number);
const answer = Array.from({length : N}, () => 0);

for(let i=0;i<N;i++){
  let o = order[i];
  let cnt = 0;

  for(let j=0;j<N;j++){
    if(cnt === o && answer[j] === 0){
      answer[j] = i+1;
      break;
    }
    if(answer[j] === 0) cnt++
  }
}

console.log(answer.join(' '));