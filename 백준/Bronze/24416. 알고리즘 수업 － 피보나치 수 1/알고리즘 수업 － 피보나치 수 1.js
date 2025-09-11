const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt").toString().trim().split('\n');

const N = +input.shift();
let countA = 0;
let countB = 0;
const memo = [];

function fib(n){
  if(n === 1 || n === 2){
    countA++;
    return 1;
  }
  return fib(n-1) + fib(n-2);
}

function fibDP(n){
  memo[0] = 1;
  memo[1] = 1;
  for(let i=2;i<n;i++){
    memo[i] = memo[i-1] + memo[i-2];
    countB++;
  }
  return memo[n-1];
}

function solution(){
  fib(N);
  fibDP(N);
  console.log(`${countA} ${countB}`);
}

solution();