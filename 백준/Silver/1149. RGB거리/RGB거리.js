const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt").toString().trim().split('\n');
const T = +input.shift();
const arr = input.map(el => el.split(' ').map(Number));
const dp = Array.from({length: T}, el => new Array(3).fill(0));

function solution(){
  dp[0] = arr[0];
  
  for(let i=1;i<T;i++){
    dp[i][0] = Math.min(dp[i-1][1], dp[i-1][2]) + arr[i][0];
    dp[i][1] = Math.min(dp[i-1][0], dp[i-1][2]) + arr[i][1];
    dp[i][2] = Math.min(dp[i-1][0], dp[i-1][1]) + arr[i][2];
  }

  console.log(Math.min(...dp[T-1]));
}

solution();