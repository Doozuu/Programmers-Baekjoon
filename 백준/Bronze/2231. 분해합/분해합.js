const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt").toString().trim().split("\n");

const N = +input[0];

function solution(){
  let result = 0;
  const min = N - 9 * input[0].length;

  for(let i=min;i<N;i++){
    const sum = i.toString().split('').reduce((acc, cur) => +acc + +cur, i);

    if(sum === N){
      result = result > 0 ? Math.min(i, result) : i;
    }
  }

  return result;
}

console.log(solution());
