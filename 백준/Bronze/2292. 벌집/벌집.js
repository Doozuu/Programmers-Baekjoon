const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './test.txt')
  .toString()
  .trim()
  .split('\n');
const N = +input[0]

function solution(){
  let n = 1;

  if(N === 1){
    console.log(1);
    return;
  }

  while(true){
    if(1 + 6*(n*(n+1)/2) >= N){
      console.log(n+1);
      return;
    }
    n++;
  }
}

solution();