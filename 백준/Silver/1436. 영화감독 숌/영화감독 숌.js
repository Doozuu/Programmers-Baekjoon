const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt").toString().trim().split("\n");

const N = +input[0];

function solution(){
  let count = 0;
  let result = 666;

  while(true){
    if(result.toString().includes('666')) count++;

    if(count === N) break;

    result++;
  }

  return result;
}

console.log(solution());