const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt").toString().trim().split('\n');
const T = input.shift();
const arr = input[0].split(' ').map(Number);

const memo = [];
memo[0] = arr[0];

function solution(){
  if(T === 1) return arr[0];

  for(let i=1;i<T;i++){
    memo[i] = Math.max(arr[i], memo[i-1] + arr[i]); 
  }

  console.log(Math.max(...memo));
}

solution();