const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt").toString().trim().split('\n');
let [N, K] = input.shift().split(' ').map(Number);
const coins = input.map(Number);

function solution(){
  let count = 0;

  for(let i=N-1;i>=0;i--){
    if(coins[i] <= K && K > 0){
      count += Math.floor(K/coins[i]);
      K %= coins[i];
    }
  }

  console.log(count);
}

solution();