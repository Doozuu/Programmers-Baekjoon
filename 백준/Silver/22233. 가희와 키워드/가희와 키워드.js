const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
let idx = 0;
const [N, M] = input[idx].split(' ').map(Number);
const memo = {};
let answer = '';
let cnt = N;

while(idx < N){
  memo[input[++idx]] = true;
}

for(let i=idx+1;i<idx+M+1;i++){
  const keywords = input[i].split(',');

  for(let j=0;j<keywords.length;j++){
    if(memo[keywords[j]]){
      memo[keywords[j]] = false;
      cnt--;
    }
  }

  answer += `${cnt}\n`;
}

console.log(answer.trim())