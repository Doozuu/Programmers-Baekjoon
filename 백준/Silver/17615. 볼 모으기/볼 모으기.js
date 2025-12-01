const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt').toString().trim().split('\n');
const N = +input.shift();
const balls = input[0];
let answer = Infinity;
const ball_types = ['R', 'B'];

for(let type of ball_types){
  let cnt = 0;
  let s = 0;
  let e = 0;

  for(let i=0;i<N;i++){
    if(balls[i] === type){
      cnt++
    }
  }

  for(let i=0;i<N;i++){
    if(balls[i] !== type){
      break;
    }else{
      s++;
    }
  }

  for(let i=N-1;i>=0;i--){
    if(balls[i] !== type){
      break;
    }else{
      e++;
    }
  }

  answer = Math.min(answer, cnt - Math.max(s, e))
}

console.log(answer);