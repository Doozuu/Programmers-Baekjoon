const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const list = input[1].split('');
let max_people = 0;

for(let i=0;i<N;i++){
  if(list[i] === 'P'){
    for(let j=i-K;j<=i+K;j++){
      if(j < 0 || j >= N || j === i) continue;
      if(list[j] === 'H'){
        list[j] = 'X';
        max_people++;
        break;
      }
    }
  }
}

console.log(max_people);