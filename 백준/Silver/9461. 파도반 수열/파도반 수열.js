const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt").toString().trim().split('\n').map(Number);
const T = input.shift();
const memo = [];
memo[0] = 1;
memo[1] = 1;
memo[2] = 1;

function dp(n){
  if(memo[n-1]) return memo[n-1];

  for(let i=3;i<=n;i++){
    memo[i] = memo[i-3] + memo[i-2]; 
  }

  return memo[n-1];
}

function solution(){
  const answer = [];

  for(let i=0;i<T;i++){
   const val = dp(input[i]);
   answer.push(val);
  }

  console.log(answer.join('\n'));
}

solution();