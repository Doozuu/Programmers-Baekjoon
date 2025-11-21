const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
const [N, S, P] = input.shift().split(' ').map(Number);

if(N === 0) {
  console.log(1);
  return;
}

const scores = input[0].split(' ').map(Number);

if(scores.length < P){
  let rank = 1;
  for(let score of scores){
    if(score > S){
      rank++;
    }else if(score < S){
      break;
    }
  }
  console.log(rank);
}else{
  let rank = 1;
  let pass = 1;
  for(let score of scores){
    if(score >= S) pass++;

    if(score > S){
      rank++;
    }else if(score < S){
      break;
    }
  }
  console.log(pass > P ? -1 : rank);
}