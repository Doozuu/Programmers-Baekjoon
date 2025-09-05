const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt").toString().trim().split("\n").map(Number);

const N = +input[0];

function solution(){
  let result = 0;

  for(let i=1;i<N;i++){
    const sum = i.toString().split('').reduce((acc, cur) => +acc + +cur, i);

    if(sum === N){
      result = result > 0 ? Math.min(i, result) : i;
    }
  }

  return result;
}

console.log(solution());